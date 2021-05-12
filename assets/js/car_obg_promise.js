function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}


function Car2(make, model, year) {

    return new Promise(function (resolve, reject) {

        let myObj = { make: make, model: model, year: year }

        
        resolve(myObj);
    });
       
}