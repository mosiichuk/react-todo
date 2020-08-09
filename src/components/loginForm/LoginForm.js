import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, FormGroup, FormHelperText, Box } from '@material-ui/core';
import UserService from '../../services/UserService';
import { withRouter } from 'react-router-dom';

const initialValues = {
    email: "",
    password: "",
};

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    password: Yup.string()
        .required("Required"),
});

const userService = new UserService();

const LoginForm = ({history, changeLoggedIn}) => {
    
    return (
        <>
            <h1>Login form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, {setSubmitting}) => { 
                    await userService.loginUser(values);
                    setSubmitting(true);
                    changeLoggedIn(true);
                    history.push('/');
                }}
            >
                {({ values, errors, isSubmitting, isValidating, touched}) => (
                    <Form>
                        <Box mb={2}>
                            <FormGroup>
                                <Field
                                    as={TextField}
                                    name="email"
                                    type="email"
                                    label="Email"
                                    error={touched.email && !!errors.email}
                                />
                                <ErrorMessage component={FormHelperText} name="email" error/>
                            </FormGroup>

                            <FormGroup>
                                <Field
                                    as={TextField}
                                    name="password"
                                    type="password"
                                    label="Password"
                                    error={touched.password && !!errors.password}
                                />
                                <ErrorMessage component={FormHelperText} name="password" error/>
                            </FormGroup>
                        </Box>

                        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting || isValidating}>
                            Submit
                        </Button>
                        {/* <pre>{JSON.stringify(values, null, 4)}</pre>
                        <pre>{JSON.stringify(errors, null, 4)}</pre> */}
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default withRouter(LoginForm);