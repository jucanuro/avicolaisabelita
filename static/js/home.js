document.addEventListener("DOMContentLoaded", function(e) {
    const templateHome = `
       <section id="home" class="relative h-screen w-full overflow-hidden flex items-center justify-center text-center text-white">
        
        <!-- Background Video -->
        <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover opacity-80">
            <source src="/avicolaisabelita/static/videos/Avicolaisabelita.mp4" type="video/mp4">
            Tu navegador no soporta el elemento de video.
        </video>
    </section>
    `;

    const homeContent = document.getElementById("home-content");
    if (homeContent) {
        homeContent.innerHTML = templateHome;
    } else {
        console.error("El elemento con ID 'home-content' no se encontró en el DOM.");
    }

    // Verificar si los elementos para el modal existen antes de asignarles eventos
    const closeModalButton = document.getElementById("closeModalHome");
    const modalHome = document.getElementById("myModalHome");

    if (closeModalButton && modalHome) {
        closeModalButton.addEventListener("click", function() {
            modalHome.style.display = "none";
        });
    } else {
        console.warn("Los elementos para cerrar el modal no se encontraron en el DOM.");
    }

    // Cambiar imagen automáticamente
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll(".carousel-item");
    const totalItems = carouselItems.length;

    function changeImage() {
        if (totalItems > 0) {
            carouselItems[currentIndex].classList.remove("active");
            carouselItems[currentIndex].classList.add("hidden");

            currentIndex = (currentIndex + 1) % totalItems;

            carouselItems[currentIndex].classList.remove("hidden");
            carouselItems[currentIndex].classList.add("active");
        }
    }

    setInterval(changeImage, 5000);
});
