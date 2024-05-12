export default function timesReducer(availableTimes, action) {
    switch (action.type) {
        case 'update': {
            const updatedTimes = availableTimes.filter((time) => time !== action.time);
            return updatedTimes;
        }
        case 'initialize': {
            return ['13:00', '14:00', '15:00', '16:00', '17:00'];
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}