import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Form from "./Form";
const MyButton = () => {
  const [open, setOpen] = useState(false);
  const [countryData, setCountryData] = useState([]);


  const handleButtonClick = async () => {
    // Fetch country data from API
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    setCountryData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selectedCountry = formData.get('country');
    console.log(`Selected country: ${selectedCountry}`);
  };
  return (
    <>
      <p onClick={handleButtonClick}>
        SignUp
      </p>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select Countries</DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit}>
            <TextField sx={{ marginTop: "20px" }}
              label="Country"
              name="country"
              select
              required
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              fullWidth
            >
              {countryData.map((country) => (
                <option key={country.alpha2Code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </TextField>
            {/* Add more form fields here */}
            <Button type="submit"><Form /></Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MyButton;
