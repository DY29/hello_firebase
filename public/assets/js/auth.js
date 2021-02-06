
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

    firebase.auth().onAuthStateChanged(function (user) {
        var cu = window.location.href;
        var n1 = cu.indexOf('login');

        if (user) {
            if (n1 > 1) {
                window.open('../../index.html', '_self', false);      
            }
            else {
                console.log(user);
                $("#lblemail").text(user.email);         
            }
            
        } else {
            if (n1 < 1) {
                window.open('../../auth/login/index.html','_self', false);
            }
        }

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

function logout()
{

    firebase.auth().signOut().then(function (){

    }, function(error) {

    });
    
}


function signup()
{

    firebase.auth().createUserWithEmailAndPassword($('#txtemail').val(), $('#txtpasswd').val()).then(function (user) {
    }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // swal("Oops!!", error.message, 'error');
    alert(error.message);
    }); 

}


function facebooklogin() {
    var user = firebase.auth().currentUser;
    
    if (user) {
        //
    } else {
    
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            // var user = result.user;
            console.log("facebook connected");
        }).catch(function (error) {
            console.log(error);
        });
    }
}


function googlelogin(){

    var user = firebase.auth().currentUser;
    if (user) {
    //
    } else {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        var user = result.user;
        console.log("connected");
        
    }).catch(function (error) {
        console.log('error',error);
    });
    }

}