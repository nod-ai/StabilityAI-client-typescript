# Image

## Example Usage

```typescript
import { Image } from "stabilityai-client-typescript/models/components";

let value: Image = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `base64`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Image encoded in base64                                            |                                                                    |
| `finishReason`                                                     | [components.FinishReason](../../models/components/finishreason.md) | :heavy_minus_sign:                                                 | N/A                                                                | CONTENT_FILTERED                                                   |
| `seed`                                                             | *number*                                                           | :heavy_minus_sign:                                                 | The seed associated with this image                                | 1229191277                                                         |