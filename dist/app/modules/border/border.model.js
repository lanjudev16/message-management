"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const nameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true
    }
});
const gardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
        required: true
    },
    fatherOccupation: {
        type: String,
        required: true
    },
    fatherContactNumber: {
        type: String,
        required: true
    },
    matherName: {
        type: String,
        required: true
    },
    matherOccupation: {
        type: String,
        required: true
    },
    matherNumber: {
        type: String,
        required: true
    }
});
const localGurdianSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});
const borderSchema = new mongoose_1.Schema({
    name: {
        type: nameSchema,
        required: true
    },
    id: {
        type: String,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "User is required"],
        ref: "userModel"
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female'],
            message: `{VALUE} is not valid`
        },
        required: [true, 'Gender is required']
    },
    dateOfBirth: {
        type: String,
        required: [false, "Date of birth is not required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    avatar: {
        type: String,
        required: [false, "Avatar is required"]
    },
    contactNumber: {
        type: String,
        required: [true, "Contact is required"]
    },
    emergencyContactNumber: {
        type: String,
        required: [true, "Emmergency is required"]
    },
    bloodGroup: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    gardian: {
        type: gardianSchema,
        required: true
    },
    localGurdian: {
        type: localGurdianSchema,
        required: true
    },
    profileImage: {
        type: String,
        required: false
    },
    isActive: ['active', 'inactive'],
});
// borderSchema.pre('save', async function (next) {
//     const border = this
//     border.password = await bcrypt.hash(border.password, Number(config.salt_round))
//     next()
// })
// borderSchema.post('save', async function (doc, next) {
//     doc.password = "",
//         next()
// })
const BorderModel = (0, mongoose_1.model)('BorderModel', borderSchema);
exports.default = BorderModel;
