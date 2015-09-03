// After creating the report page, the source code of the HTML page has elements wit this form:
//
// <span class="download" assetname="FileXXX" submissionid="123456789012345" attemptstatus="1" studentname="LastName, FirstName" onclick="javascript:getAllSubmittedDoc(this)">
//
// This script finds all such elements and change them to
// http://mylabs.px.pearsoned.com/Pegasus/Modules/AssessmentTool/Presentation/AutoGrader/frmGradeITReportInterface.aspx?Reports=2&SubmissionID=123456789012345&AssignmentName=FileXXX&UserName=LastName, FirstName&GradingType=2

var downloadSpans = document.querySelectorAll("span.download");

for (var i = 0; i < downloadSpans.length; ++i) {
  var spanElement = downloadSpans[i];
  var parentElement = spanElement.parentNode;
  var anchorElement = document.createElement("a");

  var assignmentName = spanElement.getAttribute("assetname");
  var submissionId = spanElement.getAttribute("submissionid");
  var studentName = spanElement.getAttribute("studentname");
  desiredLink = "http://mylabs.px.pearsoned.com/Pegasus/Modules/AssessmentTool/Presentation/AutoGrader/frmGradeITReportInterface.aspx?Reports=2&SubmissionID=" + submissionId + "&AssignmentName=" + assignmentName + "&UserName=" + studentName + "&GradingType=2";
  desiredText = studentName + '--' + assignmentName + '--' + submissionId + '.zip';
  anchorElement.setAttribute('download', desiredText);
  anchorElement.setAttribute('href',desiredLink);
  anchorElement.innerHTML = desiredText;
  parentElement.insertBefore(anchorElement, spanElement);
  parentElement.removeChild(spanElement);
  if ( i < 10) {
    console.error(assignmentName);
    console.error(submissionId);
    console.error(studentName);
  }

}

window.alert("Buck download is ready now for " + downloadSpans.length + " links.")

