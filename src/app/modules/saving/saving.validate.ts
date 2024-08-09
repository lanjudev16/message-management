import { z } from "zod";

export const savingValidateSchema = z.object({
    ammount:z.number({ invalid_type_error: "ammount is not this type give me string type", required_error: "password is required" }),
    user:z.string()
})