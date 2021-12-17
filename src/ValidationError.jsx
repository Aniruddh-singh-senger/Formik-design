import { ErrorMessage } from 'formik';
import React from 'react';


const ValidationError = ({name}) => {
    return (
        <div style={{color:'red'}}>
            
            <ErrorMessage name={name}/>
        </div>
    )
}

export default ValidationError;
