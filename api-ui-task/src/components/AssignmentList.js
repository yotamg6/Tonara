import React, { useEffect, useState } from "react";
import axios from "axios";
import AssignmentCard from "./AssignmentCard";
// import { AppContext } from "../App";

const AssignmentList = () => {
  // const { uploadedData } = useContext(AppContext);
  const [returnedData, setReturnedData] = useState(null);
  useEffect(() => {
    // if (uploadedData) {
    const getAllAssignments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/all-assignments"
        );
        // console.log("assignmentsList get all", response.data);
        setReturnedData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getAllAssignments();
    // }
  }, []);
  return (
    <div className="list">
      <AssignmentCard />
      <AssignmentCard />
      <AssignmentCard />
      {returnedData.length
        ? returnedData.map((assignment) => {
            return (
              <div>
                <div>{assignment.title}</div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default AssignmentList;
