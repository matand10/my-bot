export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getCurrTime,
    getLabel,
    getRandomColor,
    getPriority,
    getShortMonth
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}



function getCurrTime(time) {
    const mounthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const date = new Date(time)
    const mounth = mounthName[date.getMonth()]
    // const seconds = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds().toString()
    // const minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes().toString()
    // const mounths = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1).toString()
    return date.getDate() +
        " " + mounth;
    // "/" + date.getFullYear() +
    // " " + date.getHours() +
    // ":" + minutes;
    // ":" + seconds;
}


function getLabel(status) {
    switch (status) {
        case 'Done':
            return {
                importence: 3,
                id: 'l101',
                title: 'Done',
                color: '#00c875',
                type: 'Done'
            }
        case 'Working On It':
            return {
                importence: 1,
                id: 'l102',
                title: 'Working On It',
                color: '#fdab3d',
                type: 'Working On It'
            }
        case 'Stuck':
            return {
                importence: 2,
                id: 'l103',
                title: 'Stuck',
                color: '#e2445c',
                type: 'Stuck'
            }
        default:
            return {
                importence: 4,
                id: 'l104',
                title: '',
                color: '#c4c4c4',
                type: 'Empty'
            }
    }
}

function getPriority(priority) {
    switch (priority) {
        case 'high':
            return {
                importence: 1,
                id: 'l101',
                title: 'High',
                color: '#e2445d'
            }
        case 'medium':
            return {
                importence: 2,
                id: 'l102',
                title: 'Medium',
                color: '#a25edc'
            }
        case 'low':
            return {
                importance: 3,
                id: 'l103',
                title: 'Low',
                color: '#589bfc'
            }
        default:
            return {
                importance: 4,
                id: 'l104',
                title: '',
                color: '#c4c4c4'
            }
    }
}


function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function getShortMonth(monthIdx) {
    const monthes = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return monthes[monthIdx]
}
