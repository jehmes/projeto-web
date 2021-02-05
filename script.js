document.querySelector(".hamburguer").addEventListener('click', () =>
    // O classList.toggle é uma palavra reservada que remove se esta presenta e adiciona se nao esta presente
    document.querySelector('.container').classList.toggle('show-menu')
)