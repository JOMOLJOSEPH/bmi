import React from "react";

function Bmilist({ range, bmi }) {
  console.log(range);
  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row justify-content-md-center">
            <div className="col-4 fw-bold">TYPE</div>
            <div className="col-4 fw-bold">BMI</div>
            <div className="col-4 fw-bold">WEIGHT</div>
          </div>
        </li>
        <li
          className={
            bmi < 18.5
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row justify-content-md-center">
            <div className="col-4">Underweight</div>
            <div className="col-4">&lt;18.5</div>
            <div className="col-4">&lt; {range.underWeight.low} kg</div>
          </div>
        </li>
        <li
          className={
            18.5 < bmi && bmi < 24.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row justify-content-md-center">
            <div className="col-4">Normal</div>
            <div className="col-4">18.5-24.9</div>
            <div className="col-4">
              {range.normal.low + " kg-" + range.normal.high + "kg"}
              {""}
            </div>
          </div>
        </li>
        <li
          className={
            24.9 < bmi && bmi < 29.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row justify-content-md-center">
            <div className="col-4">
              Overweight
            </div>
            <div className="col-4">
              25-29.9
            </div>
            <div className="col-4">
              {range.overWeight.low + "kg-" + range.overWeight.high + "kg"}
            </div>
          </div>
        </li>
        <li
          className={
            29.9 < bmi && bmi < 34.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row justify-content-md-center">
            <div className="col-4">Obese</div>
            <div className="col-4">30-34.9</div>
            <div className="col-4">
              {" "}
              {range.obesityOne.low + " kg -" + range.obesityOne.high + " kg"}
            </div>
          </div>
        </li>
        <li
          className={
            34.9 < bmi && bmi < 39.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row justify-content-md-center">
            <div className="col-4">Extremely obese</div>
            <div className="col-4">36-39.9</div>
            <div className="col-4">
              {range.obesityTwo.low + " kg -" + range.obesityTwo.high + " kg"}
            </div>
          </div>
        </li>
        <li
          className={
            bmi > 39.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row justify-content-md-center">
            <div className="col-4">Super obese</div>
            <div className="col-4">&gt;40</div>
            <div className="col-4">&gt;{range.obesityThree.high + " kg"}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Bmilist;
