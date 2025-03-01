function formatTime(date) {
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

document.addEventListener("DOMContentLoaded", function() {
    const dummyMessages = [
        { username: "Fred", message: "UMSL has more unnecessary pre-requisite classes in Computer Science.",
            timestamp: new Date() },
        { username: "George", message: "MU's advisors did not know much about Computer Science compared to UMSL.",
            timestamp: new Date() },
        { username: "Charlotte", message: "What was your experience signing up for Computer Science classes at MU compared to UMSL?",
            timestamp: new Date() },
    ];

    let discussion = document.getElementById("discussion");

    dummyMessages.forEach(post => {
        let postDiv = document.createElement("div");
        postDiv.classList.add("message");
        postDiv.innerHTML = `
            <strong>${post.username}:</strong>
            <p>${post.message}</p>
            <div class="timestamp">${formatTime(post.timestamp)}</div>
        `;
        discussion.appendChild(postDiv);
    });
});

document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let message = document.getElementById("message").value;

    if (username.trim() && message.trim()) {
        let discussion = document.getElementById("discussion");

        let currentTime = new Date();
        let timeString = formatTime(currentTime);

        // Create the new post div with the username, message, and timestamp
        let postDiv = document.createElement("div");
        postDiv.classList.add("message");

        postDiv.innerHTML = `
            <strong>${username}:</strong>
            <p>${message}</p>
            <div class="timestamp">${timeString}</div>
        `;

        discussion.prepend(postDiv);

        document.getElementById("username").value = "";
        document.getElementById("message").value = "";
    }
});




