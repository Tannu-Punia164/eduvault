// JavaScript to update subjects based on selected semester
// Define subjects for each semester using a Map
const subjectsMap = new Map([
    ["semester1", ["Applied Maths", "Applied Physics", "Programming with C", "Communication Skills", "BEE"]],
    ["semester2", ["Applied Maths-2", "Applied Physics-2", "EVS", "Workshop", "Engineering Mechanics", "Communication Skills"]],
    ["semester3", ["Discrete Structure", "Data Structure", "Software Engineering", "DBMS", "MSE", "NM"]],
    ["semester4", ["COA", "DAA", "DM", "OOPS", "OS"]],
    ["semester5", ["DCCN", "AI", "TOC", "M&S", "PEH"]],
    ["semester6", ["Math 302", "Physics 302", "Chemistry 302", "Computer Science 302", "Business Studies 302", "Law 302"]],
    ["semester7", ["Math 401", "Physics 401", "Chemistry 401", "Computer Science 401", "Mechanical Engineering 401", "Electrical Engineering 401"]],
    ["semester8", ["Math 402", "Physics 402", "Chemistry 402", "Computer Science 402", "Civil Engineering 402", "Philosophy 402"]]
]);

// Define resource links for secondary options
const resourceLinks = new Map([
    ["notes", "https://drive.google.com/drive/shared-with-me"], // Replace with actual URL for Notes
    ["pyqs", "https://drive.google.com/drive/shared-with-me"],  // Replace with actual URL for PYQs
    ["books", "https://drive.google.com/drive/shared-with-me"], // Replace with actual URL for Books
    ["lab-practicals", "https://drive.google.com/drive/shared-with-me"] // Replace with actual URL for Lab Practicals
]);

// Function to update the subjects dropdown based on selected semester
function updateSubjects() {
    const semester = document.getElementById("semester").value;
    const subjectsDropdown = document.getElementById("subjects");
    const subjectsContainer = document.getElementById("subjects-container");
    const secondaryOptionsContainer = document.getElementById("secondary-options-container");

    // Clear previous subjects
    subjectsDropdown.innerHTML = '<option value="">Select a Subject</option>';

    // Hide containers initially
    subjectsContainer.style.display = "none";
    secondaryOptionsContainer.style.display = "none";

    // Populate subjects if the semester is valid
    if (semester && subjectsMap.has(semester)) {
        const subjects = subjectsMap.get(semester);
        subjects.forEach(subject => {
            const option = document.createElement("option");
            option.value = subject;
            option.textContent = subject;
            subjectsDropdown.appendChild(option);
        });

        // Show the subjects container
        subjectsContainer.style.display = "block";
    }
}

// Function to update and show secondary options
function updateSecondaryOptions() {
    const subject = document.getElementById("subjects").value;
    const secondaryOptionsContainer = document.getElementById("secondary-options-container");

    // Show the secondary options container if a subject is selected
    if (subject) {
        secondaryOptionsContainer.style.display = "block";
    } else {
        secondaryOptionsContainer.style.display = "none";
    }
}

// Function to open the corresponding resource link
function openLink() {
    const selectedOption = document.getElementById("secondary-options").value;

    // Open the link if a valid option is selected
    if (selectedOption && resourceLinks.has(selectedOption)) {
        window.open(resourceLinks.get(selectedOption), "_blank");
    }
}


