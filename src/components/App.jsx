
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import './styles.css';
import {getPicturesBySearch} from '../API/hits';
import { Component } from 'react';


export class App extends Component {
  state = {
    hits: null,
    showModal: false,
    isLoading: false,
    error: '',
    searchQuery: '',
    totalHits: 0,
    page:1
  };

  // componentDidUpdate(prevProps, prevState) {
  //   prevState.searchQuery !== this.state.searchQuery && this.fetchHits();
  // }

  componentDidUpdate(prevProps, prevState){
  if(this.state.page !== prevState.page || this.state.searchQuery!== prevState.searchQuery ){
    this.fetchHits()
  }
}

  fetchHits = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getPicturesBySearch(this.state.searchQuery, this.state.page);
      
      this.setState({ hits: data.hits, totalHits: data.totalHits });
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

  paginationPageUpdate = () => {
  this.setState((state) => ({
      page: state.page + 1,
    }));
  }

  render() {

    console.log(this.state);


    const { error, isLoading, hits, showModal, totalHits } = this.state;
    
  
    return (
      <div>
        {error && <h1>{Error}</h1>}
{showModal && <Modal></Modal>}
        <Searchbar onSubmit={this.handlySetSearchQuery} />
        {isLoading && <Loader/>}
        {hits && (totalHits === 0 ? (<p>No data found</p>) :( <ImageGallery hits={this.state.hits} />))}
        {totalHits > 12 && <Button paginationPageUpdate={ this.paginationPageUpdate } />}
        
      </div>
    );
  }
}
