document.addEventListener('DOMContentLoades', () => {
    const marcasCarrucel = document.querySelectorAll('.carrucel');
    M.Carousel.init(marcasCarrucel, {
        duration:150
    })
})