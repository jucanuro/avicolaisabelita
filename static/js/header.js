// Función de redireccionamiento a WhatsApp
function redirectToWhatsApp() {
    const whatsappNumber = "971936602"; // Asegúrate de que el número sea el correcto
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
}

document.addEventListener("DOMContentLoaded", function() { 
    const templateHeader = `
        <header class="bg-gray-100 shadow-md fixed w-full top-0 z-10">
            <div class="lg:max-w-7xl w-full mx-auto px-8 lg:px-8">
                <div class="flex justify-between items-center py-2">
                    <div class="text-xs font-bold text-gray-700 items-center space-x-2 hidden lg:block">
                        <img class="w-auto h-auto opacity-100 shadow-none lg:max-h-12 max-h-9 w-full object-contain" src="static/img/logo/Logo-AI1.png" alt="Reform" width="158" height="48">
                        <span class="text-center text-cyan-800 font-semibold">Avícola Isabelita</span>
                    </div>

                    <!-- Botón de Pedido -->
                    <div id="order-button" class="text-center my-4">
                        <button onclick="redirectToWhatsApp()"
                            class="flex bg-gradient-to-r from-cyan-600 to-cyan-800 text-white font-semibold text-xs md:text-sm lg:text-md py-1 md:py-2 px-4 md:px-6 lg:px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
                            aria-label="Para realizar pedido, haz clic aquí">
                            <p>Para realizar pedido, haz click aquí</p>
                            <svg class="w-3 h-3 lg:w-4 lg:h-4 mt-1 fill-white ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M128 40c0-22.1 17.9-40 40-40s40 17.9 40 40l0 148.2c8.5-7.6 19.7-12.2 32-12.2c20.6 0 38.2 13 45 31.2c8.8-9.3 21.2-15.2 35-15.2c25.3 0 46 19.5 47.9 44.3c8.5-7.7 19.8-12.3 32.1-12.3c26.5 0 48 21.5 48 48l0 48 0 16 0 48c0 70.7-57.3 128-128 128l-16 0-64 0-.1 0-5.2 0c-5 0-9.9-.3-14.7-1c-55.3-5.6-106.2-34-140-79L8 336c-13.3-17.7-9.7-42.7 8-56s42.7-9.7 56 8l56 74.7L128 40zM240 304c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96zm48-16c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96z"/>
                            </svg>
                        </button>
                    </div>

                    <!-- Navegación -->
                    <nav class="hidden md:flex space-x-8">
                        <a href="#home" class="nav-link text-gray-700 text-md font-semibold hover:text-blue-800">Inicio</a>
                        <a href="#producto" class="nav-link text-gray-700 text-md font-semibold hover:text-blue-800">Producto</a>
                        <a href="#contact" class="nav-link text-gray-700 text-md font-semibold hover:text-blue-800">Contacto</a>
                    </nav>

                    <button id="menu-btn" class="md:hidden text-gray-700 focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <!-- Menú móvil -->
                <div id="mobile-menu" class="hidden md:hidden flex-col space-y-4 py-4">
                    <a href="#home" class="nav-link block text-gray-700 text-sm font-semibold hover:text-blue-800">Inicio</a>
                    <a href="#producto" class="nav-link block text-gray-700 text-sm font-semibold hover:text-blue-800">Producto</a>
                    <a href="#contact" class="nav-link block text-gray-700 text-sm font-semibold hover:text-blue-800">Contacto</a>
                </div>
            </div>
        </header>
    `;

    // Insertar el header en el DOM
    document.getElementById("header-content").innerHTML = templateHeader;

    // Lógica para menú móvil
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Lógica para enlaces de navegación
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            links.forEach(l => l.classList.remove('bg-cyan-600', 'text-white', 'rounded-full', 'py-2', 'px-4'));
            event.target.classList.add('bg-cyan-600', 'text-white', 'rounded-full', 'py-2', 'px-4');
        });
    });
});
