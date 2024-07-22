import React from 'react';

const AdmissionPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 lg:text-[1.5rem] md:text-[3rem]">
            <h1 className="lg:text-[1.5rem] md:text-[4rem] font-semibold text-center mb-8">Online registration form for admission</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="grade">Grade for which admission is sought *</label>
                    <select
                        id="grade"
                        name="grade"
                        className="w-full"
                        required
                    >
                        <option value="">Select Grade</option>
                        <option value="Grade 1">Grade 1</option>
                        {/* Add other grade options as needed */}
                    </select>
                </div>
                <div>
                    <label htmlFor="student-name">Name of the student *</label>
                    <input
                        type="text"
                        id="student-name"
                        name="student-name"
                        placeholder="Name of the student"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dob">Date of birth (as per Birth Certificate) *</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label>Sex *</label>
                    <div>
                        <input type="radio" id="male" name="sex" value="Male" required />
                        <label htmlFor="male">Male</label>

                        <input type="radio" id="female" name="sex" value="Female" />
                        <label htmlFor="female">Female</label>

                        <input type="radio" id="others" name="sex" value="Others" />
                        <label htmlFor="others">Others</label>
                    </div>
                </div>
                <div>
                    <label htmlFor="nationality">Nationality *</label>
                    <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        placeholder="Nationality"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="religion">Religion *</label>
                    <input
                        type="text"
                        id="religion"
                        name="religion"
                        placeholder="Religion"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="caste">Caste *</label>
                    <input
                        type="text"
                        id="caste"
                        name="caste"
                        placeholder="Caste"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="community">Community *</label>
                    <select
                        id="community"
                        name="community"
                        className="w-full"
                        required
                    >
                        <option value="">Select Community</option>
                        <option value="OC">OC</option>
                        <option value="BC">BC</option>
                        <option value="MBC">MBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                    </select>
                </div>
                <h2>Father's Details</h2>
                <div>
                    <label htmlFor="father-name">Father’s Name *</label>
                    <input
                        type="text"
                        id="father-name"
                        name="father-name"
                        placeholder="Father’s Name"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="father-qualification">Educational Qualification *</label>
                    <input
                        type="text"
                        id="father-qualification"
                        name="father-qualification"
                        placeholder="Educational Qualification"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="father-mobile">Mobile Number *</label>
                    <input
                        type="tel"
                        id="father-mobile"
                        name="father-mobile"
                        placeholder="Mobile Number"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="father-occupation">Occupation *</label>
                    <input
                        type="text"
                        id="father-occupation"
                        name="father-occupation"
                        placeholder="Occupation"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="father-income">Annual Income *</label>
                    <input
                        type="text"
                        id="father-income"
                        name="father-income"
                        placeholder="Annual Income"
                        className="w-full"
                        required
                    />
                </div>
                <h2>Mother's Details</h2>
                <div>
                    <label htmlFor="mother-name">Mother’s Name *</label>
                    <input
                        type="text"
                        id="mother-name"
                        name="mother-name"
                        placeholder="Mother’s Name"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mother-qualification">Educational Qualification *</label>
                    <input
                        type="text"
                        id="mother-qualification"
                        name="mother-qualification"
                        placeholder="Educational Qualification"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mother-mobile">Mobile Number *</label>
                    <input
                        type="tel"
                        id="mother-mobile"
                        name="mother-mobile"
                        placeholder="Mobile Number"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mother-occupation">Occupation *</label>
                    <input
                        type="text"
                        id="mother-occupation"
                        name="mother-occupation"
                        placeholder="Occupation"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mother-income">Annual Income *</label>
                    <input
                        type="text"
                        id="mother-income"
                        name="mother-income"
                        placeholder="Annual Income"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="current-school">Name of the current school *</label>
                    <input
                        type="text"
                        id="current-school"
                        name="current-school"
                        placeholder="Name of the current school"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="board">Board of Education *</label>
                    <select
                        id="board"
                        name="board"
                        className="w-full"
                        required
                    >
                        <option value="">Select Board</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                        <option value="State Board">State Board</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="email">Email id for communication *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email id for communication"
                        className="w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address">Residential address for communication *</label>
                    <textarea
                        id="address"
                        name="address"
                        placeholder="Residential address for communication"
                        rows="4"
                        className="w-full"
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Details about siblings studying in this school *</label>
                    <div>
                        <input type="radio" id="siblings-yes" name="siblings" value="Yes" required />
                        <label htmlFor="siblings-yes">Yes</label>

                        <input type="radio" id="siblings-no" name="siblings" value="No" />
                        <label htmlFor="siblings-no">No</label>
                    </div>
                </div>
                <div>
                    <label>Upload recent passport photograph of the student</label>
                    <input
                        type="file"
                        id="photo"
                        name="photo"
                        accept="image/png, image/jpeg, application/pdf"
                        className="w-full"
                    />
                </div>
                <div>
                    <label>Please enter the code you see in the image: *</label>
                    <input
                        type="text"
                        id="captcha"
                        name="captcha"
                        placeholder="Enter code"
                        className="w-full"
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdmissionPage;
