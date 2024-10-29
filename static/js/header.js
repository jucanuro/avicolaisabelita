
document.addEventListener("DOMContentLoaded", function(e) {
    const templateHeader = `
   <header class="bg-white shadow-md fixed w-full top-0 z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                
                
                <div class="text-2xl font-bold text-gray-800">MiLogo</div>
                
               
                <nav class="hidden md:flex space-x-8">
                    <a href="#" class="text-gray-600 hover:text-gray-900">Inicio</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Servicios</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Sobre nosotros</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Contacto</a>
                </nav>

                
                <button id="menu-btn" class="md:hidden text-gray-800 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

           
            <div id="mobile-menu" class="hidden md:hidden flex-col space-y-4 py-4">
                <a href="#" class="block text-gray-600 hover:text-gray-900">Inicio</a>
                <a href="#" class="block text-gray-600 hover:text-gray-900">Servicios</a>
                <a href="#" class="block text-gray-600 hover:text-gray-900">Sobre nosotros</a>
                <a href="#" class="block text-gray-600 hover:text-gray-900">Contacto</a>
            </div>
        </div>
    </header>
    `;
    document.getElementById("header-content").innerHTML = templateHeader;

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Seleccionar todos los enlaces del menú móvil
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    // Añadir evento click a cada enlace para ocultar el menú móvil
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

});

