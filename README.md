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
  * Covid-19 Daily Statistics and the Profile of Covid-19 Daily Statistics for Ireland as reported by the Health Surveillance Protection Centre.
      * Total Cases to date.
      * Total New Cases
      * Total New Deaths
      *The Covid-19 Daily Statistics are updated on a daily basis, with the latest record reporting the counts recorded at 1pm the same day.
  * Covid-19 Daily Statistics for Ireland by County as reported by the Health Surveillance Protection Centre. 
    * No. of cases per County 
    * The percentage of the population affected.
    * This service is updated daily. The latest record will always date back to two days ago. 
  * Time series dataset going back 100 days of COVID-19 patients in Intensive Care Units in Ireland. Data is provided for Confirmed COVID-19 cases and the number of new admissions and discharges.    
    * Data is based on an aggregate of all public and private ICU/HDU hospitals (including surge units).    
    * Data has been provided by the National Office of Clinical Audit (NOCA) ICU Bed Information System (ICU-BIS).
    * ICU statistics are updated daily at approximately 11.30am
  * 14 Day Incidence Rate per 100k population of COVID-19 cases at Local Electoral Area (LEA) level in Ireland. 
    * This feature provides a visualisation of the 14 Day Incidence rate per 100k population of COVID-19 cases at the Local Electoral Area (LEA) level across Ireland. 
    * Each LEA is marked on the map. Left click on an area to launch a popup window with the data for that area.
    * This data is updated on a weekly basis and contains data for a two week period.
  *	Vaccine data and interactive chart source is read from the [ECDC Vaccine Tracker](https://opendata.ecdc.europa.eu/covid19/vaccine_tracker/)
    * Number of first, second and unspecified doses administered in the adult population (18+) overall, by age group and in specific target groups, such as healthcare workers (HCW) and in residents in long-term care facilities (LTCF). 
    * The data in the tracker are refreshed at 11am, Monday to Friday.
    * Note: some discrepancies may be observed between the figures published by ECDC and the ones presented in official national reports or web sites.
  *	Subscription Sign Up Page powered by [Email JS](https://www.emailjs.com/)
  * Background soundtrack from [Defcon PC Game](https://www.introversion.co.uk/introversion/)

   
## Features Left To Implement In Future
  * Use the Where Clause of ESRI Request Options to narrow the returned dataset.
  * Improve error trapping and handling when processing rest service response.
  * Add option to switch data feed for ineractive map.
  * Add further statistics on Covid-19 testing, cases, variants, vaccines and comparisons with other geographical areas.
  * A daily email containing all the statistics from the website, tiggered on the Last Update Date. 
 
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

## Data Licensing\Terms of Use
[Covid-19 Geohive](https://covid-19.geohive.ie/pages/terms-of-use)
[ECDC ](https://www.ecdc.europa.eu/en/legal-notice)

## Testing
[Link to Testing.md file](https://github.com/coder187/covidtracker/blob/main/TESTING.MD)
                          
### Known Bugs
* Due to the current disruption of HSE IT systems, some indicators on the GeoHive COVID-19 hub are paused until further notice.
* Due to the current disruption of HSE IT systems, vaccine data may not be reported to the ECDC vaccine tracker.
* CORS Error
    * Access to fetch at 'https://....' from origin 'http://...' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource...."   
        Attempting to read the json file on ecdc.europa.eu using either XMLHTTPReuest or Fetch API call raises a CORS error and stops the data being read.      
        I have consulted with tutor support (Shirley & Johann) and with my mentor (Gerry) but have been unable to read the data directly from the remote server.       
        The workaround I have implemented involves copying the json file locally and updating the code to read that instead.      
        Going forward I want to rectify the error so that the data can be read directly.
    * A CORS plugin may be needed to run the system.
* Arcgis: Note: Must load bootstrap js before arcgis -- causes Multiple Define Error.
* Arcgis: Cannot style map html element from css file. It seems the height and width must be styled *inline*.
* Arcgis: Note: Cannot have SceneView & Request together - an undefined error is thrown when calling the request.
* Arcgis: Note: When the div containing the map width hits 544 the popup autodock is set to true. I have given more width
to the center col to avoid this on larger screens. [](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html)
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
8. Note: A CORS Plugin may be needed to run the system locally.


## Deploy Locally via zip file download
1. On GitHub, navigate to the main page of the repository @ [https://github.com/coder187/covidtracker](https://github.com/coder187/covidtracker)
2. Above the list of files, click Code.
![](https://docs.github.com/assets/images/help/repository/code-button.png)
3. Click **Download Zip**
4. Extract the downloaded file to the location where you want the cloned directory.
5. Note: A CORS Plugin may be needed to run the system locally.

## Credits
### Code
    * Jonathan Kelly for Code Institute Milestone Project Two.
    * Code Institute Courseware
    * (Arcgis Documentation)[https://developers.arcgis.com/javascript/latest/]
    * Hussein Nasser for Arcgis Tutorials on [youtube](https://www.youtube.com/channel/UC_ML5xP23TOWKUcc-oAE_Eg)
    * [Ordnance Survey Ireland](https://covid-19.geohive.ie/search) for maintaining the [COVID-19 Data Hub] (https://covid-19.geohive.ie/)
    * [European Centre for Disease Prevention and Control](https://www.ecdc.europa.eu/en) for maintianing the Vaccine Tracker.
    * ![]((https://raw.githubusercontent.com/coder187/covidtracker/main/gif/ico/chartjs_ico.ico) [Chart JS](https://www.chartjs.org/docs/latest/)
    * (Email JS)[https://www.emailjs.com/docs/]
    * (Stackoverflow)[https://stackoverflow.com/] for help with debugging css and javascript.

    
### Content
The website displays the latest COVID-19 statistics for the Republic of Ireland in a responsive and aesthetically pleasing manner.

### Media
The hero image is from ecdc.europa.eu.
The background audio is from the PC game Defcon produced by [Introversion Software](https://www.introversion.co.uk/introversion/
The website icon is taken from the United Nations website. https://www.un.org/en/file/45419

### Acknowledgements	
-   My Mentor for continuous helpful feedback.

-   Tutor support at Code Institute for their support.

-   Hussein Nasser for Arcgis Tutorials on [youtube](https://www.youtube.com/channel/UC_ML5xP23TOWKUcc-oAE_Eg)

**Please note : this project is for educational use only and was created for the Code Institute Module of Interactive Front End Development**

**Created by Jonathan Kelly**
