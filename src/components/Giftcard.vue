<template>
  <div class="selectable p-1" @click="openGift(giftProp?.id)">
    <div v-if="giftProp?.opened == false">
      <img
        src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3NlZCUyMGdpZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="present">
    </div>
    <div v-else="giftProp.opened == text-uppercase">
      <img class="img-fluid elevation-5" :src="giftProp?.url" :alt="giftProp?.tag">
    </div>
    <p>{{ giftProp?.tag }}</p>
  </div>
</template>

<script>
import { Gift } from "../models/Gift.js";

export default {
  props: {
    giftProp: { type: Gift, required: true }
  },

  setup() {

    return {};

  },
};
</script>


<style></style>