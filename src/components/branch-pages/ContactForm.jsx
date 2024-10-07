import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";

export default function ContactForm() {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box
      sx={{
        maxWidth: "500px",
        padding: "16px",
        border: "2px solid white",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        margin: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography variant='h5' gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name='name'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder='Name *'
                  variant='outlined'
                  fullWidth
                  required
                  sx={{
                    border: "1px solid white",
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      borderColor: "white", // Change the border color when focused
                      "& fieldset": {
                        borderColor: "white", // Ensure the fieldset border is also white
                      },
                    },
                    "& input": {
                      color: "white",
                    },
                    "& input::placeholder": {
                      color: "grey",
                    },
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='email'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  variant='outlined'
                  fullWidth
                  type='email'
                  required
                  sx={{
                    border: "1px solid white",
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      borderColor: "white",
                      "& fieldset": {
                        borderColor: "white",
                      },
                    },
                    "& input": {
                      color: "white",
                    },
                    "& input::placeholder": {
                      color: "grey",
                    },
                  }}
                  placeholder='Email *'
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='message'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder='Share Your Thoughts *'
                  variant='outlined'
                  fullWidth
                  multiline
                  rows={4}
                  required
                  sx={{
                    border: "1px solid white",
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      borderColor: "white",
                      "& fieldset": {
                        borderColor: "white",
                      },
                    },
                    "& textarea": {
                      color: "white",
                    },
                    "& textarea::placeholder": {
                      color: "grey",
                    },
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type='submit'
              variant='outlined'
              fullWidth
              sx={{ color: "white", border: "1px solid white" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
