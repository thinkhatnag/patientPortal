class ForgotPasswordScreen {
    get emailField() {return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]');}
    get practiceIdField() {return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]');}
    get sendResetLinkBtn() {return $('//android.widget.Button');}
    get emptyEmail() {return $('//android.widget.TextView[@text="Email is required"]');}
    get emptyPractiseId() {return $('//android.widget.TextView[@text="Practice Id is required"]');}
    get invalidEmailFormet() {return $('//android.widget.TextView[@text="Invalid email address"]');}
    get notRegisterdMailError() {return $('//android.widget.TextView[@text="No account associated with the email address"]');}
    get notRegisterdPractiseIdError() {return $('//android.widget.TextView[@text="Invalid Practice ID"]');}
    get emailSentVerifation() {return $('//android.widget.TextView[@text="Password reset link has been successfully sent to your email."]');}

    get continueToLoginBtn() {return $('//android.widget.TextView[@text="Continue to Login"]'); }

    async enterEmail(email) {await this.emailField.setValue(email);}
    async enterPracticeId(practiceId) {await this.practiceIdField.setValue(practiceId);}
    async clickSendResetLink() {await this.sendResetLinkBtn.click();}
}          
export default new ForgotPasswordScreen();             