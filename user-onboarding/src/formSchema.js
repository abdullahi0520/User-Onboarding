import * as yup from 'yup';


const formSchema = yup.object().shape({
    first_name: yup
    .string()
    .trim()
    .required('First Name is required '),
    last_name: yup
    .string()
    .trim()
    .required('Last Name is required '),
    email: yup
    .string()
    .trim()
    .required('Email is invalid '),
    
    password: yup
    .string()
    .required('Password is required')
    .min(3,'Password Must be at least 3 character'),
    TermsOfService: yup
    .boolean()
    .oneOf([true], 'Please Accept Terms of Service')
    
    

})

export default formSchema;