import * as Yup from 'yup';

export const validationShemasSignIn = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const validationShemasEmail = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
});

export const validationShemaUser = Yup.object({
  name: Yup.string('Enter your name').required('Name is required'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  goal: Yup.string('Enter your goal').matches(
    /(lose fat|maintain|gain muscle)/
  ),
  gender: Yup.string('Enter your gender').matches(/(male|female)/),
  age: Yup.number('Enter your age')
    .required('Age is required')
    .positive('Age must be a positive')
    .integer('Age must be an integer')
    .max(90, 'Enter correct age')
    .min(18, 'Enter age over 18 years old'),
  height: Yup.number('Enter your height')
    .required('Height is required')
    .positive('Height must be a positive')
    .integer('Height must be an integer')
    .max(250, 'Enter correct height')
    .min(120, 'Enter correct height'),
  weight: Yup.number('Enter your weight')
    .required('Weight is required')
    .positive('Weight must be a positive')
    .integer('Weight must be an integer')
    .max(250, 'Enter correct weight')
    .min(20, 'Enter correct weight'),
  activity: Yup.string('Enter your activity').matches(
    /(1.2|1.375|1.55|1.725|1.9)/
  ),
});
