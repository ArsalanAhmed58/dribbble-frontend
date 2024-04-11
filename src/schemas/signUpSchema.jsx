import * as yup from 'yup';

const signUpSchema = yup.object({
  name: yup.string().required('name is required'),
  username: yup.string().required('username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export default signUpSchema;
