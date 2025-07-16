import {
  screenshot,
  back,
  verifyAndClick,
} from "/Users/nagasubarayudu/Desktop/patientPortal/helper/helper.js";

class EHRPage {
  get personalInfo() {
    return $('//android.widget.TextView[@text="Personal Info"]');
  }
  get allargies() {
    return $('//android.widget.TextView[@text="Allergies"]');
  }
  get medications() {
    return $('//android.widget.TextView[@text="Medications"]');
  }
  get diagnosis() {
    return $('//android.widget.TextView[@text="Diagnosis"]');
  }
  get socialHistory() {
    return $('//android.widget.TextView[@text="Social History"]');
  }
  get ratingScales() {
    return $('//android.widget.TextView[@text="Rating Scale"]');
  }
  get forms() {
    return $('//android.widget.TextView[@text="Forms"]');
  }
  get history() {
    return $('//android.widget.TextView[@text="History"]');
  }
  get carePlan() {
    return $('//android.widget.TextView[@text="Care Plan"]');
  }
  get implantedDevices() {
    return $('//android.widget.TextView[@text="Implanted Devices"]');
  }

  //rating scale Elements in the rating scale forms
  get backAnxiety() {
    return $('//android.widget.TextView[@text="Beck Anxiety Inventory"]');
  }
  get backDepressionInventory() {
    return $('//android.widget.TextView[@text="Beck Depression Inventory"]');
  }
  get gad7() {
    return $('//android.widget.TextView[@text="GAD-7"]');
  }
  get phq9() {
    return $('//android.widget.TextView[@text="PHQ-9"]');
  }
  get qids() {
    return $('//android.widget.TextView[@text="QIDS"]');
  }
  get aims() {
    return $('//android.widget.TextView[@text="AIMS"]');
  }
  get whodas() {
    return $('//android.widget.TextView[@text="WHODAS"]');
  }
  get fagastrome() {
    return $(
      '//android.widget.TextView[@text="Fagerstrom Test for Cigarette Dependence"]'
    );
  }
  get columbia() {
    return $(
      '//android.widget.TextView[@text="Columbia Suicide Severity Rating Scale"]'
    );
  }
  get lec5() {
    return $('//android.widget.TextView[@text="LEC-5"]');
  }
  get pcl5() {
    return $('//android.widget.TextView[@text="PCL-5"]');
  }
  get tasram() {
    return $('//android.widget.TextView[@text="TASR-AM"]');
  }
  get cage() {
    return $('//android.widget.TextView[@text="CAGE"]');
  }
  get cageaid() {
    return $('//android.widget.TextView[@text="CAGE-AID"]');
  }
  get proceeed() {
    return $('//android.widget.TextView[@text="Proceed"]');
  }

  get cancel() {
    return $('//android.widget.TextView[@text="Cancel"]');
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
  get() {
    return $("");
  }
  async selectRandomEhrRatingScaleForm() {
    const ehrForms = [
      this.backAnxiety,
      this.backDepressionInventory,
      this.gad7,
      this.phq9,
      this.qids,
      this.aims,
      this.whodas,
      this.fagastrome,
      this.columbia,
      this.lec5,
      this.pcl5,
      this.tasram,
      this.cage,
      this.cageaid,
    ];
  
    const randomIndex = Math.floor(Math.random() * ehrForms.length);
    const selectedForm = ehrForms[randomIndex];
    const maxScrollAttempts = 5; // Maximum number of scroll attempts to prevent infinite loops
    let scrollAttempts = 0;
  
    // Check if the selected form is visible
    let isVisible = await selectedForm.isDisplayed().catch(() => false);
  
    // Scroll until the element is visible or max attempts are reached
    while (!isVisible && scrollAttempts < maxScrollAttempts) {
      await driver
        .action("pointer")
        .move({ duration: 0, x: 616, y: 2639 }) // Starting position
        .down({ button: 0 }) // Mouse down
        .move({ duration: 1000, x: 598, y: 2012 }) // Scroll to position
        .up({ button: 0 }) // Mouse up
        .perform();
  
      scrollAttempts++;
      // Re-check visibility after scrolling
      isVisible = await selectedForm.isDisplayed().catch(() => false);
    }
  
    // Throw an error if the element is still not visible after max attempts
    if (!isVisible) {
      throw new Error(`Form ${selectedForm} not found after ${maxScrollAttempts} scroll attempts`);
    }
  
    // Element is visible, proceed with clicking
    await verifyAndClick(selectedForm);
    await driver.pause(2000);
    await verifyAndClick(this.proceeed);
    await driver.pause(2000);
  }
  
  // Utility method to verify and click an element
 
  async selectRandomEhrElemet() {
    const ehrForms = [
      this.personalInfo,
      this.allargies,
      this.medications,
      this.diagnosis,
      this.socialHistory,
      this.forms,
      this.history,
      this.carePlan,
      this.implantedDevices,
    ];

    const randomIndex = Math.floor(Math.random() * ehrForms.length);
    const selectedForm = ehrForms[randomIndex];
    await verifyAndClick(selectedForm);
    await driver.pause(2000);
    await screenshot();
    await driver.pause(2000);
    await back();
  }
}

export default new EHRPage();

// await driver.action('pointer')
// .move({ duration: 0, x: 616, y: 2639 })
// .down({ button: 0 })
// .move({ duration: 1000, x: 598, y: 2012 })
// .up({ button: 0 })
// .perform();
