
import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'



const steps=[
    "placed",
    "order confirmed",
    "shipped",
    "out for delivery",
    "delivered"
]
const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full '>

    <Stepper activeStep={activeStep} alternativeLabel>
    {steps.map((Label)=><Step>
        <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>{Label}</StepLabel>
        </Step>)}
    </Stepper>
      
    </div>
  )
}

export default OrderTracker
