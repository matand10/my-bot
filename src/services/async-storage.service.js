import { utilService } from './util.service'
import gUsers from '../json/users.json'
import gBots from '../json/bot.json'

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType = 'bot') {
    var entities = JSON.parse(localStorage.getItem(entityType)) || gBots
    return Promise.resolve(entities)
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            if (idx < 0) return
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })

}


function post(entityType, newEntity) {
    newEntity._id = utilService.makeId()
    console.log('newEntity', newEntity)
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}