import React from "react";
import { useSelector } from "react-redux";
import {
  getResume,
  getFirstName,
  getLastName,
  getBday,
  getEmail,
  getAddress,
  getYears,
  getLetter,
  getStat,
} from "../redux/selectors";

const Review: React.FC = () => {
  const resume = useSelector(getResume)
  const firstName = useSelector(getFirstName)
  const lastName = useSelector(getLastName)
  const bday = useSelector(getBday)
  const email = useSelector(getEmail)
  const years = useSelector(getYears)
  const address = useSelector(getAddress)
  const stat = useSelector(getStat)
  const letter = useSelector(getLetter)

  return (
    <>
    <section className="grid grid-cols-2 gap-4 border-2 border-black rounded p-4 mb-12">
      <p>Resume</p>
      {resume === null ? <p>None Selected</p> : <p className="border-2 border-black rounded p-2">{resume.name}</p>}
      <p>First Name</p>
      <p className="border-2 border-black rounded p-2">{firstName}</p>
      <p>Last Name</p>
      <p className="border-2 border-black rounded p-2">{lastName}</p>
      <p>Month and year of birth</p>
      <p className="border-2 border-black rounded p-2">{bday}</p>
      <p>Email</p>
      <p className="border-2 border-black rounded p-2">{email}</p>
      <p>Years of Experience</p>
      <p className="border-2 border-black rounded p-2">{years}</p>
      <p>Physical Address</p>
      <p className="border-2 border-black rounded p-2">{address}</p>
      <p>Are you authorized to work in the US?</p>
      <p className="border-2 border-black rounded p-2">{stat}</p>
      <p>Additional Notes </p>
      {letter && <p className="border-2 border-black rounded p-2">{letter}</p>}
    </section>
    </>
  );
};

export default Review;
