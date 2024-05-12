import { type } from '@testing-library/user-event/dist/type/index.js';
import Header from '../components/Header.js';
import ReserveForm from './ReserveForm.js';
import { useReducer, useEffect } from 'react';
import timesReducer from './timesReducer.js';

function Reservations() {
    const [availableTimes, dispatch] =useReducer(timesReducer, []);

    const updateTimes = (selectedTime) => {
        dispatch({
            type: 'update',
            time: selectedTime,
        });
    }

    const initializeTimes = () => {
        dispatch({
            type: 'initialize',
        });
    }

    useEffect(() => {
        initializeTimes();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <div style={{
                    padding: '1.5em 0'
                }}>
                    <ReserveForm times={availableTimes} updateTimes={updateTimes} />
                </div>
            </main>
        </div>
    )
}

export default Reservations;