import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Button } from '@mui/material';
import UploadData from './UploadData';
const NewAssignment = () => {
  let navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleChange = (e) =>
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  return (
    <>
      <div>
        <h1>New Assignment</h1>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              label="Title"
              name="title"
              maxRows={1}
              variant="outlined"
              value={inputs.title || ''}
              onChange={handleChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Description"
              name="description"
              maxRows={1}
              variant="outlined"
              value={inputs.description || ''}
              onChange={handleChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Music Genre"
              name="musicGenre"
              maxRows={1}
              variant="outlined"
              value={inputs.musicGenre || ''}
              onChange={handleChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Daily Practice Time"
              name="practiceTime"
              maxRows={1}
              variant="outlined"
              value={inputs.practiceTime || ''}
              onChange={handleChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Days"
              name="days"
              maxRows={1}
              variant="outlined"
              value={inputs.days || ''}
              onChange={handleChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
            <TextField
              label="Days Practiced"
              name="daysPracticed"
              maxRows={1}
              variant="outlined"
              value={inputs.daysPracticed || ''}
              onChange={handleChange}
              sx={{ m: 1, backgroundColor: '#FFE4E1' }}
            />
          </div>
        </Box>
      </div>

      <UploadData formValues={inputs} />
      <br />
      <Button onClick={() => navigate('/')}>Back to list</Button>
    </>
  );
};

export default NewAssignment;
