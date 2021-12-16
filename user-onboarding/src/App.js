import logo from './logo.svg';
import './App.css';
import UserForm from './Form';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './formSchema';
import User from './User';


const initialFormValues = {
  username: '',
  email: '',
  password: '',
  TermsOfService: false
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',

}

const initialDisabled = true
const initialUsers = []


export default function App() {
const [users, setUsers] = useState(initialUsers);
const [formValues,setFormValues]= useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setDisabled]= useState(initialDisabled);

const getUsers = () => {
  axios.get('https://reqres.in/api/users')
  .then(res => {
    console.log(res)
    setUsers(res.data)
  }).catch(err => console.error(err))

}

const postUsers = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    console.log(res.data);
    setUsers([ res.data, ...users])
  })
  .catch(err => console.err(err))
  .finally(()=> setFormValues(initialFormValues))
}

const validate = (name,value) => {
  yup.reach(formSchema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ''}))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  
}

const inputChange = (name, value) => {
  validate (name,value);
  setFormValues({ ...formValues, [name]: value})
}

const formSubmit = () => {
  const newUser = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    TermsOfService: !!formValues.TermsOfService,
    
  }
  postUsers(newUser)
}
// useEffect(()=> {
//   getUsers()
// },[])

useEffect(()=> {
  formSchema.isValid(formValues)
  .then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Onboarding</h1>
        
        <div>
      <UserForm
        values= {formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors= {formErrors}
      />
      {
        users.map(user => {
          return (
            <User 
            key = {user.id}
            details={user}
            />
          )
        })}


      </div>
      </header>
    </div>
  );
}


