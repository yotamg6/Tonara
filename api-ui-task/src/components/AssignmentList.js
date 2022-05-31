import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';

const AssignmentList = () => {
  const [returnedData, setReturnedData] = useState([]);
  useEffect(() => {
    const getAllAssignments = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/all-assignments'
        );
        setReturnedData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getAllAssignments();
  }, []);
  return (
    <div className="list">
      {returnedData.length
        ? returnedData.map((assignment, i) => {
            return <Item key={i} assignment={assignment} />;
          })
        : null}
    </div>
  );
};

export default AssignmentList;
