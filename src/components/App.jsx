// import axios from 'axios';
// import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
// import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import './styles.css';
import getPicturesBySearch from '../API/hits';
import { Component } from 'react';

export class App extends Component {
  state = {
    hits: null,
    showModal: false,
    isLoading: false,
    error: '',
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    prevState.searchQuery !== this.state.searchQuery && this.fetchHits();
  }

  fetchHits = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getPicturesBySearch(this.state.searchQuery);
      this.setState({ hits: data.hits });
    } catch (error) {
      this.setState({ error: error.response.data });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handlySetSearchQuery = value => {
    this.setState({ searchQuery: value });
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { error, isLoading, hits } = this.state;
    return (
      <div>
        {error && <h1>{Error}</h1>}

        <Searchbar onSubmit={this.handlySetSearchQuery} />
        {hits && <ImageGallery hits={this.state.hits} />}
        {isLoading && <h1>Loading...</h1>}
      </div>
    );
  }
}
