import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import './styles.css';
import { Component } from 'react';

export class App extends Component {
  state = {
    hits: [
      {
        id: 3063284,
        pageURL:
          'https://pixabay.com/photos/rose-flower-petal-floral-noble-3063284/',
        type: 'photo',
        tags: 'rose, flower, petal',
        previewURL:
          'https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_150.jpg',
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
          'https://pixabay.com/get/gf8e0448f0381725ac95903d3b0c6b701eff135539753fac85086b7fb7c4176526ad006a2dcd093cc9ed21c23e40673f8362e90b9603c18b078f42e00b89b7cbf_640.jpg',
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
          'https://pixabay.com/get/gde147ce3a288eff4eabe314c1b21c949e8724c6e89bf614b5ab053d74c95f9c547acb363c408e5af9844edc41f82cc3777230455d632ae460619dfd8de9a4966_1280.jpg',
        imageWidth: 6000,
        imageHeight: 4000,
        imageSize: 3574625,
        views: 1142307,
        downloads: 743865,
        collections: 1524,
        likes: 1650,
        comments: 342,
        user_id: 1564471,
        user: 'anncapictures',
        userImageURL:
          'https://cdn.pixabay.com/user/2015/11/27/06-58-54-609_250x250.jpg',
      },
      {
        id: 887443,
        pageURL:
          'https://pixabay.com/photos/flower-life-yellow-flower-crack-887443/',
        type: 'photo',
        tags: 'flower, life, yellow flower',
        previewURL:
          'https://cdn.pixabay.com/photo/2015/08/13/20/06/flower-887443_150.jpg',
        previewWidth: 150,
        previewHeight: 116,
        webformatURL:
          'https://pixabay.com/get/g9e94fd4129a0ae96ce9d3aced919de08c65657d6e67bbde73a6a6e0af03df61b15c3c9357b1f8623c9d4a26f6411db62_640.jpg',
        webformatWidth: 640,
        webformatHeight: 497,
        largeImageURL:
          'https://pixabay.com/get/g135d1d2435730ac2348ac8a036f45c17ee522523f624478fe7a6339552b65f0e993dac790b1b6bfc9d7868f1957d64d1b2b4ac6f0833e3945117b6bf8bc559c0_1280.jpg',
        imageWidth: 3867,
        imageHeight: 3005,
        imageSize: 2611531,
        views: 423816,
        downloads: 258393,
        collections: 979,
        likes: 1305,
        comments: 232,
        user_id: 1298145,
        user: 'klimkin',
        userImageURL:
          'https://cdn.pixabay.com/user/2017/07/18/13-46-18-393_250x250.jpg',
      },
      {
        id: 2295434,
        pageURL:
          'https://pixabay.com/photos/spring-bird-bird-tit-spring-blue-2295434/',
        type: 'photo',
        tags: 'spring bird, bird, tit',
        previewURL:
          'https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg',
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
          'https://pixabay.com/get/g0c3ec399b4b292227f6c13c13174b4f7d8585dcd794c2d4d6cca681eee796e8b510a73734a8773299cf761c9201dbb4b3fe7bacfcc8937e4dc3a2c11e93da12c_640.jpg',
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
          'https://pixabay.com/get/ga9b0a20f8124f45fb259abd2ecffafdbebdd981d56a2b0064f8e8d055143ac550f1fa231eb296c7cf67aa498355abdbc4049e5ab40b28c5efeef9b5028cfc312_1280.jpg',
        imageWidth: 5363,
        imageHeight: 3575,
        imageSize: 2938651,
        views: 818653,
        downloads: 488682,
        collections: 2297,
        likes: 2213,
        comments: 287,
        user_id: 334088,
        user: 'JillWellington',
        userImageURL:
          'https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg',
      },
      {
        id: 3113318,
        pageURL:
          'https://pixabay.com/photos/sunflower-nature-flora-flower-3113318/',
        type: 'photo',
        tags: 'sunflower, nature, flora',
        previewURL:
          'https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318_150.jpg',
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
          'https://pixabay.com/get/gd38c3b7e93279468cd86a45f3d91b785218d448e3f0d47b1c175ef0cd52d9ffd6836580dcc47b8961e6011f68a3cf34bc5081ee78885a8b34afda5a4affad64f_640.jpg',
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
          'https://pixabay.com/get/g81316dae575378ac6c3b4932dde37d9ef3024665a1d4165d5512ce4bbcb79e27c01ba5f3898838cc8ceaec750b5a11268c638cd09640fdff7adeeb8e7ceda13f_1280.jpg',
        imageWidth: 2736,
        imageHeight: 1824,
        imageSize: 1026006,
        views: 614090,
        downloads: 446117,
        collections: 723,
        likes: 1047,
        comments: 157,
        user_id: 7410713,
        user: 'bichnguyenvo',
        userImageURL:
          'https://cdn.pixabay.com/user/2017/12/16/10-28-39-199_250x250.jpg',
      },
    ],
  };

  onSubmit = e => {
    e.prevent.defolt();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery hits={this.state.hits} />
      </div>
    );
  }
}
