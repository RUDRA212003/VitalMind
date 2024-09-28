// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Banner (Same logic as before)
const headlines = [
    "Technology reshapes the way we connect, create, and solve the world’s challenges",
    "Spiritual growth is the quiet journey inward, where true peace and purpose are found.",
    "Business thrives when vision, strategy, and innovation come together with integrity",
    "Health and fitness empower the body and mind, forming the foundation for a balanced life",
    "Juniors carry the seeds of tomorrow, with boundless curiosity and potential waiting to bloom"
];

const descriptions = [
    "Technology is the driving force behind global transformation, connecting people across distances and enabling innovation.",
    "Spirituality is the exploration of one's inner self and connection to something greater.",
    "Business is the engine of the global economy, blending creativity with strategy to create value.",
    "Health and fitness are essential for maintaining physical vitality and mental clarity.",
    "Juniors represent the future, filled with creativity, curiosity, and boundless potential."
];

let index = 0;

function changeBanner() {
    const headlineElement = document.getElementById("headline");
    const descriptionElement = document.getElementById("description");

    index = (index + 1) % headlines.length;
    headlineElement.textContent = headlines[index];
    descriptionElement.textContent = descriptions[index];
}

// Change banner every 5 seconds
setInterval(changeBanner, 5000);
