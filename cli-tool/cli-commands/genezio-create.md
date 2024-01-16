# genezio create

### Usage

#### Fullstack

`genezio create fullstack <backend-template> <frontend-template> [--name <project-name>] [--region <project-region>] [--structure <structure>] [--logLevel <log-level>] [-h | --help]`

#### Backend

`genezio create backend <template> [--name <project-name>] [--region <project-region>] [--logLevel <log-level>] [-h | --help]`

#### Frontend

`genezio create frontend <template> [--name <projectName>] [--region <projectRegion>] [--logLevel <log-level>] [-h | --help]`

#### List templates

`genezio create templates [filter] [--logLevel <log-level>] [-h | --help]`

### Description

Bootstrap a new project starting from a template designed by our team for your necessities. The command presents four subcommands: `fullstack`, `backend`, `frontend` and `templates`.

With the `fullstack` subcommand, effortlessly craft a project housing both backend and frontend components. Tailor the project's name, region, and structure to your liking. Opt for `monorepo` to consolidate both frontend and backend within the same Git repository, or choose `multirepo` for separate repositories dedicated to each.

The `backend` and `frontend` subcommands offer a more focused approach, allowing you to create projects for either the backend or frontend exclusively.

The `templates` subcommand lists the available templates that can be used with the previous subcommands. If the `filter` argument is supplied, only templates that contain the filter string will be shown.

### Options

`--name <project-name>`: Name of the project

{% hint style="info" %}
This option is available only when used with the `fullstack`, `backend` or `frontend` subcommand.
{% endhint %}

* Default: `genezio-project`

`--region <project-region>`: Region of the project

{% hint style="info" %}
This option is available only when used with the `fullstack`, `backend` or `frontend` subcommand.
{% endhint %}

* Default: `us-east-1`
* Choices: `us-east-1`, `us-east-2`, `us-west-1`, `us-west-2`, `ap-south-1`, `ap-northeast-3`, `ap-northeast-2`, `ap-southeast-1`, `ap-southeast-2`, `ap-northeast-1`, `ca-central-1`, `eu-central-1`, `eu-west-1`, `eu-west-2`, `eu-west-3`, `eu-north-1`, `sa-east-1`

`--structure <strucuture>`: The layout of the fullstack project

{% hint style="info" %}
This option is available only when used with the `fullstack` subcommand.
{% endhint %}

* Default: `monorepo`
* Choices: `monorepo`, `multirepo`

`--logLevel <log-level>`: Set the verbosity of the output.

* Default: `info`
* Choices: `trace`, `debug`, `info`, `warn`, `error`

`-h | --help`: Display a help message for more information on each argument and how to use it.
