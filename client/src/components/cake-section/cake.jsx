import "./cake.css";
import sampleData from "./cakedata.js";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import grid from "../../assets/images/grid.png";
import calender from "../../assets/images/calender-logo.png";
import timelogo from "../../assets/images/time-logo.png";
import nextstep from "../../assets/images/Frame 12.png";
import { useState } from "react";

const Cake = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { date, numOfPeople, time, price } = location.state || {};

  const timeinput = "1:00 pm to 3:00 pm";

  // amountcount
  const [count, setCount] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});

  const calculateCount = (cakeprice, index) => {
    // Toggle the checked state for the clicked checkbox
    const updatedCheckedItems = { ...checkedItems };
    updatedCheckedItems[index] = !updatedCheckedItems[index];

    // Update checked state
    setCheckedItems(updatedCheckedItems);

    // Update count based on checked state
    const isChecked = updatedCheckedItems[index];
    const increment = isChecked ? cakeprice : -cakeprice;
    //    const priceFromState = parseInt(price) || 0; // Parse price to integer or default to 0 if price is undefined
    //    setCount(priceFromState + increment);
    setCount(count + increment);
  };

  //   data recive

  const priceFromState = parseInt(price) || 2500;

  // data send
  const sendamountcake = priceFromState + count;
  const handlecakeandtheater = () => {
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("noofpeople:", numOfPeople);
    console.log("Send Amount Cake:", sendamountcake);

    navigate("/decoration", {
      state: {
        date,
        numOfPeople,
        time,
        sendamountcake,
      },
    });
  };

  return (
    <>
      <div className="cake-con">
        <div className="main-cake-con">
          <img src={logo} alt="logo" className="logo-img" />
          <div className="headding-cake">
            <h1>MINI</h1>
            <p>Theater</p>
          </div>
          <img
            src={grid}
            alt="grid"
            className="grid-img"
            onClick={() => {
              navigate("/navbar");
            }}
          />
        </div>
        <div className="dateandtime">
          <img src={calender} alt="calender" />
          <p>{date}</p>
          <img src={timelogo} alt="time" />
          <p>{timeinput}</p>
        </div>
        <h1 className="cake-headding">CAKE</h1>
        <div className="cake-shop">
          {sampleData.map((item, index) => (
            <div key={index}>
              <div className="cake-box">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="cake-image"
                />
                <p className="cakename">{item.name}</p>
                <p className="price">{item.price}</p>
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  onClick={() => calculateCount(parseInt(item.price), index)}
                  checked={checkedItems[index]}
                />
              </div>
            </div>
          ))}
        </div>
        <h1 className="result">
          Total : $ <span>{count + priceFromState}</span>
        </h1>
        <div
          className="nextstep"
          onClick={() => {
            handlecakeandtheater();
          }}
        >
          <img
            src={nextstep}
            alt="nextstep"
            onClick={() => {
              navigate("/deceration");
            }}
          />
        </div>
        {/* <h1 className='final'>{sendamountcake}</h1> */}
      </div>
    </>
  );
};
export default Cake;
