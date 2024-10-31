document.addEventListener("DOMContentLoaded", function() {
  const templateProduct = `
    <div id="producto" class="relative w-full h-full overflow-hidden bg-gradient-to-r from-gray-50 via-gray-700 to-gray-50 p-4 sm:p-6 lg:p-8">

      <!-- Título de la galería de productos -->
      <div class="text-center mb-4 sm:mb-6">
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Nuestros Productos</h2>
      </div>

      <!-- Contenedor de imágenes -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img src="/avicolaisabelita/static/img/products/img-1.jpeg" class="product-img w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105 cursor-pointer">
        <img src="/avicolaisabelita/static/img/products/img-2.jpeg" class="product-img w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105 cursor-pointer">
        <img src="/avicolaisabelita/static/img/products/img-3.jpeg" class="product-img w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105 cursor-pointer">
        <img src="/avicolaisabelita/static/img/products/img-4.jpeg" class="product-img w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105 cursor-pointer">
        <img src="/avicolaisabelita/static/img/products/img-5.jpeg" class="product-img w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105 cursor-pointer">
        <img src="/avicolaisabelita/static/img/products/img-6.jpeg" class="product-img w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105 cursor-pointer">
        <img src="/avicolaisabelita/static/img/products/img-7.jpeg" class="product-img w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105 cursor-pointer">
        <img src="/avicolaisabelita/static/img/products/img-8.jpeg" class="product-img w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg transition duration-200 transform hover:scale-105 cursor-pointer">
      </div>

      <!-- Modal para mostrar imagen en tamaño completo -->
      <div id="imageModal" class="hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div class="relative w-full max-w-lg sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
          <img id="modalImage" src="" class="w-full h-auto rounded-lg shadow-lg transition duration-300 transform scale-90">
          <button id="closeModal" class="absolute top-2 right-2 bg-white text-gray-800 rounded-full p-2 focus:outline-none hover:bg-gray-300 transition duration-200">
            &times;
          </button>
        </div>
      </div>
    </div>
  `;

  // Insertar el template en el DOM
  document.getElementById("product-content").innerHTML = templateProduct;

  // Seleccionar todas las imágenes de productos
  const productImages = document.querySelectorAll('.product-img');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.getElementById('closeModal');

  // Añadir evento de clic a cada imagen para abrir el modal
  productImages.forEach(img => {
      img.addEventListener('click', (event) => {
          modal.classList.remove('hidden');
          modalImage.src = event.target.src;
          setTimeout(() => modalImage.classList.remove('scale-90'), 10); // Zoom suave de entrada
      });
  });

  // Cerrar el modal al hacer clic en el botón cerrar
  closeModal.addEventListener('click', () => {
      modalImage.classList.add('scale-90'); // Zoom suave de salida
      setTimeout(() => modal.classList.add('hidden'), 200);
  });

  // Cerrar el modal al hacer clic en cualquier parte del mismo
  modal.addEventListener('click', (event) => {
      if (event.target === modal) {
          modalImage.classList.add('scale-90'); // Zoom suave de salida
          setTimeout(() => modal.classList.add('hidden'), 200);
      }
  });
});
