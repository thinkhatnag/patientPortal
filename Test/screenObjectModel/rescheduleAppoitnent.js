class AppoitmentReshedulePage{
  get (){return $('//android.widget.TextView[@text="Select Appointment Status"]')}

  //appoitment status reschedule selectors
  get appoitmentStatusDropDown(){return $('//android.widget.ScrollView/android.view.View[3]')}
  get appoitmentStatusDropDownOptionBooked(){return $('//android.widget.TextView[@text="Booked"]')}
  get appoitmentStatusDropDownOptionProposed(){return $('//android.widget.TextView[@text="Proposed"]')}
  get (){return $('')}
  //appoitment type selectors
  get appoitmentOptionSelector(){return $('//android.widget.ScrollView/android.view.View[4]')}
  get Note(){return $('//android.widget.EditText')}
  get dayScrollviewinCalander(){return $('//android.widget.ScrollView/android.view.View[7]')}
  get timeSelector(){return $('//android.widget.ScrollView/android.view.View[9]')}

  //appoitment reschedule selectors
  get rescheduleButton(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button')}
  get rescheduleBackButton(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.Button')}
  get rescheduleScreenclose(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  
}
export default AppoitmentReshedulePage();