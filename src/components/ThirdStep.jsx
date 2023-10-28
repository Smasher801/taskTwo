import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { ManageStep } from "../StepContext";

const ThirdStep = () => {
  const {
    currentStep,
    setStep,
    userData,
    setUserData,
    finalData,
    setFinalData,
  } = useContext(ManageStep);

  const submitData = () => {
    // setFinalData(finalData => [...finalData,userData]);
    if (userData.jobLocation && userData.duration && userData.mode) {
      setUserData({});
      setStep(1);

      return alert("Data submitted successfully");
    }
    // setStep(1);
    // setUserData({});
  };

  return (
    <div>
      <div>
        <TextField
          label="Interview Mode"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) => setUserData({ ...userData, mode: e.target.value })}
          value={userData.mode || ""}
        />
      </div>

      <div>
        <TextField
          label="Interview Duration"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) =>
            setUserData({ ...userData, duration: e.target.value })
          }
          value={userData.duration || ""}
        />
      </div>
      <div>
        <TextField
          label="Job Location"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) =>
            setUserData({ ...userData, jobLocation: e.target.value })
          }
          value={userData.jobLocation || ""}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setStep((prev) => prev - 1)}
          style={{marginRight : "10px"}}
        >
          Prev
        </Button>
        <Button variant="contained" color="primary" onClick={submitData}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ThirdStep;
