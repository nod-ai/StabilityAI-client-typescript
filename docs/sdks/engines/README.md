# Engines
(*version1.engines*)

## Overview

Enumerate engines that work with 'Version 1' REST API endpoints.

### Available Operations

* [fetchList](#fetchlist) - List engines

## fetchList

List all engines available to your organization/user

### Example Usage

```typescript
import { StabilityAIClient } from "stabilityai-client-typescript";

const stabilityAIClient = new StabilityAIClient({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const result = await stabilityAIClient.version1.engines.fetchList({
    organization: "org-123456",
    stabilityClientID: "my-great-plugin",
    stabilityClientVersion: "1.2.1",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StabilityAIClientCore } from "stabilityai-client-typescript/core.js";
import { version1EnginesFetchList } from "stabilityai-client-typescript/funcs/version1EnginesFetchList.js";

// Use `StabilityAIClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stabilityAIClient = new StabilityAIClientCore({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const res = await version1EnginesFetchList(stabilityAIClient, {
    organization: "org-123456",
    stabilityClientID: "my-great-plugin",
    stabilityClientVersion: "1.2.1",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FetchListRequest](../../models/operations/fetchlistrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Engine[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |