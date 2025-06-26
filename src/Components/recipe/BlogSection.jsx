import React from "react";
import { useNavigate } from "react-router";
import { FaBookOpen, FaUserCircle, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "5 Secrets to Perfect Pizza at Home",
    author: "Chef Mario",
    date: "June 25, 2025",
    image: "https://i.ibb.co/wh77bwG8/823b044dd2edbdc29b14d345d286a4c6-cvl62f5e878c73em61rg-image.png",
    excerpt:
      "Discover the essential tips and tricks for making restaurant-quality pizza in your own kitchen. From dough to toppings, we cover it all!",
    content: `
      <h3>1. Start with Great Dough</h3>
      <p>The foundation of any pizza is the dough. Use high-protein flour and let your dough ferment overnight for the best flavor and texture.</p>
      <h3>2. Use a Pizza Stone or Steel</h3>
      <p>Preheat your oven with a pizza stone or steel to mimic the intense heat of a wood-fired oven.</p>
      <h3>3. Don’t Overload with Toppings</h3>
      <p>Less is more! Too many toppings can make your pizza soggy.</p>
      <h3>4. Bake at the Highest Temperature</h3>
      <p>Crank your oven as high as it will go for a crispy crust.</p>
      <h3>5. Finish with Fresh Ingredients</h3>
      <p>Add fresh basil, arugula, or a drizzle of olive oil after baking for a burst of flavor.</p>
    `,
  },
  {
    id: 2,
    title: "The Art of Plating: Make Your Meals Instagram-Worthy",
    author: "Sophie Lee",
    date: "June 20, 2025",
    image: "https://i.ibb.co/Qv3hHjz9/b2e813aece97acf6f0aba5dd1bb8d549-csclktte878c73fkvncg-image.png",
    excerpt:
      "Learn how to plate your dishes like a pro and impress your guests with beautiful, vibrant presentations every time.",
    content: `
      <h3>1. Choose the Right Plate</h3>
      <p>White plates make colors pop, while dark plates add drama.</p>
      <h3>2. Play with Height and Texture</h3>
      <p>Stack elements and use contrasting textures for visual interest.</p>
      <h3>3. Garnish Thoughtfully</h3>
      <p>Use edible flowers, herbs, or microgreens to finish your dish.</p>
      <h3>4. Wipe the Edges</h3>
      <p>Keep plate rims clean for a professional look.</p>
    `,
  },
  {
    id: 3,
    title: "Healthy Swaps for Everyday Cooking",
    author: "Dr. Samir Patel",
    date: "June 15, 2025",
    image: "https://i.ibb.co/Z1BTcSYF/a19f6f1d907d10e6ef36006a38f1f452-cv8j8bte878c73bon7qg-image.png",
    excerpt:
      "Upgrade your favorite recipes with these simple, healthy ingredient swaps that don’t compromise on flavor.",
    content: `
      <h3>1. Greek Yogurt for Sour Cream</h3>
      <p>Lower in fat and higher in protein, Greek yogurt is a great substitute.</p>
      <h3>2. Zoodles for Pasta</h3>
      <p>Spiralized zucchini is a low-carb alternative to traditional pasta.</p>
      <h3>3. Avocado for Butter</h3>
      <p>Use mashed avocado in baking for healthy fats and creaminess.</p>
      <h3>4. Cauliflower Rice</h3>
      <p>Swap out white rice for cauliflower rice to cut calories and add fiber.</p>
    `,
  },
];

const BlogSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    // Pass blog data to details page using state
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <section className="w-full py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-12 flex items-center gap-3" data-aos="fade-down">
        <FaBookOpen className="text-accent" />
        Latest Blogs
      </h2>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-3xl bg-base-200/80 border border-base-300 shadow-xl flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-t-3xl border-b border-primary"
            />
            <div className="flex-1 flex flex-col justify-between p-8">
              <h3 className="text-2xl font-bold text-secondary mb-2 flex items-center gap-2">
                {blog.title}
              </h3>
              <div className="flex items-center gap-4 text-base-content/70 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <FaUserCircle className="text-info" /> {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-warning" /> {blog.date}
                </span>
              </div>
              <p className="text-base-content/80 mb-6">{blog.excerpt}</p>
              <button
                className="self-start flex items-center gap-2 px-5 py-2 bg-primary text-primary-content rounded-xl font-semibold shadow hover:bg-primary/80 transition"
                onClick={() => handleReadMore(blog)}
              >
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;