# covid tracker

## bugs
### must load bootstrap js before arcgis -- causes Multiple Define Error
### cannot style map html element from css file.
### //NOTE CANNOT HAVE SceneView & request together - an undefined error is thrown when calling the request
### notabug: when the div containing hte map width hits 544 the popup autodock is set to true. I have given more width
to the center col to avoid this on larger screena.
https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html
### chart js. needed "bundle library rather than min.js to show tooltips for multi dataset chart. needed to lookup so for code on how to show tooltipllegend"