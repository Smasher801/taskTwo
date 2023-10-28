import React, { useContext } from "react";
import FirstStep from "./components/FirstStep";
import TextField from "@mui/material/TextField";
import { Stepper, StepLabel, Step, Box } from "@mui/material";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { ManageStep } from "./StepContext";
import DisplayData from "./components/DisplayData";

function App() {
  const { currentStep, setStep, userData, finalData } = useContext(ManageStep);

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      default:
        return <FirstStep />;
    }
  };

  return (
    <Box component="div" display="flex" flexDirection="row" >
      <Box component="div" width="50%">
        <Box component="div">
          <h3 style={{ color: "red", textDecoration: "underline" }}>
             Create Candidate Requisition
          </h3>

          {/* <TextField label="Name" /> */}
        </Box>
        <Box component="div" className="center-stepper">
          <Stepper
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              {" "}
              <StepLabel> Requisition Details </StepLabel>{" "}
            </Step>
            <Step>
              {" "}
              <StepLabel> Application</StepLabel>{" "}
            </Step>
            <Step>
              {" "}
              <StepLabel> Final Step </StepLabel>
            </Step>
          </Stepper>
        </Box>
        <Box>{showStep(currentStep)}</Box>
      </Box>
      <Box width="30%">
      {/* <p> {userData.firstName}  </p>
        <p> {userData.lastName}  </p> */}
        <DisplayData />
      </Box>
    </Box>
  );
}

export default App;
