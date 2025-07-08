
import dotenv from 'dotenv';
import { hideKeyboard } from '../../helper/helper';
dotenv.config({ path: '/Users/nagasubarayudu/Desktop/patientPortal/.env' });
class LoginPage {
  get emailField() { return $('new UiSelector().className("android.widget.EditText").instance(0)'); }
  get passwordField() { return $('new UiSelector().className("android.widget.EditText").instance(1)'); }
  get loginButton() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button'); }
  get passwordRequired() { return $('//android.widget.TextView[@text="Password is required"]'); }
  get WrongPassword() { return $('//android.widget.TextView[@text="The password is invalid or the user does not have a password."]'); }
  get emailRequired() { return $('//android.widget.TextView[@text="Email is required"]'); }
  get invalidEmailError() { return $('//android.widget.TextView[@text="Invalid email address"]'); }
  get emailNotRegisteredError() { return $('//android.widget.TextView[@text="No account associated with the email address"]'); }
  get homescreenAnimation() { return $(''); }
  get passwordCount () { return $('//android.widget.TextView[@text="Password should be more than or equal to 8 characters"]'); }
  get PasswordFieldEyeIconClose () { return $('//android.widget.TextView[@text="Forgot Password?"]'); }
  get forgotPassword() {return $('//android.widget.TextView[@text="Forgot Password?"]'); }
  get PractieIdTextField() {return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]'); }
  get forgotPasswordemailField() {return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]'); }
  get resendLinkButton() {return $('//android.widget.Button'); }
  get login() {return $('new UiSelector().text("Login")'); }
  get () {return $(''); }
  get () {return $(''); }
  get () {return $(''); }
  get () {return $(''); }
  get () {return $(''); }
  get () {return $(''); }
  get () {return $(''); }
  get () {return $(''); }

async closeKeyBoard(){
if (await browser.isKeyboardShown()) {
    await browser.hideKeyboard();
  }
}
async enterEmail(email){
   await this.emailField.waitForDisplayed({ timeout: 5000 });
   await this.emailField.setValue(email);
   await this.closeKeyBoard();
  }
  async enterPassword(password){
    await this.passwordField.waitForDisplayed({ timeout: 5000 });
    await this.passwordField.setValue(password);
    await this.closeKeyBoard();
  }

async clickLogin() {
    await hideKeyboard()
    await this.loginButton.waitForDisplayed({ timeout: 5000 });
    await this.loginButton.click();
  }
  async restartApp() {
    const APP_ID = process.env.APP_PACKAGE_ID || 'com.noki.patientapp';
    await driver.terminateApp(APP_ID);
    await driver.activateApp(APP_ID);
  }



}
export default new LoginPage();

