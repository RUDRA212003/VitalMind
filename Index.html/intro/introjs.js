const headlines = [
    "Technology reshapes the way we connect, create, and solve the world’s challenges",
    "Spiritual growth is the quiet journey inward, where true peace and purpose are found.",
    "Business thrives when vision, strategy, and innovation come together with integrity",
    "Health and fitness empower the body and mind, forming the foundation for a balanced life",
    "Juniors carry the seeds of tomorrow, with boundless curiosity and potential waiting to bloom"
];

const descriptions = [
    "Technology is the driving force behind global transformation, connecting people across distances and enabling innovation. From AI to smart devices, it continually shapes how we live, work, and interact. Its influence is profound, reshaping industries and revolutionizing daily life.",
    "Spirituality is the exploration of one's inner self and connection to something greater. It transcends material existence, offering guidance, peace, and purpose. Through mindfulness, meditation, and reflection, spiritual growth nourishes the soul and leads to a deeper understanding of life.",
    "Business is the engine of the global economy, blending creativity with strategy to create value. Successful enterprises focus on sustainability, innovation, and ethical practices. In a rapidly evolving marketplace, businesses must adapt, build relationships, and maintain integrity to thrive.",
    "Health and fitness are essential for maintaining physical vitality and mental clarity. By prioritizing movement, nutrition, and self-care, individuals enhance their overall well-being. A consistent focus on health leads to increased energy, longevity, and a positive outlook on life.",
    "Juniors represent the future, filled with creativity, curiosity, and boundless potential. As they explore the world, they learn valuable lessons that shape their growth. Guiding juniors with encouragement and support helps nurture the leaders and innovators of tomorrow."
];

let index = 0;

function changeBanner() {
    const bannerContent = document.querySelector('.banner-content');
    
    // Add sliding out class
    bannerContent.classList.add('slide-out');

    // Wait for the animation to finish
    setTimeout(() => {
        // Update text content
        const headlineElement = document.getElementById("headline");
        const descriptionElement = document.getElementById("description");
        index = (index + 1) % headlines.length;
        headlineElement.textContent = headlines[index];
        descriptionElement.textContent = descriptions[index];
        
        // Remove sliding out and add sliding in class
        bannerContent.classList.remove('slide-out');
        bannerContent.classList.add('slide-in');
    }, 3000); // Wait for the slide-out animation to finish (1s)
}

// Change banner every 5 seconds
setInterval(changeBanner, 1000);
