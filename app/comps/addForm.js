"use client";
import React from "react";
import { Box, TextField, Button, ButtonGroup } from "@mui/material";

const AddForm = ({ handleAddFormToggle, handleAddTask, setTask, task }) => {
  return (
    <Box>
      <TextField
        required
        fullWidth
        id="outlined-required"
        label="Required"
        margin="normal"
        color="primary"
        variant="outlined"
        fontColor="primary"
        value={task}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.light",
          },
          "& .MuiInputLabel-root": {
            color: "primary.light",
          },
          "& .MuiOutlinedInput-input": {
            color: "text.main",
          },
          mb: 2,
        }}
        onChange={(e) => setTask((prev) => e.target.value)}
      />
      <ButtonGroup fullWidth sx={{ mb: 2 }}>
        <Button variant="outlined" color="primary" onClick={handleAddTask}>
          add
        </Button>
        <Button variant="outlined" color="error" onClick={handleAddFormToggle}>
          cancel
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default AddForm;
