import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
        if(!errorMessage) {
            // the spread operator ensures we have access to formState as a whole while also singling out each attribute's
            // value.
            // [e.target.name] refers to the name attribute in the preceeding JSX, meaning when the name, email or message
            // changes, we'll update the target (by its attribute name) with its new value
            setFormState({...formState, [e.target.name]: e.target.value});
        }
        console.log('errorMessage:', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    console.log(formState);
    return (
        <section>
            <h1>Contact Me</h1> 
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' name='email' onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' row5='5' onBlur={handleChange}/>
                </div>
                {/* this is short circuit syntax: if error message, display errorMessage in a p element */}
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p> 
                    </div>
                )}
                <button type='submit'>submit</button> 
            </form>
        </section>

    )
}

export default Contact;