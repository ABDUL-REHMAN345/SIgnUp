import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
// import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormHelperText } from '@mui/material';
import * as Yup from 'yup';
import {
    Grid,
    Paper,
    Typography,
    Avatar,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    Checkbox, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
};





export default function Test() {
    const [open, setOpen] = React.useState(false);
    // const [thankYouOpen, setThankYouOpen] = useState(false);
    const paperStyle = { padding: '30px 20px' }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // const handleSubmit = () => {
    //     setOpen(false);
    // };


    // const handleThankYouOpen = () => {
    //     setThankYouOpen(true);
    // };

    // const handleThankYouClose = () => {
    //     setThankYouOpen(false);
    //     setOpen(false);
    // };

    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

    // use Formik and Yup library to add validation in form:
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Empty Name Field"),
        email: Yup.string().email("Enter valid email").required("Empty Email Field"),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone Number").required('Required'),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Empty Conform Password Field"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })



    return (
        <>
            <Button variant="contained" onClick={handleOpen} sx={{ paddingLeft: "14px", bgcolor: "primary" }}>NEXT</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"

            >
                <Box sx={{ ...style, width: 400 }}>

                    <Grid>
                        <Paper elevation={20} style={paperStyle}>
                            <Grid align="center">
                                <Avatar style={avatarStyle}>
                                    <AddCircleOutlineOutlinedIcon />
                                </Avatar>
                                <h2 style={headerStyle}>Sign Up</h2>
                                <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                            </Grid>
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                {(props) => (
                                    <Form>

                                        <Field as={TextField} fullWidth name="name" label='Name'
                                            placeholder="Enter your name" helperText={<ErrorMessage name="name" />} />
                                        <Field as={TextField} fullWidth name="email" label='Email'
                                            placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />
                                        <FormControl component="fieldset" style={marginTop}>
                                            <FormLabel component="legend">Gender</FormLabel>
                                            < Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            </ Field>
                                        </FormControl>
                                        <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                                        <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number'
                                            placeholder="Enter your phone number" helperText={<ErrorMessage name="phoneNumber" />} />
                                        <Field as={TextField} fullWidth name='password' type="password"
                                            label='Password' placeholder="Enter your password"
                                            helperText={<ErrorMessage name="password" />} />
                                        <Field as={TextField} fullWidth name="confirmPassword" type="password"
                                            label='Confirm Password' placeholder="Confirm your password"
                                            helperText={<ErrorMessage name="confirmPassword" />} />
                                        <FormControlLabel
                                            control={<Field as={Checkbox} name="termsAndConditions" />}
                                            label="I accept the terms and conditions."
                                        />
                                        <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                                        {/* <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                            color='secondary' onClick={handleThankYouOpen} >{props.isSubmitting ? "Loading" : "Register"}</Button> */}



                                        <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                            color='secondary' >{props.isSubmitting ? "Loading" : "Register"}</Button>
                                        <Button variant='contained' sx={{ margin: "10px" }} onClick={handleClose} color="secondary">
                                            Close
                                        </Button>
                                        {/* <Dialog open={thankYouOpen} onClose={handleThankYouClose}>
                                            <DialogTitle>
                                                <Typography variant="h6" component="div">
                                                    <GppGoodRoundedIcon color="secondary" fontSize="large" />
                                                    Thank you for registering!
                                                </Typography>
                                            </DialogTitle>
                                            <DialogContent>
                                                <Typography variant="body1">
                                                    We have received your registration and will be in touch soon.
                                                </Typography>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleThankYouClose} color="primary">
                                                    Close
                                                </Button>
                                                <Button onClick={handleSubmit} color="secondary">
                                                    Submit
                                                </Button>
                                            </DialogActions>
                                        </Dialog> */}

                                    </Form>
                                )}

                            </Formik>

                        </Paper>
                    </Grid>

                </Box>
            </Modal>
        </>
    );
}