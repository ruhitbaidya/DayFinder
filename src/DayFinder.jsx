import React from 'react'
import { useState } from 'react';

const DayFinder = () => {
    const [dates, setDate] = useState("");
    const [years, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [getDay, setGetDay] = useState("")
    const [pervYear, setPrevYear] = useState("")
    let day =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    
const handelInputs = ()=>{
    let codes ;
    if(pervYear == 1900){
      codes = 4
    }
    if(pervYear == 2000){
      codes = 5
    }
    let Mdate =  years - Number(pervYear);
    let findsDate = Math.floor(Mdate / codes)
    let addingM = Number(dates) + Number(month) + Number(Mdate) + Number(findsDate);
    // console.log(dates,  month , Mdate , findsDate)
    let doit = String(addingM)
    // let finialResult = doit.split("");
    let resultIn = addingM % 7;
    setGetDay(resultIn)
    console.log(addingM)
    // console.log(finialResult)
}
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <h3 className='pt-3 text-center py-3'>1900 and 2000 200 all year Day Finder</h3>
                <label htmlFor="month">Select 100 Year</label>
                <select className="form-select" aria-label="Default select example" onChange={(e)=> setPrevYear(e.target.value)}>
                    <option value='#'>--Select Month--</option>
                    <option value='1900'>1900</option>
                    <option value='2000'>2000</option>
                </select>
                <label htmlFor="dateOld">Year</label>
                <input type="number"  className='form-control' placeholder='Write Your Year' onChange={(e)=> setYear(e.target.value)}/>
                <label htmlFor="month">Select Month</label>
                <select className="form-select" aria-label="Default select example" onChange={(e)=> setMonth(e.target.value)}>
                    <option value='#'>--Select Month--</option>
                    <option value='0'>Janaury</option>
                    <option value='3'>February</option>
                    <option value='3'>March</option>
                    <option value='6'>April</option>
                    <option value='1'>May</option>
                    <option value='4'>June</option>
                    <option value='6'>July</option>
                    <option value='2'>August</option>
                    <option value='5'>September</option>
                    <option value='0'>October</option>
                    <option value='3'>November</option>
                    <option value='5'>December</option>
                </select>
                <label htmlFor="date">Day</label>
                <input type="number" className='form-control' placeholder='Write Your Date' onChange={(e)=> setDate(e.target.value)} />
                <button className='btn btn-primary mt-3' onClick={handelInputs}>Get Result</button>
                <div className='pt-5'>
                    <h3>This Day {day[getDay]}</h3>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}

export default DayFinder
