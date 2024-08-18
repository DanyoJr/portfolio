const texto = document.getElementById('system');
const textoOriginal = texto.textContent;
    texto.textContent = '';

let i = 0;
function animate() {
    texto.textContent += textoOriginal[i];
    i++;

    if (i < textoOriginal.length) {
    setTimeout(() => {
    requestAnimationFrame(animate);}, 50);
    }
} animate();

function copyEmail(email) {
    const textarea = document.createElement('textarea');
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
}
