function LIB_FUNC(){AmisLib.Utility.LIB_FUNC.apply(this, arguments);}

/* The script is deployed as a web app and renders the form */
function doGet(e) {
  return HtmlService
    .createHtmlOutputFromFile('forms.html')
    .setTitle("");
}

function requestUpdate(bool) {
  ETLCaller.runETLJob(bool);
  return ""; 
}