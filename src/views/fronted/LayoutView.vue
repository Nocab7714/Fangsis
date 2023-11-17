<template>
  <NavBar />
  <RouterView />
  <FooterCard />
  <GoTop class="me-3 mb-2" />
</template>

<script>
import { mapActions } from 'pinia';
import cartAndWishListStore from '@/stores/cartAndWishList';
//
import FooterCard from '@/components/fronted/FooterCard.vue';
import NavBar from '@/components/fronted/NavBar.vue';
import GoTop from '@/components/fronted/GoTop.vue';

export default {
  data() {
    return {};
  },
  components: {
    FooterCard,
    NavBar,
    GoTop,
  },
  methods: {
    ...mapActions(cartAndWishListStore, ['getCart', 'pullLocalStorageToWishList']),
  },
  mounted() {
    this.getCart();
    this.pullLocalStorageToWishList();
  },
};
</script>
