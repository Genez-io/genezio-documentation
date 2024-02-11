# Create a React application with genezio authentication

In this tutorial, we'll walk through the process of adding authentication to an existing application. Here's a breakdown of what we'll cover:

1. Preparing the setup, the project and enabling Genezio Authentication
2. Implementing authentication using Google OAuth
3. Implementing user registration using email and password
4. Implementing user login using email and password
5. Handling errors

## Preparing the setup, the project and enabling Genezio Authentication

First of all, you have to install genezio if you haven't installed it already.
```
npm install genezio -g
```

The application that we are building is a very simple one. It has three screens: a login screen, a signup screen and a page that displays a secret that we only want to show to authenticated users.

Clone the application by running the following command:

```
git clone https://github.com/Genez-io/genezio-react-auth.git
```

Navigate to the directory where you cloned the repository from GitHub and execute `genezio deploy` to deploy the project.

```
genezio deploy
```

Now, you can open your web browser to the URL of your app and start exploring. The React app includes a `/login` route for logging in, a `/signup` route for the sign-up screen, and a `/` route that reveals the secret.

Press the "Reveal secret" button and the secret is displayed. Oh, noes! That's not good. Anyone can see our secret; we have to modify the application so only authenticated users can see the secret.

Let's start by enabling Genezio Authentication. Go to the dashboard of your project on https://app.genez.io. Click on Actions and then Authentication.

// TODO photo

