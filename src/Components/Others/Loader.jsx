import React from "react";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="lg:mx-8 mx-4 pt-10 flex justify-center items-center w-full h-full">
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
