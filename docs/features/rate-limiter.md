import SetYourOwnDb from '/img/features/authentication/set_your_own_db.webp';
import EnableAuth from '/img/features/authentication/enable_auth.webp';
import SelectAuthDb from '/img/features/authentication/select_auth_db.webp';
import EditEmailTemplates from '/img/features/authentication/edit_email_templates.webp';
import EnableEmailAndPassword from '/img/features/authentication/enable_email_and_password.webp';
import EnableGoogleProvider from '/img/features/authentication/enable_google_provider.webp';
import ResetPassword from '/img/features/authentication/reset_password.webp';

# Rate Limiter

You can use Genezio Rate Limiter Decorator to allow the users to sign in into your application using multiple providers such as email and password or Google.
Genezio provides an out-of-the-box authentication backend, support for Postgres and Mongo databases and a client SDK to easily integrate the authentication feature into your frontend.

Enabling authentication for your project will create a new backend class `AuthService` that is deployed next to your other backend classes.
You can use the `AuthService` to register new users, login existing users, reset their password and fetch the user's data.
Enabling protection for a private backend method is done simply by using the `@GenezioAuth` decorator.

:::info
To enable the authentication feature, you need to have a project with a backend deployed. If you don't have a project yet, you can create one by following the [Getting Started](/docs/getting-started) guide.
:::

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

## Supported authentication providers

### More coming soon

Many more authentication providers are coming soon. If you have a specific provider in mind that you would like to see supported, let us know.
