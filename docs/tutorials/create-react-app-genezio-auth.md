import useBaseUrl from '@docusaurus/useBaseUrl';

# Create a React application with genezio authentication

In this tutorial, we'll walk through the process of adding authentication using email and password to an existing application. Here's a breakdown of what we'll cover:

1. Preparing the setup, the project and enabling Genezio Authentication
2. Implementing user registration using email and password
3. Implementing user login using email and password

## Preparing the setup, the project and enabling Genezio Authentication

First of all, you have to install genezio if you haven't installed it already.
```
npm install genezio -g
```

The application that we are building is a very simple one. It has three screens: a login screen, a signup screen and a page that displays a secret only to authenticated users. If an unauthenticated user tries to access the secret, it should be redirected to the login page.

To start, clone the template by running the following command:

```
git clone https://github.com/Genez-io/genezio-react-auth.git
```

Navigate to the directory where you cloned the repository from GitHub and execute `genezio deploy` to deploy the project.

```
genezio deploy
```

Now, you can open your web browser to the URL of your app and start exploring. The React app includes a `/login` route for logging in, a `/signup` route for the sign-up screen, and a `/` route that reveals the secret.

The Login and Signup screens can be easily bypassed by accessing directly the `/` route. We can then press the "Reveal secret" button and the secret is displayed. Oh, noes! That's not good. Anyone can see our secret; we have to modify the application so only authenticated users can see the secret.

