
import { back,  verifyAndClick, verify } from "/Users/nagasubarayudu/Desktop/patientPortal/helper/helper.js"
import DashBoardPage from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/DashBoard.js"
import VitalsPage from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/vitals.js"
import EnterNewVitalsPage from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/enterNewVital.js"
import BookAppointmentPage from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/bookAppoitment.js"
import AppoitmentsPage from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/appoitments.js"
import EHRPage from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/ehr.js"
import RatingScalePage from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/ratingScale.js"
describe('dasBoard screen test cases', () => {
  it('test case to verify to enter the vitals of randon levels and check the output through the screenshot', async() => {
    await driver.pause(5000)
    await verifyAndClick(DashBoardPage.navigationBar)
    await verifyAndClick(DashBoardPage.vitals)
    await VitalsPage.randomVitalSelection()
    await VitalsPage.enterFilterDate()
    await driver.pause(5000)
    await back()
    await verifyAndClick(VitalsPage.entervitals)
    await EnterNewVitalsPage.fillVitals(); 
    await back()
  })
  it('verify the creating an appoitment with proper random selection of elements in every dropdown of the Appoitment creation',async()=>{
  
    await verifyAndClick(DashBoardPage.appoitmentButton)
    await verify(BookAppointmentPage.locationDropDown)
    await back()
    await verifyAndClick(DashBoardPage.sheduleAppointment)
    await BookAppointmentPage.bookAppointment()
  })
  it('verify all the elements of the appotments screen are displayed properly, and also check for the resheduling the upuomming appoitment, and also if there is no appoitmen is ther we gona schedule a new appotment ',async()=>{
    await verifyAndClick(DashBoardPage.appoitment)
    await driver.pause(3000)
    await verifyAndClick(AppoitmentsPage.upcoming)
    await driver.pause(3000)
    await verifyAndClick(AppoitmentsPage.completed)
    await driver.pause(3000)
    await verifyAndClick(AppoitmentsPage.canceled)
    await driver.pause(3000)
    await verifyAndClick(AppoitmentsPage.upcoming)
    await driver.pause(3000)
    await AppoitmentsPage.checkTheBookingDetailsAndRescheduleAppointment()
  })
  it.only('verfy the flow of ther EHR screen , randomly selecting any element of Ehsr , RTake the screen shot of the that ParticularScreen Except the  Rating Scale ,again we randomly select the ratingscale flow with ranom selection of the rating scalle elements', async() =>{
    await verifyAndClick(DashBoardPage.ehr)
    await EHRPage.selectRandomEhrElemet()
   await verifyAndClick(EHRPage.ratingScales)
    await verifyAndClick(RatingScalePage.addRatingScaleButton)
    await EHRPage.selectRandomEhrRatingScaleForm()
    await RatingScalePage.rattingFormOptionSelection()

  })
})
 