![](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/ms2_covidtracker_air.png)

# COVID-19 Tracker for Repuplic of Ireland
[Link to live site on github pages](https://coder187.github.io/covidtracker/)

Project - Interactive Frontend Development - Code Institute

The project will produce a simple interactive website to display COVID-19 statistics as reported by the governemnt of Ireland.

The idea behind the project is to provide a quick and mobile responsive reference for the top level data points.
This application can be extended in future to add data streams as they become available.

The end user of the system would potentially be all persons with access to the internet. This obviously includes a very wide range of people,
so a mobile first approch with a modern & engaging UX are of key importance.

## USer Experience (UX)
### User stories
#### First Time Visitor Goals
	* As a First Time Visitor, I want to easily understand the main purpose of the site.
	* As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
	* As a First Time Visitor, I want to look for COVID-19 data for Ireland.


#### Frequent\Returning Visitor Goals
	* As a Returning Visitor, I want to verify where the data is sourced from.
	* As a Returning Visitor, I want to signup for the daily update summary.

### Design

	* Colour Scheme	
		* The two main colours uses are black and blue.

	* Typography
		* The Prompt font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. 
			Prompt is simple, geometric & web friendly so it is both attractive and appropriate.

	* Imagery
		* The large, background hero image on the signup page is of the COVID-19 virus taken from the https://www.ecdc.europa.eu/en website.
		The image is now synonymous with the COVD-19 pandemic so fits the site very well.

### Wireframes
** Home Page
** Signup
** Sources

## Features
	* Responsive on all devices.
	* Covid county totals, total cases, daily cases\deaths & interactive map source is read from the [COVID 19 Data Gub](https://covid-19.geohive.ie/)
	* Vaccine data and interactive chart source is read from the [ECDC Vaccine Tracker](https://opendata.ecdc.europa.eu/covid19/vaccine_tracker/)
	* Subscription Sign Up Page powered by [Email JS](https://www.emailjs.com/)
	* Background soundtrack from [Defcon PC Game](https://www.introversion.co.uk/introversion/)


## Technologies
### Languages Used
	* HTML5
	* CSS3
	* Javascript

### Frameworks, Libraries & Programs Used
1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the Social Media icons in the footer to add the float transition while being hovered over.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Prompt' font into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive.
1. [Arcgis 4.19:](https://www.arcgis.com/index.html)
    - Arcgis was used to query the json endpoints for the COVID-19 data and to render the interactive map.
1. [Chart JS 2.6.0:](https://www.chartjs.org/)
    - Chart JS was used to render the interactive vaccine doughnut chart.
1. [Email JS:](https://www.emailjs.com/)
    - Email JS was used to add email send capability to the website.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [GIMP:](https://www.gimp.org/)
    - GIMP 2 was used to resizing & edit images for the website.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.
1. [Visual Studio 2019:](https://visualstudio.microsoft.com/)
    - Visual Studio was used to create & debug the html,css & javascript.

## Testing
The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/) - [Results](https://github.com/)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - [Results](https://github.com/)

### Testing User Stories from User Experience (UX) Section
#### First Time Visitor Goals
#### Returning Visitor Goals
#### Frequent User Goals

### Further Testing

### Known Bugs
## bugs
### must load bootstrap js before arcgis -- causes Multiple Define Error
### cannot style map html element from css file.
### //NOTE CANNOT HAVE SceneView & request together - an undefined error is thrown when calling the request
### notabug: when the div containing hte map width hits 544 the popup autodock is set to true. I have given more width
to the center col to avoid this on larger screena.
https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html
### chart js. needed "bundle library rather than min.js to show tooltips for multi dataset chart. needed to lookup so for code on how to show tooltipllegend"
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


## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/coder187/covidtracker)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://coder187.github.io/covidtracker/) in the "GitHub Pages" section.

## Credits

### Code

### Content

### Media

### Acknowledgements	
-   My Mentor for continuous helpful feedback.

-   Tutor support at Code Institute for their support.7

-   Hussein Nasser Arcgis Tutorials on [youtube](https://www.youtube.com/channel/UC_ML5xP23TOWKUcc-oAE_Eg)


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

