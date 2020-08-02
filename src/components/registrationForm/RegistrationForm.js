import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, FormGroup, FormHelperText, Box } from '@material-ui/core';

const initialValues = {
    firstName: "",
    email: "",
    password: "",
    acceptedTerms: false,
};

const validationSchema = Yup.object({
    firstName: Yup.string()
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

export default function RegistrationForm() {
    return (
        <>
            <h1>Registration form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => { console.log(JSON.stringify(values, null, 4)) }}
            >
                {({ values, errors, isSubmitting, isValidating, touched}) => (
                    <Form>
                        <Box mb={2}>
                            <FormGroup>
                                <Field
                                    as={TextField}
                                    name="firstName"
                                    label="First Name"
                                    error={touched.firstName && !!errors.firstName}
                                />
                                <ErrorMessage component={FormHelperText} name="firstName" error/>
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