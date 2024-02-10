# Create a React application with genezio authentication

In this tutorial, we'll walk through the process of adding authentication to an existing application. The tutorial is composed of the following steps, each of them will bring you closer to our end goal: successfully building a React application with a robust authentication mechanism.

1. Preparing the setup, the project and enabling Genezio Authentication
2. Implementing Authentication using Google OAuth
3. Implementing user registration using email and password
4. Implementing user login using email and password
5. Handling errors.

## Preparing the setup, the project and enabling Genezio Authentication

First of all, you have to install genezio if you haven't installed it already.
```
npm install genezio -g
```

The application that we are building is a very simple one. It has three screens: a login screen, a signup screen and a page that displays: the user's name, email and it reveals a secret.

Clone the application by running the following command:

```
git clone https://github.com/Genez-io/genezio-react-auth.git
```

Go to the directory that you've cloned from github and run `genezio deploy` to deploy the project. Once that is done, you can open the browser and explore the application. The React app has a /login route for login, a /signup route for the sign up screen and a / route that displays the secret. Press the "Reveal secret" button and the secret is displayed. Shh!

That's not good. Anyone can see our secret, we have to modify the application to reveal the secret only to authenticated users. Let's start by enabling Genezio Authentication.

Go to the dashboard of your project on https://app.genez.io. Click on Actions and then Authentication.

// TODO photo

Select or create a new Postgres database and press Enable. We want to offer two ways of registering an account in our application: email&passowrd and Google Login. Activate both providers. For Google, you need to make an application in Google Console. Here is a link that describes the steps. Once you have obtained a Google ID and Google Secret, enter the values and click Enable. Now, we are ready to write some code. 

## Implementing Authentication using Google OAuth

Go to the client/ folder and install the Genezio auth library.

```

npm install @genezio/auth

```


We then need to configure the token and region. These can be found in the Authentication Configuration screen on the Genezio Dashboard. Go to src/main.tsx and write the following code right after the last import.

```typescript title="client/src/main.tsx" showLineNumbers

import { AuthService } from "@genezio/auth";



AuthService.getInstance().setTokenAndRegion(“<token>”, “<region>” );

```


Great! Now the Genezio Authentication library knows what your backend is.

To use Google OAuth in React, we use the `@react-google/google` library. You already have it installed and the code is already present you just have to uncomment it. Here are the section of code that you need to uncomment:

1.  src/main.tsx line 12: here we import the GoogleOAuthProvider from the `@react-oauth/google` library.
2.  src/main.tsx line 32 and line 34: this is the OAuth React Provider. You have to also replace `<google_id>` with the actual Google ID of your application.
3.  src/routes/login.tsx line 3: Imports of types from the `@react-google/google` library.
4.  src/routes/login.tsx line 17-18: This is the method that will get called once Google responds successfully to a login request.
5.  src/routes/login.tsx line 43-51: This is the Google Login button.

You can run the application locally by going in the `client/` folder and running `npm run dev`. Navigate to `https://localhost:5173/login` and when you click on the Google Login button and everything should work just fine. It's just that so far nothing will happen. We have to send a request to the backend to inform that the Google Login was performed. For that, write in the `handleGoogleLogin` method the following code that sends the token received by Google to the authentication server and, if everything is ok, it creates an account.

```typescript title="client/src/routes/login.tsx" showLineNumbers
AuthService.getInstance().googleRegistration(credentialResponse.credential!).then(() => {
   console.log('Login Success');
   navigate('/');
}).catch((error) => {
   console.log('Login Failed’, error);
   alert('Login Failed');
})
```
  
Now, if you click on the Google Login button an account will be created successfully and after that the user will be sent to the secret screen. You can connect with a Postgres client (we recommend TablePlus todo link) to your database and check that indeed the user was created. 

## Implementing user registration using email and password

We move forward now to the screen where users can register with their own email and password.

Go to `src/routes/signup.tsx`, and add the following code to code to call the register method:

```typescript title="client/src/routes/signup.tsx" showLineNumbers
try {
   const response = await AuthService.getInstance().register(email, password, name);
   console.log('Register Success', response);

   navigate('/login');
} catch (error: any) {
   console.log(error);
   alert("An error has occured")
}
```
  
This is straight forward. We send a `register` request to the authentication server and a user will be created using the information provided. You can test it! You need to set a real email account because a confirmation email will be sent to verify that the email is real. You have to do that to activate the account otherwise it won't work. Also, make sure you set a password with at least 8 characters, a capital letter and a special character. We haven't set a proper error handling yet so you might see just a general error.
  

## Implementing user login using email and password

We have a way to create accounts, now we have to login with the email and password. Go to `src/routes/login.tsx` and add the following code to the `handleSubmit` function

```typescript title="client/src/routes/login.tsx" showLineNumbers
const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
        await AuthService.getInstance().login(email, password)
        navigate("/");
    } catch (error: any) {
        console.log('Login Failed', error);
        alert('Login Failed');
    }
}
```
  
Same as before, when a successful login is performed the application will go to the secret screen. But, still, everybody can see the secret. We need to move now to the backend code and make the get secret call only available to authenticated users. Go to the `./server/` folder and open the `backend.ts` file. Here is our backend service. It has a method that returns the secret. Add a `@GnzAuth()` decorator to the method and also add a `context: GnzContext` paramter. You can also put a `console.log` to get the user's information.
  
```typescript title="server/backend.ts" showLineNumbers
@GenezioMethod()
@GnzAuth()
async getSecret(context: GnzContext) {
    console.log(context.user);
    return this.secret;
}
```

What `@GnzAuth` does is that it checks if the token exists and it retrieves the user that is associated with that token and puts the user info in the `context` parameter. Now you can access the info of the user that made the requests just by calling `context.user`. Here we print the details of the user and then we return the secret. If the token was not passed to the request or if it does not exist in the database, the decorator will throw an error and the callee will receive it. That’s all that we have to do on the backend side.

Your secret should not be protected. Only authenticated users can see it! You can test this by logging out and then trying to visit the `https://localhost:5173/`. The secret is not visible anymore. 

You can check out the final implementation here (TODO Insert Link).

Continue reading on how to handle errors nicely (TODO Insert link).
