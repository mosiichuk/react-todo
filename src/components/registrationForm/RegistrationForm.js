import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, FormGroup, FormHelperText, Box } from '@material-ui/core';
import UserService from '../../services/UserService';
import { withRouter } from 'react-router-dom';

const userService = new UserService();

const initialValues = {
    name: "",
    email: "",
    password: "",
    acceptedTerms: false,
};

const validationSchema = Yup.object({
    name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    email: Yup.string()
        .email("Invalid email addresss")
        .required("Required"),
    acceptedTerms: Yup.boolean()
        .required("Required")
        .oneOf([true], "You must accept the terms and conditions."),
    password: Yup.string()
        .min(8, "Password should contain at least 8 characters")
        .required("Required"),
    repeatPassword: Yup.string()
        .min(8, "Password should contain at least 8 characters")
        .required("Required")
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value;
        }),
});

const RegistrationForm = ({changeLoggedIn, history}) => {
    return (
        <>
            <h1>Registration form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={ async (values, {setSubmitting}) => {
                    await userService.registerUser(values);
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
                                    name="name"
                                    label="First Name"
                                    error={touched.name && !!errors.name}
                                />
                                <ErrorMessage component={FormHelperText} name="name" error/>
                            </FormGroup>

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

                            <FormGroup>
                                <Field
                                    as={TextField}
                                    name="repeatPassword"
                                    type="password"
                                    label="Repeat Password"
                                    error={touched.repeatPassword && !!errors.repeatPassword}
                                />
                                <ErrorMessage component={FormHelperText} name="repeatPassword" error/>
                            </FormGroup>

                            <FormGroup>
                                <Field
                                    name="acceptedTerms"
                                    type="checkbox"
                                    label="Accept Terms And Conditions"
                                    error={touched.acceptedTerms && !!errors.acceptedTerms}
                                />
                                <ErrorMessage component={FormHelperText} name="acceptedTerms" error/>
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

export default withRouter(RegistrationForm);