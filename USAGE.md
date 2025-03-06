<!-- Start SDK Example Usage [usage] -->
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