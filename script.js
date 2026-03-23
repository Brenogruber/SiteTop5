const btnPerfil = document.getElementById('btn-perfil');
// Usamos querySelector para pegar a classe já que o ID não existe no HTML
const menu = document.querySelector('.profile-menu'); 
const seta = document.querySelector('.seta');

btnPerfil.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que o clique feche o menu imediatamente
    menu.classList.toggle('hidden');
    seta.classList.toggle('aberta');
});

// Fechar o menu se clicar fora dele
window.addEventListener('click', (e) => {
    if (!btnPerfil.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
        seta.classList.remove('aberta');
    }
});