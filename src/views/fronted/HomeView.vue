<template>
  <BannerCard></BannerCard>
  <AboutCard></AboutCard>
  <PainPointsCard></PainPointsCard>
  <HotSaleCard></HotSaleCard>
  <MoreProductsCard></MoreProductsCard>
  <SubscriptCard></SubscriptCard>
</template>

<script>
import BannerCard from '@/components/fronted/BannerCard.vue'
import AboutCard from '@/components/fronted/AboutCard.vue'
import PainPointsCard from '@/components/fronted/PainPointsCard.vue'
import HotSaleCard from '@/components/fronted/HotSaleCard.vue'
import MoreProductsCard from '@/components/fronted/MoreProductsCard.vue'
import SubscriptCard from '@/components/fronted/SubscriptCard.vue'

export default {
  data() {
    return {}
  },
  components: {
    BannerCard,
    AboutCard,
    PainPointsCard,
    HotSaleCard,
    MoreProductsCard,
    SubscriptCard
  }
}
</script>
