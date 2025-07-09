class AppointmentPage{
  get upcoming(){return $('//android.widget.TextView[@text="Upcoming"]')}
  get completed(){return $('//android.widget.TextView[@text="Completed"]')}
  get canceled(){return $('//android.widget.TextView[@text="Cancelled"]')}
  get all(){return $('//android.widget.TextView[@text="Cancelled"]')}
  get sheduleAppoitment(){return $('//android.widget.TextView[@text="Schedule an Appointment"]')}
  get filter(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[3]')}
  get bokkingDetails(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.view.View[1]/android.widget.Button')}
  get bokkingDetailsScreen(){return $('//android.widget.ScrollView')}
  get bookingDetailsRescheduleOptionsCancel(){return $('//android.widget.ScrollView/android.view.View[2]/android.widget.Button')}
  get bokkingDetailsRescheduleOptionReshedual(){return $('//android.widget.ScrollView/android.view.View[1]/android.widget.Button')}
  get rescheduleConfirmationText(){return $('//android.widget.TextView[@text="Do you want to Reschedule the appointment?"]')}
  
  get reschedulePageBackButton(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.Button')}
  get () { return $(''); }
  get () { return $(''); }
  get () { return $(''); }
  get () { return $(''); }
  get () { return $(''); }
  get () { return $(''); }
  get () { return $(''); }
  get () { return $(''); }
  get () { return $(''); }

}
export default new AppointmentPage();