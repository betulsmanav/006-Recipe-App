
import React from "react";
// import { LockOutlined } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

const signUpValidationSchema = Yup.object({
  username: Yup.string()
    .required("Display name is required")
    .min(2, "Too short")
    .max(15, "Must be 15 char or less"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have a uppercase")
    .matches(/[!?.@#$%^&*()-+]+/, "Password must have a special char"),
  password2: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function Login() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    password2:"",
  }
  const handleSubmit =(values,{resetForm})=> {
    alert(`
    username: ${values.username},
    email: ${values.email},
    password: ${values.password},
    password2: ${values.password2},
    `);
    resetForm();
  }

  return (
    <Container
      sx={{
        marginTop: "3rem",
        // mt: 6,
        height: "calc(100vh - 3rem)",
        textAlign: "center",
      }}
      maxWidth="sm"
    >
      
      <Typography sx={{ margin: "1rem" }} variant="h4">
        BETUL-RECIPE
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signUpValidationSchema}
      >
        {({ values, handleChange, handleSubmit,errors,touched,handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  label="User Name"
                  variant="outlined"
                  value={values.username}
                  onChange={handleChange}
                  helperText={touched.username && errors.username}
                  error={touched.username && Boolean(errors.username)}
                  onBlur={handleBlur}

                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange}
                  type="password"
                  helperText={touched.password && errors.password}
                  error={touched.password && Boolean(errors.password)}
                  onBlur={handleBlur}


                />
              </Grid>
              
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      
      
    </Container>
  );
}



export default Login;