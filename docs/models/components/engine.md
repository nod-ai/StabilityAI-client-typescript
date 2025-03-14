# Engine

## Example Usage

```typescript
import { Engine } from "stabilityai-client-typescript/models/components";

let value: Engine = {
  description: "ideal afterwards successfully how gee gadzooks insert",
  id: "stable-diffusion-v1-6",
  name: "Stable Diffusion XL v1.0",
  type: "PICTURE",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `description`                                      | *string*                                           | :heavy_check_mark:                                 | N/A                                                |                                                    |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | Unique identifier for the engine                   | stable-diffusion-v1-6                              |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Name of the engine                                 | Stable Diffusion XL v1.0                           |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_check_mark:                                 | The type of content this engine produces           | PICTURE                                            |