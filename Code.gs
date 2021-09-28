function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}
 
//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData(){
  var spreadSheetId = "https://docs.google.com/spreadsheets/d/1U-H-y_SYwTOGHmaTKPgBfgOEdA8R5UIcAPJuw1Y6nX8/edit#gid=0"; //CHANGE
  var dataRange     = "Data!A1:D"; //CHANGE
 
  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
  var values  = range.values;
 
  return values;
}
 
//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
