const images = [
  {
    url: './image/image-1.jpg',
    alt: 'Design planning',
  },
  {
    url: './image/image-2.jpg',
    alt: 'Lightbulb idea',
  },
  {
    url: './image/image-3.jpg',
    alt: 'Phone and coffee',
  },
  {
    url: './image/image-4.jpg',
    alt: 'Meeting room',
  },
  {
    url: './image/image-5.jpg',
    alt: 'Colorful office',
  },
  {
    url: './image/image-6.jpg',
    alt: 'Coworking team',
  },
];

const gallery = document.querySelector('.gallery');

const markup = images
  .map(({ url, alt }) => {
    return `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}" class="gallery-image" />
    </li>
  `;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);
