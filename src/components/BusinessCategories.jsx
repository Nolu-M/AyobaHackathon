import { Link } from "react-router-dom"
import PropTypes from "prop-types";



const BusinessCategories = ({ title, description, link }) => {
  return (
     <div className="bg-white shadow-lg rounded-lg p-4 m-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <Link to={link} className="text-blue-500 hover:underline">Learn More</Link>
        </div>
  )
}

BusinessCategories.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}
export default BusinessCategories
