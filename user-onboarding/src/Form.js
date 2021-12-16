
import React from 'react'


export default function Form(props) {
    const {values, submit, change, disabled, errors} = props

    const onSubmit = evt  => {
        evt.preventDefault()
        submit()
    }
    
    const onChange = evt => {
        const { name, value, checked, type} = evt.target
        const valueToUse = type === 'checkout' ? checked : value
        change(name, valueToUse)
    }
return (
<form onSubmit= {onSubmit} className='form-input'>
    <label>Username
    <div className='username'>
        <input 
        name='username'
        type='text'
        value= {values.username} 
        onChange= {onChange}
        />
        </div>
        <div>{errors.username}</div>
    </label>
    <label>Email
        <div className='email'>
        <input 
        name='email'
        type='email'
        value= {values.email}
        onChange= {onChange}
        />
        <div>{errors.email}</div>
        </div>
    </label>
    <label>Password
    <div className='password'>
        <input 
        name='password'
        type='password'
        value= {values.password}
        onChange= {onChange}
        />
        <div>{errors.password}</div>
        </div>
    </label>
    <label>Terms of Service
        <input 
        name='TermsOfService'
        type='checkbox'
        checked= {values.TermsOfService}
        onChange= {onChange}
        />
        <div>{errors.TermsOfService}</div>
    </label>
    <div className='button'>
    <button disabled={disabled}>Sign up!</button>
    </div>
</form>
)
}