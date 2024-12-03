---
sidebar_position: 11
description: Learn how to analyze your current directory's infrastructure setup with the genezio analyze command.
---

# genezio analyze

<head>
  <title>genezio analyze CLI Command | Genezio Documentation</title>
</head>

### Usage

`genezio analyze [--config <config>] [--format <format>] [-h | --help]`

### Description

This command analyzes the current directory to determine its infrastructure setup. It generates a `genezio.yaml` file based on the detected configuration. This file helps in managing and deploying your project using Genezio's serverless platform.

If a specific configuration file is provided using the `--config` option, the command will update the detected setup accordingly.

### Options

`--config <config>`: Use a specific `genezio.yaml` file to update the detected setup. The default value is `./genezio.yaml`.

`--format <format>`: Specify the output format of the analysis results. Supported values are:
 - `json`: Outputs the analysis results in JSON format. This format is typically used programmatically to process or integrate the detected infrastructure details with other tools or systems.
 - `list`: Produces a plain list of the detected infrastructure components. Like `json`, this format is commonly used programmatically or for quick inspection in scripts.
 - `markdown`: Generates the results as a Markdown document. This format is ideal for creating a documentation page that describe the detected infrastructure in a human-readable manner.
 - `text` (default): Provides a plain text summary of the analysis results.

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.
