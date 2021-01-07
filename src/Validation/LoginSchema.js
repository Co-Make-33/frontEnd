import * as yup from 'yup';

const LoginSchema = yup.object().shape({

    username: yup
        .string()
        .required('*Use A Valid Username*')
        .min(3,'*Username Must Be At Least 3 Characters Long*'),
    password: yup
        .string()
        .required('Use A Valid Password')
        .min(4,'Password Needs To Be At Least 4 Characters')
})

export default LoginSchema;