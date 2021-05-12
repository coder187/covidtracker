//Get Covid Statistcis Latest Reported Deaths & Cases and Total Cases todate.
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
                        outFields: ["ConfirmedCovidCases", "ConfirmedCovidDeaths", "TotalConfirmedCovidCases"],
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
                        TotalCases : myFeatures[myFeatures.length - 1].attributes.TotalConfirmedCovidCases
                    }
                    resolve(stats); //return the stats object
                }); 
            });
        
        //resolve(stats); not sure why stats cabnt be read here.
    });
}

function GetCountyStats() {

    let ul = document.getElementById("county-list");
    let county = ["Limerick", "Tipp", "Cork", "Dublin", "Galway", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3"];
    for (var i = 1; i < county.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = county[i] + " :loading...";
        ul.appendChild(li);
    }
}