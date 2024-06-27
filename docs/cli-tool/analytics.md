---
sidebar_position: 2
description: Genezio Analytics is a built-in feature in the genezio CLI tool that gathers telemetry and analytics data. Learn how to enable or disable it to provide crash reports.
---

# Analytics

<head>
  <title>Analytics | Genezio Documentation</title>
</head>
### Introduction to Genezio Analytics

Genezio Analytics is a built-in feature in the genezio CLI tool that gathers telemetry and analytics data. This data helps us understand how genezio is being utilized by our users, identifies potential issues, and allows us to make data-driven improvements to enhance the overall user experience.

By default, genezio Analytics is enabled, but you have the option to disable it if you prefer not to participate in data collection.

### Data Collected

The data collected by genezio Analytics includes, but is not limited to:

- **Command Usage**: Information about the commands used, and options selected
- **Execution Time**: Time taken to execute specific commands or operations.
- **Error Tracking**: Reports on encountered errors, crash logs, and stack traces (excluding any sensitive user data).
- **Environment Information**: General details about the user's system (e.g., operating system, CPU, memory) that aid in troubleshooting and compatibility improvements.

We do **NOT** collect any personally identifiable information (PII) or sensitive data.

### Data Privacy and Security

At genezio, we take data privacy and security seriously. All data collected by genezio Analytics is anonymized and aggregated to protect user identities and sensitive information. We adhere to strict privacy policies and do not share or sell any user data to third parties.

### How to Disable Genezio Analytics

If you prefer not to participate in genezio Analytics and want to disable data collection, you can do so easily. Simply set the environment variable `GENEZIO_NO_TELEMETRY` to `1` before running any Genezio commands. Here's how you can do it based on your operating system:

#### Linux and macOS

Open your terminal and execute the following command:

```bash
export GENEZIO_NO_TELEMETRY=1
```

#### Windows

In the Command Prompt or PowerShell, run the following command:

```bash
set GENEZIO_NO_TELEMETRY=1
```

_Last updated on July 26, 2023_
