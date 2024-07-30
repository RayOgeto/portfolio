const track = document.getElementById("image-track");

let mouseDownAt = 0;
let prevPercentage = 0;
let percentage = 0;

window.onmousedown = e => {
    mouseDownAt = e.clientX;
    track.style.transition = "none";  // Remove transition during dragging
};

window.onmouseup = () => {
    mouseDownAt = 0;
    prevPercentage = percentage;
    track.style.transition = "transform 0.3s";  // Add a smooth transition after dragging
};

window.onmousemove = e => {
    if (mouseDownAt === 0) return;  // Exit if mouse is not pressed

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    percentage = (mouseDelta / maxDelta) * -100 + prevPercentage;
    percentage = Math.max(Math.min(percentage, 0), -100);  // Clamp percentage between -100 and 0

    track.style.transform = `translate(${percentage}%, 0)`;
};


const dropdown = document.querySelector('.dropdown');
        const menubtn = document.querySelector('.toggle');
        const menuicon = document.querySelector('.toggle i');

        menubtn.onclick = function() {
            dropdown.classList.toggle('open');
            const isOpen = dropdown.classList.contains('open');
            menuicon.classList = isOpen ? 'bx bx-x' : 'bx bx-menu';
        };

        let btn = document.querySelector('#btn');
        let sidebar = document.querySelector('.sidebar');

        btn.onclick = function() {
            sidebar.classList.toggle('active');
        };