import { swipe, verifyAndClick } from "/Users/nagasubarayudu/Desktop/patientPortal/helper/helper.js";

class BookAppointmentPage {
  //location
  get locationDropDown() {
    return $("//android.widget.ScrollView/android.view.View[1]");
  }
  get parentXPath() {
    return $(
      "//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]"
    );
  }
  get practitionerDropDown() {
    return $("//android.widget.ScrollView/android.view.View[2]");
  }
  get appointmentStatusDropDown() {
    return $("//android.widget.ScrollView/android.view.View[3]");
  }
  get appointmentTypeDropDown() {
    return $("//android.widget.ScrollView/android.view.View[4]");
  }
  get selectPatientDropDown() {
    return $("//android.widget.ScrollView/android.view.View[5]");
  }
  get proceed() {
    return $('//android.widget.TextView[@text="Proceed"]');
  }
  get cancel() {
    return $('//android.widget.TextView[@text="Cancel"]');
  }
  get searchLocationSearchField() {
    return $("//android.widget.EditText");
  }
  get practitioner() {
    return $(
      "//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]"
    );
  }

  //Appoitment Status Elements
  get booked() {
    return $('//android.widget.TextView[@text="Booked"]');
  }
  get proposed() {
    return $('//android.widget.TextView[@text="Proposed"]');
  }

  //Appointment Type Elements
  get routineCheckUp() {
    return $(
      '//android.widget.TextView[@text="A routine check-up, such as an annual physical"]'
    );
  }
  get emergency() {
    return $('//android.widget.TextView[@text="Emergency appointment"]');
  }
  get followUp() {
    return $(
      '//android.widget.TextView[@text="A follow up visit from a previous appointment"]'
    );
  }
  get routine() {
    return $('//android.widget.TextView[@text="Routine appointment"]');
  }
  get previouslyUnScheduled() {
    return $(
      '//android.widget.TextView[@text="A previously unscheduled walk-in visit"]'
    );
  }

  //Patient List View
  get paientListView() {
    return $(
      "//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]"
    );
  
  }
  async location(locationText) {
    const searchedLocation = await $(
      `//android.widget.TextView[@text="${locationText}"]`
    );
    await verifyAndClick(searchedLocation);
    await verifyAndClick(this.proceed);
  }
  get practitionerView() {
    return $(
      "//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]"
    );
  }
  get bookAppoitmentScrollView(){return $('//android.widget.ScrollView');}

  get p1(){return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]');}
  get p2(){return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]');}
  get p3(){return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]');}
  get p4(){return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[4]');}
  get p5(){return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[5]');}
  get schedule(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button');}
  get time(){return $('//android.widget.TextView[@text="01:45 AM"]');}


  async selectLocationAndPractitioner(maxRetries = 3) {
    await driver.pause(2000);
    await verifyAndClick(this.locationDropDown);

    const locations = [
      
      "NEO CARE",
      "Kk Road",
      "Florida road",
      "Nigeria",
      "Texas",
      "Jerusalem",
      "New york",
    ];
      const randomIndex = Math.floor(Math.random() * locations.length);
      const selectedLocation = locations[randomIndex];
      console.log(`Selected location: ${selectedLocation}`);

      // Perform location search
      await this.searchLocationSearchField.waitForExist({ timeout: 10000 });
      await verifyAndClick(this.searchLocationSearchField);
      await this.searchLocationSearchField.setValue(selectedLocation);
      await this.location(selectedLocation);
      console.log(`Performed location search for: ${selectedLocation}`);

      // Wait for practitioner dropdown
      await verifyAndClick(this.practitionerDropDown);
      await verifyAndClick(this.practitioner)
      await verifyAndClick(this.proceed);
      console.log("Clicked on Proceed button after selecting location and practitioner");
    }

  async appointmentStatusSelection() {
    await verifyAndClick(this.appointmentStatusDropDown);
    await driver.pause(5000); // Wait for the dropdown to be ready
    const appointmentStatus = [this.booked, this.proposed]; // Fixed typo: praposed -> proposed
    const randomIndex = Math.floor(Math.random() * appointmentStatus.length);
    const selectedStatus = appointmentStatus[randomIndex];
    await verifyAndClick(selectedStatus)
    await verifyAndClick(this.proceed);
  }

  async appointmentTypeSelection() {
    await verifyAndClick(this.appointmentTypeDropDown);
    await driver.pause(2000); // Wait for the dropdown to be ready
    const appointmentTypes = [
      this.routineCheckUp,
      this.emergency,
      this.followUp,
      this.routine,
      this.previouslyUnScheduled,
    ];

    const randomIndex = Math.floor(Math.random() * appointmentTypes.length);
    const selectedType = appointmentTypes[randomIndex];
    await verifyAndClick(selectedType);
    console.log("Appointment type selected successfully");
    await verifyAndClick(this.proceed)
  }
  async selectPatient() {
    await verifyAndClick(this.selectPatientDropDown);
    await driver.pause(2000); // Wait for the dropdown to be ready
    const patientList = [this.p1, this.p2, this.p3, this.p4, this.p5];
    const randomPatient = Math.floor(Math.random() * patientList.length);
    const selectedPatient = patientList[randomPatient];
    await driver.pause(5000); // Wait for the patient list to be ready
    await verifyAndClick(selectedPatient);
    await driver.pause(2000); // Wait for the selection to be processesd
    await verifyAndClick(this.proceed);
  }
  async bookAppointment() {
    
    await this.selectLocationAndPractitioner();
    await this.appointmentStatusSelection();
    await this.appointmentTypeSelection();
    await this.selectPatient();
    await swipe("up", this.bookAppoitmentScrollView);
    await verifyAndClick(this.time)
    await verifyAndClick(this.schedule);
    
  }
}
export default new BookAppointmentPage();
