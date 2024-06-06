import React from "react";
import Input from "../Components/Input";
import Checkbox from "../Components/Checkbox";
import { Field } from "formik";

const page = () => {
  return (
    <div className="bg-green-200 w-full h-screen flex items-center justify-center">
      <section
        className="bg-white w-1/2 h-auto p-[3%]
      flex flex-col justify-evenly px-5 rounded-md"
      >
        <div className="flex justify-between gap-3 max-[500px]:flex-col">
          <Input label="First Name" required={true} className="" />
          <Input label="Last Name" required={true} className="" />
        </div>
        <Input label="Email Address" className="" required={true} />

        {/* <label className="w-full h-full">
          <Field className="peer" type="radio" name="gems" value="2500" />
          <div className="peer-checked:bg-gold">hi</div>
        </label> */}

        {/* <div className="flex justify-between">
          <div
            className="w-auto border-gray-500 
        border-[0.9px] rounded-md 
        focus:outline-none focus:ring-0 focus:border-green-600"
          >
            <input name="radio-group" id="option1" type="radio" />
            <label htmlFor="option1">Inquiry</label>
          </div>
          <div>
            <input name="radio-group" id="option2" type="radio" />
            <label htmlFor="option2">Inquiry</label>
          </div>
        </div> */}
        <Input label="Message" required={true} className="" />
        <Checkbox
          content="I consent to being contacted
        by the team"
          //To submit this form, please consent to being contacted
        />

        <button
          type="button"
          className="bg-green-600 h-8 text-white rounded-md 
          active:bg-green-900
        "
        >
          Submit
        </button>
      </section>

      {/* <div>
        Contact Us First Name This field is required Last Name This field is
        required Email Address Please enter a valid email address This field is
        required Query Type General Enquiry Support Request Please select a
        query type Message This field is required I consent to being contacted
        by the team To submit this form, please consent to being contacted
        Submit Message Sent! Thanks for completing the form. We'll be in touch
        soon!
      </div> */}

      <div className="attribution text-white fixed bottom-2">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
};

export default page;
