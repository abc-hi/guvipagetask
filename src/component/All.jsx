import React from "react";
import Card from "./Card";

const All = ({ data }) => {
  return (
    <div className="d-flex flex-wrap">
      <div>
        {/* <h1>all</h1> */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item, index) => (
            <div className="col" key={index}>
              
             
                <div className="card-body">
                  <Card
                    key={index}
                    item={item}
                    style={{
                      display: "block",
                      position: "absolute",
                      fontSize: "7px",
                    }}
                  />

            </div>
            </div>
          ))}
        </div>
   </div>
    </div>
  );
};

export default All;
