# GenerateFromImageWithTextResponseBody

An array of results from the generation request, where each image is a base64 encoded PNG.

## Example Usage

```typescript
import { GenerateFromImageWithTextResponseBody } from "stabilityai-client-typescript/models/operations";

let value: GenerateFromImageWithTextResponseBody = {
  artifacts: [
    {},
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `artifacts`                                            | [components.Image](../../models/components/image.md)[] | :heavy_minus_sign:                                     | N/A                                                    |