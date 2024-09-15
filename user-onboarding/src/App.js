import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import User from './User';
import schema from './formSchema';


const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  TermsOfService: false
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
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
  axios.get('https://reqres.in/api/users/')
  .then(res => {
    console.log(res.data.data);
    setUsers(res.data.data)
  })
  .catch(err => {
    console.error(err)
  })

}

const postUsers = newUser => {
  axios.post('https://reqres.in/api/users/', newUser)
  .then(res => {
    console.log('postUser', newUser)
    setUsers([ res.data, ...users])
  })
  .catch(err => {console.error(err)
  })
  .finally(() => setFormValues(initialFormValues))
}

const validate = (name,value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ''}))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  
}

const inputChange = (name, value) => {
  validate (name,value);
  setFormValues({
     ...formValues, 
     [name]: value
    })
}

const formSubmit = () => {
  const newUser = {
    first_name: formValues.first_name.trim(),
    last_name: formValues.last_name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    TermsOfService: formValues.TermsOfService,
  
  }
  postUsers(newUser)
  console.log('newUSer', newUser)
}
useEffect(()=> {
  getUsers();
},[])

useEffect(()=> {
  schema.isValid(formValues)
  .then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Onboarding</h1>
        
        <div>
      <Form
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
            details ={user}
            />
          )
        })}


      </div>
      </header>
    </div>
  );
}


