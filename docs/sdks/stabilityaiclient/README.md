# StabilityAIClient SDK

## Overview

StabilityAI REST API: Welcome to the Stability Platform API. As of March 2024, we are building the REST v2beta API service to be the primary API service for the Stability Platform. 
All AI services on other APIs (gRPC, REST v1, RESTv2alpha) will continue to be maintained, however they will not receive
new features or parameters.

If you are a REST v2alpha user, we strongly recommend that you adjust the URL calls for the specific services that you are using over to the equivalent REST v2beta URL. Normally, this means simply replacing "v2alpha" with "v2beta". We are not deprecating v2alpha URLs at this time for users that are currently using them.

#### Authentication

You will need your [Stability API key](https://platform.stability.ai/account/keys) in order to make requests to this API.
Make sure you never share your API key with anyone, and you never commit it to a public repository. Include this key in 
the `Authorization` header of your requests.

#### Rate limiting

This API is rate-limited to 150 requests every 10 seconds. If you exceed this limit, you will receive a `429` response
and be timed out for 60 seconds. If you find this limit too restrictive, please reach out to us via [this form](https://stabilityplatform.freshdesk.com/support/home).

#### Support

Please see our [FAQ](https://platform.stability.ai/faq) for answers to common questions. If you have any other questions or concerns,
please reach out to us via [this form](https://stabilityplatform.freshdesk.com/support/tickets/new).

To see the health of our APIs, please check our [Status Page](https://stabilityai.instatus.com/).

### Available Operations
