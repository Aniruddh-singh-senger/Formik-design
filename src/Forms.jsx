import React from "react";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as yup from 'yup';
import ValidationError from "./ValidationError";

const Forms = () => {

  const [entry, setEntry] = useState("");
  


  const Validate = yup.object({
    name: yup.string().required("Name is Required!"),
    phone: yup.number().min(100000000, "Not a valid Number!").max(9999999999, "Not more than 10 Digit").required("Phone is Required!"),
    password: yup.string().matches(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/, "Must contain 8 character one letter ,one uppercase,one lowercase, one number").required("Password is compulsory!"),
    gender: yup.string().required("Gender is Required!"),
    date: yup.date().required("Date is Required!"),
    income: yup.string().required("Income is Required!"),
  });

  return (
    <>
      <h1 style={{ marginLeft:'30px',color:'#2A62B7' }}>Formik </h1>
      <div >
        <div  className="matter">
          <Formik
            validationSchema={Validate}
            initialValues={{
              name: "",
              phone: "",
              password: "",
              gender: "",
              date: "",
              income: "",
            }}

            onSubmit={(values,{resetForm}) => { setEntry(values); resetForm({values:""}) }} >

            { (formik)  => (
              <Form >
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <div className="uses">
                <label><h6>Name </h6></label><br />
                <Field style={{width:'700px'}} {...formik.getFieldProps("name")} placeholder="Enter your name" name="name" type="text" />
                <ValidationError name="name" /><br />

                <label><h6>Phone </h6></label><br />
                <Field style={{width:'700px'}} className="form-control" placeholder="Enter your number" name="phone" type="number" />
                <ValidationError name="phone" /> <br /><br />

                <label > <h6>Password</h6></label><br />
                <Field style={{width:'700px'}} className="form-control" placeholder="Enter your password" name="password" type="password" />
                <br />  <ValidationError name="password" /> 
                </div>
                <div className="User" >
                <label> <h6>Gender</h6> </label>
                <br /> 
                <label> <p>Male:</p> </label>
                <Field name="gender" value="male" type="radio" />
                <label><p>Female: </p> </label>
                <Field  name="gender" value="female" type="radio" />
                 <ValidationError name="gender" />  <br />

                <label> <h6>Date</h6> </label><br />
                <Field className="form-control" style={{width:'500px'}} name="date" type="date" />
                <br />  <ValidationError name="date" /> <br />

                <label><h6>Income </h6> </label><br />
                <Field  name="income" as="select">
                  <option  value="0">Select</option>
                  <option value="1000">Rs 1000</option>
                  <option value="10000">Rs 10000</option>
                </Field>
                <br /> <ValidationError name="income" />  <br />
                </div>
                </div>
                <button  type="submit">Submit</button>
              </Form>
            )}
            
          </Formik>
        </div>
        <div  className="Extra">
          <h6> Name: </h6>
          <p> {entry.name}</p>
          
          <h6> phone:</h6>
          <p> {entry.phone}</p>
          
          <h6>Password:</h6>
          <p>{entry.password}</p>
          
          <h6>Gender:</h6>
          <p>{entry.gender}</p>
          
          <h6>Date:</h6>
          <p>{entry.date}</p>
          
          <h6> Income:</h6>
          <p>{entry.income}</p>
        </div>
      </div>

    </>
  );
};

export default Forms;