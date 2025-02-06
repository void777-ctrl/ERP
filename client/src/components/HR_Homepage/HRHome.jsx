import SumagoLogo from "../../assets/StudentLoginPageAssets/sumago_logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import StudentLoginGenerate from "./StudentLoginGenerate";

const BdeHome = () => {
  return (
    <>
      <section className="h-screen flex">
        <div className="hidden lg:block bg-[#62c5e9] w-[20%]">
          <div>
            <img
              src={SumagoLogo}
              alt="SumagoLogo"
              className="w-full max-w-[250px] px-6 py-4 mx-auto"
            />
          </div>
          <ul className="text-black font-semibold text-xl p-4">
            <li className="pl-3 mb-4 cursor-pointer active:text-blue-600">
              <div className="inline-block w-[35px]">
                <FontAwesomeIcon className="pr-3 " icon={faHouse} />
              </div>
              Home
            </li>
            <li className="pl-3 mb-4 cursor-pointer active:text-blue-600">
              <div className="inline-block w-[35px]">
                <FontAwesomeIcon className="pr-3" icon={faClipboardQuestion} />
              </div>
              Enquiry Form
            </li>
            <li className="pl-3 mb-4 cursor-pointer active:text-blue-600">
              <div className="inline-block w-[35px] ">
                <FontAwesomeIcon className="pr-3" icon={faRightFromBracket} />
              </div>
              Sign Out
            </li>
          </ul>
        </div>
        <div className="flex-1 h-screen overflow-y-auto">
          <StudentLoginGenerate/>
        </div>
      </section>
    </>
  );
};

export default BdeHome;
