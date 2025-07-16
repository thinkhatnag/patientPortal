// /Users/nagasubarayudu/Desktop/patientPortal/pages/vitalsPage.js
import { verifyAndClick, swipe } from "/Users/nagasubarayudu/Desktop/patientPortal/helper/helper.js";
import fs from 'fs';
import { addStep } from '@wdio/allure-reporter';

// Ensure screenshot directory exists
const SCREENSHOT_PATH = process.env.SCREENSHOT_PATH || './screenshots/';
if (!fs.existsSync(SCREENSHOT_PATH)) {
    fs.mkdirSync(SCREENSHOT_PATH, { recursive: true });
}

class VitalsPage {
    // Element selectors (use resource-id or content-desc if available via Appium Inspector)
    get entervitals() { return $('//android.widget.TextView[@text="Enter New Vitals"]'); }
    get temperature() { return $('//android.widget.TextView[@text="Temperature"]'); }
    get pulse() { return $('//android.widget.TextView[@text="Pulse"]'); }
    get o2Saturation() { return $('//android.widget.TextView[@text="O2 Saturation"]'); }
    get pain() { return $('//android.widget.TextView[@text="Pain"]'); }
    get respiration() { return $('//android.widget.TextView[@text="Respiration"]'); }
    get systole() { return $('//android.widget.TextView[@text="Systole"]'); }
    get diastole() { return $('//android.widget.TextView[@text="Diastole"]'); }
    get height() { return $('//android.widget.TextView[@text="Height"]'); }
    get inhaleOxygen() { return $('//android.widget.TextView[@text="Inhale Oxygen"]'); }
    get weight() { return $('//android.widget.TextView[@text="Weight"]'); }
    get startDate() { return $('//android.widget.EditText[1]'); } // Adjust to resource-id if possible
    get endDate() { return $('//android.widget.EditText[2]'); } // Adjust to resource-id if possible
    get filter() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.widget.Button'); }
    get vitalsScreen() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]'); }

    async randomStartDate() {
      try {
          const today = new Date();
          const randomDays = Math.floor(Math.random() * 30) + 1; // Between 1 and 30
          const startDate = new Date(today);
          startDate.setDate(today.getDate() - randomDays); // Past date
          const formattedDate = startDate.toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
              year: 'numeric',
          });
          console.log(`Generated start date: ${formattedDate}`);
          return formattedDate;
      } catch (error) {
          console.error('Error in randomStartDate:', error);
          throw error;
      }
  }
  
  async randomEndDate(startDate) {
      try {
          const start = new Date(startDate);
          const today = new Date();
  
          // Calculate max days we can add without going past today
          const maxAdditionalDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  
          if (maxAdditionalDays <= 0) {
              throw new Error('Start date is today or in the future, cannot generate a later end date.');
          }
  
          const randomDays = Math.floor(Math.random() * maxAdditionalDays) + 1;
          const endDate = new Date(start);
          endDate.setDate(start.getDate() + randomDays);
  
          const formattedDate = endDate.toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
              year: 'numeric',
          });
          console.log(`Generated end date: ${formattedDate}`);
          return formattedDate;
      } catch (error) {
          console.error('Error in randomEndDate:', error);
          throw error;
      }
  }
  
    async enterFilterDate() {
        try {
            addStep('Generate random start date');
            const start = await this.randomStartDate();
            const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
            if (!dateRegex.test(start)) {
                throw new Error('Invalid start date format. Use MM/DD/YYYY');
            }

            addStep('Generate random end date');
            const end = await this.randomEndDate(start);
            if (!dateRegex.test(end)) {
                throw new Error('Invalid end date format. Use MM/DD/YYYY');
            }

            // Validate end date is after start date
            const startDateObj = new Date(start);
            const endDateObj = new Date(end);
            if (endDateObj <= startDateObj) {
                throw new Error('End date must be after start date');
            }

            addStep(`Enter start date: ${start}`);
            await this.startDate.waitForDisplayed({ timeout: 10000 });
            await verifyAndClick(this.startDate);
            await this.startDate.setValue(start);
            if (await browser.isKeyboardShown()) await browser.hideKeyboard();
            console.log(`Entered start date: ${start}`);

            addStep(`Enter end date: ${end}`);
            await this.endDate.waitForDisplayed({ timeout: 10000 });
            await verifyAndClick(this.endDate);
            await this.endDate.setValue(end);
            if (await browser.isKeyboardShown()) await browser.hideKeyboard();
            console.log(`Entered end date: ${end}`);

            addStep('Click filter button');
            await verifyAndClick(this.filter);
            console.log('Clicked filter button');

            addStep('Capture screenshot after filtering');
            await browser.saveScreenshot(`${SCREENSHOT_PATH}filter_${Date.now()}.png`);
        } catch (error) {
          console.error('Error in enterFilterDate:', error);
          await browser.saveScreenshot(`${SCREENSHOT_PATH}error_filter_${Date.now()}.png`);
          throw error;
        }
    }

    async randomVitalSelection() {
        try {
            const vitals = [
                this.temperature,
                this.pulse,
                this.o2Saturation,
                this.pain,
                this.respiration,
                this.systole,
                this.diastole,
                this.weight,
                this.height,
                this.inhaleOxygen
            ];
            const randomIndex = Math.floor(Math.random() * vitals.length);
            const selectedVital = vitals[randomIndex];
            const vitalName = await selectedVital.getText();
            addStep(`Select vital: ${vitalName}`);
            console.log(`Selected vital: ${vitalName}`);

            // Retry swipe up to 3 times if element is not displayed
            let maxRetries = 3;
            while (!(await selectedVital.isDisplayed()) && maxRetries > 0) {
                addStep('Swipe down to find vital');
                await swipe("down", this.vitalsScreen);
                maxRetries--;
                await browser.pause(1000); // Allow UI to settle
            }

            if (!(await selectedVital.isDisplayed())) {
                throw new Error(`Vital element ${vitalName} not displayed after swiping`);
            }

            await verifyAndClick(selectedVital);
            console.log(`Clicked vital: ${vitalName}`);
            addStep(`Capture screenshot after selecting vital: ${vitalName}`);
            await browser.saveScreenshot(`${SCREENSHOT_PATH}vitals_${Date.now()}.png`);

        } catch (error) {
            console.error('Error in randomVitalSelection:', error);
            await browser.saveScreenshot(`${SCREENSHOT_PATH}error_vitals_${Date.now()}.png`);

            throw error;
        }
    }
}

export default new VitalsPage();