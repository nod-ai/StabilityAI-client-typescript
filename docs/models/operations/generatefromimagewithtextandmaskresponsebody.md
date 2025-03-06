# GenerateFromImageWithTextAndMaskResponseBody

An array of results from the generation request, where each image is a base64 encoded PNG.

## Example Usage

```typescript
import { GenerateFromImageWithTextAndMaskResponseBody } from "stabilityai-client-typescript/models/operations";

let value: GenerateFromImageWithTextAndMaskResponseBody = {
  artifacts: [
    {},
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `artifacts`                                            | [components.Image](../../models/components/image.md)[] | :heavy_minus_sign:                                     | N/A                                                    |