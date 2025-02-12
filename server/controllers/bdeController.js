const BDE_DATA = require("../models/bdeFormModel");

// POST - Post BDE Form Data
async function registerBdeFormData(req, res) {
  const {
    firstName,
    middleName,
    lastName,
    university,
    college,
    city,
    mobileNumber,
    whatsappNumber,
    dateOfBirth,
    email,
    bloodGroup,
    education,
    maritalStatus,
    temporaryAddress,
    permanentAddress,
    referenceNumber,
    modeOfEducation,
    selectedCourse,
    courseDuration,
    interestInPlacementReference,
    needPcFromCompany,
    tShirtSize,
    batchTimeSlot,
  } = req.body;

  if (
    !firstName ||
    !middleName ||
    !lastName ||
    !university ||
    !college ||
    !city ||
    !mobileNumber ||
    !whatsappNumber ||
    !dateOfBirth ||
    !email ||
    !bloodGroup ||
    !education ||
    !maritalStatus ||
    !temporaryAddress ||
    !permanentAddress ||
    !modeOfEducation ||
    !selectedCourse ||
    !courseDuration ||
    !interestInPlacementReference ||
    !needPcFromCompany ||
    !tShirtSize ||
    !batchTimeSlot
  ) {
    return res.status(401).json({ message: "All fields are required" });
  }

  if (!firstName) {
    return res.status(401).json({ message: "First Name is required" });
  }
  if (!middleName) {
    return res.status(401).json({ message: "Middle Name is required" });
  }
  if (!lastName) {
    return res.status(401).json({ message: "Last Name is required" });
  }
  if (!university) {
    return res.status(401).json({ message: "is required" });
  }
  if (!college) {
    return res.status(401).json({ message: "is required" });
  }
  if (!city) {
    return res.status(401).json({ message: "is required" });
  }
  if (!mobileNumber) {
    return res.status(401).json({ message: "is required" });
  }
  if (!whatsappNumber) {
    return res.status(401).json({ message: "is required" });
  }
  if (!dateOfBirth) {
    return res.status(401).json({ message: "is required" });
  }
  if (!email) {
    return res.status(401).json({ message: "is required" });
  }
  if (!bloodGroup) {
    return res.status(401).json({ message: "is required" });
  }
  if (!education) {
    return res.status(401).json({ message: "is required" });
  }
  if (!maritalStatus) {
    return res.status(401).json({ message: "is required" });
  }
  if (!temporaryAddress) {
    return res.status(401).json({ message: "is required" });
  }
  if (!permanentAddress) {
    return res.status(401).json({ message: "is required" });
  }
  // if (!referenceNumber) {
  //     return res.status(401).json({ message: 'is required' });
  // }
  if (!modeOfEducation) {
    return res.status(401).json({ message: "is required" });
  }
  if (!selectedCourse) {
    return res.status(401).json({ message: "is required" });
  }
  if (!courseDuration) {
    return res.status(401).json({ message: "is required" });
  }
  if (!interestInPlacementReference) {
    return res.status(401).json({ message: "is required" });
  }
  if (!needPcFromCompany) {
    return res.status(401).json({ message: "is required" });
  }
  if (!tShirtSize) {
    return res.status(401).json({ message: "is required" });
  }
  if (!batchTimeSlot) {
    return res.status(401).json({ message: "is required" });
  }

  try {
    const newStudent = await BDE_DATA.create({
      firstName,
      middleName,
      lastName,
      university,
      college,
      city,
      mobileNumber,
      whatsappNumber,
      dateOfBirth,
      email,
      bloodGroup,
      education,
      maritalStatus,
      temporaryAddress,
      permanentAddress,
      referenceNumber,
      modeOfEducation,
      selectedCourse,
      courseDuration,
      interestInPlacementReference,
      needPcFromCompany,
      tShirtSize,
      batchTimeSlot,
    });

    if (!newStudent)
      return res
        .status(401)
        .json({ message: "Something went wrong", error: error.message });

    res.status(201).json({ message: "New Student Registered Successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({
        message: "Error while registering the student",
        error: error.message,
      });
  }
}

// GET - Get Student Data from BDE collection
async function fetchStudentData(req, res) {
    try {
        const studentData = await BDE_DATA.find({})
        if (studentData.length === 0) return res.status(400).json({ message: 'No data found' })
        res.status(200).json({ studentData })
    } catch (error) {
        console.log(error)
        res.status(400).json({  message: 'Something went wrong', error: error.message })
    }
}

module.exports = {
    registerBdeFormData,
    fetchStudentData
}