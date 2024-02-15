---
sidebar_position: 8
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Email Service

Genezio provides a way to send emails with a managed email service.

### Active the service for your project

On your project page, go to the integrations tab and activate the email service.

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/Screenshot 2024-01-11 at 12.58.27.png")} alt="" width="563"/><figcaption></figcaption></figure>

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
