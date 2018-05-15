var socket = io();

socket.on("connect", () => {
  console.log("Connected to server");

//   socket.emit("createEmail", {
//     to: "jen@demo.com",
//     text: "How are you?"
//   });

  socket.emit("createMessage", {
    from: "jen@demo.com",
    text: "This is Jen"
  });
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

// socket.on("newEmail", function(email) {
//   console.log("New email", email);
// });

socket.on("newMessage", function(message) {
  console.log("New message", message);
});
