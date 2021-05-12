//let p = new Promise(function (resolve, reject) {
//    console.log("Promise started");
//    console.log("Promise is doing some important work...");
//    console.log("Promise has completed, will resolve shortly");
//    //resolve("Promise resolved");
//    reject("Error occurred");
//});

//p.then(
//    function (message) {
//        console.log("Resolve: ", message);
//    },
//    function (error) {
//        console.log("Reject: ", error);
//    }
//);

function doSomeStuff() {
    return new Promise(function (resolve, reject) {
        console.log("Promise started");
        console.log("Promise is doing some important work...");
        console.log("Promise has completed, will resolve shortly");
        resolve("Promise resolved");
    });
}
