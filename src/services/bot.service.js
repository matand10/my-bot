import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'bot'

export const botService = {
    query,
    getById,
    save,
    remove,
}


async function query() {
    const bots = await storageService.query(STORAGE_KEY)
    // console.log('service', bots)
    return bots
}

function getById(botId) {
    return storageService.get(STORAGE_KEY, botId)
}

async function remove(botId) {
    await storageService.remove(STORAGE_KEY, botId)
}

async function save(bot) {
    var savedBot
    if (bot._id) {
        savedBot = await storageService.put(STORAGE_KEY, bot)
    } else {
        savedBot = await storageService.post(STORAGE_KEY, bot)
    }
    return savedBot
}



