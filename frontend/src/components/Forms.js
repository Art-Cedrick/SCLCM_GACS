
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Divider,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import SingleSelect from "./AllForms/Forms/SingleSelect";
import { useForm, Controller } from "react-hook-form";
import AxiosInstance from "./AllForms/Axios";

import {React, useState} from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import RoutineInterview from './AllForms/RoutineInterview';
import IndividualRecordForm from './AllForms/IndividualRecordForm';
import CareerTracking from './AllForms/CareerTracking';




const Forms = () => {

  const [activeForm, setActiveForm] = useState('');

  const formOptions = [
    {value: 'individual_record_form', label: 'Individual Record Form'},
    {value: 'routine_interview', label: 'Routine Interview'},
    {value: 'careertracking', label: 'Career Tracking'},
  ]

  return (
    <div>
      <FormControl fullWidth style={{ marginBottom: '20px' }}>
      <InputLabel>Select Form</InputLabel>
        <Select
          label='Select Form'
          value={activeForm}
          onChange={(e) => setActiveForm(e.target.value)} // Update the state based on selection
          style={{width: "300px"}}
        >
          {/* Map through form options to create menu items */}
          {formOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Render forms based on the selected option from the dropdown */}
      {activeForm === 'individual_record_form' && <IndividualRecordForm />}
      {activeForm === 'routine_interview' && <RoutineInterview />}
      {activeForm === 'careertracking' && <CareerTracking />}
    </div>
  )
}

export default Forms