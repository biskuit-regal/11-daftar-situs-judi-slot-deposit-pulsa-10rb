'use babel';

export default class 11DaftarSitusJudiSlotDepositPulsa10rbView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('11-daftar-situs-judi-slot-deposit-pulsa-10rb');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The 11DaftarSitusJudiSlotDepositPulsa10rb package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
