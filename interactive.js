function openTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    tabButtons.forEach(tabButton => {
        tabButton.classList.remove('active');
    });

    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }

    event.currentTarget.classList.add('active');
}

// Add a click event to the first tab button (you can add similar events to other buttons)
const firstTabButton = document.querySelector('.tab-button');
firstTabButton.addEventListener('click', function () {
    openTab('tab1');
});

// Initialize by showing the first tab
openTab('tab1');