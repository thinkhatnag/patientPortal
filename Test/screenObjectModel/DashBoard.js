class DashBoardPage{
  // Dashboard Page Object Model

  get PatientButton(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.Button')}

get navigationBar(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')}
	get profilDropDown(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Button')}
  get selectPatientBobtomBar(){return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View')}
  get selectPatientBobtomBarClose(){returnv$('//android.widget.Button')}
  get navigationBarClose(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.widget.Button')}
  get vitals(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]')}
  get documents(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[3]')}
  get settings(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[4]')}
  get logout(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[5]/android.view.View')}
  get logoutClose(){return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[1]')}
  get logoutCancel(){return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[3]')}
  get LogoutConfirmation(){return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[2]')}
  get appoitment(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[1]')}
  get tasks(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[1]')}
  get ehr(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[1]')}
  get (){return $('')}
  get (){return $('')}
  
  //HomePage selectors
  get upcommingAppoitmentsList(){return $('//android.widget.TextView[@text="Upcoming appointments"]')}
  get AppoitmentSeeAll(){return $('(//android.widget.TextView[@text="See all"])[1]')}
  get sheduleAppointment(){return $('//android.widget.TextView[@text="Schedule an Appointment"]')}
  get healthDataScrollView(){return $('//android.widget.ScrollView/android.view.View[2]')}
  get healthDataSeeAll(){return $('(//android.widget.TextView[@text="See all"])[2]')}
  get diagnosis(){return $('//android.widget.TextView[@text="Diagnosis"]')}
  get diagnosisSeeAll(){return $('(//android.widget.TextView[@text="See all"])[3]')}
  get diagnosisScrollView(){return $('//android.widget.ScrollView/android.view.View[3]')}

  //Homepage Medications
  get medicationsTextView(){return $('//android.widget.TextView[@text="Medications"]')}
  get medicationsSeeAll(){return $('(//android.widget.TextView[@text="See all"])[1]')}
  get medicationScrollview(){return $('//android.widget.ScrollView/android.view.View[2]')}


  get ratingScaleText (){return $('//android.widget.TextView[@text="Rating Scale"]')}
  get addTheRattingScale(){return $('//android.widget.ScrollView/android.view.View[3]')}
  get ratingScaleScrollView(){return $('//android.widget.ScrollView/android.view.View[4]')}


  //Homepage Allargies
  get allargiesTextView(){return $('//android.widget.TextView[@text="Allergies"]')}
  get allargiesscrollView(){return $('//android.widget.ScrollView/android.view.View[5]')}
  get allargiesSeeAll(){return $('(//android.widget.TextView[@text="See all"])[2]')}

  //
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

}
export default  new DashBoardPage();