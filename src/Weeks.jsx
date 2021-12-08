import React from "react";

const Weeks = ({
        weeks, 
        change, 
        setopen, 
        open, 
        schedulerLen
    }) => {

    return (
            <ul>
                {weeks.map((item, index) => (
                    <li 
                        key={item.id} 
                        style={{ paddingBottom: open === index ? `${schedulerLen}rem` : '' }}
                        >
                        <button 
                            onClick={() => change(item.id, index)}
                            style={{background: open === index ? `yellow` : ''}}
                            >{item.day}
                        </button>
                    </li>
                ))}
            </ul>
    )
}

export default Weeks;
