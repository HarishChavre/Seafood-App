import React from "react";

function Card() {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.pxhere.com%2Fphotos%2Fb4%2F6b%2Fseafood_food_healthy_sea_fresh_fish_restaurant_dinner-1023112.jpg!d&f=1&nofb=1&ipt=1f05a6cdddbc989cb039e8fa1dd5966e49b5380310cc92b9c4964725c5a80f9f&ipo=images" class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">this is imp text</p>
          <div className="container w-100"></div>
          <select className="m-2 h-100  bg-success">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100  bg-success rounded">
            <option value="half">Half</option>
            <option value="Full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">Total price</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
