document.addEventListener("DOMContentLoaded", function() {
    const templateProduct = `
      <div class="relative w-full h-full overflow-hidden bg-gray-800  shadow-xl p-6">

        <!-- Título de la galería de productos -->
        <div class="text-center mb-6">
          <h2 class="text-lg lg:text-2xl font-bold text-white">Nuestros Productos</h2>
        </div>

        <!-- Contenedor de imágenes -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img src="/avicolaisabelita/static/img/products/img-1.jpeg" class="w-full h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105">
          <img src="/avicolaisabelita/static/img/products/img-2.jpeg" class="w-full h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105">
          <img src="/avicolaisabelita/static/img/products/img-3.jpeg" class="w-full h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105">
          <img src="/avicolaisabelita/static/img/products/img-4.jpeg" class="w-full h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105">
          <img src="/avicolaisabelita/static/img/products/img-5.jpeg" class="w-full h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105">
          <img src="/avicolaisabelita/static/img/products/img-6.jpeg" class="w-full h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105">
          <img src="/avicolaisabelita/static/img/products/img-7.jpeg" class="w-full h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105">
          <img src="/avicolaisabelita/static/img/products/img-8.jpeg" class="w-full h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105">
        </div>
      </div>
    `;
    
    // Insertar el template en el DOM
    document.getElementById("product-content").innerHTML = templateProduct;
});