---
description: The Genezio Deploy button helps users deploy new sites from GitHub repositories or template with one single click.
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

# Genezio Deploy Button

<head>
  <title>Genezio Deploy Button | Genezio Documentation</title>
</head>

The Genezio Deploy button helps users deploy new sites from GitHub repositories or template with one single click.

It’s designed to be used in README files, documentations, or any other place where you want to provide a quick way for users to deploy a new site.

## Usage

The template code must be available in a public repository published on GitHub.

To use the Genezio Deploy button, you need to add the following code to your README file:
<Tabs>
<TabItem className="tab-item" value="Markdown" label="Markdown">

<div id="markdown">
  ```
  [![Genezio Deploy](https://raw.githubusercontent.com/Genez-io/graphics/main/svg/deploy-button.svg)](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/express-getting-started)
  ```

  </div>
  </TabItem>
  <TabItem className="tab-item" value="Html" label="Html">
  <div id="html">
   ```html
  <a href="https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/express-getting-started">
    <img src="https://raw.githubusercontent.com/Genez-io/graphics/main/svg/deploy-button.svg" alt="Genezio Deploy">
  </a>
  ```
  </div>
  </TabItem>

</Tabs>

[![Genezio Deploy](https://raw.githubusercontent.com/Genez-io/graphics/main/svg/deploy-button.svg)](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/express-getting-started)

## Clone a subdirectory of a repository

To create a "Genezio Deploy" button for a specific folder within a repository, use the `base_path` query parameter to designate the subdirectory you want to clone. The format should be `&base_path=your-subdirectory`.

For example, here’s a URL with a creation path of `examples/hello`:

```
https://app.genez.io/start/deploy?repository=<your_url>&base_path=examples/hello
```

When you use the `base_path` parameter, Genezio will build and deploy from the specified subdirectory.
