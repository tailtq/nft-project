<template>
  <nav class="navbar navbar-expand-lg navbar-light py-6 block--border-bold">
    <a class="navbar-brand uppercase text-[28px] py-0 font-['Girdo'] font-bold tracking-[1px]" href="/">
      SupaFast
    </a>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="(navItem, i) in navItems" :key="i">
          <a class="nav-link !px-[0.75rem] text-black text-[18px] leading-[22px] link--hover" href="#">{{ navItem }}</a>
        </li>
      </ul>
    </div>

    <link-button text="Join Discord" class="navbar-link ml-auto mr-3" />
    <link-button text="Follow Us" class="navbar-link ml-auto mr-3" />
    <common-button
      v-if="!$store.getters.isWalletConnected"
      @click.prevent="connectWallet"
      text="Connect Wallet"
      class="navbar-link ml-auto" />

<!--      <a-->
<!--        v-if="!$store.getters.isWalletConnected"-->
<!--        class="navbar-link ml-auto"-->
<!--        href="#"-->
<!--        @click.prevent="connectWallet">Connect Wallet</a>-->
  </nav>
</template>

<script>
import walletService from '@/services/WalletService';
import CommonButton from './CommonButton';
import LinkButton from './LinkButton';

export default {
  components: {
    CommonButton,
    LinkButton,
  },
  data() {
    return {
      navItems: ['Membership', 'Friends', 'Story', 'Rarity', 'Roadmap'],
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
