// Adaptada de https://gist.github.com/sergiolopes/e326e62a44c8095021d443401dcf5320

const allImages = document.querySelectorAll('img[data-src]:not([src])');
const windowHeight = window.innerHeight;
let scrollStatus = false;
const cache = [];

allImages.forEach(image => {
    cache.push({
        top: image.getBoundingClientRect().top + scrollY,
        element: image
    });
});

const handleScroll = () => {
    if(scrollStatus) return;
    scrollStatus = true;
    setTimeout(() => { scrollStatus = false }, 100);

    while(cache.length && cache[0].top < scrollY + windowHeight){
        let img = cache.shift().element;
        img.src = img.getAttribute('data-src');
    }

    if(cache.length === 0) {
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);

