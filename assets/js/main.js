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
                

                esriRequest(url, options).then(function (response) {

                    let myFeatures = response.data.features;
                    
                    if (myFeatures.length === 0) 
                    {
                        reject("No Data");
                    }
                    else
                    {
                        let stats = {
                            Cases: myFeatures[myFeatures.length - 1].attributes.ConfirmedCovidCases,
                            Deaths: myFeatures[myFeatures.length - 1].attributes.ConfirmedCovidDeaths,
                            TotalCases: myFeatures[myFeatures.length - 1].attributes.TotalConfirmedCovidCases,
                            CasesPrevDay: myFeatures[myFeatures.length - 2].attributes.ConfirmedCovidCases,
                            DeathsPrevDay: myFeatures[myFeatures.length - 2].attributes.ConfirmedCovidDeaths,
                            DateLastUpdated: new Date(myFeatures[myFeatures.length - 1].attributes.Date)
                        }
                        resolve(stats); //return the stats object
                    }

                    
                });
            });

        //resolve(stats); not sure why stats cabnt be read here.
    });
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
                        outFields: ["CountyName", "ConfirmedCovidCases", "PopulationProportionCovidCases", "ConfirmedCovidDeaths", "ConfirmedCovidRecovered", "TimeStampDate", "PopulationCensus16"],
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

                    for (var i = 0; i < myFeatures.length; i++) {//end point returns the data duplicted.
                        if (!CountyExists(myFeatures[i].attributes.CountyName, stats_Array)) {
                            stats = {
                                County: myFeatures[i].attributes.CountyName,
                                Confirmed: myFeatures[i].attributes.ConfirmedCovidCases,
                                Proportion: myFeatures[i].attributes.PopulationProportionCovidCases,
                                ConfirmedDeaths: myFeatures[i].attributes.ConfirmedCovidDeaths,//currently null
                                ConfirmedRecovered: myFeatures[i].attributes.ConfirmedCovidRecovered,//currently null
                                PopulationC16: myFeatures[i].attributes.PopulationCensus16,
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
        if (stats_array[i].County === county) {
            return true;
        }
    }
    return false;
}



function ExtractROIVaccineData(obj_vaccine_data) {

    //let obj_vaccine_data = JSON.parse(Httpreq.responseText);

    let vaccine_data_array = obj_vaccine_data.records;

    let FirstDoseTotal = 0;
    let SecondDoseTotal = 0;
    let VaccineType_Total = [];
    let vax_array = [];

    for (let i = 0; i < vaccine_data_array.length; i++) {
        obj_vaccine_data = vaccine_data_array[i];
        if (obj_vaccine_data.Region === "IE") {
            if (obj_vaccine_data.TargetGroup === "ALL") {
                vax_array.push({ type: obj_vaccine_data.Vaccine, firstDose: obj_vaccine_data.FirstDose, secondDose: obj_vaccine_data.SecondDose });
            }
        }
    }

    

    //1. get total first and second dose over all for all vaccines in dataset
    //2. get total first and second dose per vaccine type
    //   loop through the dataset and build a distinct list of vaccine types VaccineType_Total[{type,0,0}]
    //   for eacg recors in dataset loop over each distinct records add increment total values. todo:note I expect there is much more efficent 
    //   method to acheive this and I may come back o this later if schedule allows. xpath for json maybe or similar.
    for (let i = 0; i < vax_array.length; i++) {
        FirstDoseTotal = FirstDoseTotal + vax_array[i].firstDose;
        SecondDoseTotal = SecondDoseTotal + vax_array[i].secondDose;
        if (!VaccineTypeExists(VaccineType_Total, vax_array[i].type)) {
            VaccineType_Total.push({ type: vax_array[i].type, firstDose: 0, secondDose: 0 });
        } else {
            x = 0;
            for (x = 0; x < VaccineType_Total.length; x++) {
                if (VaccineType_Total[x].type === vax_array[i].type) {
                    VaccineType_Total[x].firstDose = VaccineType_Total[x].firstDose + vax_array[i].firstDose;
                    VaccineType_Total[x].secondDose = VaccineType_Total[x].secondDose + vax_array[i].secondDose;
                }
            }
        }
    }


    obj_vaccine_data = { TotalFirstDose: FirstDoseTotal, SecondDoseTotal: SecondDoseTotal, TotalByType: VaccineType_Total };
    return obj_vaccine_data;
}

function VaccineTypeExists(arr, vaxtype) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === vaxtype) {
            return true;
        }
    }
    return false;
}
function GetLEADateRange() {

    return new Promise(function (resolve, reject) {
        //let url = "https://services-eu1.arcgis.com/z6bHNio59iTqqSUY/arcgis/rest/services/COVID19_14_Day_Incidence_Rate_per_100k_LEA/FeatureServer/0?f=pjson"?
        let url = "https://services-eu1.arcgis.com/z6bHNio59iTqqSUY/ArcGIS/rest/services/COVID19_14_Day_Incidence_Rate_per_100k_LEA/FeatureServer/0/query" //not sure why but by adding "/query to the url we can specify query params below. we can also specify query params here on the url buy encoding hte string.
        require(["esri/request"],
            function (esriRequest) {
                // Define the 'options' for the request
                let options = {
                    query: {
                        f: "json",
                        where: "(FID=1)", //only return one record as just need the eventdate from one record.
                        outFields: ["EventDate"],
                        returnGeometry: false
                    },
                    responseType: "json",
                };
                console.log("call request");

                esriRequest(url, options).then(function (response) {

                    resolve(response.data.features[0].attributes); //return the stats object
                });
            });

    });
}


function GetICUStats() {
    //get the ICU Admissions and Discharges Per Day.


    return new Promise(function (resolve, reject) {
        let url = "https://services-eu1.arcgis.com/z6bHNio59iTqqSUY/arcgis/rest/services/ICUBISHistoricTimelinePublicView/FeatureServer/0/query?"

        require(["esri/request"],
            function (esriRequest) {
                // Define the 'options' for the request
                let options = {
                    query: {
                        f: "json",
                        where: "1=1", //seems to need a where clause to return anything - rertturn all records.
                        outFields: ["extract", "ncovidconf", "ndischcovidconf", "adcconf"],
                        returnGeometry: false
                    },
                    responseType: "json",
                };

                

                esriRequest(url, options).then(function (response) {
                    
                    let myFeatures = response.data.features;
                   
                    resolve(myFeatures); //return the stats array of objects
                });
            });

        //resolve(stats); not sure why stats cabnt be read here.
    });
}