import React from 'react';
import { FormField, FormSelect, FormRadioGroup, FormTextarea, FormFileUpload, FormButton } from '../componentPage/FormComponents';

const AdmissionPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="md:text-[3rem] max-w-4xl mx-auto px-4 py-8 md:px-6 lg:px-8">
            <h1 className="text-[10rem] font-semibold text-center mb-8">Online Registration Form for Admission</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <FormSelect
                    label="Grade for which admission is sought"
                    id="grade"
                    options={[
                        { value: 'Grade 1', label: 'Grade 1' },
                        // Add other grade options as needed
                    ]}
                    required
                />
                <FormField
                    label="Name of the student"
                    id="student-name"
                    placeholder="Name of the student"
                    required
                />
                <FormField
                    label="Date of birth (as per Birth Certificate)"
                    id="dob"
                    type="date"
                    required
                />
                <FormRadioGroup
                    name="sex"
                    options={[
                        { value: 'Male', label: 'Male' },
                        { value: 'Female', label: 'Female' },
                        { value: 'Others', label: 'Others' },
                    ]}
                    required
                />
                <FormField
                    label="Nationality"
                    id="nationality"
                    placeholder="Nationality"
                    required
                />
                <FormField
                    label="Religion"
                    id="religion"
                    placeholder="Religion"
                    required
                />
                <FormField
                    label="Caste"
                    id="caste"
                    placeholder="Caste"
                    required
                />
                <FormSelect
                    label="Community"
                    id="community"
                    options={[
                        { value: 'OC', label: 'OC' },
                        { value: 'BC', label: 'BC' },
                        { value: 'MBC', label: 'MBC' },
                        { value: 'SC', label: 'SC' },
                        { value: 'ST', label: 'ST' },
                    ]}
                    required
                />
                <h2 className="text-2xl md:text-[2rem] font-semibold mb-4">Father's Details</h2>
                <FormField
                    label="Father’s Name"
                    id="father-name"
                    placeholder="Father’s Name"
                    required
                />
                <FormField
                    label="Educational Qualification"
                    id="father-qualification"
                    placeholder="Educational Qualification"
                    required
                />
                <FormField
                    label="Mobile Number"
                    id="father-mobile"
                    type="tel"
                    placeholder="Mobile Number"
                    required
                />
                <FormField
                    label="Occupation"
                    id="father-occupation"
                    placeholder="Occupation"
                    required
                />
                <FormField
                    label="Annual Income"
                    id="father-income"
                    placeholder="Annual Income"
                    required
                />
                <h2 className="text-2xl md:text-[2rem] font-semibold mb-4">Mother's Details</h2>
                <FormField
                    label="Mother’s Name"
                    id="mother-name"
                    placeholder="Mother’s Name"
                    required
                />
                <FormField
                    label="Educational Qualification"
                    id="mother-qualification"
                    placeholder="Educational Qualification"
                    required
                />
                <FormField
                    label="Mobile Number"
                    id="mother-mobile"
                    type="tel"
                    placeholder="Mobile Number"
                    required
                />
                <FormField
                    label="Occupation"
                    id="mother-occupation"
                    placeholder="Occupation"
                    required
                />
                <FormField
                    label="Annual Income"
                    id="mother-income"
                    placeholder="Annual Income"
                    required
                />
                <FormField
                    label="Name of the current school"
                    id="current-school"
                    placeholder="Name of the current school"
                    required
                />
                <FormSelect
                    label="Board of Education"
                    id="board"
                    options={[
                        { value: 'CBSE', label: 'CBSE' },
                        { value: 'ICSE', label: 'ICSE' },
                        { value: 'State Board', label: 'State Board' },
                    ]}
                    required
                />
                <FormField
                    label="Email id for communication"
                    id="email"
                    type="email"
                    placeholder="Email id for communication"
                    required
                />
                <FormTextarea
                    label="Residential address for communication"
                    id="address"
                    placeholder="Residential address for communication"
                    required
                />
                <FormRadioGroup
                    name="siblings"
                    options={[
                        { value: 'Yes', label: 'Yes' },
                        { value: 'No', label: 'No' },
                    ]}
                    required
                />
                <FormFileUpload
                    label="Upload recent passport photograph of the student"
                    id="photo"
                    accept="image/png, image/jpeg, application/pdf"
                />
                <FormField
                    label="Please enter the code you see in the image"
                    id="captcha"
                    placeholder="Enter code"
                    required
                />
                <FormButton text="Submit" />
            </form>
        </div>
    );
};

export default AdmissionPage;
