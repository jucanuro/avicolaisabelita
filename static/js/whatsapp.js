document.addEventListener("DOMContentLoaded", function(e) {
    const templateWhatsapp = `
        <div class="fixed bottom-4 z-20 right-4">
        <div class="fixed bottom-4 z-20 right-4 flex justify-center items-center">
            <a href="https://wa.me/975620206" target="_blank" class="w-16 h-16 rounded-full bg-green-500 flex justify-center items-center hover:bg-green-600">
              <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 1.999c-5.523 0-10 4.477-10 10 0 1.767.463 3.47 1.338 4.98l-1.39 5.071 5.196-1.363c1.449.79 3.081 1.212 4.856 1.212 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 17.5c-1.553 0-3.064-.405-4.394-1.17l-.314-.177-3.085.81.828-3.028-.195-.314c-.835-1.345-1.276-2.894-1.276-4.46 0-4.408 3.592-8 8-8 4.408 0 8 3.592 8 8s-3.592 8-8 8zm4.5-5.95c-.247-.123-1.462-.722-1.69-.803-.228-.081-.395-.123-.561.123-.164.247-.643.802-.787.967-.145.164-.29.184-.538.062-.247-.123-1.042-.383-1.984-1.222-.733-.653-1.228-1.457-1.372-1.704-.144-.247-.015-.38.108-.503.111-.111.247-.29.37-.436.123-.145.164-.247.247-.41.082-.164.041-.308-.02-.431-.061-.123-.538-1.296-.736-1.773-.194-.477-.391-.412-.561-.42-.145-.007-.308-.009-.472-.009-.164 0-.431.062-.654.308-.223.247-.853.832-.853 2.034 0 1.203.874 2.366.996 2.529.123.164 1.715 2.617 4.158 3.674.58.25 1.031.398 1.382.508.581.184 1.109.158 1.526.096.465-.07 1.462-.597 1.668-1.174.205-.576.205-1.071.144-1.175-.06-.103-.226-.164-.472-.287z"/>
              </svg>
            </a>
          </div>       
    </div>
    `;
    document.getElementById("whatsapp-content").innerHTML = templateWhatsapp;
});
