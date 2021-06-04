# Covid-19 Tracker
[Link to live site on github pages](https://coder187.github.io/covidtracker/)

[Link to main README.md file](https://github.com/coder187/covidtracker/blob/main/README.md)
                              


Project - Interactive Front End Development - Code Institute

# Testing

## W3C Validators
The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

*   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/) 
    * [Home Page](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/html_index_validation.png)
    * [Sign Up](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/html_signup_validation.png)
    * [Sources](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/html_sources_validation.png)
    * [Conf ](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/html_conf_validation.png)
    * [Fail ](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/html_fail_validation.png)
*   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - [Results](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/CSS_VALIDATION.png)



## Check ALT Tags
I used [SEO CHECKUP](https://www.seoptimer.com) to verify all image alt tags were present.
![](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/seositecheckup.png)

## Spelling
I used [https://typosaur.us/](https://typosaur.us/) & MS Word to check pages for spelling errors.

## Testing planning.
With this project I have use Test [Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) model (TDD).

The TDD method consists of a cycle of :
* write new test
* implement new feature
* run all tests & repeat all steps untill all tests pass.

## Implementation

| Action      | Expected Outcome | Result | Note |
| ----------- | ---------------- | -------| -----|
| Add new blank html page to project | blank page ready for code saved as index.htm | Pass ||
| Add Nav Bar to top of index | Nav Bar should stay at top of page at all screen sizes | Pass ||
| Add Nav Bar Items to Nav Bar | Nav Bar items should collapse to Burger Menu style at small screen sizes | Pass ||
| Add Footer Section | Four equal width columns occupying the full width of the page. | Pass ||
| Add Arcgis logo to left column | Center content within column | Pass ||
| Add data.gov.ie logo to second column | Center content within column | Pass |
| Add data.gov.ie logo to second column | Center content within column | Pass ||
| Add ECDC logo to third column | Center content within column | Pass ||
| Add social links to last column | Center content within column | Pass ||
| Add hyper links to Social Media Icons | Click link opens target in new browser window | Pass ||
| Add hover effect to Social Media Icons | On mouse hover the background fades to green. On mouse out the background fades back to original colour | Pass ||
| Add Header Section which consists of four columns of equal width below Nav Bar | Mobile View: Columns should float directly below each other and align vertically | Pass ||
| Add header section which consists of two columns below Nav Bar| Desktop View: Columns should align horizontally to fit screen. | Pass ||
| Add Covid Cases section which consists of three columns below header seaction. | Mobile View: Columns should float directly below each other and align vertically | Pass ||
| Add Covid Cases section which consists of three columns below header seaction. | Desktop View: Center column consumes two thirds of width with the remaining two columns occupying one third each| Desktop View: Columns should align horizontally to fit screen. | Pass ||
| Add Vaccine Data section which consists of three columns below Covid seaction. | Mobile View: Columns should float directly below each other and align vertically | Pass ||
| Add Vaccine Data section which consists of three columns below Covid seaction. | Desktop View: Columns should align horizontally to fit screen. | Pass ||
| Add Vaccine Chart section which consists of a single column centered on screen below the Vaccine Data section. | Mobile & Desktop View: Columns should float directly below section above with content centered | Pass ||
| On index page load. | Connect to endpoint, read Last Update Field & populate first column| Pass |1|
| On index page load. | Connect to endpoint, read Total Case Number & populate second column| Pass |1|
| On index page load. | Connect to endpoint, read Death field & populate third column| Pass |1|
| On index page load.. | Connect to endpoint, read Cases field & populate last column| Pass |1|
| On index page load. | Connect to endpoint, get list of counties reported & populate second row, first column with a table wiht a row per County| Pass |1||
| On index page load. | Connect to endpoint, retrieve Local Elactoral Area Covid Statistics | Pass |1||
| On index page load. | Render interactive map of Rep. of Ireland in center column of second row.| Pass |1||
| On index page load. | Render map legend third column.| Pass |1||
| On page resize. | Map resizes to fit display. Popup docks to lower half of the map element.| Pass |1||
| On page resize. | Legend wraps and aligns below the map.| Pass |1||
| On map left click. | A Popup loads with content from the selected Local Electoral Area | Pass |1||
| Popup Dock.| The Popup Dock icon, when clicked docks the popup to right side of the map element.| Pass |1||
| Popup Dock.| On smaller screens the Popup is responsive, by docking to the lower half of the map windown and only displaying the Title area. Clicking the Title opens & closes the rest of the Popup.| Pass |1||
| On Popup Zoom.| The map zooms to the selected LEA| Pass |1||
| On Popup Close.| The Popup closes| Pass |1||
| On page load. | Load & parse vaccine data.| Pass |2|
| On page load. | Populate vaccine section, column 1 with total Frist Dose figure.| Pass |2|
| On page load. | Populate vaccine section, column 2 with second Frist Dose figure.| Pass |2|
| On page load. | Populate vaccine section, column 3 with Total Dose adminstered.| Pass |2|
| On page load. | Render vaccine doughnut chart with two datasets, first & second dose by vaccine type.| Pass |2|
| On page load. | Render vaccine doughnut chart legend.| Pass |2|
| On chart left click. | Display tooltip with content from selected chart data point.| Pass |2|
| On page resize. | Chart resizes in a responsive manner.| Pass |2|
| Copy index page and save as sources.html. Remove all content between nav and footer. Update nav items. | new page templated from index.html and ready for code. | Pass ||
| Add a Data Sources section with a single column which consumes the full screen width. | Content should align left. | Pass ||
| Add a number of un ordered lists which align vertically. | Content contains informational text and hyperlinks to data source homepages. | Pass ||
| Add a number of un ordered lists which align vertically. | Content contains informational text and links to more info. | Pass ||
| Copy index page and save as conf.html. Remove all content between nav and footer. Update nav items. | new page templated from index.html and ready for code. | Pass ||
| Add a number of un ordered lists which align vertically. | Content contains informational text and links to more info. | Pass ||
| Add single column to Conf.html with jumbotron element contaning success message | Column is responsive to all device sizes.. | Pass ||
| Add button to return to homepage to Conf.html | User is redirected to index.html | Pass ||
| Copy conf.html and save as fail.html. Update nav items. | new page templated from index.html and ready for code. | Pass ||
| Edit content of fail.html to show failure message | Column is responsive to all device sizes.. | Pass ||
| Click button to return to homepage | User is redirected to index.html | Pass ||
| Copy index page and save as signup.html. Remove all content between nav and footer. Update nav items. | new page templated from index.html and ready for code. | Pass ||
| Add two centerd columns to the page. | On Mobile: the columns align vertically. | Pass ||
| Add paragraph of text to first column and a signup form to second column. | All fields on the form are required. The email field requires correct formatting. The fields are validated before submission | Pass ||
| Submit the Form by clicking Submit button. | Two emails are sent. One to the email address suppied and the second to the (theoretical) system administrator. | Pass |3|
| Submit the Form by clicking Submit button. | If the email send succeeds the conf.html page loads to dispaly a sccuess message. | Pass ||
| Submit the Form by clicking Submit button. | If the email send fails the fail.html page loads to dispaly a failure message. | Pass ||

*1. Disruption to he HSE computer systems caused by the cyber attack has resulted in some dataset updates being paused until further notice.*
*2. Note: A CORS issue prevented me from reading the vaccine data directly from the host server so I have copied the vaccine data file locally. I will come back to this to rectify.*
*3. Note: I have used my own email address as the admin address*