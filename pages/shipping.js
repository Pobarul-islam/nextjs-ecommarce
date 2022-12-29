import React from 'react'
import CheckOutWizard from '../components/CheckOutWizard'
import Layouts from '../components/Layouts'

export default function shipping() {
  return (
    <Layouts title="Shipping Address">
      <CheckOutWizard activeStep={1}/>
    </Layouts>
  )
}
