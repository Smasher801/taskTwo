import React, { useContext } from "react";
import { ManageStep } from "../StepContext";

const DisplayData = () => {
  const { currentStep, setStep, userData, setUserData, finalData } =
    useContext(ManageStep);
  console.log(finalData);
  console.log(userData.firstName);

  return (
    <div style={{ marginLeft: "100px" }}>
      <h1>Preview</h1>
      <div>
        <h3>Requisition Details</h3>
        <h4 style={{ textDecoration: "underline" }}>Gender</h4>
        <p>{userData.gender}</p>
        <h4>Urgency</h4>
        <p>{userData.urgency}</p>
      </div>
      <div>
        <h3>Job detail</h3>
        <h4>Job Title</h4>
        <p>{userData.jobTitle}</p>
        <h4> Job Detail</h4>
        <p>{userData.detail}</p>
        <h4> Job Location</h4>
        <p>{userData.location}</p>
      </div>
      <div>
        <h3> Interview Settings</h3>
        <h4>Interview Duration</h4>
        <p>{userData.duration}</p>
        <h4> Interview Language</h4>
        <p>{userData.language}</p>
        <h4> Interview Mode</h4>
        <p>{userData.jobLocation}</p>
      </div>
    </div>
  );
};

export default DisplayData;
