import { verifyAndClick } from "../../helper/helper"

class VitalsPage{
  get temperature(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.view.View[1] ')}
  get pulse(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]')}
  get o2saturetion(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.view.View[3]')}
  get pain(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.view.View[4]')}
  get respiration(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.view.View[5]')}
  get systole(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.view.View[6]')}
  get diastole(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.view.View[7]')}
  get weight(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.view.View[8]')}
  get startDate(){return $('//android.widget.EditText[@text="04/08/2025"]')}
  get EndDate(){return $('//android.widget.EditText[@text="07/08/2025"]')}
  get filter(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.widget.Button')}
  get (){return $('')}
  get (){return $('')}
 async enterFilterDate(start, end) {
    await this.startDate.waitForDisplayed({ timeout: 5000 });
    await verifyAndClick(this.startDate)
    await browser.clearValue(this.startDate);
    await this.startDate.setValue(start);
    await browser.hideKeyboard();
    await verifyAndClick(this.EndDate)
    await browser.clearValue(this.EndDate);
    await this.EndDate.setValue(end);
    await browser.hideKeyboard();
    await verifyAndClick(this.filter)
    await browser.saveScreenshot('/Users/nagasubarayudu/Desktop/patientPortal/scdreenshots_of_finalOutPuts/', { fullPage: true, format: 'jpeg', quality: 50 })
  }

}
export default new VitalsPage();