import SumagoLogo from '../assets/StudentLoginPageAssets/sumago_logo.png'

const LoginPage = () => {
  return (
    <>
        <div className='h-screen flex justify-center items-center'>
            <form action="" className='shadow-2xl px-8 py-8 rounded-2xl w-full max-w-[350px]'>
                <img src={SumagoLogo} alt="SumagoLogo" className='mx-auto mb-4' />
                <select name="" id="" className='block mx-auto shadow px-2 py-1 mb-4'>
                    <option value="Select" hidden>Select Login</option>
                    <option value="Student">Student</option>
                    <option value="Admin">Admin</option>
                    <option value="HR">HR</option>
                    <option value="BDE">BDE</option>
                </select>
                {/* Email Input */}
                <div className='mb-4'>
                    <label htmlFor="email" className='font-semibold'>UserID or Email</label>
                    <input type="email" id='email' className='border rounded w-full px-4 py-1' />
                </div>
                {/* Password Input */}
                <div className='mb-4'>
                    <label htmlFor="password" className='font-semibold'>Password</label>
                    <input type="password" id='password' className='border rounded w-full px-4 py-1' />
                </div>
                {/* Login Button */}
                <button className='block mx-auto bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold rounded px-4 py-1.5'>Login</button>
            </form>
        </div>
    </>
  )
}

export default LoginPage
