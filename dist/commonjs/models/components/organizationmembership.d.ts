import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type OrganizationMembership = {
    id: string;
    isDefault: boolean;
    name: string;
    role: string;
};
/** @internal */
export declare const OrganizationMembership$inboundSchema: z.ZodType<OrganizationMembership, z.ZodTypeDef, unknown>;
/** @internal */
export type OrganizationMembership$Outbound = {
    id: string;
    is_default: boolean;
    name: string;
    role: string;
};
/** @internal */
export declare const OrganizationMembership$outboundSchema: z.ZodType<OrganizationMembership$Outbound, z.ZodTypeDef, OrganizationMembership>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrganizationMembership$ {
    /** @deprecated use `OrganizationMembership$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrganizationMembership, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrganizationMembership$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrganizationMembership$Outbound, z.ZodTypeDef, OrganizationMembership>;
    /** @deprecated use `OrganizationMembership$Outbound` instead. */
    type Outbound = OrganizationMembership$Outbound;
}
export declare function organizationMembershipToJSON(organizationMembership: OrganizationMembership): string;
export declare function organizationMembershipFromJSON(jsonString: string): SafeParseResult<OrganizationMembership, SDKValidationError>;
//# sourceMappingURL=organizationmembership.d.ts.map