---
sidebar_position: 11
description:  Learn about configuring temporary storage size for your Genezio execution environment, including limitations and best practices.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Temporary Storage

In Genezio, a temporary storage partition is mounted to the execution environment by default. This storage can be used for caching data or storing temporary files during function execution. Below, you'll find details on configuring the storage size, its limitations, and considerations for usage.

## Default Storage Size

By default, a partition of 128MB is mounted to the execution environment. This storage does not persist between function invocations. It is best suited for temporary operations such as caching files or intermediate data processing.

## Writing and Reading Files Using Temporary Storage

Here is an example of how to write to and read from a file in the temporary storage using Node.js with Express. Files should be written in the `/tmp` directory:

<Tabs>
  <TabItem className="tab-item" value="Express" label="express">
```ts
import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());

// Write data to a file
app.post('/write', (req, res) => {
  const { filename, content } = req.body;
  const filePath = path.join('/tmp', filename);

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return res.status(500).send('Error writing file');
    }
    res.send(`File ${filename} written successfully!`);
  });
});

// Read data from a file
app.get('/read/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join('/tmp', filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```
  </TabItem>
  <TabItem className="tab-item" value="Fastify" label="fastify">
```ts
import Fastify from 'fastify';
import fs from 'fs';
import path from 'path';

const fastify = Fastify();
const PORT = 3000;

fastify.post('/write', async (request, reply) => {
  const { filename, content } = request.body as { filename: string; content: string };
  const filePath = path.join('/tmp', filename);

  try {
    await fs.promises.writeFile(filePath, content);
    reply.send({ message: `File ${filename} written successfully!` });
  } catch (err) {
    fastify.log.error('Error writing file:', err);
    reply.status(500).send({ error: 'Error writing file' });
  }
});

fastify.get('/read/:filename', async (request, reply) => {
  const { filename } = request.params as { filename: string };
  const filePath = path.join('/tmp', filename);

  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    reply.send(data);
  } catch (err) {
    fastify.log.error('Error reading file:', err);
    reply.status(500).send({ error: 'Error reading file' });
  }
});

fastify.listen({ port: PORT, host: '0.0.0.0' }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server running on http://localhost:${PORT}`);
});
```
</TabItem>
  <TabItem  className="tab-item" value="FastAPI" label="fastapi">
```python
import fastapi
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pathlib import Path

app = FastAPI()
BASE_DIR = Path("/tmp")

class FileData(BaseModel):
    filename: str
    content: str

# Write data to a file
@app.post("/write")
async def write_file(file_data: FileData):
    file_path = BASE_DIR / file_data.filename
    try:
        file_path.write_text(file_data.content, encoding="utf-8")
        return {"message": f"File {file_data.filename} written successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error writing file: {str(e)}")

# Read data from a file
@app.get("/read/{filename}")
async def read_file(filename: str):
    file_path = BASE_DIR / filename
    try:
        if not file_path.exists():
            raise HTTPException(status_code=404, detail="File not found")
        content = file_path.read_text(encoding="utf-8")
        return {"filename": filename, "content": content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error reading file: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3000)
```
  </TabItem>
  <TabItem  className="tab-item" value="Flask" label="flask">
```python
from flask import Flask, request, jsonify, abort
from pathlib import Path

app = Flask(__name__)
BASE_DIR = Path("/tmp")

# Write data to a file
@app.route("/write", methods=["POST"])
def write_file():
    data = request.get_json()
    if not data or "filename" not in data or "content" not in data:
        abort(400, description="Invalid request payload")

    filename = data["filename"]
    content = data["content"]
    file_path = BASE_DIR / filename

    try:
        file_path.write_text(content, encoding="utf-8")
        return jsonify({"message": f"File {filename} written successfully!"})
    except Exception as e:
        abort(500, description=f"Error writing file: {str(e)}")

