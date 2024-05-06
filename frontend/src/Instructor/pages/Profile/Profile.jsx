import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Profile.css';

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
  });

  const onSubmit = (values) => {
    console.log(values);
    console.log(selectedFile);
  };

  const onFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className='profile-container'>
      <h1>Profile</h1>
      <img src={selectedFile} alt="Profile" className="profile-picture" />
      <input type="file" onChange={onFileChange} />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <label htmlFor='name'>Name</label>
          <Field id='name' name='name' type='text' />
          <ErrorMessage name='name' />

          <label htmlFor='email'>Email</label>
          <Field id='email' name='email' type='email' />
          <ErrorMessage name='email' />

          <label htmlFor='password'>Password</label>
          <Field id='password' name='password' type='password' />
          <ErrorMessage name='password' />

          <button type='submit'>Save Changes</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Profile;