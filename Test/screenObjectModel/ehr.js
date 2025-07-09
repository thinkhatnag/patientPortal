class EHRPage{
get personalInfo(){return $('//android.widget.TextView[@text="Personal Info"]')}
get allargies(){return $('//android.widget.TextView[@text="Allergies"]')}
get medications(){return $('//android.widget.TextView[@text="Medications"]')}
get diagnosis(){return $('//android.widget.TextView[@text="Diagnosis"]')}
get socialHistory(){return $('//android.widget.TextView[@text="Social History"]')}
get ratingScales(){return $('//android.widget.TextView[@text="Rating Scale"]')}
get forms(){return $('//android.widget.TextView[@text="Forms"]')}
get history(){return $('//android.widget.TextView[@text="History"]')}
get carePlan(){return $('//android.widget.TextView[@text="Care Plan"]')}
get implantedDevices(){return $('//android.widget.TextView[@text="Implanted Devices"]')}
get (){return $('')}
get (){return $('')}
get (){return $('')}
get (){return $('')}
get (){return $('')}
get (){return $('')}

}
export default new EHRPage();