# Read data from a file
@app.route("/read/<filename>", methods=["GET"])
def read_file(filename):
    file_path = BASE_DIR / filename

    try:
        if not file_path.exists():
            abort(404, description="File not found")
        content = file_path.read_text(encoding="utf-8")
        return jsonify({"filename": filename, "content": content})
    except Exception as e:
        abort(500, description=f"Error reading file: {str(e)}")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)
```
  </TabItem>
  <TabItem  className="tab-item" value="Django" label="django">
```python
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from pathlib import Path

BASE_DIR = Path("/tmp")

@csrf_exempt
def write_file(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            filename = data.get("filename")
            content = data.get("content")

            if not filename or not content:
                return JsonResponse({"error": "Invalid request payload"}, status=400)

            file_path = BASE_DIR / filename
            file_path.write_text(content, encoding="utf-8")

            return JsonResponse({"message": f"File {filename} written successfully!"})
        except Exception as e:
            return JsonResponse({"error": f"Error writing file: {str(e)}"}, status=500)
    return JsonResponse({"error": "Method not allowed"}, status=405)

def read_file(request, filename):
    if request.method == "GET":
        try:
            file_path = BASE_DIR / filename
            if not file_path.exists():
                return JsonResponse({"error": "File not found"}, status=404)

            content = file_path.read_text(encoding="utf-8")
            return JsonResponse({"filename": filename, "content": content})
        except Exception as e:
            return JsonResponse({"error": f"Error reading file: {str(e)}"}, status=500)
    return JsonResponse({"error": "Method not allowed"}, status=405)
```
  </TabItem>
</Tabs>


## Customizing Storage Size

Here is an example configuration snippet to configure the storage size to 256MB:

```yaml title="genezio.yaml"
backend:
  functions:
    - name: my-function
      path: ./
      handler: handler
      entry: app.mjs
      storageSize: 256 # in MB
```

You can configure the storage size in increments of 1MB up to a maximum of 128MB.

To increase the maximum value up to 512MB, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).

For storage requirements exceeding 512MB, please [contact us](mailto:contact@genez.io).

## Local Testing

To test your storage configurations locally, use `genezio local` to start the server execution locally. Ensure that your application behaves as expected with the specified storage size.

## Accessing Bundled Local Files

If your source code includes local files, `genezio` will bundle these files during deployment unless they are explicitly [ignored using a `.genezioignore` file](/docs/project-structure/.genezioignore). The source code and any additional files can be found at `/tmp/package` or `process.cwd()` within the execution environment.

These bundled files are accessible within the execution environment at the following path:
```
/tmp/package/<filepath>
```

For example, if you have a file named `config.json` in the same directory as your source code, it can be accessed in your function like this:

```ts
const configPath = '/tmp/package/config.json';
// or const configPath = path.join(process.cwd(), 'config.json');
fs.readFile(configPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading config file:', err);
  } else {
    console.log('Config file contents:', data);
  }
});
```
This allows you to include and use necessary local files without needing to manually upload or manage them separately.

## Limitations and Considerations

- Attempting to write to from directories outside of `/tmp` will result in a `read-only file system` error.
- Ephemeral Storage: The storage is not persistent across requests. It is not suitable for stateful operations or storing data that needs to be retained beyond a single function execution.
- Impact on Cold Starts: Increasing the storage size may result in longer cold start times for your functions.
- Best Practices: Use this storage primarily for temporary and disposable data, such as: caching results from external APIs or storing intermediate data.
- For long-term storage, consider using a dedicated database or file storage service.

## Troubleshooting

### Error: EROFS: read-only file system

```
Error writing file: [Error: EROFS: read-only file system, open 'file.txt'] { errno: -30, code: 'EROFS', syscall: 'open', path: 'file.txt' }
```

This error occurs when attempting to write to a directory outside of `/tmp`. Ensure that you are writing to the correct path to avoid this error.

## Support

If you have any questions or need help, please reach out to us on [Discord](https://discord.com/invite/uc9H5YKjXv).

