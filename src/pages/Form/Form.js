import React, { useEffect, useState } from 'react';
import { Link, Link as RouterLink} from 'react-router-dom';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
// material-ui
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    Card,
    TextareaAutosize,
    Select,
    MenuItem,
    TextField,
  } from '@mui/material';

  // third party
import * as Yup from 'yup';
import { Formik } from 'formik';
// import AuthBackground from '../../assets/images copy/auth/AuthBackground';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const Form = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [error,setError]=useState("")
   
   
    const [level, setLevel] = useState();
    const [photoURL, setPhotoURL] = useState("")


    const [department, setDepartment] = useState("");
    const [date, setDate] = useState(dayjs('2022-04-17'));
    const [name, setName] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [description, setDescription] = useState("");
    const [role, setRole] = useState(false);
    const [repetPassword, setRepetPassword] = useState("");
    
    
  
    
    const handleSubmits = (e) => {
        e.preventDefault();
        setError("");
        const emailValidation = /\S+@\S+\.\S+/.test(email);
      const passValidation = /(?=.{8,})/.test(password);
      if (emailValidation && passValidation) {
        console.log(name,
        
          password,);
         
      };}
    return (
        <>
       <Grid container spacing={3}>
          
          <Grid item xs={12} >
          <Box sx={{ minHeight: '100vh' }}  >
        {/* <AuthBackground /> */}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          
          sx={{
            minHeight: '100vh'
          }}
        >
          
          <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
            {/* <Logo /> */}
    
          </Grid>
          <Grid item xs={6}
          borderRadius={3}
          boxShadow={10}
          marginX="auto"
          bgcolor='whitesmoke'
          >
          <Stack direction="row" justifyContent="center" marginX="1.5em" marginY="1em"alignItems="center" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
              <Typography variant="h3" color="#1e2a4f"fontWeight="bold"fontFamily="revert-layer">Requisition Form</Typography>
              {/* <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                Already have an account?
              </Typography> */}
            </Stack>
            <Grid
              item
              xs={12}
              container
              justifyContent="center"
              
              
               alignItems="center"
              
              // alignContent="center"
              marginX="auto"
              
            >
              
              <Grid item 
              marginTop={0}
              borderRadius={5}
              // boxShadow={10}
              
                sx={{
                  maxWidth: { xs: 600, lg: 675 },
                  maxHeight: { ys:700, lg:750},
                  margin: { xs: 2.5, md: 3 },
                  '& > *': {
                    flexGrow: 1,
                    flexBasis: '50%'
                  }
                }}
               
                
              
              >
              <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
              <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          company: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required('First Name is required'),
          lastname: Yup.string().max(255).required('Last Name is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          description: Yup.string().min(20).required('description is required'),
          department: Yup.string().max(255).required('department is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmits}>
            <Grid container spacing={3}>
            
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstname-signup">First Name*</InputLabel>
                  <OutlinedInput
                    id="firstname-login"
                    type="firstname"
                    value={values.firstname}
                    name="firstname"
                    onBlur={(e)=>{handleBlur(e)
                      setFname(e.target.value)}}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.firstname && errors.firstname)}
                  />
                  {touched.firstname && errors.firstname && (
                    <FormHelperText error id="helper-text-firstname-signup">
                      {errors.firstname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.lastname && errors.lastname)}
                    id="lastname-signup"
                    type="lastname"
                    value={values.lastname}
                    name="lastname"
                    onBlur={(e)=>{handleBlur(e)
                      setLname(e.target.value)
                      
                    }}
                    onChange={handleChange}
                    placeholder="Doe"
                    inputProps={{}}
                  />
                  {touched.lastname && errors.lastname && (
                    <FormHelperText error id="helper-text-lastname-signup">
                      {errors.lastname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="select-date">Select Date</InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}components={[ 'DatePicker']}>
                  {/* <DemoContainer components={[ 'DatePicker']}> */}
        
                  <DatePicker
                    label="Date"
                    value={values.date}
                    onChange={(newValue) => setDate(newValue)}
                    />
                  {/* </DemoContainer> */}
                  </LocalizationProvider>
                  {touched.date && errors.date && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.date}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                <InputLabel htmlFor="select-date">Select Department*</InputLabel>
                <FormControl sx={{ m: 1, minWidth: 120 }} className='mt-2'>
                
              <InputLabel 
                id="demo-simple-select-helper-label">Department</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={values.department}
                label="Department"
                onChange={handleChange}
              >
                <MenuItem value={10}>Development</MenuItem>
                <MenuItem value={20}>Marketing</MenuItem>
                <MenuItem value={30}>Security</MenuItem>
                </Select>
                {touched.department && errors.department && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.department}
                    </FormHelperText>
                  )}
              </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                <InputLabel htmlFor="select-date">Select Floor*</InputLabel>
                <FormControl sx={{ m: 1, minWidth: 120 }} className='mt-2'>
                
              <InputLabel 
                id="demo-simple-select-helper-label">Floor</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={values.floor}
                label="Department"
                onChange={handleChange}
              >
                <MenuItem value={10}>1st</MenuItem>
                <MenuItem value={20}>2nd</MenuItem>
                <MenuItem value={30}>3rd</MenuItem>
                <MenuItem value={40}>4th</MenuItem>
                <MenuItem value={50}>5th</MenuItem>
                <MenuItem value={60}>6th</MenuItem>
                <MenuItem value={70}>7th</MenuItem>
                <MenuItem value={80}>8th</MenuItem>
                <MenuItem value={90}>9th</MenuItem>
                <MenuItem value={100}>10th</MenuItem>
                <MenuItem value={110}>11th</MenuItem>
                </Select>
                {touched.department && errors.department && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.department}
                    </FormHelperText>
                  )}
              </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                <InputLabel htmlFor="select-date">Select Subject*</InputLabel>
                <FormControl sx={{ m: 1, minWidth: 120 }} className='mt-2'>
                
              <InputLabel 
                id="demo-simple-select-helper-label">Subject</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={values.department}
                label="Department"
                onChange={handleChange}
              >
                <MenuItem value={10}>Farniture</MenuItem>
                <MenuItem value={20}>Electronic</MenuItem>
                <MenuItem value={30}>Security</MenuItem>
                <MenuItem value={40}>Others</MenuItem>
                </Select>
                {touched.department && errors.department && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.department}
                    </FormHelperText>
                  )}
              </FormControl>
                </Stack>
              </Grid>
             
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={(e)=>{handleBlur(e)
                      setEmail(e.target.value)
                      setName(`${fname} ${lname}`)
                    }}
                    onChange={handleChange}
                    placeholder="demo@company.com"
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="description">Write Your Problems</InputLabel>
                  <TextField
                    
                    label="Description"
                    fullWidth
                    multiline
                    maxRows={4}
                    error={Boolean(touched.description && errors.description)}
                    id="description"
                    type="textArea"
                    value={values.textArea}
                    name="description"
                    onBlur={(e)=>{handleBlur(e)
                      setDescription(e.target.value)
                      
                    }}
                    onChange={handleChange}
                    placeholder="Describe your problem"
                    inputProps={{}}
                  />
                  {touched.description && errors.description && (
                    <FormHelperText error id="helper-text-description">
                      {errors.description}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="body2">
                  By Submitting, you agree to our &nbsp;
                  <Link variant="subtitle2" to="#">
                    Terms of Service
                  </Link>
                  &nbsp; and &nbsp;
                  <Link variant="subtitle2" to="#">
                    Privacy Policy
                  </Link>
                </Typography>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid container alignItems="flex-end" justifyContent="flex-end">
  {/* <AnimateButton> */}
  <Button
    disableElevation
    disabled={isSubmitting}
    size="large"
    type="submit"
    variant='contained'
     sx={{ background: "#1e2a4f" }}
    style={{ marginLeft: "auto" }}
  >
    Submit
  </Button>
  {/* </AnimateButton> */}
</Grid>
            </Grid>
          </form>
        )}
      </Formik>  
              </Box>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </Box>
          </Grid>
        </Grid>
      </>
    )}


export default Form