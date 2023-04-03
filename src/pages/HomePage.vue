<template>
  <div class="container-fluid">
    <!-- SECTION Gifts navigation and Creation -->
    <section class="row">
      <div class="col-3">

        <section class="row">
          <!-- STUB Input for making gif -->
          <div class="col-12">
            <!-- <label for="tag">Tag for Gif</label>
            <input type="text">
            <label for="url">Gif URL</label>
            <input type="url"> -->
            <GiftForm />
          </div>

          <!-- STUB Section for searching Gifs -->
          <div class="col-12">
            <div>
              <hr>
            </div>
            <label for="search-gifs">Search Gifs</label>
            <input type="text" id="search">
          </div>
        </section>
      </div>

      <div class="col-9">
        <!-- STUB all the gifts -->
        <section class="row">
          <div class="col-4 card p-2 my-2" v-for="g in gifts" :key="g.id">
            <!-- Insert component here with key for props -->
            <!-- Create component with prop -->
            <!-- Import component to this page with key -->
            <Giftcard :giftProp="g" />


          </div>
        </section>
      </div>

    </section>
  </div>
</template>

<script>
import { logger } from "../utils/Logger.js"
import { giftsService } from "../services/GiftsService.js"
import { onMounted, computed } from "vue"
import { AppState } from "../AppState.js"
import Giftcard from "../components/Giftcard.vue"
import GiftForm from "../components/GiftForm.vue"

export default {
  setup() {

    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.log(error)
      }
    }

    onMounted(() => {
      getGifts()
    });
    return {
      gifts:
        computed(() => AppState.gifts),
    }
  },
  components: { Giftcard, GiftForm }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
