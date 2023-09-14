import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
// import { Component } from 'react';

export default function ImageGallery({ hits }) {
  return (
    <ul className={css.imageGallery}>
      {hits.map(hit => (
        <ImageGalleryItem key={hit.id} hit={hit} />
      ))}
    </ul>
  );
}
