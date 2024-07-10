---
sidebar_position: 8
description: Learn how to use Genezio’s managed email service for sending emails. Follow our guide for setup, configuration, and sending HTML emails
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Email Service

<head>
  <title>Email Service | Genezio Documentation</title>
</head>
Genezio provides a way to send emails with a managed email service.

### Active the service for your project

On your project page, click on the `Email Service` button on the sidebar and install the integration.

### Use it in your project

To test your project locally, you have to create a file named `.env` and store the token there. This file should be in the root directory of your backend.

Use the genezio [dashboard](https://app.genez.io) under `Integrations/Email Service` card to copy the token in your `.env` file.

<!-- {% code title=".env" %} -->

```fallback title=".env"
EMAIL_SERVICE_TOKEN="***********************"
```

<!-- {% endcode %} -->

Add the following code to your project to call the email service:

```typescript title="emailService.ts" showLineNumbers
import { GenezioDeploy } from "@genezio/types";
import { MailService } from "@genezio/email-service";

@GenezioDeploy()
export class EmailService {
  async sendEmail(email: string, subject: string, message: string) {
    const response = await MailService.sendMail({
      emailServiceToken: process.env.EMAIL_SERVICE_TOKEN,
      from: email,
      to: email,
      subject: subject,
      text: message,
    });

    if (!response.success) {
      return response.errorMessage;
    }

    return "success";
  }
}
```

**Note:** Install `@genezio/email-service` using npm, if you don't have this dependency already in your project:

```
npm install @genezio/email-service
```

Now you can use `genezio local` to start a server locally that will also load up the necessary environment variables to use the email service.

## Create more complex emails

**Prettify your emails with HTML**

```typescript
async sendEmail(email: string, subject: string, message: string) {
    const response = await MailService.sendMail({
      emailServiceToken: process.env.EMAIL_SERVICE_TOKEN!,
      to: email,
      subject: subject,
      html: `<html lang="en">
        <head><style>h1{background-color:#6f42c1;color:#fff;margin:0;padding:10px;text-align:center}</style></head>
        <body>
          <div class="e"><h1>${message}</h1>
        </body>
      </html>`,
    });

    if (!response.success) {
      return response.errorMessage;
    }

    return "success";
  }
```

You can add any HTML template static or dynamic you might want.

**Add attachments to the email**

```typescript
async sendEmail(email: string, subject: string, message: string) {
    const response = await MailService.sendMail({
      emailServiceToken: process.env.EMAIL_SERVICE_TOKEN!,
      to: email,
      subject: subject,
      text: message,
      attachments: [
        {
          filename: "attachment.txt",
          content: "Hello world attachment!",
        },
      ],
    });

    if (!response.success) {
      return response.errorMessage;
    }

    return "success";
  }
```

`Attachments` option in the message object that contains an array of attachment objects.
Attachments can be added as many as you want.
