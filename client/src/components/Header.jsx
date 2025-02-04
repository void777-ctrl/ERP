import SumagoLogo from '../assets/StudentLoginPageAssets/sumago_logo.png'

const Header = () => {
  return (
    <header className='shadow'>
      <img src={SumagoLogo} alt="SumagoLogo" className='w-full max-w-[250px] px-6 py-4' />
    </header>
  )
}

export default Header
