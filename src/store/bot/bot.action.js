import { botService } from '../../services/bot.service'

export function loadBots() {
    return async dispatch => {
        try {
            const bots = await botService.query()
            dispatch({ type: 'SET_BOARDS', bots })
        } catch (err) {
            console.log(err)
        }
    }
}

export function removeBot(botId) {
    return async dispatch => {
        await botService.remove(botId)
        try {
            dispatch({ type: 'REMOVE_BOARD', botId })
        } catch (err) {
            console.log(err)
        }
    }
}


export function saveBot(bot) {
    return async dispatch => {
        try {
            const actionType = (bot._id) ? 'UPDATE_BOARD' : 'ADD_BOARD'
            let savedBot = await botService.save(bot)
            dispatch({ type: actionType, bot: savedBot })
        } catch (err) {
            console.log(err)
        }
    }
}
export function loadBot(botId) {
    return async dispatch => {
        try {
            const bot = await botService.getById(botId)
            dispatch({ type: 'SET_BOT', bot })
        } catch (err) {
            console.log(err)
        }
    }
}