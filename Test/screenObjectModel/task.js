class TaskPage{
get taskList(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]')}
get requested(){return $('//android.widget.TextView[@text="Requested"]')}
get accepted(){return $('//android.widget.TextView[@text="Accepted"]')}
get completed(){return $('//android.widget.TextView[@text="Completed"]')}
get inProgress(){return $('//android.widget.TextView[@text="In-Progress"]')}
get onhold(){return $('//android.widget.TextView[@text="On-Hold"]')}
get rejected(){return $('//android.widget.TextView[@text="Rejected"]')}
get allTasks(){return $('//android.widget.TextView[@text="All Tasks"]')}
get (){return $('')}
get (){return $('')}

}
export default new TaskPage();