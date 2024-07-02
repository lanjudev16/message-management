import { z } from 'zod';


const nameValidateSchema = z.object({
    firstName: z.string({ required_error: "First name is required", invalid_type_error: "This type of data is not supported for first name" }),
    middleName: z.string({ invalid_type_error: "This type of data is not supported for middle name" }).optional(),
    lastName: z.string({ required_error: "Last name is required", invalid_type_error: "This type of data is not supported for last name" })
});

const gardianValidateSchema = z.object({
    fatherName: z.string({ required_error: "Father name is required", invalid_type_error: "This type of data is not supported for father name" }),
    fatherOccupation: z.string({ required_error: "Father occupation is required", invalid_type_error: "This type of data is not supported for father occupation" }),
    fatherContactNumber: z.string({ required_error: "Father contact number is required", invalid_type_error: "This type of data is not supported for father contact number" }),
    matherName: z.string({ required_error: "Mother name is required", invalid_type_error: "This type of data is not supported for mother name" }),
    matherOccupation: z.string({ required_error: "Mother occupation is required", invalid_type_error: "This type of data is not supported for mother occupation" }),
    matherNumber: z.string({ required_error: "Mother contact number is required", invalid_type_error: "This type of data is not supported for mother contact number" })
});

const localGurdianValidateSchema = z.object({
    name: z.string({ required_error: "Name is required", invalid_type_error: "This type of data is not supported for name" }),
    occupation: z.string({ required_error: "Occupation is required", invalid_type_error: "This type of data is not supported for occupation" }),
    contactNumber: z.string({ required_error: "Contact number is required", invalid_type_error: "This type of data is not supported for contact number" }),
    address: z.string({ required_error: "Address is required", invalid_type_error: "This type of data is not supported for address" })
});

export const borderValidateSchema = z.object({
    body: z.object({
        border: z.object({
            name: nameValidateSchema,
            gender: z.enum(['male', 'female'], { required_error: "Gender is required", invalid_type_error: "Invalid gender" }),
            dateOfBirth: z.string({ invalid_type_error: "This type of data is not supported for date of birth" }).optional(),
            email: z.string({ required_error: "Email is required", invalid_type_error: "Invalid email format" }).email(),
            avatar: z.string({ invalid_type_error: "This type of data is not supported for avatar" }).optional(),
            contactNumber: z.string({ required_error: "Contact number is required", invalid_type_error: "This type of data is not supported for contact number" }),
            emergencyContactNumber: z.string({ required_error: "Emergency contact number is required", invalid_type_error: "This type of data is not supported for emergency contact number" }),
            bloodGroup: z.enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'], { invalid_type_error: "Invalid blood group" }),
            presentAddress: z.string({ required_error: "Present address is required", invalid_type_error: "This type of data is not supported for present address" }),
            permanentAddress: z.string({ required_error: "Permanent address is required", invalid_type_error: "This type of data is not supported for permanent address" }),
            gardian: gardianValidateSchema,
            localGurdian: localGurdianValidateSchema,
            profileImage: z.string({ invalid_type_error: "This type of data is not supported for profile image" }).optional(),
            isActive: z.enum(['active', 'inactive'], { invalid_type_error: "Invalid status" })
        })
    })
});

