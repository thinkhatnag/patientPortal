import { verify } from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { verifyAndClick,swipe } from '/Users/nagasubarayudu/Desktop/patientPortal/helper/helper.js';

class EnterNewVitalsPage {
  // get EnterNewVitalsScrollview(){
  //   return $('//android.widget.ScrollView')
  // }

  // // Getters for UI elements
  // get EnterNewVitalsScrollview() {
  //   return $('//android.widget.ScrollView'); // Update with actual resource-id
  // }

  // // Label getters (TextView)
  // get height() {
  //   return $('//android.widget.TextView[@text="Height (inches)"]');
  // }
  // get respiration() {
  //   return $('//android.widget.TextView[@text="Respiration (pm)"]');
  // }
  // get pain() {
  //   return $('//android.widget.TextView[@text="Pain (lm)"]');
  // }
  // get weight() {
  //   return $('//android.widget.TextView[@text="Weight (lbs)"]');
  // }
  // get systole() {
  //   return $('//android.widget.TextView[@text="Systole (mm)"]');
  // }
  // get diastole() {
  //   return $('//android.widget.TextView[@text="Diastole (mm)"]');
  // }
  // get o2Saturation() {
  //   return $('//android.widget.TextView[@text="O2 Saturation (%)"]');
  // }
  // get temperature() {
  //   return $('//android.widget.TextView[@text="Temperature (Fahrenheit)"]');
  // }
  // get pulse() {
  //   return $('//android.widget.TextView[@text="Pulse (bpm)"]');
  // }
  // get inhaledOxygen() {
  //   return $('//android.widget.TextView[@text="Inhaled Oxygen (%)"]');
  // }
  // get heightTextField(){
  //   return $('//android.widget.ScrollView/android.widget.EditText[1]')
  // }
  // get weightTextField(){
  //   return $('//android.widget.ScrollView/android.widget.EditText[2]')
  // }
  // get systoleTextField(){
  //   return $('//android.widget.ScrollView/android.widget.EditText[3]')
  // }
  // get diastoleTextField(){
  //   return $('//android.widget.ScrollView/android.widget.EditText[4]')
  // }
  // get respirationTextField(){
  //   return $('//android.widget.ScrollView/android.widget.EditText[4]')
  // }
  // get painTextField(){
  //   return $('//android.widget.ScrollView/android.widget.EditText[4]')
  // }
  // get o2SaturationTextField(){
  //   return $('//android.widget.ScrollView/android.widget.EditText[2]')
  // }
  // get temperatureTextField(){
  //   return $('//android.widget.ScrollView/android.widget.EditText[3]')
  // }
  // get pulseTextField(){
  //   return $('//android.widget.ScrollView/android.widget.EditText[4]')
  // }
  // get inhaledOxygenTextField(){
  //   return $('//android.widget.ScrollView/android.widget.EditText[5]')
  // }

  // // Button getters
  // get proceed() {
  //   return $('//android.widget.TextView[@text="Proceed"]');
  // }
  // get cancel() {
  //   return $('//android.widget.TextView[@text="Cancel"]');
  // }

  // // Validation ranges
  // ranges = {
  //   height: { min: 20, max: 100, unit: 'inches' },
  //   weight: { min: 2, max: 500, unit: 'lbs' },
  //   systole: { min: 70, max: 200, unit: 'mmHg' },
  //   diastole: { min: 40, max: 120, unit: 'mmHg' },
  //   o2Saturation: { min: 0, max: 100, unit: '%' },
  //   temperature: { min: 90, max: 108, unit: 'Fahrenheit' },
  //   pulse: { min: 30, max: 200, unit: 'bpm' },
  //   inhaledOxygen: { min: 21, max: 100, unit: '%' },
  // };

  // // Helper method to generate random number in range
  // getRandomValue(field) {
  //   const range = this.ranges[field];
  //   const min = range.min;
  //   const max = range.max;
  //   // For temperature, generate one decimal place
  //   if (field === 'temperature') {
  //     return (Math.random() * (max - min) + min).toFixed(1);
  //   }
  //   // For other fields, return integer
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  // // Helper method to validate input
  // async validateInput(value, field) {
  //   const range = this.ranges[field];
  //   const parsedValue = parseFloat(value);
  //   if (isNaN(parsedValue) || parsedValue < range.min || parsedValue > range.max) {
  //     throw new Error(
  //       `${field} must be a number between ${range.min} and ${range.max} ${range.unit}. Got: ${value}`
  //     );
  //   }
  //   return parsedValue;
  // }

  // // Helper method to ensure element is visible
  // async scrollToElement(element) {
  //   await element.waitForDisplayed({ timeout: 10000 });
  //   await swipe("down", this.EnterNewVitalsScrollview);
  // }

  // async enterHeight(height) {
  //   const validHeight = await this.validateInput(height, 'height');
  //   await this.scrollToElement(this.height);
  //   await this.heightTextField.setValue(validHeight);
  // }

