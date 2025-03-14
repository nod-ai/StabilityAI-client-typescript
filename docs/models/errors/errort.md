# ErrorT

bad_request: one or more parameters were invalid.

## Example Usage

```typescript
import { ErrorT } from "stabilityai-client-typescript/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | A unique identifier for this particular occurrence of the problem.       | 296a972f-666a-44a1-a3df-c9c28a1f56c0                                     |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The short-name of this class of errors e.g. `bad_request`.               | bad_request                                                              |
| `message`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | A human-readable explanation specific to this occurrence of the problem. | Header parameter Authorization is required, but not found                |