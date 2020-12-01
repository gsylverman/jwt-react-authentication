import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { registerAction } from '../../store/actions';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email')
  .required('Required'),
  password: Yup.string()
  .min(6, 'Too Short!')
  .required('Required')
});

const Register = (props) => {
  const dispatch = useDispatch();
  const error = useSelector(state=>state.login.error);
  const auth = useSelector(state=>state.login.token);
  useEffect(() => {
    console.log(auth)
    if(auth){
      props.history.push('/')
    }
  }, [auth, props.history])
  return (
    <Formik 
      initialValues={{email: "", password: ""}}
      onSubmit={(values, { setSubmitting, resetForm })=>{
        dispatch(registerAction({ email: values.email, password: values.password }))
        setTimeout(() => {
          resetForm();
          setSubmitting(false);
        }, 3000)
      }}
      validationSchema={SignupSchema}
    >
      {({values, handleSubmit, handleBlur, handleChange, errors, touched, isSubmitting }) => (
          <div className="row">
          <div className="col-3" />
          <div className='col-6'>
            <h2>Register:</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onBlur={handleBlur}
                />
                <small id="emailHelp" className="form-text text-muted">{ errors.email && touched.email && errors.email }</small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onBlur={handleBlur}
                />
                <small id="emailHelp" className="form-text text-muted">{ errors.password && touched.password && errors.password }</small>
              </div>
                <div>{error && error}</div>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;