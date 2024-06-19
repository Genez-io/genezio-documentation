import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

# Deploy to Genezio Button

The Deploy to Genezio button helps users deploy new sites from Github Repositories or template with one single click.

It’s designed to be used in README files, documentations, or any other place where you want to provide a quick way for users to deploy a new site.

## Usage

The template code must be available in a public repository stored on Github.com.

To use the Deploy to Genezio button, you need to add the following code to your README file:
<Tabs>
<TabItem className="tab-item" value="Markdown" label="Markdown">

<div id="markdown">
  ```
  [![Deploy to Genezio](https://raw.githubusercontent.com/Genez-io/graphics/main/svg/deploy-button.svg)](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/express-getting-started)
  ```
 
  </div>
  </TabItem>
  <TabItem className="tab-item" value="Html" label="Html">
  <div id="html">
   ```html
  <a href="https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/express-getting-started">
    <img src="https://raw.githubusercontent.com/Genez-io/graphics/main/svg/deploy-button.svg" alt="Deploy to Genezio">
  </a>
  ```
  </div>
  </TabItem>
  
</Tabs>

[![Deploy to Genezio](https://raw.githubusercontent.com/Genez-io/graphics/main/svg/deploy-button.svg)](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/express-getting-started)
