document.addEventListener("DOMContentLoaded", function(e) {
    const templateHome = `
       <section id="home" class="relative h-screen w-full overflow-hidden flex items-center justify-center text-center text-white">
        
        <!-- Background Video -->
        <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover opacity-80">
            <source src="/avicolaisabelita/static/videos/Avicolaisabelita.mp4" type="video/mp4">
            <!-- Opcionalmente, puedes añadir otros formatos como .webm -->
            Tu navegador no soporta el elemento de video.
        </video>

    </section>
    `;
    document.getElementById("home-content").innerHTML = templateHome;

    // Función para cerrar el modal
    document.getElementById("closeModalHome").addEventListener("click", function() {
        document.getElementById("myModalHome").style.display = "none";
    });

    // Función para cambiar de imagen automáticamente
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll(".carousel-item");
    const totalItems = carouselItems.length;

    function changeImage() {
        // Eliminar clase 'active' de la imagen actual y ocultarla
        carouselItems[currentIndex].classList.remove("active");
        carouselItems[currentIndex].classList.add("hidden");

        // Actualizar el índice
        currentIndex = (currentIndex + 1) % totalItems;

        // Mostrar la siguiente imagen y agregar clase 'active'
        carouselItems[currentIndex].classList.remove("hidden");
        carouselItems[currentIndex].classList.add("active");
    }

    // Cambiar imagen cada 5 segundos (5000 ms)
    setInterval(changeImage, 5000);
});
