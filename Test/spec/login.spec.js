import LoginPage from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/login.js";
import ForgotPasswordScreen from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/forgotPassword.js";
import {
  verify,
  verifyAndClick,
} from "/Users/nagasubarayudu/Desktop/patientPortal/helper/helper.js";
import dotenv from "dotenv";
dotenv.config();
describe("login screen test cases", () => {
  it("Verify forgot password screen not providing the email and Practise Id", async () => {
    await verifyAndClick(LoginPage.forgotPassword);
    await ForgotPasswordScreen.enterEmail("");
    await ForgotPasswordScreen.enterPracticeId("");
    await verifyAndClick(ForgotPasswordScreen.sendResetLinkBtn);
    await verify(ForgotPasswordScreen.emptyEmail);
    await verify(ForgotPasswordScreen.emptyPractiseId);
    await LoginPage.restartApp();
  });
  it.only("Verify forgot password screen providing the improper email  and PractiseId", async () => {
    await verifyAndClick(LoginPage.forgotPassword);
    await ForgotPasswordScreen.enterEmail("eqh");
    await ForgotPasswordScreen.enterPracticeId("sdvcaevfc");
    await verifyAndClick(ForgotPasswordScreen.sendResetLinkBtn);
    await verify(ForgotPasswordScreen.invalidEmailFormet);
    await verify(
      ForgotPasswordScreen.nnotRegisterdMailErrorotRegisterdPractiseIdError
    );
    await LoginPage.restartApp();
  });
  it("Verify forgot password screen providing the non registered email and practiseId", async () => {
    await verifyAndClick(LoginPage.forgotPassword);
    await ForgotPasswordScreen.enterEmail("kcsnqfjn@gmail.com");
    await ForgotPasswordScreen.enterPracticeId("12345678");
    await verifyAndClick(ForgotPasswordScreen.sendResetLinkBtn);
    await verify(ForgotPasswordScreen.notRegisterdPractiseIdError);
    await LoginPage.restartApp();
  });
  it("Verify forgot password screen providing the registered email", async () => {
    await verifyAndClick(LoginPage.forgotPassword);
    await ForgotPasswordScreen.enterEmail("vasavibattula14@gmail.com");
    await ForgotPasswordScreen.enterPracticeId("Enliv-Dev-cr017");
    await verifyAndClick(ForgotPasswordScreen.sendResetLinkBtn);
    await verify(ForgotPasswordScreen.emailSentVerifation);
    await verifyAndClick(ForgotPasswordScreen.continueToLoginBtn);
    await LoginPage.restartApp();
  });

  it("Verify error message when password is not provided {TC01}", async () => {
    await LoginPage.enterEmail(process.env.EMAIL);
    await LoginPage.clickLogin();
    await verify(LoginPage.passwordRequired);
    await LoginPage.restartApp();
  });

  it("Verify error message when an incorrect password is entered {TC02}", async () => {
    await LoginPage.enterEmail(process.env.EMAIL);
    await LoginPage.enterPassword("wlfdihbfver");
    await LoginPage.clickLogin();
    await verify(LoginPage.WrongPassword);
    await LoginPage.restartApp();
  });

  it("Verify error message when email is not provided {TC03}", async () => {
    await LoginPage.enterPassword("");
    await LoginPage.clickLogin();
    await verify(LoginPage.emailRequired);
    await LoginPage.restartApp();
  });

  it("Verify error messages when both email and password are not provided {TC04}", async () => {
    await LoginPage.enterEmail("");
    await LoginPage.enterPassword("");
    await LoginPage.clickLogin();
    await verify(LoginPage.emailRequired);
    await LoginPage.restartApp();
  });

  it("Verify error message when an incorrectly formatted email is entered {TC05}", async () => {
    await LoginPage.enterEmail("djhbkfcek@gmailcom");
    await LoginPage.enterPassword("eihfueirb");
    await LoginPage.clickLogin();
    await verify(LoginPage.invalidEmailError);
    await LoginPage.restartApp();
  });

  it("Verify error message when the email is not registered {TC06}", async () => {
    await LoginPage.enterEmail("vqejvcievciye@gmail.com");
    await LoginPage.enterPassword("123456");
    await LoginPage.clickLogin();
    await verify(LoginPage.passwordCount);
    await LoginPage.restartApp();
  });

  it("Verify login performance within an acceptable time limit {TC07}", async () => {
    await LoginPage.enterEmail(process.env.EMAIL);
    await LoginPage.enterPassword(process.env.PASSWORD);
    await LoginPage.clickLogin();
    await driver.pause(10000);
    await verify(LoginPage.homescreen);
    await LoginPage.restartApp();
  });
});
