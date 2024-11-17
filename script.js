// JavaScript to update subjects based on selected semester
function updateSubjects() {
    var semester = document.getElementById('semester').value;
    var subjectsDropdown = document.getElementById('subjects');
    var subjectsContainer = document.getElementById('subjects-container');
    var secondaryOptionsContainer = document.getElementById('secondary-options-container');
    
    // Clear any previous subjects
    subjectsDropdown.innerHTML = '<option value="">Select a subject</option>';

    // Define subjects for each semester
    var subjects = {
        semester1: ['Applied Maths', 'Applied Physics', 'Programming with C', 'Communication skills', 'BEE'],
        semester2: ['Applied Maths-2', 'Applied Physics-2', 'EVS', 'Workshop', 'Engineering Mechanics', 'Communication skills'],
        semester3: ['Discrete Structure', 'Data Structure', 'Software Engineering', 'DBMS', 'MSE', 'NM'],
        semester4: ['COA', 'DAA', 'DM', 'OOPS', 'OS'],
        semester5: ['DCCN', 'AI', 'TOC', 'M&S', 'PEH'],
        semester6: ['Math 302', 'Physics 302', 'Chemistry 302', 'Computer Science 302', 'Business Studies 302', 'Law 302'],
        semester7: ['Math 401', 'Physics 401', 'Chemistry 401', 'Computer Science 401', 'Mechanical Engineering 401', 'Electrical Engineering 401'],
        semester8: ['Math 402', 'Physics 402', 'Chemistry 402', 'Computer Science 402', 'Civil Engineering 402', 'Philosophy 402']
    };

    // Hide the secondary options container initially
    secondaryOptionsContainer.style.display = 'none';

    // Hide the subjects container initially
    subjectsContainer.style.display = 'none';

    // If a valid semester is selected, populate subjects
    if (semester && subjects[semester]) {
        subjects[semester].forEach(function(subject) {
            var option = document.createElement('option');
            option.value = subject;
            option.textContent = subject;
            subjectsDropdown.appendChild(option);
        });

        // Show the subjects container
        subjectsContainer.style.display = 'block';
    }
}

// Function to show the secondary options dropdown
function updateSecondaryOptions() {
    var subject = document.getElementById('subjects').value;
    var secondaryOptionsContainer = document.getElementById('secondary-options-container');
    
    // Show the secondary options container if a subject is selected
    if (subject) {
        secondaryOptionsContainer.style.display = 'block';
    } else {
        secondaryOptionsContainer.style.display = 'none';
    }
}
function openLink() {
    var selectedOption = document.getElementById('secondary-options').value;

    var links = {
        notes: "https://drive.google.com/drive/shared-with-me",  // Replace with actual URL for notes
        pyqs: "https://drive.google.com/drive/shared-with-me",  // Replace with actual URL for PYQs
        books: "https://drive.google.com/drive/shared-with-me", // Replace with actual URL for Books
        "lab-practicals": "https://drive.google.com/drive/shared-with-me" // Replace with actual URL for Lab Practicals
    };

    // If an option is selected and it has a corresponding link, open the link
    if (selectedOption && links[selectedOption]) {
        window.open(links[selectedOption], "_blank"); // Opens the link in a new tab
    }
}