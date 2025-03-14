/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { version1ImageGenerateFromImageWithText } from "../../funcs/version1ImageGenerateFromImageWithText.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GenerateFromImageWithTextRequest$inboundSchema,
};

export const tool$version1ImageGenerateFromImageWithText: ToolDefinition<
  typeof args
> = {
  name: "version1-image_generate-from-image-with-text",
  description: `Image-to-image with prompt

Produce an image from an existing image using a text prompt. 
### How to control strength of generation
To preserve only roughly 35% of the initial image, pass in either \`init_image_mode=IMAGE_STRENGTH\` and \`image_strength=0.35\` or \`init_image_mode=STEP_SCHEDULE\` and \`step_schedule_start=0.65\`.  Both of these are equivalent, however \`init_image_mode=STEP_SCHEDULE\` also lets you pass in \`step_schedule_end\`, which can provide an extra level of control for those who need it.  For more details, see the specific fields below.  

> NOTE: Only **Version 1** engines will work with this endpoint.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await version1ImageGenerateFromImageWithText(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
