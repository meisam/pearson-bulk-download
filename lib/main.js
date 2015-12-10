var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
 include: "https://mylabs.px.pearsoned.com/Pegasus/Modules/Reports/frmRptGraderDownloadDocument.aspx*",
 contentScriptFile: data.url("url-extract.js")
});
