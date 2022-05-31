import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import NewCard from './NewCard';

const UploadData = ({ formValues }) => {
  const [uploadedData, setUploadedData] = useState();
  const handleSubmit = async () => {
    if (formValues) {
      const {
        title,
        description,
        musicGenre,
        practiceTime,
        days,
        daysPracticed,
      } = formValues;
      try {
        const data = await axios.post('http://localhost:5000/assignment', {
          title,
          description,
          musicGenre,
          practiceTime,
          days,
          daysPracticed,
        });
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
          <NewCard assignment={uploadedData} />
        </div>
      ) : null}
    </>
  );
};

export default UploadData;
