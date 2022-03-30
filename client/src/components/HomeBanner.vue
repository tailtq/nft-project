<template>
  <div class="my-20 h-[1086px] overflow-hidden block--border-bold">
    <div class="row">
      <div class="col-7">
        <h1 class="page__title !my-5">
          Supaland, a home for coffee lovin' creatives
        </h1>
      </div>
    </div>

    <div>
      <link-button text="Join Discord" class="inverse bigger mr-3"></link-button>
      <link-button text="Follow Us" class="bigger"></link-button>
    </div>

    <img src="@/assets/images/banner.png" class="block w-full" alt="">
  </div>
</template>

<script>
import LinkButton from '@/components/LinkButton';

export default {
  components: {
    LinkButton,
  },
};
</script>
