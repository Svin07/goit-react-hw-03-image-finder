import css from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  return (
    <header className={css.searchbar}>
      <form onSubmit={onSubmit} className={css.searchform}>
        <button type="submit" className={css.searchformbutton}>
          <span className={css.searchformbuttonlabel}>Search</span>
        </button>

        <input
          className={css.searchforminput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
