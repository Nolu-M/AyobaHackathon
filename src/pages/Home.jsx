import { Link } from "react-router-dom"
import AyobaLogo from '../assets/ayoba-logo.png'
import Banner from '../assets/banner.png'



const Home = () => {
  return (
    <div>
      <header className="flex justify-between p-4 container mx-auto">
        <Link to='/'><img src={AyobaLogo} alt="ayoba logo" className="w-44" /></Link>
        <div>
          <Link to='/user-dashboard'>
            <button className="rounded bg-[#1261a4] text-white p-4 mr-4 ">Login</button>
          </Link>
          <Link to='/user-dashboard'>
            <button className="rounded bg-[#1261a4] text-white p-4 ">Register</button>
          </Link>
        </div>
      </header>
      <div className="container mx-auto">
        <Link to='/business-dashboard'>
            <button className="rounded bg-[#1261a4] text-white p-4 ml-6 mr-6">Business Dashboard</button>
        </Link>
        <Link to='/business-page'>
            <button className="rounded bg-[#1261a4] text-white p-4">Business Page</button>
        </Link>
          <section className="max-w-4xl mx-auto mt-6">
                <h1 className="text-4xl font-bold text-blue-700 mb-6">Welcome to Ayoba!</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Ayoba is your go-to platform for affordable, user-friendly marketing. Designed to empower small businesses, Ayoba connects you directly with your customers through real-time chat and insightful analytics.
                </p>
                <ul className="list-none text-lg text-gray-700 mb-8">
                    <li className="mb-2"><strong>Why Ayoba?</strong> Marketing Without Breaking the Bank. Create and manage impactful ads without the hefty price tag.</li>
                    <li className="mb-2"><strong>Effortless Navigation:</strong> Our intuitive design makes it easy for anyone to use, no tech skills required.</li>
                    <li className="mb-2"><strong>Instant Customer Connection:</strong> Engage with your customers in real-time using the Ayoba API.</li>
                    <li className="mb-2"><strong>Crystal Clear Insights:</strong> Make smart decisions with easy-to-understand analytics.</li>
                    <li className="mb-2"><strong>Community Vibes:</strong> Foster a vibrant community with forums and customer recommendations.</li>
                    <li className="mb-2">Join Ayoba and supercharge your business marketing, all while keeping costs at an all-time low!</li>
                </ul>
            </section>
        </div>
      <section className="mt-12">
        <img src={Banner} alt="page banner" className="w-full h-full" />
      </section>
    </div>
  )
}

export default Home
