import React from "react";
import { useState } from "react";

const DayFinder = () => {
  const [dates, setDate] = useState("");
  const [years, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [getDay, setGetDay] = useState("");
  const [pervYear, setPrevYear] = useState("");
  const [mode, setMode] = useState(false);
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handelInputs = () => {
    let codes;
    if (pervYear == 1900) {
      codes = 4;
    }
    if (pervYear == 2000) {
      codes = 5;
    }
    let Mdate = years - Number(pervYear);
    let findsDate = Math.floor(Mdate / codes);
    let addingM =
      Number(dates) + Number(month) + Number(Mdate) + Number(findsDate);
    // console.log(dates,  month , Mdate , findsDate)
    let doit = String(addingM);
    // let finialResult = doit.split("");
    let resultIn = addingM % 7;
    setGetDay(resultIn);
    console.log(addingM);
    // console.log(finialResult)
  };
  const modeChange = ()=>{
    if(mode == true){
      setMode(false)
    }else{
      setMode(true)
    }
    console.log(mode)
  }
  return (
    <div className={`bg-${mode ? "light" : "dark"} text-${mode ? "dark" : "light"} py-5`}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 p-4 border border-secondary border-3 mt-5">
            <h3 className="pt-3 text-center py-3">
              1900 and 2000 200 all year Day Finder
            </h3>
            <label htmlFor="month">Select 100 Year</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setPrevYear(e.target.value)}
            >
              <option value="#">--Select Month--</option>
              <option value="1900">1900</option>
              <option value="2000">2000</option>
            </select>
            <label htmlFor="dateOld">Year</label>
            <input
              type="number"
              className="form-control"
              placeholder="Write Your Year"
              onChange={(e) => setYear(e.target.value)}
            />
            <label htmlFor="month">Select Month</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="#">--Select Month--</option>
              <option value="0">Janaury</option>
              <option value="3">February</option>
              <option value="3">March</option>
              <option value="6">April</option>
              <option value="1">May</option>
              <option value="4">June</option>
              <option value="6">July</option>
              <option value="2">August</option>
              <option value="5">September</option>
              <option value="0">October</option>
              <option value="3">November</option>
              <option value="5">December</option>
            </select>
            <label htmlFor="date">Day</label>
            <input
              type="number"
              className="form-control"
              placeholder="Write Your Date"
              onChange={(e) => setDate(e.target.value)}
            />
            <div className="d-flex justify-content-between">
              <button className={`btn btn-${mode ? "primary" : "outline-light"} mt-3`} onClick={handelInputs}>
                Get Day Name
              </button>
              <button className={`btn btn-${mode ? "primary" : "outline-light"} mt-3`} onClick={modeChange}>
                {mode ? "Dark Mode" : "Light Mode"}
              </button>
            </div>

            <div className="pt-5 pb-5">
              <h3>This Day {day[getDay]}</h3>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default DayFinder;
