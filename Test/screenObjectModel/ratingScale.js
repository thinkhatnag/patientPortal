import {verifyAndClick, screenshot, verify} from '/Users/nagasubarayudu/Desktop/patientPortal/helper/helper.js'
class RatingScalePage{
  get addRatingScaleButton() {
    return $('//android.widget.TextView[@text="Add Rating Scale"]');
  }
  
  get continueForm() {
    return $('//android.widget.TextView[@text="Continue Form"]');
  }
  get next() {
    return $('//android.widget.TextView[@text="Next"]');
  }
  get submit() {
    return $('//android.widget.TextView[@text="Submit"]');
  }
  get () {
    return $('');
  }

  async rattingFormOptionSelection() {
    
    const totalOptions = 4; 
    const maxAttempts = 40; 

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const randomIndex = Math.floor(Math.random() * totalOptions); 
      const option = await $(`android=new UiSelector().className("android.widget.RadioButton").instance(${randomIndex})`);
      await option.click();

      const text = await option.getText();
      console.log(`Attempt ${attempt + 1}: Clicked on radio option: ${text}`);

      if (await this.next.isDisplayed()) {
        await verifyAndClick(this.next);
        console.log('Next button clicked.');
      }
      else if (await this.submit.isDisplayed()) {
        await verifyAndClick(this.submit);
        console.log('Submit button clicked.');
        
        await driver.pause(5000);

        if (await this.addRatingScaleButton.isDisplayed()) {
          console.log('addRatingScaleButton is displayed. Stopping the process.');
          break; 
        } else {
          console.log('addRatingScaleButton not found, continuing to next question.');
        }
      } else {
        console.log('Neither next nor submit button found.');
      }
    }

    if (await this.addRatingScaleButton.isDisplayed()) {
      console.log('addRatingScaleButton is displayed.');
    } else {
      console.log('Timeout: addRatingScaleButton not found after maximum attempts.');
    }
    await screenshot();
    console.log('Rating scale form options selection completed check for the latesrt screenshot weatherb the form is submitted or not');
  }
}
export default new RatingScalePage();