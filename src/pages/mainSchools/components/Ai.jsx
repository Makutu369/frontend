import { useCourse } from "../store/courses";
import gemini from "../../../assets/gemini.svg";
import { useData } from "../../dashboard/store/userData";
import { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

// eslint-disable-next-line react/prop-types
const MarkDown = ({ data }) => {
  return <MarkdownPreview source={data} className="p-3 bg-mainbackground" />;
};

const Ai = () => {
  const { course } = useCourse();
  const { Details } = useData();
  const [result, setResult] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const handlefetch = async (course) => {
    const message = `im a student wanting to go to the university with a grade of ${Details.grade} and wanting the do the course ${course.name} explain how it would help me`;
    try {
      setisLoading(true);
      const response = await fetch(
        "https://uniguide-back.onrender.com/chat/detail",
        {
          method: "POST",
          body: JSON.stringify({ role: "user", message }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setisLoading(false);
        setResult(data);
        console.log("data is: ", data);
      }
    } catch (error) {
      setisLoading(false);
      console.log("Error:", error);
    }
  };
  return (
    <>
      {course.map((data) => (
        <div
          className="py-2 border-b justify-between border-white/5 px-4 h-14 flex items-center"
          key={data._id}
        >
          <span className="w-[40%]">{data.name}</span>
          <img
            src={gemini}
            alt=""
            onClick={() => {
              document.getElementById("my_modal_5").showModal();
              handlefetch(data);
            }}
          />
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle "
          >
            <div className="modal-box  px-9 rounded-lg w-[90%]">
              {" "}
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    onClick={() => setResult({})}
                    className="btn btn-circle "
                  >
                    x
                  </button>
                </form>
              </div>
              <h3 className="font-bold text-lg">Hello!</h3>
              {!isLoading && <MarkDown data={result.result} />}
              {isLoading && (
                <div className="flex flex-col gap-3">
                  <div className="skeleton w-[50%] h-6 "></div>
                  <div className="skeleton w-[70%] h-6 "></div>
                  <div className="skeleton w-[80%] h-6 "></div>
                  <div className="skeleton w-[40%] h-6 "></div>
                </div>
              )}
            </div>
          </dialog>
          <span>{data.cutoff}</span>
        </div>
      ))}
    </>
  );
};

export default Ai;