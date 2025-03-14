# TextPrompt

Text prompt for image generation

## Example Usage

```typescript
import { TextPrompt } from "stabilityai-client-typescript/models/components";

let value: TextPrompt = {
  text: "A lighthouse on a cliff",
  weight: 0.8167237,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `text`                                                           | *string*                                                         | :heavy_check_mark:                                               | The prompt itself                                                | A lighthouse on a cliff                                          |
| `weight`                                                         | *number*                                                         | :heavy_minus_sign:                                               | Weight of the prompt (use negative numbers for negative prompts) | 0.8167237                                                        |