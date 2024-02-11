# Authentication

Genezio offers an easy and out of the box Authentication solution. It supports multiple authentication providers. You can use it using Postgres or Mongo databases already connected to a project or it works also with a "bring your own database" system.

## How does it work?

When you enable Genezio Authentication from the Dashboard, a new class `AuthService` is deployed next to your other backend classes. You can activate each authentication provider (such as Google) from the dashboard. 

Once the authentication was enabled and the class was deployed, you can start using and testing it. It will be available in the test interface and you can call methods on it. The methods from the `AuthService` class can also be called via the `@genezio/auth` library. 

## Supported authentication providers

### Email and password

Users register using an email and password. Optionally, they can also set a name for the user. Once the user has registered, a confirmation email will be sent. By default the subject and message of the email is already set for you with some default values. By default, the redirect url that the user has to click to validate the email is set to your function's URL. You can change the subject, message and redirect URL by going to the Authentication configuration panel from the Genezio Dashboard.

Another email that is sent automatically is during the reset password flow. No default value is set for the reset password flow. If you want to use this flow, you have to add a redirect URL to your frontend which will make a request to the `AuthService` once the user confirmed the new password.

### Google OAuth 2.0 

Users register using their own Google account. You have to create a new application in Google API Console. Visit [this](https://support.google.com/googleapi/answer/6158849) link for more information.

### More coming soon

We have a plan to add more authentication providers such as Github.

## Protect class methods

If you don't want your backend class to be accesible by unauthenticated users you can protect them like this:

```typescript 
@GenezioMethod()
@GnzAuth()
async getSecret(context: GnzContext) {
    console.log(context.user);
    return this.secret;
}
```

You can import the `@GnzAuth` decorator and the `GnzContext` type from `@genezio/types` library that you can install from NPM using `npm install @genezio/types`.

If the first parameter of the method is `@GnzContext`, the client SDK of that method will include the token with the request. On the backend side, the `@GnzAuth` decorator will check if the token exists and if there is a user attached to it. If that's true, the `user` object which contains information about the authenticated user will be attached on the `context` argument. If not, an error will be thrown.

## Error handling

## Security

Whenever a new login is performed a JWT token is generated. By default, the token is saved in the browser's local storage. The `@genezio/auth` library allows you to configure where to store the token. You can also opt to store it in memory if you are building a more secure web application. This would mean that the user has to login again after each refresh.

You have to make sure that your application is protected against XSS attacks. Read more about this [here](https://owasp.org/www-community/attacks/xss/).

