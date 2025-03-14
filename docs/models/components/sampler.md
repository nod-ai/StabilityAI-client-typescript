# Sampler

Which sampler to use for the diffusion process. If this value is omitted we'll automatically select an appropriate sampler for you.

## Example Usage

```typescript
import { Sampler } from "stabilityai-client-typescript/models/components";

let value: Sampler = "K_DPM_2_ANCESTRAL";
```

## Values

```typescript
"DDIM" | "DDPM" | "K_DPMPP_2M" | "K_DPMPP_2S_ANCESTRAL" | "K_DPM_2" | "K_DPM_2_ANCESTRAL" | "K_EULER" | "K_EULER_ANCESTRAL" | "K_HEUN" | "K_LMS"
```