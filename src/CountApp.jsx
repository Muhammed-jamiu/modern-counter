import React, { useState } from "react";
function CountApp() {
  const color = {
    //Other way of Styling in React
    color: "#fff",
    position: "relative",
    bottom: "30px",
    borderRadius: "10px",
    background: "black",
    width: "300px",
    margin: "50px auto",
    border: "2px solid black",
    display: "flex ",
    justifyContent: "center",
  };
  const [count, setCount] = useState(0);
  const handleBtn = (e) => {
    {
      count == 0
        ? alert("Sorry you can't go beyound Zero")
        : setCount((prev) => {
            return prev - 1;
          });
    }
  };
  const countName = "COUNTER";

  return (
    <>
      <div
        style={{
          width: "400px",
          margin: "150px auto",
          border: "2px solid darkgray",
          background: "darkgray",
          borderRadius: "20px",
        }}
      >
        <div style={color}>
          <h2> {countName}</h2>
        </div>
        <div
          style={{
            width: "400px",
            margin: "40px auto",
          }}
        >
          <p
            style={{
              position: "relative",
              left: "150px",
              bottom: "40px",
              borderRadius: "7px",
              background: "gray",
              fontSize: "32px",
              color: "#fff",
              width: "70px",
              textAlign: "center",
            }}
          >
            {" "}
            {count}
          </p>
          <div
            style={{
              display: "flex",
              gap: "40px",
              position: "relative",
              left: "50px",
            }}
          >
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "5px",
                letterSpacing: "1.5px",
                padding: "6px",
              }}
              onClick={(e) => {
                handleBtn(e);
              }}
            >
              Substract
            </button>
            <button
              style={{
                backgroundColor: "pink",
                color: "black",
                borderRadius: "5px",
                letterSpacing: "1.5px",
                padding: "10px",
              }}
              onClick={(e) => {
                setCount((prev) => {
                  console.log(prev);
                  return (prev = 0);
                });
              }}
            >
              Reset
            </button>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "5px",
                letterSpacing: "1.5px",
                width: "90px",
                padding: "7px",
                position: "relative",
              }}
              onClick={(e) => {
                setCount((prev) => {
                  console.log(prev);
                  return prev + 1;
                });
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <button
      // onClick={(e) => {
      //   const pageNumber = 4;
      //   {
      //     pageNumber > 4 ? (
      //       <Show name="Muhameed-Jamiu" />
      //     ) : (
      //       alert("The page number is greaterthan 4")
      //     );
      //   }
      // }}
      >
        {/* Show Me */}
      </button>
    </>
  );
}

export default CountApp;
