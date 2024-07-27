import { Link } from "react-router-dom"
import AyobaLogo from '../assets/ayoba-logo.png'


const BusinessNav = () => {
    return (
        <div className="">
            <div className="flex justify-between p-4">
                <Link to='/'><img src={AyobaLogo} alt="ayoba logo" className="w-44"/></Link>
                <Link to='/'>
                    <button className="rounded bg-[#1261a4] text-white p-4 ">Logout</button>
                </Link>
            </div>
        </div>
  )
}

export default BusinessNav
