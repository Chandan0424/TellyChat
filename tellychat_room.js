username=localStorage.getItem("username");
    document.getElementById("user").innerHTML="Welcome "+username+"!";

    var firebaseConfig = {
        apiKey: "AIzaSyDQaZc67VggYUooztZMkqAqiq9KIOG1iUg",
        authDomain: "kwitter-44c0a.firebaseapp.com",
        databaseURL: "https://kwitter-44c0a-default-rtdb.firebaseio.com",
        projectId: "kwitter-44c0a",
        storageBucket: "kwitter-44c0a.appspot.com",
        messagingSenderId: "36451849742",
        appId: "1:36451849742:web:b7051be2d777893071ce5f"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);