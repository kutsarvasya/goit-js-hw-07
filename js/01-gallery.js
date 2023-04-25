import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery')


const createGallery = (pictures) => {
    return pictures.map(({ preview, original, description }) => {
      return  `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
        />
        </a>
        </li>`
    }).join('') 
}

galleryEl.insertAdjacentHTML('afterbegin', createGallery(galleryItems))

galleryEl.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) return
    
    const originalPicture = e.target.dataset.source

    
    const instance = basicLightbox.create(`
    <img src=${originalPicture}>
`)
    instance.show()
    document.body.addEventListener('keyup', (e) => {
    if (e.code === 'Escape') {
    instance.close()
} 
})
})





