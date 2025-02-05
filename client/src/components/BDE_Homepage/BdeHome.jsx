// import SumagoLogo from '../../assets/StudentLoginPageAssets/sumago_logo.png'

import Header from "../Header"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faClipboardQuestion } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import BDEEnquiryform from "./BDEEnquiryform";

const BdeHome = () => {
    return (
        <>
            <Header />
            <section className="h-screen flex">
                <div className="hidden lg:block bg-slate-700 w-[20%]">
                    <ul className="text-white font-semibold text-xl p-4">
                        <li className="pl-3 mb-4 cursor-pointer"><FontAwesomeIcon className="pr-3" icon={faHouse} /> Home</li>
                        <li className="pl-3 mb-4 cursor-pointer"><FontAwesomeIcon className="pr-3" icon={faClipboardQuestion} />Enquiry Form</li>
                        <li className="pl-3 mb-4 cursor-pointer"><FontAwesomeIcon className="pr-3" icon={faRightFromBracket} />Sign Out</li>
                    </ul>
                </div>
                <div>
                    <BDEEnquiryform />
                </div>
            </section>
        </>
    )
}

export default BdeHome
