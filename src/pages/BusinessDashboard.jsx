import BusinessCategories from "../components/BusinessCategories";
import BusinessNav from "../components/BusinessNav"


const Business = () => {

   const categories = [
        { title: "About", description: "Description for category 1", link: "/about-business" },
        { title: "Ad Management", description: "Description for category 2", link: "/ad-management" },
        { title: "Chat", description: "Description for category 3", link: "/business-chat" },
        { title: "Forum", description: "Description for category 3", link: "/business-forum" },
        { title: "Analytics", description: "Description for category 3", link: "/business-analytics" },
    ];


  return (
    <div className="">
      <BusinessNav />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {categories.map((category, index) => (
                    <BusinessCategories
                        key={index} 
                        title={category.title} 
                        description={category.description} 
                        link={category.link} 
                    />
                ))}
            </div>
    </div>
  )
}

export default Business
