import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ hit: { tags, webformatURL } }) {
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.imageGalleryItemImage}
      />
    </li>
  );
}
