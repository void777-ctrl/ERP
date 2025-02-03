import SumagoLogo from '../assets/StudentLoginPageAssets/sumago_logo.png'
import GoogleLogo from '../assets/StudentLoginPageAssets/google_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const StudentLogin = () => {
  return (
    <>
      <div className='h-screen bg-[url(/src/assets/StudentLoginPageAssets/BG_StudentLogin.svg)] bg-no-repeat bg-cover flex justify-center items-center'>
        <div className="bg-slate-50 h-[80%] max-h-[580px] w-[90%] md:w-[80%] max-w-[1100px] rounded md:flex overflow-hidden">
          
          <div className="hidden md:block h-full md:w-[50%] bg-[url(src/assets/StudentLoginPageAssets/Login_illustration.png)] bg-cover bg-center bg-no-repeat"></div>
          <div className="h-full md:w-[50%] flex justify-center items-center">
            {/* Form */}
            <form 
              action=""
              className="w-[80%] px-8 py-3 "
            >
              {/* SumagoLogo */}
              <img src={SumagoLogo} alt="sumago_logo" className='my-1 mx-auto w-full max-w-[180px]' />
              {/* Welcome message */}
              <p className='font-(family-name: Inter) text-center opacity-40 text-xs font-semibold mt-4'>Welcome, Please login to your account</p>
              {/* Google Login  */}
              <div className='flex gap-2 items-center justify-center mt-4 border py-1 rounded cursor-pointer'>
                <img src={GoogleLogo} alt="googleLogo" />
                <p className='text-blue-500 font-semibold'>Login with Google</p>
              </div>
              {/* OR */}
              <p className='font-semibold text-center my-4 text-xs opacity-60'>OR</p>
              {/* Username or Email*/}
              <div className='my-[10px]'>
                <label htmlFor="usernameoremail" className='font-semibold'>Username or Email</label>
                <input className='w-full border rounded px-2 py-1 mt-2' type="text" id='usernameoremail' placeholder='Please enter your username or email' />
              </div>
              {/* Password */}
              <div className='my-[10px]'>
                <label htmlFor="password" className='font-semibold'>Password</label>
                <input className='w-full border rounded px-2 py-1 mt-2' type="text" id='password' placeholder='Enter password' />
              </div>
              {/* Captcha */}
              <div className='my-[10px]'>
                <label htmlFor="captcha" className='font-semibold'>Enter Captcha [ 1 + 2 = ? ]</label>
                <input className='w-full border rounded px-2 py-1 mt-2' type="text" id='captcha' placeholder='Enter captcha' />
              </div>
              {/* Button */}
              <button className='my-2.5 group text-[1.1rem] w-full text-white px-3 py-4 cursor-pointer rounded bg-[#BC343E] hover:bg-[#ae3039]'>Login<FontAwesomeIcon className='ms-1.5 group-hover:ms-2.5' icon={faArrowRight} /></button>
              {/* Redirect to sign up */}
              <p className='text-center my-2'>Doesn’t have an account yet? <span className='text-[#BC343E] cursor-pointer'>Sign Up</span></p>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default StudentLogin
