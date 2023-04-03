<template>
  <form @submit.prevent="createGift()">
    <label for="tag">Tag for Gif</label>
    <input type="text" class="form-input" v-model="editable.tag" id="tag" placeholder="">
    <label for="url">Gif URL</label>
    <input type="url" class="form-input" v-model="editable.url" id="url" placeholder="">
    <button type="submit">Gift!</button>
  </form>
</template>
<script>
import { ref } from "vue";
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";

export default {
  setup() {

    const editable = ref({})

    return {
      editable,

      async createGift() {
        try {
          const giftData = editable
          logger.log(giftData)
          // await giftsService.createGift(giftData)
          tagText.value = ''
          gifAddress.value = ''
        } catch (error) {
          logger.log(error)
        }
      }
    };
  },
};
</script>
<style></style>