  // async enterWeight(weight) {
  //   const validWeight = await this.validateInput(weight, 'weight');
  //   await this.scrollToElement(this.weight);
  //   await this.weightTextField.setValue(validWeight);
  // }

  // async enterSystole(systole) {
  //   const validSystole = await this.validateInput(systole, 'systole');
  //   await this.scrollToElement(this.systole);
  //   await this.systoleTextField.setValue(validSystole);
  // }

  // async enterDiastole(diastole) {
  //   const validDiastole = await this.validateInput(diastole, 'diastole');
  //   await this.scrollToElement(this.diastole);
  //   await this.diastoleTextField.setValue(validDiastole);
  // }

  // async enterO2Saturation(o2Saturation) {
  //   const validO2 = await this.validateInput(o2Saturation, 'o2Saturation');
  //   await this.scrollToElement(this.o2Saturation);
  //   await this.o2SaturationTextField.setValue(validO2);
  // }

  // async enterTemperature(temperature) {
  //   const validTemp = await this.validateInput(temperature, 'temperature');
  //   await this.scrollToElement(this.temperature);
  //   await this.temperatureTextField.setValue(validTemp);
  // }

  // async enterPulse(pulse) {
  //   const validPulse = await this.validateInput(pulse, 'pulse');
  //   await this.scrollToElement(this.pulse);
  //   await this.pulseTextField.setValue(validPulse);
  // }

  // async enterInhaledOxygen(inhaledOxygen) {
  //   const validOxygen = await this.validateInput(inhaledOxygen, 'inhaledOxygen');
  //   await this.scrollToElement(this.inhaledOxygen);
  //   await this.inhaledOxygenTextField.setValue(validOxygen);
  // }

  // async takeScreenshot(filename) {
  //   const dir = '/Users/nagasubarayudu/Desktop/patientPortal/screenshots_of_finalOutputs';
  //   await fs.mkdir(dir, { recursive: true });
  //   const screenshotPath = path.join(dir, `${filename}_${Date.now()}.png`);
  //   await driver.saveScreenshot(screenshotPath);
  //   console.log(`Screenshot saved to ${screenshotPath}`);
  //   return screenshotPath;
  // }

  // async fillTheVitals() {
  //   const height = this.getRandomValue('height');
  //   const weight = this.getRandomValue('weight');
  //   const systole = this.getRandomValue('systole');
  //   const diastole = this.getRandomValue('diastole');
  //   const o2Saturation = this.getRandomValue('o2Saturation');
  //   const temperature = this.getRandomValue('temperature');
  //   const pulse = this.getRandomValue('pulse');
  //   const inhaledOxygen = this.getRandomValue('inhaledOxygen');

  //   await this.enterHeight(height);
  //   await this.enterWeight(weight);
  //   await this.enterSystole(systole);
  //   await this.enterDiastole(diastole);
  //   await this.enterO2Saturation(o2Saturation);
  //   await this.enterTemperature(temperature);
  //   await this.enterPulse(pulse);
  //   await this.enterInhaledOxygen(inhaledOxygen);

  //   // Log the random values used
  //   console.log('Random vitals used:', {
  //     height,
  //     weight,
  //     systole,
  //     diastole,
  //     o2Saturation,
  //     temperature,
  //     pulse,
  //     inhaledOxygen
  //   });

  //   // Take a screenshot after filling the vitals
  //   const screenshotPath = await this.takeScreenshot('vitals_filled');
  //   console.log(`Vitals filled and screenshot taken: ${screenshotPath}`);
  //   // Click the Proceed button
  //   await verifyAndClick(this.proceed);
  //   console.log(chalk.green('all the vitals are enterd and and check the output of screenshot in screenshots_of_finalOutputs folder'));
  // // Wait for 5 seconds to observe the result
  // }
  // /pageobjects/VitalsPage.js

  get heightField() {
    return $('-android uiautomator:new UiSelector().text("Height (inches)")');
  }

  get heightInput() {
    return $('-android uiautomator:new UiSelector().className("android.widget.EditText").instance(0)');
  }

  get weightField() {
    return $('-android uiautomator:new UiSelector().text("Weight (lbs)")');
  }

  get weightInput() {
    return $('-android uiautomator:new UiSelector().className("android.widget.EditText").instance(1)');
  }

  get systoleField() {
    return $('-android uiautomator:new UiSelector().text("Systole (mm)")');
  }

  get systoleInput() {
    return $('-android uiautomator:new UiSelector().className("android.widget.EditText").instance(2)');
  }

  get diastoleField() {
    return $('-android uiautomator:new UiSelector().text("Diastole (mm)")');
  }

  get diastoleInput() {
    return $('-android uiautomator:new UiSelector().className("android.widget.EditText").instance(3)');
  }

  get respirationField() {
    return $('-android uiautomator:new UiSelector().text("Respiration (pm)")');
  }

  get respirationInput() {
    return $('-android uiautomator:new UiSelector().className("android.widget.EditText").instance(1)');
  }

