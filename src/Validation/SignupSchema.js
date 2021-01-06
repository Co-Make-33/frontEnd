import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string().required('Please use a valid email'),
  username: yup
    .string()
    .required('Please enter a user name')
    .min(3, 'User name must be at least 3 characters long'),
  password: yup
    .string()
    .required('Please enter a password')
    .matches(
      /(^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])?)/,
      'Password must use at least one uppercase letter and '
    )
    .min(4, 'Password must be at least 4 characters long')
});
