import { ModalParams } from '../../interface/ModalInterface';
import './Modal.css';

export default class Modal {
  protected modal: HTMLDialogElement;
  protected modalContainer: HTMLDivElement;

  constructor({ title, id }: ModalParams) {
    this.modalContainer = document.createElement('div');
    this.modalContainer.classList.add('modal-container');
    if (title) {
      this.modalContainer.prepend(this.createModalTitle(title));
    }

    this.modal = document.createElement('dialog');
    this.modal.id = id;
    this.modal.appendChild(this.modalContainer);
    this.modal.addEventListener('click', this.handleBackgroundClick.bind(this));
    this.modal.addEventListener('keydown', this.handleEscapeKeyDown.bind(this));
  }

  showModal() {
    this.modalContainer.scrollTop = 0;
    this.modal.showModal();
  }

  closeModal() {
    this.modal.close();
  }

  render() {
    return this.modal;
  }

  protected createModalTitle(title: string) {
    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title', 'text-title');
    modalTitle.textContent = title;
    return modalTitle;
  }

  protected handleBackgroundClick(event: Event) {
    if (event.target === this.modal) {
      this.closeModal();
    }
  }

  protected handleEscapeKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeModal();
    }
  }
}