  get painField() {
    return $('-android uiautomator:new UiSelector().text("Pain (lm)")');
  }

  get painInput() {
    return $('-android uiautomator:new UiSelector().className("android.widget.EditText").instance(2)');
  }

  get o2SatField() {
    return $('-android uiautomator:new UiSelector().text("O2 Saturation (%)")');
  }

  get o2SatInput() {
    return $('-android uiautomator:new UiSelector().className("android.widget.EditText").instance(3)');
  }

  get tempField() {
    return $('-android uiautomator:new UiSelector().text("Temperature (Fahrenheit)")');
  }

  get tempInput() {
    return $('-android uiautomator:new UiSelector().className("android.widget.EditText").instance(4)');
  }

  get pulseField() {
    return $('-android uiautomator:new UiSelector().text("Pulse (bpm)")');
  }

  get pulseInput() {
    return $('-android uiautomator:new UiSelector().className("android.widget.EditText").instance(3)');
  }

  get inhaledO2Field() {
    return $('-android uiautomator:new UiSelector().text("Inhaled Oxygen (%)")');
  }

  get inhaledO2Input() {
    return $('-android uiautomator:new UiSelector().className("android.widget.EditText").instance(4)');
  }

  get submitButton() {
    return $('-android uiautomator:new UiSelector().className("android.widget.Button").instance(9)');
  }

  async fillVitals() {
    await this.heightField.click();
    await this.heightInput.addValue('75');

    await this.weightField.click();
    await this.weightInput.addValue('300');

    await this.systoleField.click();
    await this.systoleInput.addValue('135');

    await this.diastoleField.click();
    await this.diastoleInput.addValue('145');

    await driver.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 635, y: 2466 },
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', duration: 1000, x: 651, y: 1748 },
        { type: 'pointerUp', button: 0 }
      ]
    }]);

    await this.respirationField.click();
    await this.respirationInput.addValue('34');

    await this.painField.click();
    await this.painInput.addValue('6');

    await this.o2SatField.click();
    await this.o2SatInput.addValue('80');

    await this.tempField.click();
    await this.tempInput.addValue('190');

    await driver.performActions([{
      type: 'pointer',
      id: 'finger2',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 570, y: 2485 },
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', duration: 1000, x: 568, y: 1743 },
        { type: 'pointerUp', button: 0 }
      ]
    }]);

    await this.pulseField.click();
    await this.pulseInput.addValue('190');

    await this.inhaledO2Field.click();
    await this.inhaledO2Input.addValue('178');

    await this.submitButton.click();
  }
}





export default new EnterNewVitalsPage();



// const el27 = await driver.$("-android uiautomator:new UiSelector().text(\"Height (inches)\")");
// await el27.click();
// const el28 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(0)");
// await el28.addValue("75");
// const el29 = await driver.$("-android uiautomator:new UiSelector().text(\"Weight (lbs)\")");
// await el29.click();
// const el30 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(1)");
// await el30.addValue("300");
// const el31 = await driver.$("-android uiautomator:new UiSelector().text(\"Systole (mm)\")");
// await el31.click();
// const el32 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(2)");
// await el32.addValue("135");
// const el33 = await driver.$("-android uiautomator:new UiSelector().text(\"Diastole (mm)\")");
// await el33.click();
// const el34 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(3)");
// await el34.addValue("145");
// await driver.action('pointer')
//   .move({ duration: 0, x: 635, y: 2466 })
//   .down({ button: 0 })
//   .move({ duration: 1000, x: 651, y: 1748 })
//   .up({ button: 0 })
//   .perform();

// const el35 = await driver.$("-android uiautomator:new UiSelector().text(\"Respiration (pm)\")");
// await el35.click();
// const el36 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(1)");
// await el36.addValue("34");
// const el37 = await driver.$("-android uiautomator:new UiSelector().text(\"Pain (lm)\")");
// await el37.click();
// const el38 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(2)");
// await el38.addValue("6");
// const el39 = await driver.$("-android uiautomator:new UiSelector().text(\"O2 Saturation (%)\")");
// await el39.click();
// const el40 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(3)");
// await el40.addValue("80");
// const el41 = await driver.$("-android uiautomator:new UiSelector().text(\"Temperature (Fahrenheit)\")");
// await el41.click();
// const el42 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(4)");
// await el42.addValue("190");
// await driver.action('pointer')
//   .move({ duration: 0, x: 570, y: 2485 })
//   .down({ button: 0 })
//   .move({ duration: 1000, x: 568, y: 1743 })
//   .up({ button: 0 })
//   .perform();

// const el43 = await driver.$("-android uiautomator:new UiSelector().text(\"Pulse (bpm)\")");
// await el43.click();
// const el44 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(3)");
// await el44.addValue("190");
// const el45 = await driver.$("-android uiautomator:new UiSelector().text(\"Inhaled Oxygen (%)\")");
// await el45.click();
// const el47 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(4)");
// await el47.addValue("178");
// const el48 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.Button\").instance(9)");
// await el48.click();
