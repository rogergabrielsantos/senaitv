// Function to update values
function updateValues() {
    // Update population (random between 260 and 289)
    const populationElement = document.querySelector('.box1 span');
    populationElement.textContent = Math.floor(Math.random() * (289 - 260 + 1)) + 260;
    
    // Update labs in use (random between 12 and 19)
    const labsElement = document.querySelector('.box2 span');
    labsElement.textContent = Math.floor(Math.random() * (19 - 12 + 1)) + 12;
    
    // Update enrollments (increase by 4 each time)
    const enrollmentsElement = document.querySelector('.box9 span');
    let currentEnrollments = parseInt(enrollmentsElement.textContent);
    enrollmentsElement.textContent = currentEnrollments + 4;
}

// Run immediately when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateValues();
    
    // Then run every 30 minutes (1800000 milliseconds)
    setInterval(updateValues, 1800000);
});
