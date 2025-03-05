function formatTime(date) {
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

document.addEventListener("DOMContentLoaded", function() {
    const dummyReviews = [
        { username: "Alice", message: "The CS101 course was very well structured and informative.", timestamp: new Date() },
        { username: "Bob", message: "I found the math lectures to be quite challenging but rewarding!", timestamp: new Date() },
        { username: "Charlie", message: "The professor for Data Structures explains concepts very clearly!", timestamp: new Date() },
    ];

    let reviewsContainer = document.getElementById("reviews");

    if (reviewsContainer) {
        dummyReviews.forEach(review => {
            let reviewDiv = document.createElement("div");
            reviewDiv.classList.add("review");
            reviewDiv.innerHTML = `
                <strong>${review.username}:</strong>
                <p>${review.message}</p>
                <div class="timestamp">${formatTime(review.timestamp)}</div>
            `;
            reviewsContainer.appendChild(reviewDiv);
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let reviewForm = document.getElementById("reviewForm");
    if (reviewForm) {
        reviewForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let message = document.getElementById("reviewMessage").value;
            let reviewsContainer = document.getElementById("reviews");

            if (username.trim() && message.trim()) {
                let currentTime = new Date();
                let timeString = formatTime(currentTime);

                let reviewDiv = document.createElement("div");
                reviewDiv.classList.add("review");
                reviewDiv.innerHTML = `
                    <strong>${username}:</strong>
                    <p>${message}</p>
                    <div class="timestamp">${timeString}</div>
                `;
                
                reviewsContainer.prepend(reviewDiv);

                document.getElementById("username").value = "";
                document.getElementById("reviewMessage").value = "";
            }
        });
    }
});
