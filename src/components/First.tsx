import React from "react";
import { useDispatch } from "react-redux";
import {
  saveResume,
  saveFirstName,
  saveLastName,
  saveBday,
  saveEmail,
} from "../redux/userActions";
import "/src/output.css";

const First: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <section className="grid grid-cols-2 gap-4 border-2 border-black rounded p-4 mb-12">
        <p>Resume <span className="text-red">*</span></p>
        <input
          type="file"
          accept=".pdf"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files ? e.target.files[0] : null;
            if (file !== null) {
              dispatch(saveResume(file));
            }
          }}
        />
        <p>First Name</p>
        <input
          className="border-2 border-black rounded p-2"
          type="text"
          name="firstName"
          placeholder="First"
          required
          onChange={(e) => dispatch(saveFirstName(e.target.value))}
        />
        <p>Last Name</p>
        <input
          className="border-2 border-black rounded p-2"
          type="text"
          name="lastName"
          placeholder="Last"
          required
          onChange={(e) => dispatch(saveLastName(e.target.value))}
        />
        <p>Month and year of birth</p>
        <input
          className="border-2 border-black rounded p-2"
          type="month"
          name="bday"
          required
          onChange={(e) => dispatch(saveBday(e.target.value))}
        />
        <p>Email Address</p>
        <input
          className="border-2 border-black rounded p-2"
          type="text"
          name="email"
          placeholder="example@email.com"
          required
          onChange={(e) => dispatch(saveEmail(e.target.value))}
        />
      </section>

    </div>
  );
};

export default First;
