
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCTyp5eTpUSgmx0HAdaHNOCZtuDWJIs6-s",
    authDomain: "fir-mainapp.firebaseapp.com",
    databaseURL: "https://fir-mainapp.firebaseio.com",
    storageBucket: "fir-mainapp.appspot.com",
    messagingSenderId: "558615890639"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.requestPermission()
.then(function(){
    return messaging.getToken(); 
})
.then(function(token){
    document.getElementById('token').innerHTML= token;
})
.catch(function(err){
    console.log("Error occured");
})

// will be called when the webpage is in the foreground

messaging.onMessage(function(payload){
    console.log("onMessage",payload)
})
