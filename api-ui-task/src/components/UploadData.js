import axios from "axios";
import React, { useState } from "react";
import { Button, Box, Grid, TextField } from "@mui/material";
// import { AppContext } from "../App";
const UploadData = ({ formValues }) => {
  //   const { uploadedData, setUploadedData } = useContext(AppContext);
  const [uploadedData, setUploadedData] = useState();
  const handleSubmit = async () => {
    if (formValues.title) {
      const {
        title,
        description,
        musicGenre,
        practiceTime,
        days,
        daysPracticed,
      } = formValues;
      try {
        const data = await axios.post("http://localhost:5000/assignment", {
          title,
          description,
          musicGenre,
          practiceTime,
          days,
          daysPracticed,
        });
        console.log("response in upload data", data.data.filedata);
        setUploadedData(data.data.filedata);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Button variant="contained" onClick={handleSubmit}>
        Send
      </Button>
      {uploadedData ? (
        <div>
          <div>Title: {uploadedData.title}</div>
          <div>Description: {uploadedData.description}</div>
          <div>Music Genre: {uploadedData.music_genre}</div>
          <div>Daily Practice Time: {uploadedData.practice_time}</div>
          <div>Days: {uploadedData.days}</div>
          <div>Days Practiced: {uploadedData.days_practiced}</div>
        </div>
      ) : null}
    </>
  );
};

export default UploadData;
