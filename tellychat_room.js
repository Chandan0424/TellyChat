


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
    document.getElementById("user").innerHTML="Welcome "+username+"!";

function addRoom(){
    roomName=document.getElementById("roomname").value;
    localStorage.setItem("roomName",roomName);
    firebase.database().ref("/").child(roomName).update({
        purpose:"adding room name",
        name:roomName
  })
    window.location="tellychat_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log(Room_names);
    row="<div class='room_Name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>"
    document.getElementById("output").innerHTML+=row;
   });});}
getData();

function redirectToRoomName(Name){
   console.log(Name);
   localStorage.setItem("roomName",Name);
   window.location="tellychat_page.html"
}

function logout(){
   localStorage.removeItem("username");
   localStorage.removeItem("roomName");
   window.location="index.html"
}