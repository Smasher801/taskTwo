// import { create } from '@mui/material/styles/createTransitions';
import React, { createContext, useState , useEffect } from 'react'


export const ManageStep = createContext(); 

const StepContext = ({children}) => {

    const [currentStep , setStep] = useState(1);
   
    const [userData,setUserData] = useState({});
    const [finalData,setFinalData] = useState([]);

    // useEffect(() => {
    //   console.log(finalData);
    // }, [finalData])

    // const submitData = () => {
    //       setFinalData(finalData => [...finalData,userData]);
    //       setStep(1);
    //       setUserData({});
    // }
    

  return (
      <ManageStep.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData}}>
        {children}
      </ManageStep.Provider>
  )
}

export default StepContext;