//import { getAuth } from "https://www.gstatic.com/firebasejs/7.7.0/firebase-auth.js"
/*getAuth().projectConfigManager().updateProjectConfig(
  {
    emailPrivacyConfig: {
      enableImprovedEmailPrivacy: false,
    },
  }
);*/

const firebaseConfig = {
  apiKey: "AIzaSyB4OsK2ICsXbwTFPkxxfVfRCtACLEL5R4E",
  authDomain: "book4friends-6898b.firebaseapp.com",
  databaseURL: "https://book4friends-6898b-default-rtdb.firebaseio.com",
  projectId: "book4friends-6898b",
  storageBucket: "book4friends-6898b.appspot.com",
  messagingSenderId: "269761021366",
  appId: "1:269761021366:web:3693a9fa7e2edd66892d17",
  measurementId: "G-306LJ8EL23"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Sign Up
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var userId;
var username;
var uiConfig = {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID//,
    //firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // Retrieve the userId of the currently authenticated user
      var userId = authResult.user.uid;
      var username = authResult.user.displayName;
      console.log(userId);
      console.log(username);
      
      var db = firebase.firestore();
      var usersCollection = db.collection('users');

      // Create a new document in the users collection using the user ID
      var userDoc = usersCollection.doc(userId);
      userDoc.get()
        .then(function(doc) {
          if (!doc.exists) {
            // User doesn't exist, create a new document
            // Set the username as a field in the document
            userDoc.set({
              username: username,
              userId: userId
            })
            .then(function() {
              redirectToProfile();
              //console.log("User created successfully");
              //window.location.assign('http://hoehenmeter-challenge.github.io/my_profile/');
            })
            .catch(function(error) {
              console.error("Error storing user information: ", error);
            });

            // Continue with the default behavior
            //return true;
          } else {
            redirectToProfile();
          }
          //console.log("User logged in or signed up");
          //window.location.assign('http://hoehenmeter-challenge.github.io/my_profile/');
        });
    }
  },
  // Additional config options...
};
console.log(uiConfig)
ui.start('#firebaseui-auth-container', uiConfig);

function redirectToProfile() {
  console.log("User logged in or signed up");
  //window.location.assign('http://book4friends.github.io/');
  window.location.assign('http://localhost:8080/');
}
