// Sample data for AI education websites
const aiEducationWebsites = [
    {
        name: "Duolingo",
        description: "Language learning platform that uses AI to personalize lessons and adapt to the learner's pace.",
        url: "https://www.duolingo.com",
        image: "/placeholder.svg?height=40&width=40",
        pricing: "freemium",
        hashtags: ["LanguageLearning", "AI", "Personalization"]
    },
    {
        name: "Carnegie Learning",
        description: "AI-powered math learning software that provides personalized instruction and real-time feedback.",
        url: "https://www.carnegielearning.com",
        image: "/placeholder.svg?height=40&width=40",
        pricing: "paid",
        hashtags: ["Math", "AI", "AdaptiveLearning"]
    },
    {
        name: "Third Space Learning",
        description: "Online math tutoring platform that uses AI to match students with tutors and provide personalized learning experiences.",
        url: "https://thirdspacelearning.com",
        image: "/placeholder.svg?height=40&width=40",
        pricing: "paid",
        hashtags: ["Math", "Tutoring", "AI"]
    },
    {
        name: "Century Tech",
        description: "AI-powered learning platform that creates personalized learning paths across various subjects.",
        url: "https://www.century.tech",
        image: "/placeholder.svg?height=40&width=40",
        pricing: "paid",
        hashtags: ["PersonalizedLearning", "AI", "K12"]
    },
    {
        name: "Knewton",
        description: "Adaptive learning technology that uses AI to provide personalized course content and assessments.",
        url: "https://www.knewton.com",
        image: "/placeholder.svg?height=40&width=40",
        pricing: "paid",
        hashtags: ["AdaptiveLearning", "AI", "HigherEd"]
    },
    {
        name: "Querium",
        description: "AI-powered STEM tutoring platform that provides step-by-step guidance and instant feedback.",
        url: "https://www.querium.com",
        image: "/placeholder.svg?height=40&width=40",
        pricing: "freemium",
        hashtags: ["STEM", "Tutoring", "AI"]
    }
];

// DOM element references
const websiteGrid = document.getElementById('websiteGrid');
const searchInput = document.getElementById('searchInput');
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

// Function to render AI website cards
function renderWebsites(websites) {
    websiteGrid.innerHTML = '';
    websites.forEach(website => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="pricing-indicator ${website.pricing}">${website.pricing}</div>
            <div class="card-header">
                <div class="card-title">
                    <img src="${website.image}" alt="${website.name} logo" class="card-image">
                    <h2>${website.name}</h2>
                </div>
            </div>
            <p>${website.description}</p>
            <div class="card-footer">
                <div class="hashtags">
                    ${website.hashtags.map(tag => `<span class="hashtag">#${tag}</span>`).join('')}
                </div>
                <a href="${website.url}" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
        `;
        websiteGrid.appendChild(card);
    });
}

// Function to filter websites based on search input
function filterWebsites() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredWebsites = aiEducationWebsites.filter(website =>
        website.name.toLowerCase().includes(searchTerm) ||
        website.description.toLowerCase().includes(searchTerm) ||
        website.hashtags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    renderWebsites(filteredWebsites);
}

// Event listener for search input
searchInput.addEventListener('input', filterWebsites);

// Event listener for mobile menu toggle
menuButton.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// Initial render of all websites
renderWebsites(aiEducationWebsites);