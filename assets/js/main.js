//Get Covid Statistcis Latest Reported Deaths & Cases and Total Cases todate.
//https://services1.arcgis.com/eNO7HHeQ3rUcBllm/ArcGIS/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/

//16/5/21 - cyber attack on hse systems has stopped the date being updated.

function GetCovidStats() {
    //todo: add date input param and add to sql clause

    return new Promise(function (resolve, reject) {
        let url = "https://services1.arcgis.com/eNO7HHeQ3rUcBllm/ArcGIS/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&f=pjson";

        require(["esri/request"],
            function (esriRequest) {
                // Define the 'options' for the request
                let options = {
                    query: {
                        f: "json",
                        where: "(ConfirmedCovidCases>0)",
                        outFields: ["ConfirmedCovidCases", "ConfirmedCovidDeaths", "TotalConfirmedCovidCases", "Date"],
                        returnGeometry: false
                    },
                    responseType: "json",
                };
                //console.log("call request");

                esriRequest(url, options).then(function (response) {
                    
                    let myFeatures = response.data.features;
                    let stats = {
                        Cases : myFeatures[myFeatures.length - 1].attributes.ConfirmedCovidCases,
                        Deaths : myFeatures[myFeatures.length - 1].attributes.ConfirmedCovidDeaths,
                        TotalCases: myFeatures[myFeatures.length - 1].attributes.TotalConfirmedCovidCases,
                        CasesPrevDay: myFeatures[myFeatures.length - 2].attributes.ConfirmedCovidCases,
                        DeathsPrevDay: myFeatures[myFeatures.length - 2].attributes.ConfirmedCovidDeaths,
                        DateLastUpdated: new Date(myFeatures[myFeatures.length - 1].attributes.Date)
                    }
                    resolve(stats); //return the stats object
                }); 
            });
        
        //resolve(stats); not sure why stats cabnt be read here.
    });
}

function GetCountyStats2() {
    //stub  - remove later.
    let ul = document.getElementById("county-list");
    let county = ["Limerick", "Tipp", "Cork", "Dublin", "Galway", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3"];
    for (var i = 1; i < county.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = county[i] + " :loading...";
        ul.appendChild(li);
    }
}

function GetCountyStats() {
    //get the total cases per county.
 

    return new Promise(function (resolve, reject) {
        let url = "https://services1.arcgis.com/eNO7HHeQ3rUcBllm/ArcGIS/rest/services/Covid19CountyStatisticsHPSCIrelandOpenData/FeatureServer/0/query?"

        require(["esri/request"],
            function (esriRequest) {
                // Define the 'options' for the request
                let options = {
                    query: {
                        f: "json",
                        where: "1=1", //seems to need a where clause to return anything - rertturn all records.
                        outFields: ["CountyName", "ConfirmedCovidCases", "PopulationProportionCovidCases", "ConfirmedCovidDeaths", "ConfirmedCovidRecovered", "TimeStampDate"],
                        returnGeometry: false
                    },
                    responseType: "json",
                };
               
                //console.log("call request");

                esriRequest(url, options).then(function (response) {
                    //console.log(response);
                    let myFeatures = response.data.features;
                    let stats_Array = [];
                    let stats = {};

                    for (var i = 0; i < (myFeatures.length) / 2; i++) {//end point returns the data duplicted.
                        if (!CountyExists(myFeatures[i].attributes.CountyName,stats_Array)) {
                            stats = {
                                County: myFeatures[i].attributes.CountyName,
                                Confirmed: myFeatures[i].attributes.ConfirmedCovidCases,
                                Proportion: myFeatures[i].attributes.PopulationProportionCovidCases,
                                ConfirmedDeaths: myFeatures[i].attributes.ConfirmedCovidDeaths,//currently null
                                ConfirmedRecovered: myFeatures[i].attributes.ConfirmedCovidRecovered,//currently null
                                TimeStamp: new Date(myFeatures[i].attributes.TimeStampDate)
                            }
                 
                            stats_Array.push(stats);
                        }
                    }
                    
                    resolve(stats_Array); //return the stats array of objects
                });
            });

        //resolve(stats); not sure why stats cabnt be read here.
    });
}

//the end point returns seemingly duplicate data but we only need one copy.
function CountyExists(county, stats_array) {
    for (let i = 0; i < stats_array.length; i++) {
        if (stats_array[i].county === county) {
            return true;
        }
        else {
            return false;
        }
    }
}