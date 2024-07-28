import { Link } from "react-router-dom"
import AyobaLogo from '../assets/ayoba-logo.png'
import Banner from '../assets/banner.png'



const Home = () => {
  return (
    <div>
      <div className="flex justify-between p-4 container mx-auto">
        <Link to='/'><img src={AyobaLogo} alt="ayoba logo" className="w-44" /></Link>
        <div>
          <Link to='/'>
                    <button className="rounded bg-[#1261a4] text-white p-4 mr-4 ">Login</button>
                </Link>
                <Link to='/'>
                    <button className="rounded bg-[#1261a4] text-white p-4 ">Register</button>
                </Link>
        </div>
            </div>
       <h1>Home</h1>
      <Link to='/user-dashboard'>Login</Link>
      <Link to='/user-dashboard'>Register</Link>
      <Link to='/business-dashboard'>Business Dashboard</Link>
      <Link to='/business-page'>Business Page</Link>
      <Link to='/user-dashboard'>User Dashboard</Link>

      <div>
        <img src={Banner} alt="page banner" className="w-full" />
      </div>
    </div>
  )
}

export default Home
