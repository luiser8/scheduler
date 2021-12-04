import React, { useState } from "react";

const Weeks = () => {
    const [filtro, setFiltro] = useState(1);
    const [schedulerLen, setSchedulerLen] = useState(1);
    const [open, setOpen] = useState(null);

    const [week] = useState([
        { 'id': 1, 'day': 'Lunes' },
        { 'id': 2, 'day': 'Martes' },
        { 'id': 3, 'day': 'Miercoles' },
    ]);
    
    const [scheduler] = useState([
        { 'id': 1, 'week': 1, 'dates': '29/11/2021' },
        { 'id': 2, 'week': 1, 'dates': '03/12/2021' },
        { 'id': 3, 'week': 1, 'dates': '02/12/2021' },
        { 'id': 4, 'week': 2, 'dates': '06/12/2021' },
        { 'id': 5, 'week': 3, 'dates': '07/12/2021' },
        { 'id': 6, 'week': 2, 'dates': '08/12/2021' },
        { 'id': 7, 'week': 3, 'dates': '09/12/2021' },
        { 'id': 8, 'week': 2, 'dates': '10/12/2021' },
        { 'id': 9, 'week': 2, 'dates': '11/12/2021' },
    ]);

    const setChange = async (week, index) => {
        setFiltro(week); 
        setSchedulerLen(scheduler.filter(sc => sc.week === week).length);
        setOpen(open === index ? null : index);
    }

    return (
        <div className="weeks">
            <div className="week">
                <ul>
                    {week.map((item, index) => (
                        <li 
                            key={item.id} 
                            style={{ paddingBottom: open === index ? `${schedulerLen * item.id}rem` : '' }}
                            >
                            <button 
                                onClick={() => setChange(item.id, index)}
                                style={{background: open === index ? `yellow` : ''}}
                                >{item.day}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="week">
                <table>
                    <thead>
                        <tr>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduler.filter(sc => sc.week === filtro).map(item => (
                            <tr key={item.id}>
                                <td>{item.dates}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Weeks;