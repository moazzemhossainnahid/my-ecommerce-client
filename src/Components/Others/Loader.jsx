import React from "react";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="lg:mx-8 mx-4 pt-10 flex justify-center items-center w-full h-screen">
      <Dna
        visible={true}
        height="180"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
