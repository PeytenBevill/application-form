import React from "react";
import { useDispatch } from "react-redux";
import {
  saveAddress,
  saveYears,
  saveStat,
  saveLetter,
} from "../redux/userActions";
import "/src/output.css";

const Second: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <section className="grid grid-cols-2 gap-4 border-2 border-black rounded p-4 mb-12">
        <p>How many year of experience do you have?</p>
        <input
          type="number"
          name="experience"
          className="border-2 border-black rounded p-2"
          onChange={(e) => dispatch(saveYears(e.target.value))}
        />
        <p>Physical Address</p>
        <textarea
          name="address"
          cols={30}
          rows={2}
          className="border-2 border-black rounded p-2"
          onChange={(e) => dispatch(saveAddress(e.target.value))}
        ></textarea>
        <p>Are you authorized to work in the US?</p>
        <select
          name="authorization"
          className="border-2 border-black rounded p-2"
          onChange={(e) => dispatch(saveStat(e.target.value))}
        >
          <option value="choose">Choose One</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <p>Is there anything else you'd like to add?</p>
        <textarea
          name="cover-letter"
          cols={40}
          rows={8}
          className="border-2 border-black rounded p-2"
          onChange={(e) => dispatch(saveLetter(e.target.value))}
        ></textarea>
      </section>
    </>
  );
};

export default Second;
