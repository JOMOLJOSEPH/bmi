import React from 'react';

function Bmiscore({bmiNo,bmiName,changeWeight,BMIComponent}) {
     console.log(changeWeight);
  return (
   <div className='text-center shadow rounded p-4'>
    <div><h2>Your BMI Score</h2></div>
    <div className='row justify-content-md-center'>
      <div className='p-3 my- alert fs-1 alert-primary col-sm-4'>{bmiNo}</div>
    </div>
    <div className='fs-3 fw-bold text-primary'> <BMIComponent bmi={bmiNo} /></div>
    {changeWeight.type === "positive" && (
        <div className="fs-4">"You need lose <span className="fw-bold">{changeWeight.weight} kg"</span> </div>
      )}
      {changeWeight.type === "negative" && (
        <div className="fs-4">"You need gain <span className="fw-bold">{changeWeight.weight} kg"</span> </div>
      )}
       {changeWeight.type === "normal" && (
        <div className="fs-4">"You'r weight is Normal,Good for you" </div>
      )}
   </div>
  )
}

export default Bmiscore;
