import React from "react";

function Cards(props) {
  return (
    <div>
     
      <div className="">
        <div className="h-96 w-72 border-none m-2 object-cover bg-white overflow-hidden rounded-md">
          <img
            className="h-80"
            src="https://rukminim2.flixcart.com/image/420/420/xif0q/t-shirt/a/4/5/3xl-auskk01571-ausk-original-imahemfcvwzuhebe.jpeg?q=60"
            alt=""
          />
        <div className="flex justify-center items-center "> {props.title}</div>
          <div className="flex justify-around">
            <button className="p-1 border-1 transition hover:bg-blue-300 hover:-translate-y-1 delay-150 ease-in-out border-slate-300 rounded-md cursor-pointer" onClick={props.buttonisclick}>
              Add to cart
            </button>
            <button className="p-1 border-1 transition hover:bg-slate-300 hover:-translate-y-1 delay-150 ease-in-out border-slate-300 rounded-md cursor-pointer">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
