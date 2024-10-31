document.addEventListener("DOMContentLoaded", function(e) {
    const templateContact = `
        <div id="contact" class="container mx-auto p-6 bg-gradient-to-r from-gray-50 via-gray-300 to-gray-50 ">
            <h1 class="text-3xl font-bold mb-4">Contacto</h1>
            <p class="mb-6">Puedes seguirnos en nuestras redes sociales o chatear con nosotros directamente a través de WhatsApp.</p>

            <h2 class="text-xl font-semibold mb-2">Síguenos en:</h2>
            <div class="flex space-x-4 mb-6">
                <a href="https://www.facebook.com" target="_blank" class="flex items-center space-x-2 text-blue-600 hover:underline">
                    <i class="fab fa-facebook-f social-icon"></i>
                    <span>Facebook</span>
                </a>
                <a href="https://www.twitter.com" target="_blank" class="flex items-center space-x-2 text-blue-400 hover:underline">
                    <i class="fab fa-twitter social-icon"></i>
                    <span>Twitter</span>
                </a>
                <a href="https://www.instagram.com" target="_blank" class="flex items-center space-x-2 text-pink-600 hover:underline">
                    <i class="fab fa-instagram social-icon"></i>
                    <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com" target="_blank" class="flex items-center space-x-2 text-blue-700 hover:underline">
                    <i class="fab fa-linkedin-in social-icon"></i>
                    <span>LinkedIn</span>
                </a>
            </div>

            <h2 class="text-xl font-semibold mb-2">Chatea con nosotros:</h2>
            <p>Haz clic en el botón de WhatsApp para empezar a chatear.</p>
        </div>

        <a href="https://wa.me/1234567890" class="whatsapp-button" target="_blank" aria-label="Chatea con nosotros en WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
    `;
    document.getElementById("contact-content").innerHTML = templateContact;
});