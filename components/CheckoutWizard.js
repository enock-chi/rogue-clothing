import { Step, StepLabel, Stepper } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import React from 'react';
import useStyles from '../utils/styles';

export default function CheckoutWizard({ activeStep = 0 }) {
  const classes = useStyles();
  return (
    <Stepper
      className={classes.stepper}
      activeStep={activeStep}
      alternativeLabel
    >
      {[
        'Login',
        'Shipping Address',
        'Payment Method',
        'Place Order',
        'Payment',
      ].map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
