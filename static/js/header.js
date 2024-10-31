document.addEventListener("DOMContentLoaded", function() { 
    const templateHeader = `
        <header class="bg-gray-100 shadow-md fixed w-full top-0 z-10">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center py-2">
                    
                    <div class="text-xs font-bold text-gray-700 flex items-center space-x-2">
                        <img class="w-auto h-auto opacity-100 shadow-none lg:max-h-12 max-h-9 w-full object-contain" src="static/img/logo/Logo-AI1.png" alt="Reform" width="158" height="48">
                        <span class="text-center text-cyan-800 font-semibold">Avícola Isabelita</span>
                    </div>
                    
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

                <div id="mobile-menu" class="hidden md:hidden flex-col space-y-4 py-4">
                    <a href="#home" class="nav-link block text-gray-700 text-sm font-semibold hover:text-blue-800">Inicio</a>
                    <a href="#producto" class="nav-link block text-gray-700 text-sm font-semibold hover:text-blue-800">Producto</a>
                    <a href="#contact" class="nav-link block text-gray-700 text-sm font-semibold hover:text-blue-800">Contacto</a>
                </div>
            </div>
        </header>
    `;

    // Insertar el template en el DOM
    document.getElementById("header-content").innerHTML = templateHeader;

    // Seleccionar el botón de menú y el menú móvil
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Añadir funcionalidad al botón de menú para mostrar/ocultar el menú móvil
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Seleccionar todos los enlaces
    const links = document.querySelectorAll('.nav-link');

    // Añadir evento click a cada enlace para aplicar fondo cian y estilo de tab redondeado
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Remover el fondo y estilo de tab redondeado de cualquier enlace activo
            links.forEach(l => l.classList.remove('bg-cyan-600', 'text-white', 'rounded-full', 'py-2', 'px-4'));

            // Añadir fondo cian y estilo de tab redondeado al enlace clicado
            event.target.classList.add('bg-cyan-600', 'text-white', 'rounded-full', 'py-2', 'px-4');
        });
    });
});