import { useState } from "react";
import SumagoLogo from "../../assets/StudentLoginPageAssets/sumago_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faClipboardQuestion, faRightFromBracket, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import StudentLoginGenerate from "./StudentLoginGenerate";
import HRStudentData from "./HRStudentData";

const BdeHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <section className="h-screen flex">
        {/* 🔹 Navbar for Mobile Screens */}
        <nav className="lg:hidden fixed top-0 left-0 w-full bg-[#62c5e9] text-black p-4 flex justify-between items-center z-50">
          <h2 className="text-lg font-semibold">Sumago ERP</h2>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} size="lg" />
          </button>
        </nav>

        {/* 🔹 Sidebar (Fixed for large screens, Offcanvas for small screens) */}
        <aside
          className={`fixed top-0 left-0 h-full bg-[#62c5e9] text-black w-[60%] sm:w-[40%] lg:w-[20%] p-4 transition-transform duration-300 z-50 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static`}
        >
          <div className="flex justify-center mb-6">
            <img src={SumagoLogo} alt="SumagoLogo" className="w-full max-w-[200px]" />
          </div>
          <ul className="text-lg font-semibold space-y-4">
            <li className="flex items-center space-x-3 cursor-pointer hover:text-blue-600">
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:text-blue-600">
              <FontAwesomeIcon icon={faClipboardQuestion} />
              <span>Enquiry Form</span>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:text-blue-600">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span>Sign Out</span>
            </li>
          </ul>
        </aside>

        {/* 🔹 Main Content */}
        <div className="flex-1 h-screen overflow-y-auto p-6 mt-16 lg:mt-0">
          <div className="flex-col lg:flex-row gap-4">
            <div className="w-full  bg-white p-4 shadow-lg rounded-lg">
              <StudentLoginGenerate />
            </div>
            <div className="w-full bg-white p-4 shadow-lg rounded-lg">
              <HRStudentData />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BdeHome;