Select or create a new PostgreSQL database and press "Enable". We want to offer two ways of registering an account in our application: via email and password, and through Google Login. Activate both providers. For Google, you will need to create an application in the Google Console. Follow [this](https://support.google.com/googleapi/answer/6158849) tutorial to set up your Google OAuth 2.0; it provides a step-by-step guide. Once you have obtained a Google ID and Google Secret, enter these values and click 'Enable.' Now, we are ready to write some code.

## Implementing Authentication using Google OAuth

Navigate to the `client/` folder and install the Genezio authentication library.

```
npm install @genezio/auth
```


We then need to configure the authentication token and region of your Genezio application. These can be found in the Authentication Configuration screen on the Genezio Dashboard. Go to src/main.tsx and write the following code right after the last import and before the router creation.

```typescript title="client/src/main.tsx" showLineNumbers
import { AuthService } from "@genezio/auth";

AuthService.getInstance().setTokenAndRegion("<token>", "<region>");
```


Great! Now the Genezio Authentication library knows what your backend is.

To integrate Google OAuth in React, we use the `@react-oauth/google` library. You already have it installed and the code needed to do the Google OAuth is already present, you just have to uncomment it. Here are the sections of code:

1.  `src/main.tsx`: here we import the GoogleOAuthProvider from the `@react-oauth/google` library. You also have to uncomment the OAuth React Provider. Replace `<google_id>` with the actual Google ID of your application.
3.  `src/routes/login.tsx` line 3: Imports of types from the `@react-google/google` library.
4.  `src/routes/login.tsx` line 17-18: This is the method that will get called once Google responds successfully to a login request.
5.  `src/routes/login.tsx` line 43-51: This is the Google Login button.

To run the application locally, navigate to the `client/` folder and execute `npm run dev`. Then, navigate to http://localhost:5173/login (there is a small chance that you need to replace the port if 5173 was already taken). Clicking the Google Login button should work properly, but initially, you'll only see a message in the console. To proceed, we must send a request to the `AuthService` to let it know that Google Login was successfully performed. A new account will be created upon the first use of Google Login. For subsequent logins, the user will simply be logged in. 

Add the following code in the `handleGoogleLogin` function.

```typescript title="client/src/routes/login.tsx" showLineNumbers
const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
    setGoogleLoginLoading(true);

    try {
        await AuthService.getInstance().googleRegistration(credentialResponse.credential!)

        console.log('Login Success');
        navigate('/');
    } catch(error: any) {
        console.log('Login Failed', error);
        alert('Login Failed');
    }
    setGoogleLoginLoading(false);
};
```
  
Now, if you click on the Google Login button an account will be created successfully and after that the user will be sent to the secret screen. You can connect with a [Postgres client](https://tableplus.com/) to your database and check that indeed the user was created. 

## Implementing user registration using email and password

Next up, we're heading to the screen where users can sign up using their own email and password.

Go to `src/routes/signup.tsx` and insert the following code. This will trigger the AuthService's register method whenever someone clicks the "Sign Up" button:

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
  
We send a register request to the authentication server to create a user with the provided information.

You can now test it! Navigate to http://localhost:5173/signup and enter your information. You must use a real email account because a confirmation email will be sent to verify the email's authenticity. This step is necessary to activate the account; otherwise, it won't work. Also, ensure you set a password that includes at least 8 characters, one capital letter, and one special character. We haven't implemented comprehensive error handling yet, so you might encounter a general error message if one of the input is incorrect.

Check your email inbox for the confirmation message. Click the link inside to verify your account. Great job! You've successfully set up two accounts: one using Google OAuth and the other with your email.  

## Implementing user login using email and password

Now that we can create accounts, our next step is to log in using the email and password. Go to `src/routes/login.tsx` and add the following code to the `handleSubmit` function:

```typescript title="client/src/routes/login.tsx" showLineNumbers
const handleSubmit = async (event: React.FormEvent) => {
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

In the secret screen, we have two more tasks to tackle. First, we'll capture and set the name and email information of the authenticated user. This can be accomplished by invoking the `userInfo` method on the `AuthService` to retrieve details about the authenticated user.

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
  
Let's test everything. Navigate to http://localhost:5173/login and enter your email and password. The secret screen should appear containing your information. Press the "Logout" button. Now if you navigate to http://localhost:5173/ you can still see the secret even though you are not logged in.

We now need to move to the backend code and make the get secret call only available to authenticated users. Go to the `./server/` folder and open the `backend.ts` file. Here is our backend service. It has a method that returns the secret. Add a `@GnzAuth()` decorator to the method and also add a `context: GnzContext` paramter. You can also put a `console.log` to get the user's information. Import `GnzAuth` and `GnzContext` from `@genezio/types`. 

```typescript title="server/backend.ts" showLineNumbers
import { GenezioDeploy, GenezioMethod, GnzAuth, GnzContext } from "@genezio/types";
```
  
```typescript title="server/backend.ts" showLineNumbers
@GenezioMethod()
@GnzAuth()
async getSecret(context: GnzContext) {
    console.log(context.user);
    return this.secret;
}
```

The `@GnzAuth` decorator works by checking if a token exists, then it retrieves the user associated with that token and places the user's information into the `context` parameter. You must have a `context: GnzContext` as first parameter if you want to protect your method and use `@GnzAuth`. Now, you can get the information of the user who made the request simply by using `context.user`. Here we print the details of the user and then we return the secret. If the request doesn't include a token or if the token isn't found in the database, the decorator will throw an error, which the caller will receive. That covers everything we need to do on the backend. Deploy your application by running genezio deploy from the root of your project.

```bash 
$ ls
client/ server/ genezio.yaml

$ genezio deploy
```

Our secret is now protected. Only authenticated users can see it! Congratulations you have integrated Authentication in your React application.

## Handling errors

Right now, we don't handle any errors. For example, try to register a new account with the same email address. You will get a very informative error saying "An error has occured". Let's try to give more context to our users. Import `ErrorCode` from `@genezio/auth` in the signup component.

```typescript title="client/src/routes/signup.tsx" showLineNumbers
import { AuthService, ErrorCode } from '@genezio/auth';
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
        if (error.code === ErrorCode.EMAIL_ALREADY_EXISTS) {
            alert("Email already exists")
        } else { 
            alert("An error has occured")
        }
    }
    setLoading(false);
};
```

Every error produced by the AuthService comes with a unique code, allowing you to display specific error messages to the user based on the issue. Dive into the documentation to discover additional error codes and incorporate them into your codebase for more detailed user feedback!

You can check out the final implementation [here](https://github.com/Genez-io/genezio-react-auth/tree/final).

