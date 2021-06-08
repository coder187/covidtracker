//Get Covid Stats:
//Total Cases
//New Cases
//Deaths
GetCovidStats().then(
    function (message) {
        PrintCovidStats(message, 0);
    },
    function (error) {
        console.log("Print Covid Stats - Error: ", error);
        PrintCovidStats(error, 1);
    }
);

function PrintCovidStats(stats, err) {
    if (err !== 0) {
        if (stats === "No Data") {
            document.getElementById("date-last-updated").innerHTML = "1/1/1970";
            document.getElementById("Deaths").innerHTML = "No Data";
            document.getElementById("Cases").innerHTML = "No Data";
            document.getElementById("Total").innerHTML = "No Data";
        }
        else {
            document.getElementById("date-last-updated").innerHTML = "error ?";
            document.getElementById("Deaths").innerHTML = "error ?";
            document.getElementById("Cases").innerHTML = "error ?";
            document.getElementById("Total").innerHTML = "error ?";
        } 
    }
    else {
        document.getElementById("date-last-updated").innerHTML = stats.DateLastUpdated.toDateString();
        document.getElementById("Deaths").innerHTML = stats.Deaths;
        document.getElementById("Cases").innerHTML = stats.Cases;
        document.getElementById("Total").innerHTML = stats.TotalCases.toLocaleString();
    }
}

//Get Stats By  County.
GetCountyStats().then(
    function (message) {
        PrintCountyStats(message, 0);
    },
    function (error) {
        console.log("Print County Stats - Error: ", error);
        PrintCountyStats(error, 1);
    }
);
function PrintCountyStats(stats, err) {
    //let ul = document.getElementById("county-list");
    let tbl = document.getElementById("county-list-table");

    if (err !== 0) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = "error ?";
        tr.appendChild(td);
        tbl.appendChild(tr);
    }
    else if (stats.length === 0) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.innerHTML = "No Data";
            tr.appendChild(td);
            tbl.appendChild(tr);
        }
        else {
            for (var i = 0; i < stats.length; i++) {

                let tr = document.createElement("tr");
                let td = document.createElement("td");
                td.innerHTML = stats[i].County;
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerHTML = stats[i].Confirmed;
                td.classList.add("table-cell-align-right");
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerHTML = Math.round((stats[i].Confirmed / stats[i].PopulationC16) * 100 * 100) / 100 + "%";
                td.classList.add("table-cell-align-right");
                tr.appendChild(td);

                tbl.appendChild(tr);
            }
    }
    tbl.deleteRow(1);//laoding gif
}

//Get ICU STATS
GetICUStats().then(
    function (message) {
        //console.log("Resolved: ", message);
        PrintICUStats(message, 0);
    },
    function (error) {
        console.log("ICU Stats Error: ", error);
        PrintICUStats(error, 1);
    }
);

