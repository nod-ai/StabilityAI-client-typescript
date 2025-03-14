# stabilityai-client-typescript

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *stabilityai-client-typescript* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=stabilityai-client-typescript&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/amd/stabilityai-client-typescript). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

StabilityAI REST API: Welcome to the Stability Platform API. As of March 2024, we are building the REST v2beta API service to be the primary API service for the Stability Platform. 
All AI services on other APIs (gRPC, REST v1, RESTv2alpha) will continue to be maintained, however they will not receive
new features or parameters.

If you are a REST v2alpha user, we strongly recommend that you adjust the URL calls for the specific services that you are using over to the equivalent REST v2beta URL. Normally, this means simply replacing "v2alpha" with "v2beta". We are not deprecating v2alpha URLs at this time for users that are currently using them.

#### Authentication

You will need your [Stability API key](https://platform.stability.ai/account/keys) in order to make requests to this API.
Make sure you never share your API key with anyone, and you never commit it to a public repository. Include this key in 
the `Authorization` header of your requests.

#### Rate limiting

This API is rate-limited to 150 requests every 10 seconds. If you exceed this limit, you will receive a `429` response
and be timed out for 60 seconds. If you find this limit too restrictive, please reach out to us via [this form](https://stabilityplatform.freshdesk.com/support/home).

#### Support

Please see our [FAQ](https://platform.stability.ai/faq) for answers to common questions. If you have any other questions or concerns,
please reach out to us via [this form](https://stabilityplatform.freshdesk.com/support/tickets/new).

To see the health of our APIs, please check our [Status Page](https://stabilityai.instatus.com/).
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [stabilityai-client-typescript](#stabilityai-client-typescript)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "StabilityAIClient": {
      "command": "npx",
      "args": [
        "-y", "--package", "stabilityai-client-typescript",
        "--",
        "mcp", "start",
        "--stability-api-key", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Go to `Cursor Settings > Features > MCP Servers > Add new MCP server` and use the following settings:

- Name: StabilityAIClient
- Type: `command`
- Command:
```sh
npx -y --package stabilityai-client-typescript -- mcp start --stability-api-key ... 
```

</details>

For a full list of server arguments, run:

```sh
npx -y --package stabilityai-client-typescript -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { StabilityAIClient } from "stabilityai-client-typescript";

const stabilityAIClient = new StabilityAIClient({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const result = await stabilityAIClient.version1.image.generateFromText({
    engineId: "stable-diffusion-v1-6",
    organization: "org-123456",
    stabilityClientID: "my-great-plugin",
    stabilityClientVersion: "1.2.1",
    textToImageRequestBody: {
      textPrompts: [
        {
          text: "A lighthouse on a cliff",
          weight: 1,
        },
      ],
      sampler: "K_DPM_2_ANCESTRAL",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name              | Type   | Scheme  | Environment Variable                  |
| ----------------- | ------ | ------- | ------------------------------------- |
| `stabilityApiKey` | apiKey | API key | `STABILITYAICLIENT_STABILITY_API_KEY` |

To authenticate with the API the `stabilityApiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { StabilityAIClient } from "stabilityai-client-typescript";

const stabilityAIClient = new StabilityAIClient({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const result = await stabilityAIClient.version1.image.generateFromText({
    engineId: "stable-diffusion-v1-6",
    organization: "org-123456",
    stabilityClientID: "my-great-plugin",
    stabilityClientVersion: "1.2.1",
    textToImageRequestBody: {
      textPrompts: [
        {
          text: "A lighthouse on a cliff",
          weight: 1,
        },
      ],
      sampler: "K_DPM_2_ANCESTRAL",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [version1](docs/sdks/version1/README.md)


#### [version1.engines](docs/sdks/engines/README.md)

* [fetchList](docs/sdks/engines/README.md#fetchlist) - List engines

#### [version1.image](docs/sdks/image/README.md)

* [generateFromText](docs/sdks/image/README.md#generatefromtext) - Text-to-image
* [generateFromImageWithText](docs/sdks/image/README.md#generatefromimagewithtext) - Image-to-image with prompt
* [generateFromImageWithTextAndMask](docs/sdks/image/README.md#generatefromimagewithtextandmask) - Image-to-image with a mask

#### [version1.user](docs/sdks/user/README.md)

* [fetchAccount](docs/sdks/user/README.md#fetchaccount) - Account details
* [fetchBalance](docs/sdks/user/README.md#fetchbalance) - Account balance

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`version1EnginesFetchList`](docs/sdks/engines/README.md#fetchlist) - List engines
- [`version1ImageGenerateFromImageWithText`](docs/sdks/image/README.md#generatefromimagewithtext) - Image-to-image with prompt
- [`version1ImageGenerateFromImageWithTextAndMask`](docs/sdks/image/README.md#generatefromimagewithtextandmask) - Image-to-image with a mask
- [`version1ImageGenerateFromText`](docs/sdks/image/README.md#generatefromtext) - Text-to-image
- [`version1UserFetchAccount`](docs/sdks/user/README.md#fetchaccount) - Account details
- [`version1UserFetchBalance`](docs/sdks/user/README.md#fetchbalance) - Account balance

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { openAsBlob } from "node:fs";
import { StabilityAIClient } from "stabilityai-client-typescript";

const stabilityAIClient = new StabilityAIClient({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const result = await stabilityAIClient.version1.image
    .generateFromImageWithText({
      engineId: "stable-diffusion-v1-6",
      organization: "org-123456",
      stabilityClientID: "my-great-plugin",
      stabilityClientVersion: "1.2.1",
      imageToImageRequestBody: {
        initImage: await openAsBlob("example.file"),
        textPrompts: [
          {
            text: "A lighthouse on a cliff",
            weight: 0.8167237,
          },
        ],
        sampler: "K_DPM_2_ANCESTRAL",
      },
    });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { StabilityAIClient } from "stabilityai-client-typescript";

const stabilityAIClient = new StabilityAIClient({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const result = await stabilityAIClient.version1.image.generateFromText({
    engineId: "stable-diffusion-v1-6",
    organization: "org-123456",
    stabilityClientID: "my-great-plugin",
    stabilityClientVersion: "1.2.1",
    textToImageRequestBody: {
      textPrompts: [
        {
          text: "A lighthouse on a cliff",
          weight: 1,
        },
      ],
      sampler: "K_DPM_2_ANCESTRAL",
    },
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { StabilityAIClient } from "stabilityai-client-typescript";

const stabilityAIClient = new StabilityAIClient({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const result = await stabilityAIClient.version1.image.generateFromText({
    engineId: "stable-diffusion-v1-6",
    organization: "org-123456",
    stabilityClientID: "my-great-plugin",
    stabilityClientVersion: "1.2.1",
    textToImageRequestBody: {
      textPrompts: [
        {
          text: "A lighthouse on a cliff",
          weight: 1,
        },
      ],
      sampler: "K_DPM_2_ANCESTRAL",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `generateFromText` method may throw the following errors:

| Error Type      | Status Code        | Content Type     |
| --------------- | ------------------ | ---------------- |
| errors.ErrorT   | 400, 401, 403, 404 | application/json |
| errors.ErrorT   | 500                | application/json |
| errors.APIError | 4XX, 5XX           | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { StabilityAIClient } from "stabilityai-client-typescript";
import {
  ErrorT,
  SDKValidationError,
} from "stabilityai-client-typescript/models/errors";

const stabilityAIClient = new StabilityAIClient({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await stabilityAIClient.version1.image.generateFromText({
      engineId: "stable-diffusion-v1-6",
      organization: "org-123456",
      stabilityClientID: "my-great-plugin",
      stabilityClientVersion: "1.2.1",
      textToImageRequestBody: {
        textPrompts: [
          {
            text: "A lighthouse on a cliff",
            weight: 1,
          },
        ],
        sampler: "K_DPM_2_ANCESTRAL",
      },
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorT): {
        // Handle err.data$: ErrorTData
        console.error(err);
        return;
      }
      case (err instanceof ErrorT): {
        // Handle err.data$: ErrorTData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { StabilityAIClient } from "stabilityai-client-typescript";

const stabilityAIClient = new StabilityAIClient({
  serverURL: "https://api.stability.ai",
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const result = await stabilityAIClient.version1.image.generateFromText({
    engineId: "stable-diffusion-v1-6",
    organization: "org-123456",
    stabilityClientID: "my-great-plugin",
    stabilityClientVersion: "1.2.1",
    textToImageRequestBody: {
      textPrompts: [
        {
          text: "A lighthouse on a cliff",
          weight: 1,
        },
      ],
      sampler: "K_DPM_2_ANCESTRAL",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { StabilityAIClient } from "stabilityai-client-typescript";
import { HTTPClient } from "stabilityai-client-typescript/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new StabilityAIClient({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { StabilityAIClient } from "stabilityai-client-typescript";

const sdk = new StabilityAIClient({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `STABILITYAICLIENT_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=stabilityai-client-typescript&utm_campaign=typescript)
