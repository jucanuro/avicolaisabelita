document.addEventListener("DOMContentLoaded", function(e) {
    const templateContact = `
        <div id="contact" class="container mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-gradient-to-r from-gray-50 via-gray-300 to-gray-50 rounded-lg shadow-md">
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Contacto</h1>
            <p class="mb-6 text-gray-700 text-sm sm:text-base lg:text-lg">Puedes seguirnos en nuestras redes sociales o chatear con nosotros directamente a través de WhatsApp.</p>

            <h2 class="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Síguenos en:</h2>
            <div class="flex flex-wrap gap-4 mb-6">
                <a href="https://www.facebook.com" target="_blank" class="flex items-center space-x-2 text-blue-600 hover:underline">
                    <i class="fab fa-facebook-f social-icon"></i>
                    <span class="text-sm sm:text-base lg:text-lg">Facebook</span>
                </a>
                <a href="https://www.twitter.com" target="_blank" class="flex items-center space-x-2 text-blue-400 hover:underline">
                    <i class="fab fa-twitter social-icon"></i>
                    <span class="text-sm sm:text-base lg:text-lg">Twitter</span>
                </a>
                <a href="https://www.instagram.com" target="_blank" class="flex items-center space-x-2 text-pink-600 hover:underline">
                    <i class="fab fa-instagram social-icon"></i>
                    <span class="text-sm sm:text-base lg:text-lg">Instagram</span>
                </a>
                <a href="https://www.linkedin.com" target="_blank" class="flex items-center space-x-2 text-blue-700 hover:underline">
                    <i class="fab fa-linkedin-in social-icon"></i>
                    <span class="text-sm sm:text-base lg:text-lg">LinkedIn</span>
                </a>
            </div>

            <h2 class="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Chatea con nosotros:</h2>
            <p class="text-gray-700 text-sm sm:text-base">Haz clic en el botón de WhatsApp para empezar a chatear.</p>
        </div>

        <a href="https://wa.me/1234567890" class="whatsapp-button fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-200" target="_blank" aria-label="Chatea con nosotros en WhatsApp">
            <i class="fab fa-whatsapp text-xl sm:text-2xl lg:text-3xl"></i>
        </a>
    `;
    document.getElementById("contact-content").innerHTML = templateContact;
});