function PrintICUStats(stats, err) {
    let tbl = document.getElementById("icu-list-table");

    if (err !== 0) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        if (stats === "No Data") {
            td.innerHTML = stats;
        }
        else {
            td.innerHTML = "error ?"; 
        }
        tr.appendChild(td);
        tbl.appendChild(tr);
    }
    else {
        if (stats.length > 0) {

            stats.reverse();
            for (var i = 0; i < 101; i++) {

                let tr = document.createElement("tr");
                let td = document.createElement("td");
                td.innerHTML = new Date(stats[i].attributes.extract).toDateString();
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerHTML = stats[i].attributes.ncovidconf;
                td.classList.add("table-cell-align-right");
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerHTML = stats[i].attributes.ndischcovidconf;
                td.classList.add("table-cell-align-right");
                tr.appendChild(td);

                td = document.createElement("td");
                td.innerHTML = stats[i].attributes.adcconf;
                td.classList.add("table-cell-align-right");
                tr.appendChild(td);

                tbl.appendChild(tr);
            }
        }
        else {
              let tr = document.createElement("tr");
              let td = document.createElement("td");
               td.innerHTML = "No Data";
               tr.appendChild(td);
            tbl.appendChild(tr);
        }
    }
    tbl.deleteRow(1);//laoding gif
}
//render main map
let map1;
let mapView;
let url = "";
let featureLayer = "";
require(["esri/Map", "esri/layers/FeatureLayer", "esri/views/MapView", "esri/widgets/Legend", "esri/request", "esri/widgets/Home"],
    function (Map, FeatureLayer, MapView, Legend, esriRequest, Home) {

        map1 = new Map({ basemap: "dark-gray-vector" }); //https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap

        let viewOptions = {
            container: "mapview", map: map1,
            center: [-7.912130968565811, 53.096755475713266], // Birr
            zoom: 7 //calling mapview.fullextent (below) overwrites the zoom but calling the Home function from mapview will read the zoom level set here.

        };

        //render map
        mapView = new MapView(viewOptions);


        //create home button
        let homeBtn = new Home({
            view: mapView
        });

        // Add the home button to the top left corner of the view
        mapView.ui.add(homeBtn, "top-left");

        //render legend
        let legend = new Legend({ view: mapView }, "legendview");
        // mapView.ui.add(legend, "top-right"); legend is rendered outside map in the legendview

        //todo format the evendate
        let templatetitle = "{ENGLISH}: 14 Day Incidence of confirmed COVID - 19 cases by LEA <br> data last updated : {EventDate} <hr>";

        let templatecontent = "<h4>LEA:";
        templatecontent = templatecontent + "{ENGLISH}</h4>";
        templatecontent = templatecontent + "<span style='color: red;'>COVID-19 - 14 Day Profile</span>";
        //todo:add the font family inline.
        //templatecontent = templatecontent + "<span style='color: red; font-family: " + "'Prompt'," + "'" + "sans-serif" + "'" + "'>COVID-19 - 14 Day Profile</span>";
        templatecontent = templatecontent + "<br>";
        templatecontent = templatecontent + "Confirmed Cases in LEA: {C19_P14_T}<br>";
        templatecontent = templatecontent + "LEA rate per 100k pop: {P14_100k}<br>";
        templatecontent = templatecontent + "R.of Ireland rate per 100k: {Ire_IncP14}<br><br>";
        templatecontent = templatecontent + "Total Population of {ENGLISH} : {Pop2016}";

        let template = {
            // autocasts as new PopupTemplate()
            title: templatetitle,
            content: templatecontent,
        };

        featureLayer = new FeatureLayer({
            url: "https://services-eu1.arcgis.com/z6bHNio59iTqqSUY/arcgis/rest/services/COVID19_14_Day_Incidence_Rate_per_100k_LEA/FeatureServer/0?f=pjson",
            outFields: ["*"],
            popupTemplate: template
        });

        map1.add(featureLayer);

        //set scale such that all data points are visible
        featureLayer.when(function () {
            mapView.goTo(featureLayer.fullExtent);
        });
    });




//get Vaccine Data
let vacccine_url = "data/vaccine.json";
fetch(vacccine_url)
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem loading vaccine file. Status Code: ' + response.status);
                PrintCovidVaccineStats(response, 1)
                return;
            }

            response.json().then(function (data) {
                PrintCovidVaccineStats(ExtractROIVaccineData(data), 0);
            });
        }
    )
    .catch(function (err) {
        PrintCovidVaccineStats(err, 1);
    });

function PrintCovidVaccineStats(stats, err) {
    if (err !== 0) {
        document.getElementById("first-dose-total").innerHTML = "?";
        document.getElementById("second-dose-total").innerHTML = "?";
        document.getElementById("vaccine-dose-total").innerHTML = "?";
    }
    else {
        document.getElementById("first-dose-total").innerHTML = stats.TotalFirstDose.toLocaleString();
        document.getElementById("second-dose-total").innerHTML = stats.SecondDoseTotal.toLocaleString();
        document.getElementById("vaccine-dose-total").innerHTML = (stats.SecondDoseTotal + stats.TotalFirstDose).toLocaleString();

        //start render vaccine chart
        let vaccine_chart_labels = [];
        let vaccine_chart_values_fd = [];
        let vaccine_chart_values_sd = [];
        for (let i = 0; i < stats.TotalByType.length; i++) {
            vaccine_chart_labels.push(stats.TotalByType[i].type);
            vaccine_chart_values_fd.push(stats.TotalByType[i].firstDose);
            vaccine_chart_values_sd.push(stats.TotalByType[i].secondDose);
        }

        let ctx = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: vaccine_chart_labels,
                datasets: [{
                    label: 'First Dose',
                    data: vaccine_chart_values_fd,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }, {
                    label: 'Second Dose',
                    data: vaccine_chart_values_sd,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                //https://stackoverflow.com/questions/45182635/how-to-use-two-datasets-in-chart-js-doughnut-chart
                //get the tooltip to show the datasetname:item:value
                tooltips: {
                    callbacks: {
                        label: function (item, data) {
                            return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                        }
                    }
                }
            }
        }); //end chart
    }
}

