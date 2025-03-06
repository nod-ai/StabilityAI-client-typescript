# User
(*version1.user*)

## Overview

Manage your Stability account, and view account/organization balances.

### Available Operations

* [fetchAccount](#fetchaccount) - Account details
* [fetchBalance](#fetchbalance) - Account balance

## fetchAccount

Get information about the account associated with the provided API key

### Example Usage

```typescript
import { StabilityAIClient } from "stabilityai-client-typescript";

const stabilityAIClient = new StabilityAIClient({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const result = await stabilityAIClient.version1.user.fetchAccount();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StabilityAIClientCore } from "stabilityai-client-typescript/core.js";
import { version1UserFetchAccount } from "stabilityai-client-typescript/funcs/version1UserFetchAccount.js";

// Use `StabilityAIClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stabilityAIClient = new StabilityAIClientCore({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const res = await version1UserFetchAccount(stabilityAIClient);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AccountResponseBody](../../models/components/accountresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## fetchBalance

Get the credit balance of the account/organization associated with the API key

### Example Usage

```typescript
import { StabilityAIClient } from "stabilityai-client-typescript";

const stabilityAIClient = new StabilityAIClient({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const result = await stabilityAIClient.version1.user.fetchBalance({
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
import { version1UserFetchBalance } from "stabilityai-client-typescript/funcs/version1UserFetchBalance.js";

// Use `StabilityAIClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stabilityAIClient = new StabilityAIClientCore({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const res = await version1UserFetchBalance(stabilityAIClient, {
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
| `request`                                                                                                                                                                      | [operations.FetchBalanceRequest](../../models/operations/fetchbalancerequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BalanceResponseBody](../../models/components/balanceresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |