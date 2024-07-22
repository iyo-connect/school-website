import React from 'react';

export const FormField = ({ label, id, type = 'text', placeholder, required = false, ...rest }) => (
    <div>
        <label htmlFor={id}>{label} {required && '*'}</label>
        <input
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            className="w-full md:text-[3rem]"
            required={required}
            {...rest}
        />
    </div>
);

export const FormSelect = ({ label, id, options, required = false }) => (
    <div>
        <label htmlFor={id}>{label} {required && '*'}</label>
        <select id={id} name={id} className="w-full" required={required}>
            <option value="">Select {label}</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
);

export const FormRadioGroup = ({ name, options, required = false }) => (
    <div>
        <label>{name} {required && '*'}</label>
        <div>
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        id={option.value}
                        name={name}
                        value={option.value}
                        required={required}
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                </div>
            ))}
        </div>
    </div>
);

export const FormTextarea = ({ label, id, placeholder, required = false }) => (
    <div>
        <label htmlFor={id}>{label} {required && '*'}</label>
        <textarea
            id={id}
            name={id}
            placeholder={placeholder}
            rows="4"
            className="w-full"
            required={required}
        ></textarea>
    </div>
);

export const FormFileUpload = ({ label, id, accept }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input
            type="file"
            id={id}
            name={id}
            accept={accept}
            className="w-full"
        />
    </div>
);

export const FormButton = ({ text }) => (
    <div className="text-center">
        <button
            type="submit"
            className="py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
            {text}
        </button>
    </div>
);
