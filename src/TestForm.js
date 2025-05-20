import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function TestForm() {
  const [state, handleSubmit] = useForm("xblobapj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className='heading'>

    
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='type your message here ...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
export default TestForm;