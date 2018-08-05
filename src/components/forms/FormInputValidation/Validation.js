export const Required = (value) => (value? undefined : 'Required');

export const EmailAddress = (value) => (
    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(value)
        ? undefined
        : 'Invalid email address'
);

export const Slug = (value) => (
    /^[A-Z0-9]+(?:-[A-Z0-9]+)*$/.test(value)
        ? undefined
        : 'Must contain uppercase-alphanumeric character!'
);

export const ConfirmPassword = (value, {password}) => (
    value === password ? undefined : 'Confirmed password does not match'
);

export const Password = (value) => (
    (value.length >= 6 && value.length <=255)? undefined : 'The password must be between 6 and 255 characters.'
);