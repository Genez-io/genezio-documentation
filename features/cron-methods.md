# Scheduled methods

A scheduled method or a cron is a method that will run periodically. By using a specific cron syntax, you can define the frequency and timing for each method.

With genezio decorators, you can set the method type to `cron` and the `cronString` accordingly to the desired frequency.

## Use scheduled methods in your project

In the example below, method `sayHiEveryMinute()` will be called every minute:

{% code title="index.ts" %}
```javascript
import { GenezioDeploy, GenezioMethod } from "@genezio/types";

@GenezioDeploy()
export class BackendService {

    @GenezioMethod({type: "cron", cronString: "* * * * *"})
    sayHiEveryMinute() {
        console.log("Hi!")
    }
}
```
{% endcode %}

### Cron strings examples

Below, you have the most commonly used `cronString` examples:

<table><thead><tr><th>Cron string</th><th>Description</th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><code>* * * * *</code></td><td>Triggers at every minute</td><td></td><td></td></tr><tr><td><code>0/5 * * * *</code></td><td>Triggers every 5 minutes</td><td></td><td></td></tr><tr><td><code>0 * * * *</code></td><td>Triggers every hour</td><td></td><td></td></tr><tr><td><code>0 8 * * *</code></td><td>Triggers every day at 8 a.m.</td><td></td><td></td></tr></tbody></table>

You can, also, [use crontab.guru](https://crontab.guru/) to build specific cron strings.

## Examples using scheduled methods

{% hint style="info" %}
For more details, check out an example using [scheduled methods](https://github.com/Genez-io/genezio-examples/tree/master/javascript/cron).
{% endhint %}

## More details

For more information on genezio decorators, check out [genezio-decorators.md](../project-structure/genezio-decorators.md "mention").
