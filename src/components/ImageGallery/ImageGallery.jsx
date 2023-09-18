import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({ hits, togleModal }) {
  return (
    <ul className={css.imageGallery}>
      {hits.map(hit => (
        <ImageGalleryItem key={hit.id} hit={hit} togleModal={togleModal} />
      ))}
    </ul>
  );
}
