const form = document.getElementById("feedbackForm");
const comments = document.getElementById("comments");
const charCount = document.getElementById("charCount");
const feedbackDisplay = document.getElementById("feedback-display");
const tooltip = document.getElementById("tooltip");

// Character count
comments.addEventListener("input", function () {
    charCount.textContent = "Characters: " + comments.value.length;
});

// Event delegation for tooltips
form.addEventListener("mouseover", function (event) {

    if (event.target.id === "name") {
        tooltip.textContent = "Enter your name";
    }

    if (event.target.id === "email") {
        tooltip.textContent = "Enter your email";
    }

    if (event.target.id === "comments") {
        tooltip.textContent = "Enter your feedback";
    }

    tooltip.style.display = "block";
});

form.addEventListener("mouseout", function () {
    tooltip.style.display = "none";
});

// Stop bubbling
form.addEventListener("click", function (event) {
    event.stopPropagation();
});

// Form validation
form.addEventListener("submit", function (event) {

    event.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("commentError").textContent = "";

    let valid = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = comments.value;

    if (name === "") {
        document.getElementById("nameError").textContent =
            "Name is required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Email is required";
        valid = false;
    }

    if (comment === "") {
        document.getElementById("commentError").textContent =
            "Comment is required";
        valid = false;
    }

    if (valid) {

  const newFeedback = document.createElement("div");

        newFeedback.classList.add("feedback-card");

        newFeedback.innerHTML =
            "<strong>Name:</strong> " + name +
            "<br><strong>Email:</strong> " + email +
            "<br><strong>Comment:</strong> " + comment;

        feedbackDisplay.appendChild(newFeedback);

        form.reset();
        charCount.textContent = "Characters: 0";
    }
});