
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCTyp5eTpUSgmx0HAdaHNOCZtuDWJIs6-s",
    authDomain: "fir-mainapp.firebaseapp.com",
    databaseURL: "https://fir-mainapp.firebaseio.com",
    storageBucket: "fir-mainapp.appspot.com",
    messagingSenderId: "558615890639"
};


firebase.initializeApp(config);

navigator.serviceWorker.register('.\google\firebase-messaging-sw.js')
.then((registration) => {
    const messaging = firebase.messaging();
    messaging.requestPermission(registration);
    return messaging.getToken();
})

.then(function(token){
    document.getElementById('token').innerHTML= token;
})
.catch(function(err){
    console.log("Error occured");
    console.log(err.toString());
})

// will be called when the webpage is in the foreground

//messaging.onMessage(function(payload){
//    console.log("onMessage",payload)
//})
