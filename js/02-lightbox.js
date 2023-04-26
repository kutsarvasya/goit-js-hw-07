import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')


const createGallery = (pictures) => {
    return pictures.map(({ preview, original, description }) => {
      return  `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
   </a>
</li>`
    }).join('') 
}

galleryEl.insertAdjacentHTML('afterbegin', createGallery(galleryItems))





galleryEl.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) return

    var lightbox = new SimpleLightbox('.gallery a',
        {
        captionsData: 'alt',
        captionDelay: 250
       });
    lightbox.open(e.target)
 

})





