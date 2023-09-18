import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import './styles.css';
import { getPicturesBySearch } from '../API/hits';
import { Component } from 'react';

export class App extends Component {
  state = {
    hits: [],
    showModal: false,
    isLoading: false,
    error: '',
    searchQuery: '',
    totalHits: 0,
    page: 1,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   prevState.searchQuery !== this.state.searchQuery && this.fetchHits();
  // }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.searchQuery !== prevState.searchQuery
    ) {
      this.fetchHits();
    }
  }

  fetchHits = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getPicturesBySearch(
        this.state.searchQuery,
        this.state.page
      );
      const { hits, totalHits } = data;

      this.setState({
        hits: [...this.state.hits, ...hits],
        totalHits: totalHits,
      });
    } catch (error) {
      this.setState({ error: error.response.data });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handlySetSearchQuery = value => {
    this.setState({ searchQuery: value, page: 1, hits: [] });
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  paginationPageUpdate = () => {
    this.setState(state => ({
      page: state.page + 1,
    }));
  };

  render() {
    const { error, isLoading, hits, showModal, totalHits, page } = this.state;

    const maxPage = totalHits / 12;

    return (
      <div>
        {error && <h1>{Error}</h1>}
        {showModal && (
          <Modal onClose={this.togleModal}>
            <img
              src="https://pixabay.com/get/gf1cc6a94b157226464ee0b30eaace5bc94dd132b762a0b740b1f8d6f6d576a97b39057f3ac3ac095770a2b3a4e8585077682aa2465c97284fe52d92b7fddb108_1280.jpg"
              alt="img"
            />
          </Modal>
        )}
        <Searchbar onSubmit={this.handlySetSearchQuery} />
        {isLoading && <Loader />}
        {hits &&
          (totalHits === 0 ? (
            <p>No data found</p>
          ) : (
            <ImageGallery hits={hits} togleModal={this.togleModal} />
          ))}
        {totalHits > 12 && page < maxPage && (
          <Button paginationPageUpdate={this.paginationPageUpdate} />
        )}
      </div>
    );
  }
}
