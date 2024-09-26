// Mentor data from the JSON
const mentors = [
    {
        name: "Veronicahhy",
        designation: "Software Engineer",
        photo: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
        path: "F:\HTML HACK\login\hackthon\Index.html\home page\mentor\mentors\mentor2.html" // Path to Veronicahhy's specific page
    },
    {
        name: "Priya",
        designation: "Software Engineer",
        photo: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
        path: "F:\HTML HACK\login\hackthon\Index.html\home page\mentor\mentors\mentor2.html" // Path to Priya's specific page
    },
    {
        name: "Sanjana",
        designation: "Software Engineer",
        photo: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
        path: "F:\HTML HACK\login\hackthon\Index.html\home page\mentor\mentors\mentor2.html" // Path to Sanjana's specific page
    },
    {
        name: "Jyoshika",
        designation: "Software Engineer",
        photo: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
        path: "F:\HTML HACK\login\hackthon\Index.html\home page\mentor\mentors\mentor2.html" // Path to Jyoshika's specific page
    },
    {
        name: "Krishna",
        designation: "Software Engineer",
        photo: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
        path: "F:\HTML HACK\login\hackthon\Index.html\home page\mentor\mentors\mentor2.html" // Path to Krishna's specific page
    },
    {
        name: "Arjun",
        designation: "Software Engineer",
        photo: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
        path: "F:\HTML HACK\login\hackthon\Index.html\home page\mentor\mentors\mentor2.html" // Path to Arjun's specific page
    },
    {
        name: "Radha",
        designation: "Software Engineer",
        photo: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
        path: "F:\HTML HACK\login\hackthon\Index.html\home page\mentor\mentors\mentor2.html" // Path to Radha's specific page
    },
    {
        name: "Vanshika",
        designation: "Software Engineer",
        photo: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
        path: "F:\HTML HACK\login\hackthon\Index.html\home page\mentor\mentors\mentor2.html" // Path to Vanshika's specific page
    }
];

// Function to dynamically generate mentor boxes
function generateMentorBoxes() {
    const mentorGrid = document.getElementById('mentor-grid');
    mentors.forEach(mentor => {
        const mentorBox = document.createElement('div');
        mentorBox.classList.add('mentor-box');

        // Create the image element
        const img = document.createElement('img');
        img.src = mentor.photo;
        img.alt = mentor.name;
        img.onerror = function() {
            // Fallback if the image fails to load
            this.src = 'default-image.png'; // Provide a default image
        };

        const name = document.createElement('h3');
        name.textContent = mentor.name;

        const designation = document.createElement('p');
        designation.textContent = mentor.designation;

        mentorBox.appendChild(img);
        mentorBox.appendChild(name);
        mentorBox.appendChild(designation);

        // Add click event listener for redirection
        mentorBox.addEventListener('click', () => {
            window.location.href = mentor.path; // Redirect to the mentor-specific page
        });

        mentorGrid.appendChild(mentorBox);
    });
}

// Load the mentor boxes after DOM content is loaded
document.addEventListener('DOMContentLoaded', generateMentorBoxes);
