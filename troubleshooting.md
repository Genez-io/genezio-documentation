# Troubleshooting

Collection of frequently asked questions with ideas on how to troubleshoot and solve them.

### I am receiving  `SyntaxError: Cannot use import statement outside a module`

If you see the following error:

```
SyntaxError: Cannot use import statement outside a module
```

The solution is to add the line `"type": "module"` in `package.json`.

### I am  receiving ``OverwriteModelError: Cannot overwrite `Model` model once compiled``

This is a known Mongoose error. The fix is to add this line when you are exporting your model:

```javascript
export const Model = mongoose.models.Model || mongoose.model('Model', modelSchema);
```

### In Test Interface `Couldn't connect to port 8083`

Sometimes, you may see a red error message at the top instead of the green `Success` label. Most likely that means your local server has encountered an error or is running on a different port.

<figure><img src=".gitbook/assets/image (30).png" alt="Connection Failed"><figcaption><p>Genezio Test Interface connection Failed</p></figcaption></figure>

To establish the connection, verify on which port your server is running and fill that port in the provided input, the click `Connect` (or press Enter). &#x20;

### When executing `genezio local` reloads infinitely

`genezio local` watch for files changes inside your backend directory. If `genezio local` goes into an infinite reloading loop, you might need to use [**`.genezioignore`**](project-structure/.genezioignore.md) to ignore the files that keep changing.

### Module not found `Error: Can't resolve 'https' or 'http'`

You are probably trying to use the generated SDK in a browser environment, but in `genezio.yaml` is configured to run in `node` cli environment. To change that. you will need to change the `runtime` option under `sdk.options` from `node` to `browser` in `genezio.yaml`.

### TS1192: Module '@types/bcryptjs/index' has no default export&#x20;

You have to add the following lines into your `tsconfig.json`:

```json
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
  },
```

### TS7006: Parameter 'err' implicitly has an 'any' type.

You have to add the following lines into your `tsconfig.json`:

```json
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
  },
```
