// // DOM Selection
// const form = document.getElementById("eventForm");
// const container = document.getElementById("eventContainer");
// const countDisplay = document.getElementById("eventCount");

// let eventCount = 0;

// // FORM SUBMIT EVENT
// form.addEventListener("submit", function(e) {
//     e.preventDefault(); // prevent page reload

//     // Get values
//     const name = document.getElementById("eventName").value;
//     const date = document.getElementById("eventDate").value;
//     const location = document.getElementById("eventLocation").value;

//     createEventCard(name, date, location);

//     form.reset(); // clear form
// });

// // FUNCTION TO CREATE EVENT CARD (Dynamic DOM Creation)
// function createEventCard(name, date, location) {

//     // Create elements
//     const card = document.createElement("div");
//     card.classList.add("eventCard");

//     // innerHTML used intentionally (assignment requirement)
//     card.innerHTML = `
//         <h3>${name}</h3>
//         <p><strong>Date:</strong> <span class="dateText"></span></p>
//         <p><strong>Location:</strong> ${location}</p>
//         <button class="deleteBtn">Delete</button>
//     `;

//     // textContent used intentionally (safer than innerHTML)
//     card.querySelector(".dateText").textContent = date;

//     // STYLE MANIPULATION USING JS
//     card.style.borderLeft = "5px solid #4CAF50";

//     container.appendChild(card);

//     updateCount();
// }

// // EVENT DELEGATION (Handles all delete buttons)
// container.addEventListener("click", function(e) {

//     if (e.target.classList.contains("deleteBtn")) {
//         const card = e.target.parentElement; // DOM Traversal
//         container.removeChild(card);
//         updateCount();
//     }
// });

// // HOVER EFFECT USING EVENT HANDLING
// container.addEventListener("mouseover", function(e) {
//     if (e.target.classList.contains("eventCard")) {
//         e.target.style.backgroundColor = "#e8f5e9";
//     }
// });

// container.addEventListener("mouseout", function(e) {
//     if (e.target.classList.contains("eventCard")) {
//         e.target.style.backgroundColor = "white";
//     }
// });

// // UPDATE EVENT COUNT USING innerText
// function updateCount() {
//     eventCount = container.children.length;

//     // innerText used here intentionally
//     countDisplay.innerText = eventCount;
// }
const domOutput = document.getElementById("domOutput");

function showDOMAction(message) {
    domOutput.innerHTML = `
    <p>${message}</p>
  `;
}

const eventList = document.getElementById("eventList");

function addEvent() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (!title || !date) {
        alert("Title and Date required");
        return;
    }

    createEvent(title, date, category, description);

    showDOMAction(`
    <strong>Event Added</strong><br>
     document.createElement() : Add a new event card  <br>
     innerHTML() : Event content has been inserted<br>
     appendChild() : Added to the event list
  `);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}


function createEvent(title, date, category, description) {
    const div = document.createElement("div");
    div.className = "event";

    div.innerHTML = `
    <div class="delete">×</div>
    <h3>${title}</h3>
    <p>📅 ${date}</p>
    <span class="tag">${category}</span>
    <p>${description}</p>
  `;

    div.querySelector(".delete").addEventListener("click", () => {
        div.remove();
        showDOMAction(`
      <strong>Event Deleted</strong><br>
      remove() : Event card has been removed from the DOM
    `);
    });

    eventList.appendChild(div);
}


function clearEvents() {
    eventList.innerHTML = "";

    showDOMAction(`
    <strong>All Events Cleared</strong><br>
    innerHTML() : The entire DOM has been cleared
  `);
}


function addSampleEvents() {
    clearEvents();

    createEvent(
        "Emifest",
        "2026-01-14",
        "Social",
        "Lorem ipsum dolor sit amet"
    );

    createEvent(
        "Tech Conference",
        "2026-02-10",
        "Conference",
        "JavaScript & Web Dev"
    );

    showDOMAction(`
    <strong>Sample Events Added</strong><br>
     createElement() : Multiple elements have been created<br>
     appendChild() : Added to the list
  `);
}
