# Guide on how to migrate to v1.0.0

## genezio.yaml v2

## Remove region from SDK

In version 1.0.0, we removed "region" from the name of the sdk npm package. The name of the package makes more sense now. 

Let's say you have a project with the following `genezio.yaml`.

```
name: my-project
region: us-east-1
...
```

Using genezio CLI version v0.8.0, the generated SDK will have the following name: `@genezio-sdk/my-project_us-east-1`. If you update genezio CLI to v1.0.0,
the name of the SDK package will be `@genezio-sdk/my-project`.

We recommend switching to the new SDK name. To make the switch you have to do the following:

1. Make sure you don't have any reference in `scripts` in `package.json` to `@genezio-sdk/<project_name>_<project_region>` and if you have replace them with `@genezio-sdk/<project_name>`. by modifying  `npm install @genezio-sdk/...` command from your `package.json` file and all the imports that you have. However, switching is not
2. Run `npm uninstall @genezio-sdk/<project_name>_<project_region>`.
3. After you executed your first `genezio deploy` after updating to genezio CLI v1.0.0, run `npm install @genezio-sdk/<project_name>`.
4. Replace all imports from `@genezio-sdk/<project_name>_<project_region>` to `@genezio-sdk/<project_name>`.

It is not completely mandatory to switch right away. If you continue using `npm install @genezio-sdk/<project_name>_<project_region>` our private registry will return the package named `@genezio-sdk/<project_name>` and npm
will add an alias in your `package.json`.

```
"dependencies": {
    "@genezio-sdk/<project_name>_<project_region>": "npm:@genezio-sdk/<project_name>",
}
```

However, you might still have problems if you are using `genezio local`. It's better to do the change as soon as possible to avoid any unpleasant errors further on.
