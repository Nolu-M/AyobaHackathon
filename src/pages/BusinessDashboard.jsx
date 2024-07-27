import BusinessCategories from "../components/BusinessCategories";
import BusinessNav from "../components/BusinessNav"


const Business = () => {

   const categories = [
        { title: "About", description: "Description for category 1", link: "/category1" },
        { title: "Ad Management", description: "Description for category 2", link: "/category2" },
        { title: "Chat", description: "Description for category 3", link: "/category3" },
        { title: "Forum", description: "Description for category 3", link: "/category3" },
        { title: "Analytics", description: "Description for category 3", link: "/category3" },
    ];


  return (
    <div className="container mx-auto">
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
