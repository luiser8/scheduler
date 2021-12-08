import React from "react";

const Schedule = ({
        filtro,
        scheduler
    }) => {
        return (
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
        );
};

export default Schedule;