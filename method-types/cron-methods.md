# CRON Methods

A CRON method is a way of scheduling tasks to run periodically. The period when the method is called can be configured in the genezio yaml configuration file in the "cronString" property. This property follows the [AWS cron string format](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html). In the following example, we have a class with a method that is called every minute:

Javascript:

```javascript
export class CronExample {
    sayHiEveryMinute() {
        console.log("Hi!")
    }
}
```

Below is an example of a YAML configuration file for the CronExample:

```yaml
name: cron-example
sdk:
  language: js
  path: ./sdk/
classes:
  - path: "./index.js"
    methods:
      - name: "sayHiEveryMinute"
        type: cron
        cronString: "* * * * *"
```
