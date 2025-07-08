class BookAppointmentPage {

  get locationDropDown(){return $('//android.widget.ScrollView/android.view.View[1]')}
  get practitionerDropDown(){return $('//android.widget.ScrollView/android.view.View[2]')}
  get appointmentStatusDropDown(){return $('//android.widget.TextView[@text="Appointment Status"]')}
  get appointmentTypeDropDown(){return $('//android.widget.ScrollView/android.view.View[4]')}
  get selectDropDown(){return $('//android.widget.TextView[@text="Select Patient"]')}


//locationdropdownelemrnts
  get applicationStatusOptions(){return ["Booked","Proposed",]}
  get appoitmentTypes(){return [`A routine check-up, such as an annual physical`,`Emergency appointment`,`A follow up visit from a previous appointment`,`Routine appointment`,`A previously unscheduled walk-in visit`,]}
  get patientList(){return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]')}
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
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}
  // In your page object class


async selectRandomPatient() {
  const patients = await this.patientList;

  if (patients.length === 0) {
    throw new Error('No patient elements found!');
  }

  const randomIndex = Math.floor(Math.random() * patients.length);
  const randomPatient = patients[randomIndex];

  const text = await randomPatient.getText();
  console.log(`Selected patient: ${text}`);

  await randomPatient.click(); // or any other action
}

  
}
export default new BookAppointmentPage();