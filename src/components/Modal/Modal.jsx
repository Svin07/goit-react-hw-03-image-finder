// import * as basicLightbox from 'basiclightbox';
import css from './Modal.module.css';

function Modal({}) {
  return (
    <div class={css.overlay}>
      <div class={css.modal}>{this.props.children}</div>
    </div>
  );
}

export default Modal;
