var firebaseConfig = {
      apiKey: "AIzaSyC0ZofEIYKJwuJyqZ4u35FuMs4qAL5IU4k",
      authDomain: "project-93-27a0a.firebaseapp.com",
      databaseURL: "https://project-93-27a0a-default-rtdb.firebaseio.com",
      projectId: "project-93-27a0a",
      storageBucket: "project-93-27a0a.appspot.com",
      messagingSenderId: "660204119335",
      appId: "1:660204119335:web:9655676f7ab7c37be77502"
    };
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("Room Name", room_name);
      window.location = "Havetalk_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectingtoRooms(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectingtoRooms(name) {
      console.log(name);
      localStorage.setItem("Room Name", name);
      window.location = "Havetalk_page.html";
}