<figure style={{textAlign:"center"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/demo-email-and-password-initial.gif")} alt=""/><figcaption></figcaption></figure>

Let's start by enabling Genezio Authentication. Go to the dashboard of your project on https://app.genez.io. Click on Actions and then Authentication. Select or create a new PostgreSQL database and press "Enable".

<figure style={{textAlign:"center"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/demo-auth-activate-auth.gif")} alt=""/><figcaption></figcaption></figure>

Users will be able to register and login using email and password. To allow this, activate the email provider.

<figure style={{textAlign:"center"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/demo-auth-activate-email.gif")} alt=""/><figcaption></figcaption></figure>

## Implementing user registration using email and password


Navigate to the `client/` folder and install the Genezio authentication library.

```
npm install @genezio/auth
```


We then need to configure the authentication token and region of your Genezio application. These can be found in the Authentication Configuration screen on the Genezio Dashboard. Go to `src/main.tsx` and write the following code right after the last import and before the router creation.

<figure style={{textAlign:"center"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/token-and-region-email.png")} alt=""/><figcaption></figcaption></figure>

```typescript title="client/src/main.tsx" showLineNumbers
import { AuthService } from "@genezio/auth";

// Replace <token> and <region> with your own values
AuthService.getInstance().setTokenAndRegion("<token>", "<region>");
```
Navigate to `src/routes/signup.tsx` import the `AuthService` and replace the existing `handleSubmit` function with the implementation provided below. This change will trigger the `AuthService`'s register method whenever someone clicks the 'Sign Up' button.

```typescript title="client/src/routes/signup.tsx" showLineNumbers
import { AuthService } from "@genezio/auth";
```

```typescript title="client/src/routes/signup.tsx" showLineNumbers
const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();
  setLoading(true);
  try {
      const response = await AuthService.getInstance().register(email, password, name);
      console.log('Register Success', response);

      navigate('/login');
  } catch (error: any) {
      console.log(error);
      alert("An error has occured")
  }
  setLoading(false);
};
```

You can now test it! Run `npm run dev` in the `client/` folder to test locally the web app. Navigate to http://localhost:5173/signup and enter your information. You must use a real email account because a confirmation email will be sent to verify the email's authenticity. This step is necessary to activate the account; otherwise, it won't work. Also, ensure you set a password that includes at least 8 characters, one capital letter, and one special character. We haven't implemented comprehensive error handling yet, so you might encounter a general error message if one of the inputs is incorrect.

Check your email inbox for the confirmation message. Click the link inside to verify your account. Great job!

## Implementing user login using email and password

Now that we can create accounts, our next step is to log in using the email and password. Go to `src/routes/login.tsx` import the `AuthService` and add the following code to the `handleSubmit` function:

```typescript title="client/src/routes/login.tsx" showLineNumbers
import { AuthService } from "@genezio/auth";
```

```typescript title="client/src/routes/login.tsx" showLineNumbers
const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoginLoading(true);

    try {
        await AuthService.getInstance().login(email, password)
        navigate("/");
    } catch (error: any) {
        console.log('Login Failed', error);
        alert('Login Failed');
    }
    setLoginLoading(false);
}
```

In the secret screen, we have two additional tasks to address. First, we need to obtain and record the name and email information of the user who has logged in. This can be achieved by calling the `userInfo` method on the `AuthService`, which will fetch the details of the user currently authenticated.

```typescript title="client/src/routes/secret.tsx" showLineNumbers
useEffect(() => {
    if (name && email) {
        return;
    }

    AuthService.getInstance().userInfo().then((user) => {
        setName(user.name!);
        setEmail(user.email);
    }).catch((error) => {
        console.error(error);
    })
}, []);
```

Second, we need to implement the logout function that gets triggered when the logout button is clicked.

```typescript title="client/src/routes/secret.tsx" showLineNumbers
const logout = async () => {
  try {
      await AuthService.getInstance().logout();
      navigate('/login');
  } catch (error) {
      console.error(error);
  }
}
```
  
Time to test the app. First, please navigate to http://localhost:5173/login and sign in using your email and password. You'll be directed to a secret screen that displays your information. After reviewing your info, click the "Logout" button. Sadly, if you head back to http://localhost:5173/, the secret information can still be retrieved, even though you're not logged in. This happens because our backend isn't distinguishing between authenticated and unauthenticated requests as it should.

Now, let's fix this. We need to adjust our backend code to ensure the `getSecret` functionality is securely accessible only to authenticated users. Please go to the `./server/` directory and open the `backend.ts` file, which houses our backend service. This file includes a method that reveals the secret. To secure this method, add a `@GenezioAuth()` decorator and include a `context: GnzContext` parameter. Adding a `console.log` can be helpful for debugging purposes to know which user is making the request. Don't forget to import `GenezioAuth` and `GnzContext` from `@genezio/types`.
  
```typescript title="server/backend.ts" showLineNumbers
import { GenezioDeploy, GenezioMethod, GenezioAuth, GnzContext } from "@genezio/types";

@GenezioDeploy()
export class BackendService {
  readonly secret = "Capybaras are AWESOME! Shhh... don't tell the cats!";

  @GenezioMethod()
  @GenezioAuth() 
  async getSecret(context: GnzContext) {
    console.log(context.user);
    return this.secret;
  }
}
```

The `@GenezioAuth` decorator works by first checking if a token exists. If so, it retrieves the user associated with that token and inserts the user's information into the context parameter. To protect your method with `@GenezioAuth`, you must have `context: GnzContext` as the first parameter. This allows you to access the information of the user who made the request simply by using `context.user`. In this example, we print the user's details and then return the secret. If the request lacks a token, or if the token is not found in the database, the decorator will throw an error, which will be conveyed to the caller. This completes the backend requirements. To deploy your application, run `genezio deploy` from the root of your project.

```bash 
$ ls
client/ server/ genezio.yaml

$ genezio deploy
```

Our secret is now protected. Only authenticated users can see it! Try to navigate to the `/` path and try to retrieve the secret. You will be redirected to the login page. 

<figure style={{textAlign:"center"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/final-email.gif")} alt=""/><figcaption></figcaption></figure>

Congratulations you have integrated Authentication in your React application. You can check out the final implementation [here](https://github.com/Genez-io/genezio-react-auth/tree/final).

