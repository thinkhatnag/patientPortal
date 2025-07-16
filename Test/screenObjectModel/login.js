import { back, verifyAndClick } from "/Users/nagasubarayudu/Desktop/patientPortal/helper/helper.js";
class LoginPage {
  get emailField() {
    return $(
      '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]'
    );
  }
  get passwordField() {
    return $(
      '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]'
    );
  }
  get loginButton() {
    return $(
      "//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button"
    );
  }
  get passwordRequired() {
    return $('//android.widget.TextView[@text="Password is required"]');
  }
  get WrongPassword() {
    return $(
      '//android.widget.TextView[@text="The password is invalid or the user does not have a password."]'
    );
  }
  get emailRequired() {
    return $('//android.widget.TextView[@text="Email is required"]');
  }
  get invalidEmailError() {
    return $('//android.widget.TextView[@text="Invalid email address"]');
  }
  get emailNotRegisteredError() {
    return $(
      '//android.widget.TextView[@text="No account associated with the email address"]'
    );
  }
  get homescreen() {
    return $("//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.widget.Button");
  }
  get passwordCount() {
    return $(
      '//android.widget.TextView[@text="Password should be more than or equal to 8 characters"]'
    );
  }
  get PasswordFieldEyeIconClose() {
    return $('//android.widget.TextView[@text="Forgot Password?"]');
  }
  get forgotPassword() {
    return $('//android.widget.TextView[@text="Forgot Password?"]');
  }
  get PractieIdTextField() {
    return $(
      "//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]"
    );
  }
  get forgotPasswordemailField() {
    return $(
      "//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]"
    );
  }
  get resendLinkButton() {
    return $("//android.widget.Button");
  }
  get login() {
    return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button');
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }
  get() {
    return $("");
  }

  async closeKeyBoard() {
    if (await driver.isKeyboardShown()) {
      await back()
    }
  }
  async enterEmail(email) {
    await verifyAndClick(this.emailField)
    await this.emailField.setValue(email);
    await back()
  }
  async enterPassword(password) {
    await verifyAndClick(this.passwordField)
    await this.passwordField.setValue(password);
    await back()
  }

  async clickLogin() {
  
    await verifyAndClick(this.loginButton)
   
  }
  async restartApp() {
    const APP_ID = process.env.APP_PACKAGE_ID ;
    await driver.terminateApp(APP_ID);
    await driver.activateApp(APP_ID);
  }
}
export default new LoginPage();
