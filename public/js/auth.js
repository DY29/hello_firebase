
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDAk-EwnowCtIENdjPkPHP1ucBCis-G3Dk",
    authDomain: "fir-tests-8fc10.firebaseapp.com",
    projectId: "fir-tests-8fc10",
    storageBucket: "fir-tests-8fc10.appspot.com",
    messagingSenderId: "22410410609",
    appId: "1:22410410609:web:72a0c77145b8362e03b9d0",
    measurementId: "G-LMK1S8F3P8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();





$(document).ready(function ($) {

    firebase.auth().onAuthStateChanged(function (user){
        if (user) { console.log('log', user)}
        else{ console.log('err', 'not yet')}
    });

});






function login()
{

    firebase.auth().signInWithEmailAndPassword($("#txtemail").val(), $("#txtpasswd").val()).then(function(result) {
      
    }).catch(function (error)  {
      var errorCode = error.code;
      alert (errorCode);
    });
    
}



