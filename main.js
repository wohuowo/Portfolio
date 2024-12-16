function updateList() {
    const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });

    document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

    document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");

}
updateList();
window.addEventListener('scroll', () => {
    updateList();
})

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        
        // Collect form data
        const name = form.querySelector('input[placeholder="Name"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
        
        // Create a mailto link with pre-filled details
        const mailtoLink = `mailto:tonyobriku@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open the default email client
        window.location.href = mailtoLink;
        
        // Optional: Clear the form after submission
        form.reset();
    });
});