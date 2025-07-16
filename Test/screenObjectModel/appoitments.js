import { verify, verifyAndClick } from "/Users/nagasubarayudu/Desktop/patientPortal/helper/helper.js";
import AppoitmentReshedulePage from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/rescheduleAppoitnent.js";
import BookAppointmentPage from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/bookAppoitment.js";
class AppointmentsPage {
  get upcoming() {
    return $(
    `//android.widget.TextView[@text="Upcoming"]`
    );
  }
  get completed() {
    return $(
     `//android.widget.TextView[@text="Completed"]`
    );
  }
  get canceled() {
    return $(
     `//android.widget.TextView[@text="Cancelled"]`
    );
  }
  get all() {
    return $(
      "//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[4]"
    );
  }
  get sheduleAppoitment() {
    return $('//android.widget.TextView[@text="Schedule an Appointment"]');
  }
  get filter() {
    return $(
      "//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[3]"
    );
  }
  get bokkingDetails() {
    return $(
      `//android.widget.TextView[@text="Booking Details"]`
    );
  }
  get bokkingDetailsScreen() {
    return $("//android.widget.ScrollView");
  }


  get reschedulePageBackButton() {
    return $(
      "//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.Button"
    );
  }
  get rescheduleButton() {
    return $("//android.widget.ScrollView/android.view.View[1]/android.widget.Button");
  }
  get rescheduleconfirmationNo() {
    return $(`//android.widget.TextView[@text="No"]`);
  }
  get rescheduleconfirmationYes() {
    return $("//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]");
  }
  get rescheduleconfirmationPopUpText() {
    return $(`//android.widget.TextView[@text="Do you want to Reschedule the appointment?"]`);
  }
  get () {
    return $("");
  }

  async checkTheBookingDetailsAndRescheduleAppointment() {

      if (this.bokkingDetails.isDisplayed()) {
        await verifyAndClick(this.bokkingDetails);
        console.log("we have an aappointment booked");
        await verifyAndClick(this.rescheduleButton)
        await verify(this.rescheduleconfirmationPopUpText)
        await verifyAndClick(this.rescheduleconfirmationYes);
        await AppoitmentReshedulePage.rescheduleAppoitment();
      }
      else {
        await verifyAndClick(this.sheduleAppoitment);
      console.log("No upcoming appointments to reschedule, navigating to schedule appointment page.");
        await BookAppointmentPage.bookAppointment()
      }
   
  }
  async randomAppointmentStatus() {
    const statuses = [this.upcoming, this.completed, this.canceled];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    const appoitmentType = statuses[randomIndex];
    await verifyAndClick(appoitmentType);
    return appoitmentType;
  }
  async upcommingAppointment() {
   const status= await this.randomAppointmentStatus()
    if(status  == this.upcoming){
      await this.checkTheBookingDetails()
    }
    else if (status == this.completed) {
      console.log("No upcoming appointments"); 
    }
  }
}

export default new AppointmentsPage();
