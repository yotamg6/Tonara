import React, { useState, useContext, useEffect } from "react";
import { TextField, Box, MenuItem } from "@mui/material";
import UploadData from "./UploadData";
const NewAssignment = () => {
  const [title, setTitle] = useState();
  const [titleValue, setTitleValue] = useState("");
  const [description, setDescription] = useState();
  const [descriptionValue, setDescriptionValue] = useState("");
  const [musicGenre, setMusicGenre] = useState();
  const [musicGenreValue, setMusicGenreValue] = useState("");
  const [practiceTime, setPracticeTime] = useState();
  const [practiveTimeValue, setPractiveTimeValue] = useState("");
  const [days, setDays] = useState();
  const [daysValue, setDaysValue] = useState("");
  const [daysPracticed, setDaysPracticed] = useState();
  const [daysPracticedValue, setDaysPracticedValue] = useState("");

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
    setDescription(e.target.value);
  };

  const handleGenreChange = (e) => {
    setMusicGenreValue(e.target.value);
    setMusicGenre(e.target.value);
  };

  const handePracticeTimeChange = (e) => {
    setPractiveTimeValue(e.target.value);
    setPracticeTime(e.target.value);
  };

  const handleDaysChange = (e) => {
    setDaysValue(e.target.value);
    setDays(e.target.value);
  };

  const handleDaysPracticedChange = (e) => {
    setDaysPracticedValue(e.target.value);
    setDaysPracticed(e.target.value);
  };

  return (
    <>
      <div>
        <h1>New Assignment</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              label="Title"
              maxRows={1}
              variant="outlined"
              value={titleValue}
              onChange={handleTitleChange}
              sx={{ m: 1, backgroundColor: "#FFE4E1" }}
            />
            <TextField
              label="Description"
              maxRows={1}
              variant="outlined"
              value={descriptionValue}
              onChange={handleDescriptionChange}
              sx={{ m: 1, backgroundColor: "#FFE4E1" }}
            />
            <TextField
              label="Music Genre"
              maxRows={1}
              variant="outlined"
              value={musicGenreValue}
              onChange={handleGenreChange}
              sx={{ m: 1, backgroundColor: "#FFE4E1" }}
            />
            <TextField
              label="Daily Practice Time"
              maxRows={1}
              variant="outlined"
              value={practiveTimeValue}
              onChange={handePracticeTimeChange}
              sx={{ m: 1, backgroundColor: "#FFE4E1" }}
            />
            <TextField
              label="Days"
              maxRows={1}
              variant="outlined"
              value={daysValue}
              onChange={handleDaysChange}
              sx={{ m: 1, backgroundColor: "#FFE4E1" }}
            />
            <TextField
              label="Days Practiced"
              maxRows={1}
              variant="outlined"
              value={daysPracticedValue}
              onChange={handleDaysPracticedChange}
              sx={{ m: 1, backgroundColor: "#FFE4E1" }}
            />
          </div>
        </Box>
      </div>

      <UploadData
        formValues={{
          title,
          description,
          musicGenre,
          practiceTime,
          days,
          daysPracticed,
        }}
      />
    </>
  );
};

export default NewAssignment;
