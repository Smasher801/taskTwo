import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { ManageStep } from "../StepContext";

const SecondStep = () => {
  const { currentStep, setStep, userData,setUserData, finalData } = useContext(ManageStep);

  const showStep = () => {
    
     if(userData.jobTitle && userData.detail && userData.location ){
            setStep(prev=>prev+1);
     }

  }

  return (
    <div>
      <div>
        <TextField
          label="Job Title"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e)=>setUserData({...userData , jobTitle : e.target.value})}
          value={userData.jobTitle || ""}
        />
      </div>

      <div>
        <TextField
          label="Job Details"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e)=>setUserData({...userData , detail : e.target.value})}
          value={userData.detail || ""}
        />
      </div>
      <div>
        <TextField
          label="Job Location"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e)=>setUserData({...userData , location : e.target.value})}
          value={userData.location || ""}
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
        <Button
          variant="contained"
          color="primary"
          onClick={showStep}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
