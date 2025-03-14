# Image
(*version1.image*)

## Overview

Generate images using SDXL 1.0 or SD1.6.

### Available Operations

* [generateFromText](#generatefromtext) - Text-to-image
* [generateFromImageWithText](#generatefromimagewithtext) - Image-to-image with prompt
* [generateFromImageWithTextAndMask](#generatefromimagewithtextandmask) - Image-to-image with a mask

## generateFromText

Generate an image from a text prompt. 
### Using SDXL 1.0
Use `stable-diffusion-xl-1024-v1-0` as the `engine_id` of your request and pass in `height` & `width` as one of the following combinations:
- 1024x1024 (default)
- 1152x896
- 896x1152
- 1216x832
- 1344x768
- 768x1344
- 1536x640
- 640x1536 

### SDXL 1.0 Pricing
When specifying 30 steps or fewer, generation costs 0.9 credits.

When specifying above 30 steps, generation cost is determined using the following formula:

 `cost = 0.9 * (steps / 30)`

### Using SD 1.6
SD1.6 is a flexible-resolution base model allowing you to generate non-standard aspect ratios. The model is optimized for a resolution of 512 x 512 pixels. To generate 1 megapixel outputs, we recommend using SDXL 1.0, which is available at the same price.

Pass in `stable-diffusion-v1-6` as the `engine_id` of your request and ensure the `height` & `width` you pass in adhere to the following restrictions:
- No dimension can be less than 320 pixels
- No dimension can be greater than 1536 pixels
- Height and width must be specified in increments of 64
- The default resolution is 512 x 512


### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { StabilityAIClientCore } from "stabilityai-client-typescript/core.js";
import { version1ImageGenerateFromText } from "stabilityai-client-typescript/funcs/version1ImageGenerateFromText.js";

// Use `StabilityAIClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stabilityAIClient = new StabilityAIClientCore({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const res = await version1ImageGenerateFromText(stabilityAIClient, {
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
| `request`                                                                                                                                                                      | [operations.GenerateFromTextRequest](../../models/operations/generatefromtextrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateFromTextResponse](../../models/operations/generatefromtextresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrorT      | 400, 401, 403, 404 | application/json   |
| errors.ErrorT      | 500                | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |

## generateFromImageWithText

Produce an image from an existing image using a text prompt. 
### How to control strength of generation
To preserve only roughly 35% of the initial image, pass in either `init_image_mode=IMAGE_STRENGTH` and `image_strength=0.35` or `init_image_mode=STEP_SCHEDULE` and `step_schedule_start=0.65`.  Both of these are equivalent, however `init_image_mode=STEP_SCHEDULE` also lets you pass in `step_schedule_end`, which can provide an extra level of control for those who need it.  For more details, see the specific fields below.  

> NOTE: Only **Version 1** engines will work with this endpoint.

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { StabilityAIClient } from "stabilityai-client-typescript";

const stabilityAIClient = new StabilityAIClient({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const result = await stabilityAIClient.version1.image.generateFromImageWithText({
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

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { StabilityAIClientCore } from "stabilityai-client-typescript/core.js";
import { version1ImageGenerateFromImageWithText } from "stabilityai-client-typescript/funcs/version1ImageGenerateFromImageWithText.js";

// Use `StabilityAIClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stabilityAIClient = new StabilityAIClientCore({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const res = await version1ImageGenerateFromImageWithText(stabilityAIClient, {
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
| `request`                                                                                                                                                                      | [operations.GenerateFromImageWithTextRequest](../../models/operations/generatefromimagewithtextrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateFromImageWithTextResponse](../../models/operations/generatefromimagewithtextresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrorT      | 400, 401, 403, 404 | application/json   |
| errors.ErrorT      | 500                | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |

## generateFromImageWithTextAndMask

Selectively modify portions of an image using a mask. The `mask` must be the same shape and size as the init image. This endpoint also supports `image` parameters with alpha channels.  See below for more details. 

> NOTE: Only **Version 1** engines will work with this endpoint.

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { StabilityAIClient } from "stabilityai-client-typescript";

const stabilityAIClient = new StabilityAIClient({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const result = await stabilityAIClient.version1.image.generateFromImageWithTextAndMask({
    engineId: "stable-diffusion-xl-1024-v1-0",
    organization: "org-123456",
    stabilityClientID: "my-great-plugin",
    stabilityClientVersion: "1.2.1",
    maskingRequestBody: {
      initImage: await openAsBlob("example.file"),
      maskSource: "MASK_IMAGE_BLACK",
      textPrompts: [
        {
          text: "A lighthouse on a cliff",
          weight: 0.8167237,
        },
        {
          text: "A lighthouse on a cliff",
          weight: 0.8167237,
        },
      ],
      maskImage: await openAsBlob("example.file"),
      sampler: "K_DPM_2_ANCESTRAL",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { StabilityAIClientCore } from "stabilityai-client-typescript/core.js";
import { version1ImageGenerateFromImageWithTextAndMask } from "stabilityai-client-typescript/funcs/version1ImageGenerateFromImageWithTextAndMask.js";

// Use `StabilityAIClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stabilityAIClient = new StabilityAIClientCore({
  stabilityApiKey: process.env["STABILITYAICLIENT_STABILITY_API_KEY"] ?? "",
});

async function run() {
  const res = await version1ImageGenerateFromImageWithTextAndMask(stabilityAIClient, {
    engineId: "stable-diffusion-xl-1024-v1-0",
    organization: "org-123456",
    stabilityClientID: "my-great-plugin",
    stabilityClientVersion: "1.2.1",
    maskingRequestBody: {
      initImage: await openAsBlob("example.file"),
      maskSource: "MASK_IMAGE_BLACK",
      textPrompts: [
        {
          text: "A lighthouse on a cliff",
          weight: 0.8167237,
        },
        {
          text: "A lighthouse on a cliff",
          weight: 0.8167237,
        },
      ],
      maskImage: await openAsBlob("example.file"),
      sampler: "K_DPM_2_ANCESTRAL",
    },
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
| `request`                                                                                                                                                                      | [operations.GenerateFromImageWithTextAndMaskRequest](../../models/operations/generatefromimagewithtextandmaskrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateFromImageWithTextAndMaskResponse](../../models/operations/generatefromimagewithtextandmaskresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ErrorT      | 400, 401, 403, 404 | application/json   |
| errors.ErrorT      | 500                | application/json   |
| errors.APIError    | 4XX, 5XX           | \*/\*              |