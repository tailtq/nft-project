<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">Home</a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" :key="i" v-for="(menuItem, i) in menuItems">
            <a class="nav-link" href="#">{{ menuItem }}</a>
          </li>
        </ul>
      </div>

      <a
        v-if="!$store.getters.isWalletConnected"
        class="navbar-link ml-auto"
        href="#"
        @click.prevent="connectWallet">Connect Wallet</a>
    </div>
  </nav>
</template>

<script>
import walletService from '@/services/WalletService';

export default {
  data() {
    return {
      menuItems: ['Project-A', 'Marketplace', 'Community', 'More'],
    };
  },
  async beforeMount() {
    this.$store.dispatch('connectWallet', await walletService.isConnected());
  },
  methods: {
    async connectWallet() {
      walletService.setAccountChangedListenerEvent(this.listenWalletConnectionEvents);
      await walletService.connect();
    },
    listenWalletConnectionEvents(addresses) {
      this.$store.dispatch('connectWallet', addresses.length !== 0);
    },
  },
};
</script>
