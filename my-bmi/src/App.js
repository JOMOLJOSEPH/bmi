import { useState } from "react";
import "./App.css";
import Bmilist from "./components/Bmilist";
import Bmiscore from "./components/Bmiscore";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [show, setShow] = useState(false);
  const [changeWeight, setChangeWeight] = useState({ weight: "", type: "" });
  const [bmi, setBmi] = useState("00");
  const [bmiType, setBmiType] = useState("Not Calculated");
  const [bmiRange, setBmiRang] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });
  const onFormSub = (w, h) => {
    let b = calBmi(w, h);
    setBmi(b);
    setBmiType(weightType(b));
    console.log(w, h);
    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
    setBmiRang(range);
    setChangeWeight(weightChange(b, w, range));
    setShow(true);
  };
  const calBmi = (w, h) => (w / (h * h)).toFixed(2);
  const calWeight = (bmi, h) => (bmi * h * h).toFixed(2);
  const weightChange = (b, w, range) => {
    let changeObj;
    if (b > 24.9) {
      changeObj = {
        weight: (w - range.normal.high).toFixed(2),
        type: "positive",
      };
      return changeObj;
    } else if (b < 18.5) {
      changeObj = {
        weight: (range.normal.low - w).toFixed(2),
        type: "negative",
      };
      return changeObj;
    } else {
      changeObj = {
        weight: 0,
        type: "normal",
      };
      return changeObj;
    }
  };
  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Overweight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obese";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Extremely obese";
    } else if (bmi > 39.9) {
      return "Super obese";
    }
  };
  
const weightStyle = (bmi) => {
  if (bmi < 18.5) {
    return { color: 'blue' }; // Example color for Underweight
  } else if (18.5 <= bmi && bmi <= 24.9) {
    return { color: 'green' }; // Example color for Normal
  } else if (24.9 < bmi && bmi <= 29.9) {
    return { color: 'orange' }; // Example color for Overweight
  } else if (29.9 < bmi && bmi <= 34.9) {
    return { color: 'red' }; // Example color for Obese
  } else if (34.9 < bmi && bmi <= 39.9) {
    return { color: 'purple' }; // Example color for Extremely obese
  } else if (bmi > 39.9) {
    return { color: 'black' }; // Example color for Super obese
  }
};
const BMIComponent = ({ bmi }) => {
  return (
    <div>
      <h2 style={weightStyle(bmi)}>{weightType(bmi)}</h2>
    </div>
  );
};

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Form getData={onFormSub} />
        </div>
        {show && (
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-sm-6 mb-5">
              <Bmiscore
                bmiNo={bmi}
                bmiName={bmiType}
                changeWeight={changeWeight}
                BMIComponent={BMIComponent}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Bmilist range={bmiRange} bmi={bmi} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
