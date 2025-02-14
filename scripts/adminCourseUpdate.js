function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    if (sidebar.style.marginLeft === '0px') {
        sidebar.style.marginLeft = '-250px';
        mainContent.style.marginLeft = '0';
    } else {
        sidebar.style.marginLeft = '0px';
        mainContent.style.marginLeft = '250px';
    }
}