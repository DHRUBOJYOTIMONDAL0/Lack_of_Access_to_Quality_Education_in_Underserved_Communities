const hamBurger = document.getElementById('ham-burger');
const hamBurgerCopy = document.getElementById('ham-burger-copy');
const sidebar = document.getElementById('sidebar');
hamBurger.addEventListener('click',()=>{
    sidebar.classList.toggle('hidden');
    hamBurgerCopy.classList.toggle('hidden');
})
hamBurgerCopy.addEventListener('click',()=>{
    sidebar.classList.toggle('hidden');
    hamBurgerCopy.classList.toggle('hidden')
})
document.getElementById('addCourseBtn').addEventListener('click', function() {
    alert('Add Course functionality goes here.');
});

document.getElementById('addCurriculumBtn').addEventListener('click', function() {
    alert('Add Curriculum with Video functionality goes here.');
});

document.getElementById('addTestsBtn').addEventListener('click', function() {
    alert('Add Upcoming Tests functionality goes here.');
});

document.getElementById('addFAQBtn').addEventListener('click', function() {
    alert('Add FAQ functionality goes here.');
});

// Sidebar toggle functionality
document.getElementById('menuIcon').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
});