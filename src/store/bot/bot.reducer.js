const initialState = {
    bots: [],
    bot: null,
}

export function botReducer(state = initialState, action) {
    var bots

    switch (action.type) {
        case 'SET_BOTS':
            return { ...state, bots: action.bots }
        case 'SET_BOT':
            return { ...state, bot: action.bot }
        case 'REMOVE_BOT':
            bots = state.bots.filter(bot => bot._id !== action.botId)
            return { ...state, bots }
        case 'ADD_BOT':
            bots = [action.bot, ...state.bots]
            return { ...state, bots }
        case 'UPDATE_BOT':
            bots = state.bots.map(currBot => (currBot._id === action.bot._id) ? action.bot : currBot)
            return { ...state, bots }
        default:
            return state
    }
}
