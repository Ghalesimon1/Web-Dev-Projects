document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-up").style.display = "block";
    } else {
        document.getElementById("scroll-up").style.display = "none";
    }
}

// Scroll to the top of the document when the user clicks the button
document.getElementById("scroll-up").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});