import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handlyChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  onSubmit = e => {
    e.prevent.defolt();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.onSubmit} className={css.searchform}>
          <button type="submit" className={css.searchformbutton}>
            <span className={css.searchformbuttonlabel}>Search</span>
          </button>

          <input
            className={css.searchforminput}
            type="text"
            onChange={this.handlyChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
