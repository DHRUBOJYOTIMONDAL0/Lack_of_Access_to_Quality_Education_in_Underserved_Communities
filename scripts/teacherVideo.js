function toggleVideo() {
    var video = document.getElementById("lectVideo");
    var thumbnail = document.getElementById("videoThumbnail");

    if (video.style.display === "none") {
        video.style.display = "block";
        thumbnail.style.display = "none";
        video.play();
    } else {
        video.pause();
        video.style.display = "none";
        thumbnail.style.display = "block";
    }
}

function sendMessage() {
    var input = document.getElementById("chatInput");
    var chatbox = document.getElementById("chatbox");

    if (input.value.trim() !== "") {
        var message = document.createElement("div");
        message.className = "chat-message student";
        message.textContent = input.value;
        
        chatbox.appendChild(message);
        input.value = "";
        chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the latest message
    }
}