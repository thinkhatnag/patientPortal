
import { back, verify, verifyAndClick } from "../../helper/helper"
import DashBoardPage from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/DashBoard.js"
import AppointmentPage from "/Users/nagasubarayudu/Desktop/patientPortal/Test/screenObjectModel/appoitments.js"
describe('dasBoard screen test cases', () => {
  it ('verify all the functinalities and butoons and navigations are working fine', async() => {
    await driver.pause(5000)
    await verifyAndClick(DashBoardPage.navigationBar)
    await verify(DashBoardPage.vitals)
    await verify(DashBoardPage.documents)
    await verifyAndClick(DashBoardPage.settings)
    await verify(DashBoardPage.launguage)
    await back()
    await verifyAndClick(DashBoardPage.appoitment)
    await verify(AppointmentPage.scheduleAppoitment)
    await verifyAndClick(DashBoardPage.tasks)
    await verify()
  })
})
