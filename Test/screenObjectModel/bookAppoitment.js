import { verifyAndClick } from "../../helper/helper"

class BookAppointmentPage {
  //location 
  

get locationDropDown(){return $('//android.widget.TextView[@text="Location"]')}
get (){return $('')}
get practitionerDropDown(){return $('//android.widget.TextView[@text="Practitioner"]')}
get appointmentStatusDropDown(){return $('//android.widget.TextView[@text="Appointment Status"]')}
get appointmentTypeDropDown(){return $('//android.widget.TextView[@text="Appointment Type"]')}
get selectPatientDropDown(){return $('//android.widget.TextView[@text="Select Patient"]')}
get proceed(){return $('//android.widget.TextView[@text="Proceed"]')}
get cancel(){return $('//android.widget.TextView[@text="Cancel"]')}
get searchLocationSearchField(){return $('//android.widget.TextView[@text="Search Location"]')}
get practitionerView(){return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]')}

//Appoitment Status Elements
get booked(){return $('//android.widget.TextView[@text="Booked"]')}
get proposed(){return $('//android.widget.TextView[@text="Proposed"]')}

//Appointment Type Elements
get routineCheckUp(){return $('//android.widget.TextView[@text="A routine check-up, such as an annual physical"]')}
get emergency(){return $('//android.widget.TextView[@text="Emergency appointment"]')}
get followUp(){return $('//android.widget.TextView[@text="A follow up visit from a previous appointment"]')}
get routine(){return $('//android.widget.TextView[@text="Routine appointment"]')}
get prevoiuslyUnScheduled(){return $('//android.widget.TextView[@text="A previously unscheduled walk-in visit"]')}

//Patient List View
get paientListView(){return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]')}

async location(locationText) {
  const searchedLocation = await $(`//android.widget.TextView[@text="${locationText}"]`).waitForDisplayed({ timeout: 5000 });
  await verifyAndClick(searchedLocation);
}

// async selectLocation() {
//   locations = ["Gerogia cancer center", "NEO CARE", "Kk Road", "Florida road", "Nigeria", "Texas", "Jerusalem", "New york"];
//   const randomIndex = Math.floor(Math.random() * locations.length);
//   const selectedLocation = locations[randomIndex];
//   await this.searchLocationSearchField.setValue(selectedLocation);
//   await this.location(selectedLocation);   
// }
// async selectPractitioner() {
//     // Locate the parent element
//     const parentElement = await this.driver.$(this.practitionerView);

//     // Find all child elements
//     const practitionerElements = await parentElement.$$('./android.view.View');

//     // Get the number of child elements
//     const childCount = practitionerElements.length;
//     console.log(`Number of child elements: ${childCount}`);

//     // Print text of each child element (if available)
//     for (let i = 0; i < childCount; i++) {
//         const childXPath = `${this.parentXPath}/android.view.View[${i + 1}]`;
//         const child = await this.driver.$(childXPath);
//         const text = await child.getText();
//         if (text && text.trim() !== '') {
//             console.log(`Child ${i + 1} text: ${text}`);
//         } else {
//             console.log(`Child ${i + 1} has no text or is empty`);
//         }
//     }
//     // Select a random child element
//     if (childCount > 0) {
//         const randomIndex = Math.floor(Math.random() * childCount) + 1;
//         const randomChildXPath = `${this.parentXPath}/android.view.View[${randomIndex}]`;
//         const randomChild = await this.driver.$(randomChildXPath);
//         console.log(`Randomly selected child at index: ${randomIndex}`);

//         // Perform an action on the random child (e.g., click)
//         await randomChild.click();
//         console.log('Clicked on random child element');
//         await this.proceed.click();
//         console.log('Clicked on Proceed button selection of the Practitioner is done');
//     } 
//     else {
//         console.log('no practitioner found please ccheck the location you have selected');
//     }
// }
async selectLocationAndPractitioner(maxRetries = 3) {
  const locations = [
    "Georgia cancer center",
    "NEO CARE",
    "Kk Road",
    "Florida road",
    "Nigeria",
    "Texas",
    "Jerusalem",
    "New york",
  ];
  let retryCount = 0;
  let practitionerFound = false;

  // Validate WebDriver
  if (!this.driver) {
    throw new Error("WebDriver instance is not initialized.");
  }

  while (retryCount < maxRetries && !practitionerFound) {
    try {
      // Select a random location
      const randomIndex = Math.floor(Math.random() * locations.length);
      const selectedLocation = locations[randomIndex];
      console.log(`Attempt ${retryCount + 1}: Selected location: ${selectedLocation}`);

      // Set the location in the search field
      if (!this.searchLocationSearchField) {
        throw new Error("Search location field is not defined.");
      }
      await this.searchLocationSearchField.setValue(selectedLocation);
      console.log(`Set location search field to: ${selectedLocation}`);

      // Perform location search (assuming this.location is a method)
      await this.location(selectedLocation);
      console.log(`Performed location search for: ${selectedLocation}`);

      // Locate the parent element for practitioners
      if (!this.practitionerView) {
        throw new Error("Practitioner view selector is not defined.");
      }
      const parentElement = await this.driver.$(this.practitionerView);
      if (!(await parentElement.isDisplayed())) {
        console.log(`Parent element ${this.practitionerView} not found. Retrying with a new location.`);
        retryCount++;
        continue;
      }

      // Find all practitioner child elements
      const practitionerElements = await parentElement.$$  ("./android.view.View");
      const childCount = practitionerElements.length;
      console.log(`Number of practitioner elements found: ${childCount}`);

      // Log text of each child element
      for (let i = 0; i < childCount; i++) {
        const childXPath = `${this.practitionerView}/android.view.View[${i + 1}]`;
        const child = await this.driver.$(childXPath);
        const text = await child.getText();
        console.log(
          text && text.trim() !== ""
            ? `Practitioner ${i + 1} text: ${text}`
            : `Practitioner ${i + 1} has no text or is empty`
        );
      }

      // Select a random practitioner if available
      if (childCount > 0) {
        const randomPractitionerIndex = Math.floor(Math.random() * childCount) + 1;
        const randomPractitionerXPath = `${this.practitionerView}/android.view.View[${randomPractitionerIndex}]`;
        const randomPractitioner = await this.driver.$(randomPractitionerXPath);
        if (!(await randomPractitioner.isDisplayed() && await randomPractitioner.isEnabled())) {
          console.log(`Selected practitioner at index ${randomPractitionerIndex} is not clickable. Retrying.`);
          retryCount++;
          continue;
        }
        console.log(`Randomly selected practitioner at index: ${randomPractitionerIndex}`);

        // Click the random practitioner
        await randomPractitioner.click();
        console.log("Clicked on random practitioner element");

        // Click the proceed button
        if (!this.proceed) {
          throw new Error("Proceed button is not defined.");
        }
        await this.proceed.click();
        console.log("Clicked on Proceed button. Practitioner selection completed.");
        practitionerFound = true;
      } else {
        console.log(`No practitioners found for location: ${selectedLocation}. Retrying with a new location.`);
        retryCount++;
      }
    } catch (error) {
      console.error(`Error during location and practitioner selection: ${error.message}`);
      retryCount++;
      console.log(`Retrying... Attempt ${retryCount + 1} of ${maxRetries}`);
    }
  }

  if (!practitionerFound) {
    const errorMsg = `Failed to find practitioners after ${maxRetries} attempts. Please check the location data or UI elements.`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }
}

async appointmentStatusSelection() {
  const appointmentStatus = [this.booked, this.proposed]; // Fixed typo: praposed -> proposed
  if (!appointmentStatus.every(status => status)) {
    throw new Error("One or more appointment status values are undefined.");
  }

  const randomIndex = Math.floor(Math.random() * appointmentStatus.length);
  const selectedStatus = appointmentStatus[randomIndex];
  console.log(`Selected appointment status: ${selectedStatus}`);

  const statusElement = await this.driver.$(`//android.widget.TextView[@text="${selectedStatus}"]`);
  if (!(await statusElement.isDisplayed() && await statusElement.isEnabled())) {
    throw new Error(`Appointment status element for "${selectedStatus}" not found or not clickable.`);
  }
  await statusElement.click();
  console.log("Appointment status selected successfully");

  if (!this.proceed) {
    throw new Error("Proceed button is not defined.");
  }
  await this.proceed.click();
  console.log("Clicked on Proceed button after selecting appointment status");
}

async appointmentTypeSelection() {
  const appointmentTypes = [
    this.routineCheckUp,
    this.emergency,
    this.followUp,
    this.routine,
    this.prevoiuslyUnScheduled, // Fixed typo: prevoiuslyUnScheduled -> previouslyUnScheduled
  ];
  if (!appointmentTypes.every(type => type)) {
    throw new Error("One or more appointment type values are undefined.");
  }

  const randomIndex = Math.floor(Math.random() * appointmentTypes.length);
  const selectedType = appointmentTypes[randomIndex];
  console.log(`Selected appointment type: ${selectedType}`);

  const typeElement = await this.driver.$(`//android.widget.TextView[@text="${selectedType}"]`);
  if (!(await typeElement.isDisplayed() && await typeElement.isEnabled())) {
    throw new Error(`Appointment type element for "${selectedType}" not found or not clickable.`);
  }
  await typeElement.click();
  console.log("Appointment type selected successfully");

  if (!this.proceed) {
    throw new Error("Proceed button is not defined.");
  }
  await this.proceed.click();
  console.log("Clicked on Proceed button after selecting appointment type");
}

async selectPatient(maxRetries = 3) {
  let retryCount = 0;
  let patientSelected = false;
  let result = null;

  if ( !this.paientListView) {
    throw new Error("WebDriver or parentXPath is not initialized.");
  }

  while (retryCount < maxRetries && !patientSelected) {
    try {
      // Locate the parent element
      const parentElement = await this.driver.$(this.parentXPath);
      if (!(await parentElement.isDisplayed())) {
        console.log(`Parent element ${this.paientListView} not found. Retrying.`);
        retryCount++;
        continue;
      }

      // Find all child elements (TextView and View)
      const textViewPatientName = await parentElement.  $$(".//android.widget.TextView");
      const viewPatientName = await parentElement.$$("./android.view.View");
      const allPatientName = [...textViewPatientName, ...viewPatientName];
      const patientNameCount = allPatientName.length;
      console.log(`Number of patient elements: ${patientNameCount}`);

      // Print text of each child element
      for (let i = 0; i < patientNameCount; i++) {
        const child = allPatientName[i];
        const text = await child.getText();
        const tagName = await child.getTagName();
        console.log(
          text && text.trim() !== ""
            ? `Child ${i + 1} (${tagName}) text: ${text}`
            : `Child ${i + 1} (${tagName}) has no text or is empty`
        );
      }

      // Select a random child element
      if (patientNameCount > 0) {
        const randomIndex = Math.floor(Math.random() * patientNameCount);
        const randomPatientName = allPatientName[randomIndex];
        const randomPatientNameText = await randomPatientName.getText();
        const randomPatientNameTag = await randomPatientName.getTagName();

        // Check if the element is clickable
        if (!(await randomPatientName.isDisplayed() && await randomPatientName.isEnabled())) {
          console.log(`Selected patient at index ${randomIndex + 1} is not clickable. Retrying.`);
          retryCount++;
          continue;
        }

        console.log(
          `Randomly selected patient at index ${randomIndex + 1} (${randomPatientNameTag}) with text: ${
            randomPatientNameText || "No text"
          }`
        );

        // Perform an action on the random child (e.g., click)
        await randomPatientName.click();
        console.log("Clicked on random patient element");

        // Store the random child's details
        result = {
          element: randomPatientName,
          text: randomPatientNameText || "No text",
          tag: randomPatientNameTag,
          index: randomIndex + 1,
        };
        patientSelected = true;
      } else {
        console.log("No patient elements found to select. Retrying.");
        retryCount++;
      }
    } catch (error) {
      console.error(`Error during patient selection: ${error.message}`);
      retryCount++;
      console.log(`Retrying... Attempt ${retryCount + 1} of ${maxRetries}`);
    }
  }

  if (!patientSelected) {
    console.error(`Failed to select a patient after ${maxRetries} attempts.`);
    throw new Error("Patient selection failed after maximum retries.");
  }

  return result;
}
}
export default new BookAppointment();