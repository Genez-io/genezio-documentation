---
description: You can use Genezio Authentication to allow the users to sign in into your application using multiple providers such as email and password, Google or Metamask.
---

import SetYourOwnDb from '/img/features/authentication/set_your_own_db.webp';
import EnableAuth from '/img/features/authentication/enable_auth.webp';
import SelectAuthDb from '/img/features/authentication/select_auth_db.webp';
import EditEmailTemplates from '/img/features/authentication/edit_email_templates.webp';
import EnableEmailAndPassword from '/img/features/authentication/enable_email_and_password.webp';
import EnableGoogleProvider from '/img/features/authentication/enable_google_provider.webp';
import ResetPassword from '/img/features/authentication/reset_password.webp';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication

<head>
  <title>Authentication | Genezio Documentation</title>
</head>
You can use Genezio Authentication to allow the users to sign in into your application using multiple providers such as email and password or Google.
Genezio provides an out-of-the-box authentication backend, support for Postgres and Mongo databases and a client SDK to easily integrate the authentication feature into your frontend.

Enabling authentication for your project will create a new backend class `AuthService` that is deployed next to your other backend classes.
You can use the `AuthService` to register new users, login existing users, reset their password and fetch the user's data.
Enabling protection for a private backend method is done simply by using the `@GenezioAuth` decorator (TypeScript) or the `// genezio: auth` comment (GO).

:::info
To enable the authentication feature, you need to have a project with a backend deployed. If you don't have a project yet, you can create one by following the [Getting Started](/docs/getting-started) guide.
:::

## Protect a backend method

<Tabs groupId="languages">
  <TabItem value="ts" label="TypeScript">

If you want to implement a backend method that is only accessible by authenticated users, you can import and use the `@GenezioAuth` decorator.

Make sure you install the `@genezio/types` package by running:

```bash
npm install @genezio/types
```

The following backend method will allow only authenticated users to read the message:

```typescript title="server/backend.ts" showLineNumbers
import { GenezioDeploy, GenezioAuth, GnzContext } from "@genezio/types";

@GenezioDeploy()
export class BackendService {
  readonly message =
    "This message contains sensitive information. Only authenticated users can read it.";

  @GenezioAuth()
  async getSensitiveInformation(context: GnzContext) {
    console.log("User: ", context.user, "accessed the sensitive message");
    return this.message;
  }
}
```

To get the authenticated user's data, you can use the `context` object.
`GnzContext` is a type that is provided by the `@genezio/types` package. It has the following structure:

```typescript
export type GnzContext = {
  token: string | undefined;
  user:
    | {
        email: string;
        userId: string;
        authProvider: string;
        createdAt: Date;
        verified: boolean;
        name?: string;
        address?: string;
        profilePictureUrl?: string;
        customInfo?: {
          [key: string]: string;
        };
      }
    | undefined;
};
```

</TabItem>
<TabItem value="go" label="Go">
If you want to implement a backend method that is only accessible by authenticated users, you can simply add the `// genezio: auth` comment above that method.

The first argument of the authenticated method must be an object of type `context.Context`.

The following backend method will allow only authenticated users to read the message:

```go title="backendService/backendService.go" showLineNumbers
package BackendService

import (
    "context"
    "fmt"
    "github.com/Genez-io/auth"
)

// genezio: deploy
type BackendService struct {}

func New() BackendService {
    return BackendService{}
}

// genezio: auth
func (b BackendService) GetSensitiveInformation(ctx context.Context) (string, error) {
    user := ctx.Value("user").(*auth.User)
    fmt.Println("User: ", user.Name, "accessed the sensitive message")
    return "This message contains sensitive information. Only authenticated users can read it.", nil
}
```

To get the authenticated user's data, you can use the native Go `context` object.
You can retrieve the user data by calling

```go
user := context.Value("user").(*auth.User)
```

The `User` struct is defined in the `github.com/Genez-io/auth` package and has the following structure:

```go
type User struct {
	Email             *string                 `json:"email"`
	UserId            string                  `json:"userId"`
	AuthProvider      string                  `json:"authProvider"`
	CreatedAt         time.Time               `json:"createdAt"`
	Verified          *bool                   `json:"verified"`
	Name              *string                 `json:"name"`
	Address           *string                 `json:"address"`
	ProfilePictureUrl *string                 `json:"profilePictureUrl"`
	CustomInfo        *map[string]interface{} `json:"customInfo"`
}
```

</TabItem>
</Tabs>

For an authenticated method you are free to add as many arguments as you want, in any order you see fit.

:::info
Once you enabled the authentication feature, you can test your backend locally by running `genezio local`.
You are not required to set up environment variables for the authentication feature when running the backend locally because `genezio` fetches them automatically.
:::

