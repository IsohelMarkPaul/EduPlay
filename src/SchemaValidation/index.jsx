import * as yup from 'yup';

export const studentSchema = yup.object().shape({
    username: yup.string().required("Required"),
    password: yup.string().required("Required"),
});

export const TeacherSchema = yup.object().shape({
    TeacherUsername: yup.string().required("Required"),
    TeacherPassword: yup.string().required("Required"),
});

export const TeacherSignUpSchema = yup.object().shape({
    fname: yup.string().required("Required"),
    lname: yup.string().required("Required"),
    email: yup.string().required("Required"),
    password: yup.string().required("Required"),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

