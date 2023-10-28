import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { ManageStep } from "../StepContext";

const FirstStep = () => {

   const {currentStep,setStep,userData,setUserData,finalData} = useContext(ManageStep);
  //  console.log(currentStep);
  //  console.log(userData);
  //  console.log(finalData);

  const moveNext = () => {
    
        if(userData.title && userData.gender && userData.opening && userData.urgency ){
               setStep((prev)=> prev+1);
        }

  }

  return (
    <div>
      <div>
        <TextField
          label="Requisition Title"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e)=>setUserData({...userData , title : e.target.value})}
          value= {userData.title  || "" } 
          required
        />
      </div>

      <div>
        <TextField
          label="No of openings"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e)=>setUserData({...userData , opening : e.target.value})}
          value={userData.opening || ""}
          required
        />
      </div>
      <div>
        <TextField
          label="Gender"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e)=>setUserData({...userData , gender : e.target.value})}
          value={userData.gender || ""}
          required
        />
      </div>
      <div>
        <TextField
          label="Urgency"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e)=>setUserData({...userData , urgency : e.target.value})}
          value={userData.urgency || ""}
          required
        />
      </div>
     
      <div>
        <Button variant="contained" color="primary" onClick={moveNext}> Next </Button>
      </div>
    </div>
  );
};

export default FirstStep;
