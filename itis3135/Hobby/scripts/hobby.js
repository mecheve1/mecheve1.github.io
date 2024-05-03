function preventDefault('.nav-link'){
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href');
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            document.querySelector(targetId).style.display = 'block';
        });
    });
}
// Show the first section (home page) by default
document.querySelector('#home').style.display = 'block';