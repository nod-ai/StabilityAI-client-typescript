# AccountResponseBody

## Example Usage

```typescript
import { AccountResponseBody } from "stabilityai-client-typescript/models/components";

let value: AccountResponseBody = {
  email: "example@stability.ai",
  id: "user-1234",
  organizations: [
    {
      id: "org-5678",
      isDefault: true,
      name: "Another Organization",
      role: "MEMBER",
    },
    {
      id: "org-1234",
      isDefault: false,
      name: "My Organization",
      role: "MEMBER",
    },
  ],
  profilePicture: "https://api.stability.ai/example.png",
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            | Example                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                                                                                | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The user's email                                                                                                                                                                       | example@stability.ai                                                                                                                                                                   |
| `id`                                                                                                                                                                                   | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The user's ID                                                                                                                                                                          | user-1234                                                                                                                                                                              |
| `organizations`                                                                                                                                                                        | [components.OrganizationMembership](../../models/components/organizationmembership.md)[]                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The user's organizations                                                                                                                                                               | [<br/>{<br/>"id": "org-5678",<br/>"name": "Another Organization",<br/>"role": "MEMBER",<br/>"is_default": true<br/>},<br/>{<br/>"id": "org-1234",<br/>"name": "My Organization",<br/>"role": "MEMBER",<br/>"is_default": false<br/>}<br/>] |
| `profilePicture`                                                                                                                                                                       | *string*                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                     | The user's profile picture                                                                                                                                                             | https://api.stability.ai/example.png                                                                                                                                                   |