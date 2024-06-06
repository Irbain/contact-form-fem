import React from "react";

interface props {
  content: string;
}

const Checkbox = ({ content }: props) => {
  return (
    <div>
      <input
        id="check"
        type="checkbox"
        className="accent-green-600 cursor-pointer mr-3"
      />
      <label htmlFor="check" className="cursor-pointer select-none">
        {content} <div className="text-green-600 inline-block">*</div>
      </label>
    </div>
  );
};

export default Checkbox;
