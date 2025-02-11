const mongoose = require('mongoose')

const bdeFormSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    university: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    whatsappNumber: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    maritalStatus: {
        type: String,
        required: true,
        enum: ['married', 'unmarried']
    },
    temporaryAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    referenceNumber: {
        type: String,
        default: null
    },
    modeOfEducation: {
        type: String,
        required: true,
        enum: ['offline', 'online']
    },
    selectedCourse: {
        type: String,
        required: true,
        enum: ['MERN Full Stack', 'MEAN Full Stack', 'JAVA Full Stack', 'UI/UX Design', 'PHP Full Stack', 'DOT NET Full Stack', 'Python/Django Development', 'DevOps']
    },
    courseDuration: {
        type: String,
        required: true,
        enum: ['6 Months', '3 Months']
    },
    interestInPlacementReference: {
        type: String,
        required: true,
        enum: ['Yes', 'No']
    },
    needPcFromCompany: {
        type: String,
        required: true,
        enum: ['Yes', 'No']
    },
    tShirtSize: {
        type: String,
        required: true,
        enum: ['S', 'M', 'L', 'XL', 'XXL', '3XL']
    },
    batchTimeSlot: {
        type: String,
        required: true,
        enum: ['morning', 'afternoon']
    },
})

const BDE_DATA = mongoose.model('bdeFormData', bdeFormSchema)

module.exports = BDE_DATA