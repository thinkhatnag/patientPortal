import { verifyAndClick, verify, swipe, back } from '/Users/nagasubarayudu/Desktop/patientPortal/helper/helper.js';
import BookAppointmentPage from '/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/bookAppoitment.js';
import AppointmentsPage from '/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/appoitments.js';
class AppoitmentReshedulePage{

  //appoitment status reschedule selectors
  get appoitmentStatusDropDown(){return $('//android.widget.ScrollView/android.view.View[3]')}
  get appoitmentStatusDropDownOptionBooked(){return $('//android.widget.TextView[@text="Booked"]')}
  get appoitmentStatusDropDownOptionProposed(){return $('//android.widget.TextView[@text="Proposed"]')}
  get proceed(){return $('')}
  //appoitment type selectors
  get appoitmentOptionSelector(){return $('//android.widget.ScrollView/android.view.View[4]')}
  get Note(){return $('//android.widget.EditText')}
  get dayScrollviewinCalander(){return $('//android.widget.ScrollView/android.view.View[7]')}
  get timeSelector(){return $('//android.widget.ScrollView/android.view.View[9]')}

  //appoitment reschedule selectors
  get rescheduleBackButton(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.Button')}
  get rescheduleScreenclose(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')}
  get reschedule(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button')}
  get (){return $('')}
  get (){return $('')}
  get (){return $('')}


  async rescheduleAppoitment(){
    await verifyAndClick(this.appoitmentStatusDropDown)
    await verifyAndClick(this.appoitmentStatusDropDownOptionBooked)
    await BookAppointmentPage.appointmentStatusSelection()
    await BookAppointmentPage.appointmentTypeSelection()
    await swipe("up", BookAppointmentPage.bookAppoitmentScrollView);
    await verifyAndClick(BookAppointmentPage.time)
    await verifyAndClick(this.reschedule)
    await verify(AppointmentsPage.rescheduleButton)
    await back()
    console.log("reschedule appoitment is done successfully")
  }
}
export default new AppoitmentReshedulePage();