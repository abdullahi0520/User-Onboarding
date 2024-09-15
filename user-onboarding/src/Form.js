
import React from 'react'



export default function Form(props) {
    const {values, submit, change, disabled, errors} = props
   
    const onSubmit = evt  => {
        evt.preventDefault()
        submit()
    }
    
    const onChange = evt => {
        const { name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
        // if (valueToUse !=== ''  )
    }
return (
<form onSubmit= {onSubmit} className='form-input'>
        <div className='button'>
            <button id='sumbitBtn' disabled={disabled}>Sign up!</button>
        </div>

    <div className='errorsDiv'>
    <div>{errors.first_name}</div>
    <div>{errors.last_name}</div>
    <div>{errors.email}</div>
    <div>{errors.password}</div>
    <div>{errors.TermsOfService}</div>
    </div>

    <div className='form-group inputs'>
      <div>
    <label>First Name
        <input 
            name='first_name'
            type='text'
            value= {values.first_name} 
            onChange= {onChange}
        />
    </label>
    </div>
    <div>
    <label>Last Name
        <input 
            name='last_name'
            type='text'
            value= {values.last_name} 
            onChange= {onChange}
        />
    </label>
    </div>
    <div>
    <label>Email
        <input 
            name='email'
            type='email'
            value= {values.email}
            onChange= {onChange}
        />  
    </label>
    </div>
    <div>
    <label>Password
        <input 
            name='password'
            type='password'
            value= {values.password}
            onChange= {onChange}
        /> 
    </label>
    <div>
    <label>Terms of Service
        <input 
            name='TermsOfService'
            type='checkbox'
            checked= {values.TermsOfService}
            onChange= {onChange}
        />   
    </label>
    </div>
    </div>
   </div>
</form>
)
}