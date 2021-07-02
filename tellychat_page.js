var firebaseConfig = {
    apiKey: "AIzaSyDQaZc67VggYUooztZMkqAqiq9KIOG1iUg",
    authDomain: "kwitter-44c0a.firebaseapp.com",
    databaseURL: "https://kwitter-44c0a-default-rtdb.firebaseio.com",
    projectId: "kwitter-44c0a",
    storageBucket: "kwitter-44c0a.appspot.com",
    messagingSenderId: "36451849742",
    appId: "1:36451849742:web:b7051be2d777893071ce5f"
  };
  firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("username");
    roomName=localStorage.getItem("roomName");

    function Send(){
          msg=document.getElementById("msginput").value;
          firebase.database().ref(roomName).push({
                name:username,
                message:msg,
                like:0
          });
          document.getElementById("msginput").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("msg").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logOut(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomName");
      window.location="index.html"
}


