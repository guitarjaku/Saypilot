import { h } from "preact";
import { useState } from "preact/hooks/";

const Editcapaign = () => {
  return (
    <div className="py-12 bg-black overflow-hidden md:py-20 lg:py-24">
      <div className=" max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 ">
        <img className="w-auto m-auto" src={"/trend-logo.svg"} alt="Workflow" />
        <div className="mt-10 text-center">
          <span>Edit Campaign</span>
        </div>
        <div className="mt-10">
          <p>Name your campaign</p>
          <input
            className="input-text"
            style={{
              width: "100%",
              borderBottom: "1px solid #fff",
              backgroundColor: "black",
            }}
            type="text"
          />
        </div>
        <div style={{ height: "300px" }}></div>
        <div className="grid grid-cols-2 gap-4">
          <div>Product Website</div>
          <div>Product value in dollars</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>Product Category</div>
          <div>Product Category</div>
        </div>
        <div>
          <p>General Post Guidelines</p>
          <p>
            Give them a gemrall inderstanchno of what you're lockm for and haws
            faith in the cnaatiwi minds to come up with content that connects
            with their audience. After all there followers foam them for a
            reasoni
          </p>
        </div>
        <div>
          <p>Which product will you send the influencers?</p>
          <input
            className="input-text"
            style={{
              width: "100%",
              color: "#FFB917",
              border: "1px solid #FFB917",
              backgroundColor: "#161616",
            }}
            type="text"
          />
        </div>
        <div>
          <p>What would you like the influencers to mention in thier caption</p>
          <input
            className="input-text"
            style={{
              width: "100%",
              color: "#FFB917",
              border: "1px solid #FFB917",
              backgroundColor: "#161616",
            }}
            type="text"
          />
        </div>
        <div>
          <p>What photo/video style are you looking for?</p>
          <input
            className="input-text"
            style={{
              width: "100%",
              color: "#FFB917",
              border: "1px solid #FFB917",
              backgroundColor: "#161616",
            }}
            type="text"
          />
        </div>
        <div>
          <p>Style Guide</p>
          <p>add images so the creators know what kind of content to create.</p>
        </div>
        <div>
          <p>What are you looking for in your first post?</p>
        </div>
        <div>
          <p>Instagram Story Required?</p>
        </div>
        <div>
          <p>Enter Traget States</p>
        </div>
        <div>
          <p>Gender</p>
        </div>
      </div>
    </div>
  );
};

export default Editcapaign;
