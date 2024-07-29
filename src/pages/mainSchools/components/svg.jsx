import { useState } from "react";
import { useCourse } from "../store/courses";

const Svg = ({ courseId }) => {
  const [activeCourse, setActiveCourse] = useState(null);
  return (
    <div className="opacity-40" onClick={setActiveCourse(courseId)}>
      {" "}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={activeCourse === courseId ? "yellow" : "white"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.2795 11.75C22.6036 11.4187 22.8308 11.0049 22.9366 10.5537C23.0423 10.1024 23.0226 9.63085 22.8795 9.19001C22.7476 8.75177 22.4945 8.35971 22.1495 8.05895C21.8046 7.7582 21.3817 7.56098 20.9295 7.49001L16.4895 6.83001C16.4117 6.81871 16.338 6.78807 16.2751 6.7409C16.2122 6.69373 16.1622 6.63153 16.1295 6.56001L14.1295 2.39001C13.9413 1.98132 13.6416 1.63405 13.2648 1.38815C12.888 1.14225 12.4494 1.00771 11.9995 1.00001C11.5412 0.998545 11.0922 1.13001 10.7071 1.3785C10.3219 1.62698 10.0171 1.98181 9.82952 2.40001L7.82952 6.58001C7.79766 6.65208 7.74782 6.71476 7.68479 6.76204C7.62175 6.80932 7.54762 6.83961 7.46952 6.85001L3.03952 7.54001C2.58786 7.6093 2.16538 7.80608 1.82172 8.10723C1.47806 8.40837 1.22751 8.80137 1.09952 9.24001C0.956575 9.68162 0.937876 10.154 1.04547 10.6056C1.15306 11.0571 1.38279 11.4703 1.70952 11.8L4.99952 15.05C5.05568 15.1052 5.09772 15.173 5.12209 15.2479C5.14646 15.3227 5.15244 15.4024 5.13952 15.48L4.38952 20.08C4.31575 20.5393 4.37007 21.0101 4.54649 21.4406C4.72291 21.8711 5.01461 22.2446 5.38952 22.52C5.79055 22.8299 6.28271 22.9986 6.78952 23C7.1843 22.9978 7.57244 22.8981 7.91952 22.71L11.9195 20.53C11.9879 20.4905 12.0655 20.4697 12.1445 20.4697C12.2235 20.4697 12.3011 20.4905 12.3695 20.53L16.3695 22.69C16.7654 22.9048 17.2151 23.0002 17.6641 22.9647C18.1132 22.9292 18.5423 22.7643 18.8995 22.49C19.2744 22.2122 19.5659 21.8369 19.7422 21.4049C19.9185 20.9729 19.9729 20.5008 19.8995 20.04L19.1295 15.45C19.1153 15.3716 19.1197 15.291 19.1422 15.2146C19.1648 15.1382 19.205 15.0681 19.2595 15.01L22.2795 11.75ZM17.7195 13.58C17.435 13.8664 17.2216 14.2155 17.0965 14.5993C16.9715 14.9832 16.9383 15.391 16.9995 15.79L17.7695 20.39C17.7879 20.4789 17.7808 20.5711 17.749 20.6561C17.7171 20.741 17.6618 20.8152 17.5895 20.87C17.5151 20.9182 17.4282 20.9439 17.3395 20.9439C17.2508 20.9439 17.164 20.9182 17.0895 20.87L13.0895 18.71C12.7459 18.5227 12.3608 18.4246 11.9695 18.4246C11.5782 18.4246 11.1931 18.5227 10.8495 18.71L6.84952 20.89C6.77505 20.9382 6.68823 20.9639 6.59952 20.9639C6.5108 20.9639 6.42398 20.9382 6.34952 20.89C6.27446 20.8373 6.21648 20.7637 6.18272 20.6784C6.14895 20.5931 6.14089 20.4998 6.15952 20.41L6.99952 15.82C7.06461 15.4234 7.03613 15.017 6.91633 14.6333C6.79653 14.2496 6.58874 13.8992 6.30952 13.61L3.07952 10.36C3.02192 10.2919 2.98402 10.2093 2.96993 10.1211C2.95583 10.033 2.96606 9.94274 2.99952 9.86001C3.02526 9.77201 3.07567 9.69322 3.14479 9.63297C3.2139 9.57271 3.29883 9.53352 3.38952 9.52001L7.81952 8.84001C8.20186 8.77115 8.56177 8.61051 8.86833 8.37188C9.17489 8.13325 9.41894 7.82376 9.57952 7.47001L11.5795 3.28001C11.6146 3.19748 11.6731 3.127 11.7477 3.07726C11.8223 3.02751 11.9098 3.00066 11.9995 3.00001C12.0898 2.99785 12.1787 3.0223 12.2551 3.07031C12.3316 3.11832 12.3923 3.18777 12.4295 3.27001L14.4295 7.45001C14.5982 7.80658 14.8511 8.11673 15.1665 8.35368C15.4818 8.59063 15.8501 8.74725 16.2395 8.81001L20.6795 9.47001C20.7685 9.4809 20.8523 9.51812 20.92 9.57692C20.9877 9.63572 21.0363 9.71341 21.0595 9.80001C21.0911 9.88751 21.0965 9.98229 21.0752 10.0728C21.0539 10.1634 21.0068 10.2458 20.9395 10.31L17.7195 13.58Z"
          fill="white"
          opacity="25"
        />
      </svg>
    </div>
  );
};

export default Svg;