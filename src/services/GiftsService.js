import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { sandboxApi } from "./AxiosService.js"

class GiftsService {

  async getGifts() {
    const res = await sandboxApi.get('/api/gifts')
    logger.log('[getting gifts]', res.data)
    AppState.gifts = res.data.map(gift => new Gift(gift))
    logger.log(AppState.gifts, '[GIFTS]')
  }

  async createGift(giftData) {
    const res = await sandboxApi.post('api/gifts', giftData)
    logger.log(res.data)
  }
}

export const giftsService = new GiftsService()