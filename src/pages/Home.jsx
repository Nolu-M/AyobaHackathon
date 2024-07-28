import { Link } from "react-router-dom"



const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/user-dashboard'>Login</Link>
      <Link to='/user-dashboard'>Register</Link>
      <Link to='/business-dashboard'>Business Dashboard</Link>
      <Link to='/user-dashboard'>User Dashboard</Link>
    </div>
  )
}

export default Home

