import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  hit: { tags, webformatURL, largeImageURL },
  togleModal,
}) {
  return (
    <li className={css.imageGalleryItem} onClick={togleModal}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.imageGalleryItemImage}
      />
    </li>
  );
}
