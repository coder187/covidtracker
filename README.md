# covid tracker

## bugs
### must load bootstrap js before arcgis -- causes Multiple Define Error
### cannot style map html element from css file.
### //NOTE CANNOT HAVE SceneView & request together - an undefined error is thrown when calling the request
### notabug: when the div containing hte map width hits 544 the popup autodock is set to true. I have given more width
to the center col to avoid this on larger screena.
https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html
### chart js. needed "bundle library rather than min.js to show tooltips for multi dataset chart. needed to lookup so for code on how to show tooltipllegend"


## NOTES
daily and cumulative new cases and deaths for Ireland (by age included) - no county breakdown.
https://covid-19.geohive.ie/datasets/d8eb52d56273413b84b0187a4e9117be_0/

new cases per county (latest total minus previous total)
https://covid-19.geohive.ie/datasets/d9be85b30d7748b5b7c09450b8aede63_0/

confirmed cumulative per county:
https://services1.arcgis.com/eNO7HHeQ3rUcBllm/ArcGIS/rest/services/Covid19CountyStatisticsHPSCIrelandOpenData/FeatureServer/0?f=pjson",

moving 14 day incidenece rate per 100k by local election area
"https://services-eu1.arcgis.com/z6bHNio59iTqqSUY/arcgis/rest/services/COVID19_14_Day_Incidence_Rate_per_100k_LEA/FeatureServer/0?f=pjson",

ICU Numbers
current / admitted / discharged
https://covid-19.geohive.ie/datasets/c8208a0a8ff04a45b2922ae69e9b2206_0?page=27

## bug nota bug?
after adding the emaik js functionality the arcgis api calls started failing with "Error in Promise k line 1 idnex.html"
to troubleshoot I removed the api calls from the page one by one to narrow down but the error affected all calls to arcgis.
re building the page did not fix the error.
I verified my github code was error free by running the last commit which ran without error.
I then used the fc command to compare the github copy wiht my development copy but other than the first line reportung as different eventhough visually looked the same
there were no other diffs. 
I changted the dirst line
<!DOCTYPE html>
to just 
<html> but no fix.

I then ran the page on MS Edge and it ran fine. Then ran it on inCongnito on Chrime and again ran fine.
I shutdown and restarted my chrome session and reran but again the error until I issued a Hard Refresh.
I can only surmmize tha either chrome has a cached non working version or some quirky bug between chrome, promise api functionality and the arcgus library.
One change of underware later and we back up and runnning!


## bug
 Element signup not allowed as child of element div in this context. (Suppressing further errors from this subtree.)
 had to re organise signup layout
## ACK
Hussein Nasser Arcgis Tutorials