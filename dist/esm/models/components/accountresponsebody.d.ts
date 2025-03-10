import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { OrganizationMembership, OrganizationMembership$Outbound } from "./organizationmembership.js";
export type AccountResponseBody = {
    /**
     * The user's email
     */
    email: string;
    /**
     * The user's ID
     */
    id: string;
    /**
     * The user's organizations
     */
    organizations: Array<OrganizationMembership>;
    /**
     * The user's profile picture
     */
    profilePicture?: string | undefined;
};
/** @internal */
export declare const AccountResponseBody$inboundSchema: z.ZodType<AccountResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountResponseBody$Outbound = {
    email: string;
    id: string;
    organizations: Array<OrganizationMembership$Outbound>;
    profile_picture?: string | undefined;
};
/** @internal */
export declare const AccountResponseBody$outboundSchema: z.ZodType<AccountResponseBody$Outbound, z.ZodTypeDef, AccountResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountResponseBody$ {
    /** @deprecated use `AccountResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountResponseBody$Outbound, z.ZodTypeDef, AccountResponseBody>;
    /** @deprecated use `AccountResponseBody$Outbound` instead. */
    type Outbound = AccountResponseBody$Outbound;
}
export declare function accountResponseBodyToJSON(accountResponseBody: AccountResponseBody): string;
export declare function accountResponseBodyFromJSON(jsonString: string): SafeParseResult<AccountResponseBody, SDKValidationError>;
//# sourceMappingURL=accountresponsebody.d.ts.map