Deploy the backend by running `genezio deploy --backend` and enable the authentication feature from the dashboard.

You can now test your protected method using the testing interface available in the dashboard on `Test your project`.
From here you can create a new user, login, retrieve the user's token and call the protected method with the corresponding token.

## Enable authentication

### Using the dashboard

To enable authentication for a project, go to the project's page in the [dashboard](https://app.genez.io/) and click on the `Authentication` button in the sidebar.

You will be prompted to choose a database type. Follow the wizard to create a new database or add the connection URI of your own database.

### Using the configuration file

To enable the authentication feature, add the following snippet in the configuration file:

```yaml title="genezio.yaml"
services:
  authentication:
    database:
      name: my-database
    providers:
      email: true
      web3: true
      google:
        clientId: ${{env.GOOGLE_CLIENT_ID}}
        clientSecret: ${{env.GOOGLE_SECRET}}
```

You can enable multiple authentication providers at the same time. The `providers` field is optional and you can enable only the providers you want.

:::info
Use `${{services.authentication.token}}` and `${{services.authentication.region}}` in the `genezio.yaml` to inject these variables at frontend build time.
:::

## Enable email and password authentication

To enable email and password authentication for a project, go to the project's page in the [dashboard](https://app.genez.io/) and click on the `Authentication` button in the sidebar.

You will be prompted to choose a database type. Follow the wizard to create a new database or add the connection URI of your own database.

<p align="center">
    <img src={SelectAuthDb} style={{width: "70%"}} />
</p>

To enable email and password authentication, click on the `Edit` button and then toggle the switch to `Enabled`.

<p align="center">
    <img src={EnableEmailAndPassword} style={{width: "70%"}} />
</p>

## Enable Google OAuth 2.0 authentication

To enable Google OAuth 2.0 authentication for a project, go to the project's page in the [dashboard](https://app.genez.io/) and click on the `Authentication` button in the sidebar.

You will be prompted to choose a database type. Follow the wizard to create a new database or add the connection URI of your own database.

<p align="center">
    <img src={SelectAuthDb} style={{width: "70%"}} />
</p>

