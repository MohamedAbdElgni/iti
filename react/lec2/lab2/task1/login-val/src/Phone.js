import { Button } from 'bootstrap'
import React from 'react'

function Phone() {
    const [phone, setPhone] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const handleChange = (e) => {
        setPhone(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors(validate(phone));
    }

    const validate = (phone) => {
        let errors = {};
        if (!phone) {
            errors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Phone is invalid";
        }
        return errors;
    }

    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="phone">Phone</label>
            <input
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter your phone"
                onChange={handleChange}
                
            />
            
            <button variant="contained" disabled={isSubmitting} type="submit">
                Login
            </button>
        </form>
        </div>
  )
}

export default Phone