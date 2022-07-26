'use babel';

import 11DaftarSitusJudiSlotDepositPulsa10rbView from './11-daftar-situs-judi-slot-deposit-pulsa-10rb-view';
import { CompositeDisposable } from 'atom';

export default {

  11DaftarSitusJudiSlotDepositPulsa10rbView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.11DaftarSitusJudiSlotDepositPulsa10rbView = new 11DaftarSitusJudiSlotDepositPulsa10rbView(state.11DaftarSitusJudiSlotDepositPulsa10rbViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.11DaftarSitusJudiSlotDepositPulsa10rbView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      '11-daftar-situs-judi-slot-deposit-pulsa-10rb:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.11DaftarSitusJudiSlotDepositPulsa10rbView.destroy();
  },

  serialize() {
    return {
      11DaftarSitusJudiSlotDepositPulsa10rbViewState: this.11DaftarSitusJudiSlotDepositPulsa10rbView.serialize()
    };
  },

  toggle() {
    console.log('11DaftarSitusJudiSlotDepositPulsa10rb was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
