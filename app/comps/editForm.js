//TodoList -> EditForm.js
"use client";
import React from "react";
import { Box, TextField, Button, ButtonGroup } from "@mui/material";

const EditForm = ({
  handleEditFormToggle,
  selectedTask,
  setTask,
  handleEdit,
}) => {
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
        defaultValue={selectedTask.task}
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
        <Button variant="outlined" color="primary" onClick={handleEdit}>
          confirm
        </Button>
        <Button variant="outlined" color="error" onClick={handleEditFormToggle}>
          cancel
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default EditForm;
