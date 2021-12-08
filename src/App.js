import React, { useState } from "react";
import Weeks from "./Weeks";
import Schedule from "./schedule";
import { weeks, schedulers } from "./data";
import './App.css';

const App = () => {
    const [filtro, setFiltro] = useState(1);
    const [open, setOpen] = useState(null);
    const [schedulerLen, setSchedulerLen] = useState(1);

    const setChange = async (week, index) => {
        setFiltro(week);
        setOpen(open === index ? null : index);
        setSchedulerLen(schedulers.filter(sc => sc.week === week).length);
    }

  return (
        <div className="weeks">
            <div className="week">
                <Weeks
                    weeks={weeks}
                    change={setChange}
                    setopen={setOpen}
                    open={open}
                    schedulerLen={schedulerLen}
                />
            </div>
            <div className="week">
                <Schedule
                    filtro={filtro}
                    scheduler={schedulers}
                />
            </div>
        </div>
  );
}

export default App;
