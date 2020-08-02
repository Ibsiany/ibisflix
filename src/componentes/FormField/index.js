import React from 'react';

function FormField({label, textarea, type, name, value, onChange}){
    return(
        <div>
        <label>
          {label}:  
          <input
            type = {textarea}
            type={type}
            value={value}
            name={name}
            onChange= {onChange}
          /> 
        </label>
        </div>
    )
}

export default FormField;