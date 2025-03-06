# InitImageMode

Whether to use `image_strength` or `step_schedule_*` to control how much influence the `init_image` has on the result.

## Example Usage

```typescript
import { InitImageMode } from "stabilityai-client-typescript/models/components";

let value: InitImageMode = "STEP_SCHEDULE";
```

## Values

```typescript
"IMAGE_STRENGTH" | "STEP_SCHEDULE"
```