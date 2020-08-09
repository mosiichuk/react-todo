import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, FormGroup, FormHelperText, Box, Backdrop, CircularProgress, makeStyles, Dialog, DialogTitle } from '@material-ui/core';
import UserService from '../../services/UserService';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

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
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const [errorDialogOpen, setErrorDialogOpen] = useState(false);

    const loginUser = async (values, { setSubmitting }) => {
        setOpen(true);

        try {
            await userService.loginUser(values);
            setSubmitting(true);
            changeLoggedIn(true);
            history.push('/');
         } catch (e) {
            setSubmitting(true);
            setOpen(false);
            console.error(e.message, e.name);
            setErrorDialogOpen(true);
         }
    }
    
    return (
        <>
            <h1>Login form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={loginUser}
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
                    </Form>
                )}
            </Formik>
            
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>

            <Dialog onClose={() => setErrorDialogOpen(false)} aria-labelledby="simple-dialog-title" open={errorDialogOpen}>
                <DialogTitle id="simple-dialog-title">Email or password is incorrect.</DialogTitle>
            </Dialog>
        </>
    );
}

export default withRouter(LoginForm);