"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borderValidateSchema = void 0;
const zod_1 = require("zod");
const nameValidateSchema = zod_1.z.object({
    firstName: zod_1.z.string({ required_error: "First name is required", invalid_type_error: "This type of data is not supported for first name" }),
    middleName: zod_1.z.string({ invalid_type_error: "This type of data is not supported for middle name" }).optional(),
    lastName: zod_1.z.string({ required_error: "Last name is required", invalid_type_error: "This type of data is not supported for last name" })
});
const gardianValidateSchema = zod_1.z.object({
    fatherName: zod_1.z.string({ required_error: "Father name is required", invalid_type_error: "This type of data is not supported for father name" }),
    fatherOccupation: zod_1.z.string({ required_error: "Father occupation is required", invalid_type_error: "This type of data is not supported for father occupation" }),
    fatherContactNumber: zod_1.z.string({ required_error: "Father contact number is required", invalid_type_error: "This type of data is not supported for father contact number" }),
    matherName: zod_1.z.string({ required_error: "Mother name is required", invalid_type_error: "This type of data is not supported for mother name" }),
    matherOccupation: zod_1.z.string({ required_error: "Mother occupation is required", invalid_type_error: "This type of data is not supported for mother occupation" }),
    matherNumber: zod_1.z.string({ required_error: "Mother contact number is required", invalid_type_error: "This type of data is not supported for mother contact number" })
});
const localGurdianValidateSchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: "Name is required", invalid_type_error: "This type of data is not supported for name" }),
    occupation: zod_1.z.string({ required_error: "Occupation is required", invalid_type_error: "This type of data is not supported for occupation" }),
    contactNumber: zod_1.z.string({ required_error: "Contact number is required", invalid_type_error: "This type of data is not supported for contact number" }),
    address: zod_1.z.string({ required_error: "Address is required", invalid_type_error: "This type of data is not supported for address" })
});
exports.borderValidateSchema = zod_1.z.object({
    body: zod_1.z.object({
        border: zod_1.z.object({
            name: nameValidateSchema,
            gender: zod_1.z.enum(['male', 'female'], { required_error: "Gender is required", invalid_type_error: "Invalid gender" }),
            dateOfBirth: zod_1.z.string({ invalid_type_error: "This type of data is not supported for date of birth" }).optional(),
            email: zod_1.z.string({ required_error: "Email is required", invalid_type_error: "Invalid email format" }).email(),
            avatar: zod_1.z.string({ invalid_type_error: "This type of data is not supported for avatar" }).optional(),
            contactNumber: zod_1.z.string({ required_error: "Contact number is required", invalid_type_error: "This type of data is not supported for contact number" }),
            emergencyContactNumber: zod_1.z.string({ required_error: "Emergency contact number is required", invalid_type_error: "This type of data is not supported for emergency contact number" }),
            bloodGroup: zod_1.z.enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'], { invalid_type_error: "Invalid blood group" }),
            presentAddress: zod_1.z.string({ required_error: "Present address is required", invalid_type_error: "This type of data is not supported for present address" }),
            permanentAddress: zod_1.z.string({ required_error: "Permanent address is required", invalid_type_error: "This type of data is not supported for permanent address" }),
            gardian: gardianValidateSchema,
            localGurdian: localGurdianValidateSchema,
            profileImage: zod_1.z.string({ invalid_type_error: "This type of data is not supported for profile image" }).optional(),
            isActive: zod_1.z.enum(['active', 'inactive'], { invalid_type_error: "Invalid status" })
        })
    })
});
