function LIB_FUNC(){AmisLib.Utility.LIB_FUNC.apply(this, arguments);}

/* The script is deployed as a web app and renders the form */
function doGet(e) {
  return HtmlService
    .createHtmlOutputFromFile('forms.html')
    .setTitle("AMIS USDA UPLOAD");
}

function requestUpdate(bool) {
  ETLCaller.runETLJob(bool);
  //ETLCaller.runCloudETLJob(bool);
  return "Request registered. Please check the AMIS WEB SITE later."; 
}