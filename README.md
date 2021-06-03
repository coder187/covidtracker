![](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/ms2_covidtracker_air.png)

# COVID-19 Tracker for Repuplic of Ireland
[Link to live site on github pages](https://coder187.github.io/covidtracker/)

Project - Interactive Frontend Development - Code Institute

The project will produce a simple interactive website to display COVID-19 statistics as reported by the governemnt of Ireland.

The idea behind the project is to provide a quick and mobile responsive reference for the top level data points.
This application can be extended in future to add data streams as they become available.

The end user of the system would potentially be all persons with access to the internet. This obviously includes a very wide range of people,
so a mobile first approch with a modern & engaging UX are of key importance.

## User Experience (UX)
* User stories
  * First Time Visitor Goals
    * As a First Time Visitor, I want to easily understand the main purpose of the site.
    * As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
    * As a First Time Visitor, I want to look for COVID-19 data for Ireland.
  
  * Frequent\Returning Visitor Goals
    * As a Returning Visitor, I want to verify where the data is sourced from.
    * As a Returning Visitor, I want to signup for the daily update summary.

* Design
  * Colour Scheme	
    * The two main colours used are black background with blue text.
    * The map is based on a dark gret vector
    * In contrast the Vaccine Chart uses lighter colors with shades of light shades of pink,blue,red,purple and orange to represent the various vaccine types.

  * Typography
    * The Prompt font is the main font used throughout the whole website with Sans Serif as the fallback font 
			in case for any reason the font isn't being imported into the site correctly. Prompt is simple, geometric & web friendly so it is both attractive and appropriate.

  * Imagery
    * The large background hero image on the signup page is of the COVID-19 virus taken from the [ECDC](https://www.ecdc.europa.eu/en) website. 
    The image is now synonymous with the COVD-19 pandemic so fits the site very well.

* Wireframes
  * Home Page Mobile [View](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/wireframes/Home%20Page%20-%20Mobile.png)
  * Home Page Desktop [View](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/wireframes/Home%20Page%20-%20Desktop.png)
  * Signup Mobile [View](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/wireframes/Sign%20Up%20-%20Mobile.png)
  * Signup Desktop [View](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/wireframes/Sign%20Up%20Page%20-%20Desktop.png)


## Features
  * Responsive on all devices.
  * Covid county totals, total cases, daily cases\deaths & interactive map source is read from the [COVID 19 Data Gub](https://covid-19.geohive.ie/)
  *	Vaccine data and interactive chart source is read from the [ECDC Vaccine Tracker](https://opendata.ecdc.europa.eu/covid19/vaccine_tracker/)
  *	Subscription Sign Up Page powered by [Email JS](https://www.emailjs.com/)
  * Background soundtrack from [Defcon PC Game](https://www.introversion.co.uk/introversion/)

## Features Left To Implement In Future

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

*   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/) 
    * [Home Page](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/html_index_validation.png)
    * [Sign Up](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/html_signup_validation.png)
    * [Sources](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/html_sources_validation.png)
    * [Conf ](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/html_conf_validation.png)
    * [Fail ](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/html_fail_validation.png)
*   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - [Results](https://raw.githubusercontent.com/coder187/covidtracker/main/supp/screenie/CSS_VALIDATION.png)

### Testing User Stories from User Experience (UX) Section
#### First Time Visitor Goals
#### Returning Visitor Goals
#### Frequent User Goals

### Further Testing

### Known Bugs
* Due to the current disruption of HSE IT systems, some indicators on the GeoHive COVID-19 hub are paused until further notice.

* CORS Error
    * Access to fetch at 'https://....' from origin 'http://...' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource...."   
        Attempting to read the json file on ecdc.europa.eu using either XMLHTTPReuest or Fetch API call raises a CORS error and stops the data being read.      
        I have consulted with tutor support (Shirley & Johann) and with my mentor (Gerry) but have been unable to read the data directly from the remote server.       
        The workaround I have implemented involves copying the json file locally and updating the code to read that instead.      
        Going forward I want to rectify the error so that the data can be read directly.

* Arcgis: Note: Must load bootstrap js before arcgis -- causes Multiple Define Error.
* Arcgis: Cannot style map html element from css file. It seems the height and width must be styled *inline*.
* Arcgis: Note: Cannot have SceneView & Request together - an undefined error is thrown when calling the request.
* Arcgis: Note: When the div containing the map width hits 544 the popup autodock is set to true. I have given more width
to the center col to avoid this on larger screens.
https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html
* Chart js: Needs *bundle.js* library rather than *min.js* to show tooltips for multi dataset chart. This doesnt seem to be mentioned in the Chart JS Docs.
* Chart js: Need to use StackOverflow for code on how to show tooltip legend. I couldnt get this to work from the Chart JS docs alone.
* Element "Signup" not allowed as child of element Div in this context. (Suppressing further errors from this subtree.)
The HTML Validator showed this as error on my Signup page. To fix, I changed the "signup" element to "section". Adding a class of signup would also fix but this    
would need further udates to the css styles. I will come back to this at a later stage.

* Note: strange behaviour:
After working on the Signup page, the Arcgis api calls on the Index page started failing eventhough I had not edited the code since last verifiying they were working as expected.    
The error returned was : *Error in Promise k line 1 idnex.html.*     
To troubleshoot I removed the api calls from the page one by one to narrow down the source of the error but all calls to Arcgis were affected.
Undoing all recent changes did not fix the error.    
I verified my Github code was error free by running the last commit which ran without error.
Running fc against the Guthub page & the local copy showed one difference at line 1, eventhough they were visually identical.
Rebuilding the page from the Github copy also did not fix the error.
The solutuin was to shutdown the browser and start a new session and then issue a hard-refresh.
I can only summize that either Chrome had a cached buggy\corrupted version of the code or some quirky bug between Chrome, the Promise api & and the Arcgis library.
One cup of sweet tea to settle the nerves later & we were back up and runnning! One to keep an eye on maybe.


## Deployment

### GitHub Pages

## Github Pages
1. On GitHub, navigate to the site's repository @ [https://github.com/coder187/covidtracker](https://github.com/coder187/covidtracker)
1. Under your repository name, click **Settings**.
![](https://docs.github.com/assets/images/help/repository/repo-actions-settings.png)
1. Under "GitHub Pages", click **Check it out here!**
1. Under "GitHub Pages", use the **None** or **Branch** drop-down menu and select a publishing source of **Main Branch**.
![](https://docs.github.com/assets/images/help/pages/publishing-source-drop-down.png)
1. Optionally, use the drop-down menu to select a folder for your publishing source.
![](https://docs.github.com/assets/images/help/pages/publishing-source-folder-drop-down.png)
1. Click **Save**.

## Deploy Locally via GIT
1. On GitHub, navigate to the main page of the repository [https://github.com/coder187/covidtracker](https://github.com/coder187/covidtracker)
2. Above the list of files, click Code.
![](https://docs.github.com/assets/images/help/repository/code-button.png)
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link text or click the icon to right. 
To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, 
click **Use SSH**, then copy the link or click the icon.
To clone a repository using GitHub CLI, click **Use GitHub CLI**, then copy the link text.
![](https://docs.github.com/assets/images/help/repository/https-url-clone.png)
![](https://docs.github.com/assets/images/help/repository/https-url-clone-cli.png)
4. Open Git Bash (or command prompt on Windows. Note you will need [GIT](https://git-scm.com/download/win) for Windows
5. Change the current working directory to the location where you want the cloned directory.
6. Type ```git clone``` and then paste the URL you copied earlier.\
```$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY```
7. Press **Enter** to create your local clone.

## Deploy Locally via zip file download
1. On GitHub, navigate to the main page of the repository @ [https://github.com/coder187/covidtracker](https://github.com/coder187/covidtracker)
2. Above the list of files, click Code.
![](https://docs.github.com/assets/images/help/repository/code-button.png)
3. Click **Download Zip**
4. Extract the downloaded file to the location where you want the cloned directory.

## Credits

### Code
Jonathan Kelly for Code Institute Milestone Project Two.

### Content
The displays the latest COVID-19 statistics for the Republic of Ireland in a responsive and aesthetically pleasing manner.

### Media
The hero image is from ecdc.europa.eu.
The background audio is from the PC game Defcon produced by [](introversion.co.uk/software)

### Acknowledgements	
-   My Mentor for continuous helpful feedback.

-   Tutor support at Code Institute for their support.

-   Hussein Nasser for Arcgis Tutorials on [youtube](https://www.youtube.com/channel/UC_ML5xP23TOWKUcc-oAE_Eg)

**Please note : this project is for educational use only and was created for the Code Institute Module of Interactive Front End Development**

**Created by Jonathan Kelly**

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

