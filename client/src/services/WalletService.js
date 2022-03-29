// import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

class WalletService {
  constructor() {
    this.ethProvider = new ethers.providers.Web3Provider(window.ethereum);
  }

  async connect() {
    try {
      await this.ethProvider.send('eth_requestAccounts', []);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  /**
   * @param {Function} handler
   */
  setAccountChangedListenerEvent(handler) {
    if (this.ethProvider.provider.listeners('accountsChanged').length !== 0) {
      return;
    }
    this.ethProvider.provider.on('accountsChanged', handler);
  }

  /**
   * @returns {Promise<boolean>}
   */
  async isConnected() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const addresses = await provider.listAccounts();

    return addresses.length !== 0;
  }
}

export default new WalletService();
