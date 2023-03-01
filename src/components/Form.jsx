import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormHelperText } from '@mui/material';
import Model from "./Model"
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
    Checkbox,
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
    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Empty Name Field"),
        email: Yup.string().email("Enter valid email").required("Empty Email Field"),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone Number").required('Required'),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Empty Conform Password Field"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })
    const handleClickOpen = () => {
        setOpen(true);
    };


    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

    return (
        <>
            <Button variant="contained" onClick={handleOpen} sx={{ paddingLeft: "14px", bgcolor: "#800000" }}>NEXT</Button>
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
                                            <Button onClick={handleClickOpen} type='submit' variant='contained' disabled={props.isSubmitting}
                                                color='secondary'>{props.isSubmitting ? "Loading" : "Register"}</Button>
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