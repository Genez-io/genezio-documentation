# Login

### Usage

`genezio login <accessToken> [--logLevel <logLevel>]`

### Description

This command authorizes the genezio CLI to access the main genezio App.

By running this command without any access token, the Web App will be opened in your browser and you will be authenticated. No further actions are needed from you if you are already authenticated on the Web App.

If the authentication is successful, the genezio CLI automatically adds a genezio token to the keychain.

If this command is executed using an access token, the token will be saved in the file \~/.generiorc and it will be used for all the future commands. New access tokens can be generated from [here](https://app.genez.io/settings/tokens). Access tokens are useful in environments where you don't have a browser to use for the login process.