To enable Google authentication, you need to provide a client id and a client secret. Follow this tutorial to [learn how to obtain Google OAuth 2.0 credentials](https://support.google.com/googleapi/answer/6158849).

Once you got the Google OAuth credentials you can enable the Google authentication provider from the genezio dashboard.

<p align="center">
    <img src={EnableGoogleProvider} style={{width: "70%"}} />
</p>

## Enable Web3 authentication

To enable Web3 authentication for a project, go to the project's page in the [dashboard](https://app.genez.io/) and click on the `Authentication` button in the sidebar.

You will be prompted to choose a database type. Follow the wizard to create a new database or add the connection URI of your own database.

<p align="center">
    <img src={SelectAuthDb} style={{width: "70%"}} />
</p>

To enable Web3 authentication, click on the `Edit` button and then toggle the switch to `Enabled`.

## Set up email and password authentication

In your `client` directory, install the `@genezio/auth` package by running:

```bash
npm install @genezio/auth
```

Configure globally the genezio authentication `token` and `region`. These values are available in the genezio dashboard.

```typescript title="client/src/main.tsx" showLineNumbers
import { AuthService } from "@genezio/auth";

AuthService.getInstance().setTokenAndRegion(
  "<YOUR_GENEZIO_TOKEN>",
  "<YOUR_PROJECT_REGION>"
);
```

### Create a sign-up form for new users

Create a form that allows the user to sign up using an email and a password.

```typescript title="client/src/SignUpForm.tsx" showLineNumbers
import React, { useState } from "react";
import { AuthService } from "@genezio/auth";
import { Link, useNavigate } from "react-router-dom";
import { GenezioError } from "@genezio/types";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      await AuthService.getInstance().register(email, password);
      alert("You have successfully signed up. Now let's sign in!");
      // Redirect the user to the sign in page
      navigate("/signIn");
    } catch (error) {
      alert(
        "Error code: " +
          (error as GenezioError).code +
          ": " +
          (error as GenezioError).message
      );
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={signUp}>Sign Up</button>
      <br />
      <Link to="/signIn">I already have an account</Link>
    </div>
  );
}
```

### Create a login form for existing users

Create a form that allows the user to login using an email and a password.

```typescript title=client/src/SignInForm.tsx showLineNumbers
import React, { useState } from "react";
import { AuthService } from "@genezio/auth";
import { Link, useNavigate } from "react-router-dom";
import { GenezioError } from "@genezio/types";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await AuthService.getInstance().login(email, password);
      alert("You have successfully logged in");
      // Redirect the user to the main page
      navigate("/");
    } catch (error) {
      alert(
        "Error code: " +
          (error as GenezioError).code +
          ": " +
          (error as GenezioError).message
      );
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>Sign In</button>
      <br />
      <Link to="/signUp">Create an account</Link>
    </div>
  );
}
```

### Forgot/Reset password for existing users

You can create a form to reset the password for the existing users.
`AuthService.getInstance().resetPassword(email)` will send an email to the corresponding address to prompt the user to reset the password.

```typescript title=client/src/ForgotPasswordForm.tsx showLineNumbers
import React, { useState } from "react";
import { AuthService } from "@genezio/auth";
import { Link, useNavigate } from "react-router-dom";
import { GenezioError } from "@genezio/types";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const recoverPassword = async () => {
    try {
      await AuthService.getInstance().resetPassword(email);
      alert("Please check your email");
      // Redirect your users to the sign in form
      navigate("/signIn");
    } catch (error) {
      alert(
        "Error code: " +
          (error as GenezioError).code +
          ": " +
          (error as GenezioError).message
      );
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={recoverPassword}>Recover Password</button>
      <br />
      <br />
      <Link to="/signUp">Sign Up</Link>
      &nbsp;|&nbsp;
      <Link to="/signIn">Sign In</Link>
    </div>
  );
}
```

You also have to implement a reset password form to let the user to set a new password.

```typescript title=client/src/ResetPasswordForm.tsx showLineNumbers
import React, { useState } from "react";
import { AuthService } from "@genezio/auth";
import { Link, useNavigate } from "react-router-dom";
import { GenezioError } from "@genezio/types";

export default function ResetPasswordForm() {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const queryString = window.location.search;
  const queryParams = new URLSearchParams(queryString);
  const token: string = queryParams.get("token") || "not specified";

  const reset = async () => {
    if (password1 != password2) {
      alert("Passwords don't match.");
      return;
    }
    try {
      await AuthService.getInstance().resetPasswordConfirmation(
        token,
        password1
      );
      alert("Your password was changed. Let's sign in again.");
      navigate("/signIn");
    } catch (error) {
      alert(
        (error as GenezioError).code + ": " + (error as GenezioError).message
      );
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="password"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="re-enter password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <br />
      <button onClick={reset}>Reset Password</button>
      <br />
      <br />
      <Link to="/forgotPassword">Forgot Password</Link>
      &nbsp;|&nbsp;
      <Link to="/signUp">Sign Up</Link>
    </div>
  );
}
```

The redirect URL to this new reset password form must be set in the `Reset Password` email template in the dashboard.

<p align="center">
    <img src={ResetPassword} style={{width: "70%"}} />
</p>

## Set up Google OAuth 2.0 authentication

In your `client` directory, install the following packages by running:

```bash
npm install @genezio/auth @react-oauth/google
```

Configure globally the genezio authentication `token` and `region` and set up the Google OAuth Provider:

```typescript title=client/src/main.tsx showLineNumbers
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthService } from "@genezio/auth";

AuthService.getInstance().setTokenAndRegion(
  "<YOUR_GENEZIO_TOKEN>",
  "<YOUR_PROJECT_REGION>"
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* TODO: Replace this with your own Google ID */}
    <GoogleOAuthProvider clientId="<YOUR_GOOGLE_ID>">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
```

The `GoogleOAuthProvider` component is a wrapper around the `react-oauth` library. It provides the Google OAuth 2.0 authentication flow that the user can use to sign up.

## Set up Web3 Authentication

In your `client` directory, install the following packages by running:

```bash
npm install @genezio/auth
```

Configure globally the genezio authentication `token` and `region` and set up the Google OAuth Provider:

```typescript title=client/src/main.tsx showLineNumbers
import { AuthService } from "@genezio/auth";

AuthService.getInstance().setTokenAndRegion(
  "<YOUR_GENEZIO_TOKEN>",
  "<YOUR_PROJECT_REGION>"
);
```

You will rely on the user installing a Web3 Wallet extension in browser such as Metamask. Then you need to do the following steps:

1. Request the wallet address from the Web3 Wallet extension.

```typescript
const addresses = await window.ethereum.request({
  method: "eth_requestAccounts",
});
```

2. Select one of the addresses and then request a nonce from the `AuthService` class.

```typescript
const address = addresses[0];
const nonce = await AuthService.getInstance().web3GetNonce(address);
```

3. Ask the user to sign the nonce using his wallet extension.

```typescript
const signature = await window.ethereum.request({
  method: "personal_sign",
  params: [nonce, address],
});
```

4. Send the address and the signature to the `AuthService`. The service will check if the signature is correct and if it is, it will return all the user information and it will save a token in the browser.

```typescript
const { user } = await AuthService.getInstance().web3Login(address, signature);
```

### Create a login form for existing users

```typescript title=client/src/LoginForm.tsx showLineNumbers
import React from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { AuthService } from "@genezio/auth";
import { GenezioError } from "@genezio/types";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    try {
      await AuthService.getInstance().googleRegistration(
        credentialResponse.credential!
      );
      console.log("Login Success");
      navigate("/");
    } catch (error: any) {
      alert(
        "Error code: " +
          (error as GenezioError).code +
          ": " +
          (error as GenezioError).message
      );
    }
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          handleGoogleLogin(credentialResponse);
        }}
      />
    </div>
  );
}
```

## Call protected backend methods from the frontend

You can call the protected backend method from the frontend by using the `@genezio/auth` package.

```typescript title=client/src/FetchSensitiveMessage.tsx showLineNumbers
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackendService } from "@genezio-sdk/genezio-auth-tutorial";

export default function FetchSensitiveMessage() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // If the user is not authenticated, the backend method will throw an error
  const fetchSensitiveInformation = async () => {
    try {
      const message = await BackendService.getSensitiveInformation();
      setMessage(message);
    } catch (error) {
      console.error(error);
      navigate("/login");
    }
  };

  return (
    <div>
      <button onClick={fetchSensitiveInformation}>"Get message"</button>
      {message && <p>{message}</p>}
    </div>
  );
}
```

On the client side you don't need to pass the context for `BackendService.getSensitiveInformation()`, this will be added seamlessly by the `@genezio/auth` library.

## Supported databases

The authentication solution offers the flexibility to choose between Postgres and Mongo databases for storing user data and access tokens.

For seamless integration, Genezio provides provisioned Postgres databases that can be easily configured.
When enabling authentication through the Genezio dashboard, simply opt for Postgres as the database type and follow the user-friendly wizard to quickly generate a new database that will be used for the authentication feature.

You can also bring your own database. You just have to provide the connection URL of the database in the `General Settings` tab:

<p align="center">
    <img src={SetYourOwnDb} style={{width: "70%"}} />
</p>

## Supported authentication providers

### Email and password

Users can register using an email and a password.
Once the user has registered, a confirmation email will be sent.
The email subject and message is already set for you with some default values. The redirect URL that the user has to click to verify the account is set to your function's URL.
You can change the subject, message and redirect URL by going to the Authentication configuration panel from the Genezio Dashboard.

Another email that is sent automatically is during the reset password flow. No default value is set for the reset password flow. If you want to use this flow, you have to add a redirect URL to your frontend which will make a request to the `AuthService` once the user confirmed the new password.

### Google OAuth 2.0

Users register using their own Google account. You have to create a new application in Google API Console. Visit [this](https://support.google.com/googleapi/answer/6158849) link for more information.

### Web3 Wallet

A Web3 wallet login system allows users to securely authenticate with your platform using their digital wallets. This process utilizes blockchain technology, offering a decentralized and secure method of verification without sharing personal information. This method leverages public-key cryptography, eliminating the need for traditional username and password combinations.

How does it work?

1. Connect Wallet: User clicks "Login with Web3 Wallet" and approves the connection in their wallet.
2. Sign Message: The platform sends a unique message, which the user signs with their private key via their wallet.
3. Verify Signature: The platform verifies the signature using the user's public key to authenticate identity.
4. Establish Session: Upon verification, the platform starts a session, granting access to the user.

### More coming soon

Many more authentication providers are coming soon. If you have a specific provider in mind that you would like to see supported, let us know.

## Edit email templates

You can edit the email templates that are sent to the users for verifying their email or resetting their password.

Go to the `Authentication` page of your project in the dashboard and go to the `Settings/Email Templates` tab.

<p align="center">
    <img src={EditEmailTemplates} style={{width: "70%"}} />
</p>

From here you can configure the subject and the message of the email that is sent to the user.
You can also dynamically add the user's name using the placeholder `{{name}}` and the link to verify the email `{{redirectUrl}}`.

For example the following template:

```
Message: Hi {{name}}, please verify your email by clicking on the following link: {{redirectUrl}}.
```

will be sent to the a specific user as:

```
Message: Hi John, please verify your email by clicking on the following link: https://function-url/AuthService/emailConfirmationHttp?token=user-token.
```

Once you finished editing the templates, click on the `Save` button.

## Token Storage Configuration

Whenever a new login is performed a JWT token is generated. By default, the token is saved in the browser's local storage.

The `@genezio/auth` library allows you to configure where to store the token by exposing the `setStorage()` method.
For example, you can opt to store it in memory if you are building a more secure web application.
In this case, the user will have to log in every time the page is refreshed.
If you run a mobile native application, you will have to change the `Storage` since `localStorage` does not exist.
You might want to save in `Keychain` or `Keystore` depending on the user operating system.

The storage manager has to be set both on the frontend and the backend side.
Each backend call will use this storage manager to retrieve the token and attach it to the request.

Here is an example of how to set the storage manager:

```typescript title=client/src/main.tsx showLineNumbers
import { AuthService } from "@genezio/auth";
import { StorageManager } from "@genezio-sdk/my-project";

AuthService.getInstance().setTokenAndRegion(
  "<YOUR_GENEZIO_TOKEN>",
  "<YOUR_PROJECT_REGION>"
);

// Define a class that will implement the Storage interface
class InMemoryStorageWrapper {
  db: { [key: string]: string } = {};
  setItem(key: string, value: string): void {
    this.db[key] = value;
  }
  getItem(key: string): string | null {
    return this.db[key];
  }
  removeItem(key: string): void {
    delete this.db[key];
  }
  clear(): void {
    this.db = {};
  }
}
const inMemory = new InMemoryStorageWrapper();
AuthService.getInstance().setStorage(inMemory);

StorageManager.setStorage(inMemory);
```

## Disable authentication

To disable a specific authentication provider, go to the `Authentication` page of your project in the dashboard and click on the `Edit` button corresponding to the provider you want to disable. Then, toggle the switch to `Disabled` and click on the `Save` button.

To disable the entire authentication solution, go to the `Authentication` page of your project, in the `Settings/General Settings` tab, and click on the `Disable` button.

## Error handling

During the authentication flow, different errors can occur such as `Email already exists` or `Password is too weak`.
These errors should be handled and should display friendly messages to the end user.

The methods in `AuthService` generate errors with the following structure in TypeScript:

```typescript
{
    "message": string,
    "code": number,
}
```

The errors can be easily handled by checking the `code` property of the error object.

```typescript showLineNumbers
import { ErrorCode } from "@genezio/auth";

switch (error.code) {
  case ErrorCode.EMAIL_ALREADY_EXISTS:
    alert("This email is already in use");
    break;
  case ErrorCode.PASSWORD_TOO_SHORT:
    alert("The password is too short");
    break;
  default:
    alert("An error occurred");
    break;
}
```

A complete list of error codes is the following:

| Error Code                                        | Code |
| ------------------------------------------------- | ---- |
| CONNECTION_DATABASE_ERROR                         | 0    |
| MISSING_EMAIL_PARAMETER                           | 1    |
| INCORRECT_EMAIL_OR_PASSWORD                       | 2    |
| EMAIL_ALREADY_EXISTS                              | 3    |
| EMAIL_NOT_FOUND                                   | 4    |
| INVALID_TOKEN                                     | 5    |
| MISSING_PASSWORD_PARAMETER                        | 6    |
| PASSWORD_TOO_SHORT                                | 7    |
| PASSWORD_CONTAINS_ONLY_NUMBER                     | 8    |
| PASSWORD_MUST_HAVE_AT_LEAST_ONE_SPECIAL_CHARACTER | 9    |
| INTERNAL_PASSWORD_NOT_HASHED_ERROR                | 10   |
| INTERNAL_CREATE_USER_ERROR                        | 11   |
| INTERNAL_CREATE_SESSION_ERROR                     | 12   |
| INTERNAL_UPDATE_USER_ERROR                        | 13   |
| INTERNAL_UPDATE_SESSION_ERROR                     | 14   |
| INTERNAL_DELETE_SESSION_ERROR                     | 15   |
| INTERNAL_DELETE_USER_ERROR                        | 16   |
| INTERNAL_FIND_USER_ERROR                          | 17   |
| INTERNAL_FIND_SESSION_ERROR                       | 18   |
| INTERNAL_INCORRECT_CONFIGURATION                  | 19   |
| MAIL_NOT_SENT                                     | 20   |

## Troubleshooting

### AuthService class was not initialized

If you are getting the following error:

```bash
The AuthService class was not initialized. Call AuthService.getInstance().setTokenAndRegion(token, region) with the values provided in genezio dashboard.
```

Check the following things:

1. The authentication feature is enabled in the genezio dashboard.
2. At least one authentication provider is enabled (either email and password or Google OAuth 2.0).
3. The `AuthService.getInstance().setTokenAndRegion(token, region)` method is called in the client's code with the correct token and region available in the dashboard.
