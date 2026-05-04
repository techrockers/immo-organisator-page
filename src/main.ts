const lightbox = document.querySelector<HTMLDialogElement>('.lightbox');
const lightboxImage = lightbox?.querySelector<HTMLImageElement>('img');
const lightboxCaption = lightbox?.querySelector<HTMLElement>('figcaption');
const closeButton = lightbox?.querySelector<HTMLButtonElement>('.lightbox-close');
const galleryButtons = document.querySelectorAll<HTMLButtonElement>('[data-lightbox-src]');

galleryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const source = button.dataset.lightboxSrc;
    const title = button.dataset.lightboxTitle ?? '';

    if (!lightbox || !lightboxImage || !lightboxCaption || !source) {
      return;
    }

    lightboxImage.src = source;
    lightboxImage.alt = title;
    lightboxCaption.textContent = title;
    lightbox.showModal();
  });
});

closeButton?.addEventListener('click', () => {
  lightbox?.close();
});

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
