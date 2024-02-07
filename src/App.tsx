import { useState } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Review from "./components/Review";
import { AppleLogo } from "@phosphor-icons/react";
import { getFirstName, getAddress } from "./redux/selectors";
import { useSelector } from "react-redux";
import "./output.css";

const App: React.FC = () => {
  const [togglePage, setTogglePage] = useState("first");
  const [submit, setSubmit] = useState(false);
  const firstName = useSelector(getFirstName);
  const address = useSelector(getAddress);

  const handleContinue = () => {
    if (firstName !== "") {
      setTogglePage("second");
    }

    if (address !== "") {
      setTogglePage("review");
    }
  };

  const handleSubmit = () => {
    setSubmit(true);
  };

  const handleReset = () => {
    setTogglePage("first")
    setSubmit(false)
    window.location.reload()
  }

  return (
    <>
      {submit === false ? (
        <div className="flex flex-col items-center justify-center m-10">
          <header className="flex text-orange-400 mb-6">
            <AppleLogo size={32} />
            <h1 className="text-2xl">CompanyName</h1>
          </header>
          <section className="mb-6 p-6 bg-orange-400 w-full text-center">
            <h2 className="text-lg">Job Application</h2>
          </section>
          <section className="flex flex-col pl-6 w-5/12 max-md:w-100 max-md:pl-0">
            <h5 className="font-bold text-left">Job Description:</h5>
            <p className="mb-3">
              As a Junior Frontend Developer at CompanyName, you will have the
              chance to kickstart your career in a collaborative and supportive
              environment. Work closely with seasoned developers, contribute to
              exciting projects, and gain valuable experience in the fast-paced
              world of frontend development.
            </p>
            <h5 className="font-bold">Key Responsibilities:</h5>
            <p>
              <span className="font-bold">-</span> Assist in the development of
              responsive web interfaces using HTML, CSS, and JavaScript.
            </p>
            <p>
              <span className="font-bold">-</span> Collaborate with experienced
              developers and designers to implement and refine frontend
              features.
            </p>
            <p>
              <span className="font-bold">-</span> Participate in code reviews,
              absorb constructive feedback, and contribute to team discussions.
            </p>
            <p>
              <span className="font-bold">-</span> Embrace new technologies and
              methodologies to enhance your skills and stay updated on industry
              trends.
            </p>
            <p className="mb-3">
              <span className="font-bold">-</span> Contribute to various stages
              of the software development lifecycle, from coding to testing.
            </p>
            <h5 className="font-bold">Requirements:</h5>
            <p>
              <span className="font-bold">-</span> 1+ years of professional or
              internship experience in frontend development
            </p>
            <p>
              <span className="font-bold">-</span> Basic understanding of HTML,
              CSS, and JavaScript, with a willingness to learn and grow.
            </p>
            <p>
              <span className="font-bold">-</span> Exposure to frontend
              frameworks, such as React, is a plus.
            </p>
            <p>
              <span className="font-bold">-</span> Strong communication skills
              and the ability to thrive in a collaborative team environment.
            </p>
            <p className="mb-5">
              <span className="font-bold">-</span> Passion for continuous
              learning and a proactive approach to skill development.
            </p>
          </section>
          {togglePage === "first" ? (
            <>
              <First />
              <button
                className="h-14 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-2 rounded mb-4"
                onClick={handleContinue}
              >
                Continue
              </button>
            </>
          ) : togglePage === "second" ? (
            <>
              <Second />
              <button
                className="h-14 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-3 rounded mb-4"
                onClick={handleContinue}
              >
                Review
              </button>
            </>
          ) : (
            <>
              <Review />
              <button
                className="h-14 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-3 rounded mb-4"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </>
          )}

          <p className="flex flex-col text-center">
            Please note, this is a mock application and does not submit to a
            real company
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center m-10">
        <header className="flex flex-row justify-center align-center text-orange-400 mt-5">
            <AppleLogo size={32} />
            <h1 className="text-2xl">CompanyName</h1>
          </header>
          <section className="mt-6 mb-6 p-6 bg-orange-400 w-full text-center">
          <h1 className="mb-4">
            Thank you for your interest in CompanyName! We will get back to you
            shortly.
          </h1>
          <button onClick={handleReset} className="bg-white p-2 w-20 rounded text-orange-400">Okay!</button>
          </section>
        </div>
      )}
    </>
  );
};

export default App;
