"use client";

import { FC, useState } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  InformationCircleIcon,
  UserIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { Lightbulb } from "lucide-react";

// Types
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
}

interface Feature {
  icon: string;
  text: string;
}

interface Category {
  title: string;
  desc: string;
  img: string;
  bg: string;
}

interface Product {
  category: string;
  title: string;
  price: string;
  img: string;
  reviews: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  icon: string;
}

// Navbar Item Component
const NavItem: FC<NavItemProps> = ({ icon, label }) => (
  <div className="flex flex-col cursor-pointer hover:text-gray-300 items-center">
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </div>
);

// Data
const features: Feature[] = [
  { icon: "/icons/Feel-Energized-icon1.png", text: "Feel Energized" },
  { icon: "/icons/Support-Weight-Loss-icon1.png", text: "Support Weight Loss" },
  { icon: "/icons/Enjoy-Tasty-Food-icon1.png", text: "Enjoy Tasty Food" },
];

const categories: Category[] = [
  {
    title: "Collagen",
    desc: "Strengthen hair, skin, nails, and joints with clean collagen peptides.",
    img: "/images/60 (1).jpg",
    bg: "#B7F5C4",
  },
  {
    title: "Fasting Support",
    desc: "Electrolytes and ketone support to stay energized while fasting.",
    img: "/images/60.webp",
    bg: "#B7E6F5",
  },
  {
    title: "Bars",
    desc: "Delicious low-carb snack bars to keep you fueled on the go.",
    img: "/images/PK_Nola-Bar_Box_White-Choc-Macadamia_RENDER_24-07-26.webp",
    bg: "#FFF2B7",
  },
  {
    title: "Brain Boost",
    desc: "Nootropics and ketones to improve focus, clarity, and mental energy.",
    img: "/images/PK_CollagenPeptides-RENDER-Chocolate-Tub_24-07-03.webp",
    bg: "#FFD5D1",
  },
];

const featuredProducts: Product[] = [
  {
    category: "COLLAGEN",
    title: "Grass-Fed Collagen Peptides",
    price: "43.99",
    img: "/images/featur4.png",
    reviews: "5,970",
  },
  {
    category: "BARS",
    title: "Collagen Protein Bars",
    price: "44.99",
    img: "/images/featur3.png",
    reviews: "4,503",
  },
  {
    category: "BARS",
    title: "Nola Bars",
    price: "24.99",
    img: "/images/featur2.png",
    reviews: "1,282",
  },
  {
    category: "EXOGENOUS KETONES",
    title: "Base Ketones",
    price: "42.99",
    img: "/images/featur1.png",
    reviews: "5,034",
  },
];

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Feel Energized",
    answer: "Boost your energy naturally and stay active throughout the day with keto-friendly products.",
    icon: "/images/learn.4.svg",
  },
  {
    id: 2,
    question: "Support Weight Loss",
    answer: "Keto helps your body burn fat more effectively, supporting sustainable weight loss.",
    icon: "/images/learn.3.svg",
  },
  {
    id: 3,
    question: "Enjoy Tasty Food",
    answer: "Discover delicious low-carb recipes and snacks that make keto both fun and flavorful.",
    icon: "/images/learn.2.svg",
  },
];

const HomePage: FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);
  const toggleFAQ = (id: number) => setOpenFAQ(openFAQ === id ? null : id);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <header className="w-full">
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold">Perfect Keto</div>
          <div className="flex items-center space-x-9">
            <NavItem icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="SEARCH" />
            <NavItem icon={<InformationCircleIcon className="h-5 w-5" />} label="ABOUT" />
            <NavItem icon={<Lightbulb className="h-5 w-5" />} label="LEARN" />
            <NavItem icon={<UserIcon className="h-5 w-5" />} label="ACCOUNT" />
            <NavItem icon={<ShoppingBagIcon className="h-5 w-5" />} label="CART" />
          </div>
        </nav>
        <nav className="bg-white text-black px-6 py-3 shadow-sm">
          <ul className="flex space-x-8 font-medium text-sm">
            <li className="cursor-pointer hover:text-gray-600">Shop All</li>
            <li className="cursor-pointer hover:text-gray-600">Learn About Keto</li>
            <li className="cursor-pointer hover:text-gray-600">Keto Recipes</li>
            <li className="cursor-pointer hover:text-gray-600">Wholesale</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 flex-1">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm text-gray-600 mb-2">
              + An additional <span className="font-bold">10% OFF</span> when you subscribe
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
              Discover bundle deals <br /> for every lifestyle
            </h1>
            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition mx-auto md:mx-0">
              DISCOVER BUNDLES
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 relative mt-10 md:mt-0 flex justify-center">
            <Image src="/images/new-home-bg1.jpg" alt="Perfect Keto Products" width={600} height={400} className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-amber-50 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-16 px-6">
          {features.map((f, idx) => (
            <div key={idx} className="flex items-center space-x-5">
              <Image src={f.icon} alt={f.text} width={28} height={28} className="w-7 h-7" />
              <p className="text-gray-800 font-medium">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16 px-6">
        <h1 className="text-5xl font-extrabold text-black text-center mb-12">Shop by Category</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center" style={{ backgroundColor: cat.bg }}>
              <div className="max-w-sm">
                <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                <p className="text-gray-800 mb-4">{cat.desc}</p>
                <button className="bg-black text-white px-5 py-2 rounded-full font-bold hover:bg-gray-800 transition">SHOP NOW</button>
              </div>
              <div className="mt-6 md:mt-0">
                <Image src={cat.img} alt={cat.title} width={220} height={220} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h1 className="text-5xl font-extrabold text-black text-center mb-4">Featured Products</h1>
        <p className="text-center text-gray-600 mb-12">
          Discover our best-selling products, trusted by thousands of keto customers.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <span className="px-3 py-1 mb-4 text-xs font-bold text-green-600 border border-green-600 rounded-full">{product.category}</span>
              <Image src={product.img} alt={product.title} width={180} height={180} />
              <div className="flex items-center justify-center space-x-1 mt-4">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-600">{product.reviews}+ Reviews</span>
              </div>
              <h3 className="mt-3 text-lg font-bold">{product.title}</h3>
              <p className="mt-2 text-black font-semibold">${product.price}</p>
              <button className="mt-4 bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition">ADD TO CART</button>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Bundle */}
      <section className="relative w-full h-[600px] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/images/discober-bundle-bg-scaled1-2048x657.jpg')" }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-lg text-black">
            <p className="text-sm mb-2">+ An additional <span className="font-bold">10% OFF</span> when you subscribe</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Discover bundle deals <br /> for every lifestyle
            </h2>
            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              DISCOVER BUNDLES
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src="/images/learn.1.jpg" alt="Learn about Keto" width={500} height={500} className="rounded-2xl" />
          </div>
          <div>
            <h2 className="text-4xl text-black font-extrabold mb-8">Learn about Keto</h2>
            <div className="space-y-6">
              {faqs.map(faq => (
                <div key={faq.id} className="border-b border-black pb-4 cursor-pointer" onClick={() => toggleFAQ(faq.id)}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Image src={faq.icon} alt={faq.question} width={28} height={28} />
                      <span className="font-semibold text-black">{faq.question}</span>
                    </div>
                    <span className="text-green-500 text-xl font-bold">{openFAQ === faq.id ? "−" : "+"}</span>
                  </div>
                  {openFAQ === faq.id && <p className="mt-3 text-black text-sm">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keto Success Stories Section */}
      <section className="bg-green-200 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Keto Success Stories</h2>
            <p className="text-lg text-gray-800 mb-6"><span className="font-extrabold text-3xl">95%</span> of people say that Perfect Keto helps them stay consistent on a keto diet</p>
            <p className="text-lg text-gray-800 mb-6"><span className="font-extrabold text-3xl">70%</span> of people report lower sugar cravings after starting a keto diet with Perfect Keto products</p>
            <p className="text-lg text-gray-800 mb-8"><span className="font-extrabold text-3xl">64%</span> of people report their clothes fitting better after a keto diet with Perfect Keto products</p>
            <a href="#" className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition">READ ALL STORIES</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "/images/c1.jpg", title: "Nisha’s Story", desc: "“It is mind-blowing the impact keto has on mental health.”" },
              { img: "/images/c2.png", title: "Leandrea’s Story", desc: "“Life Is Too Short to be Anything but Happy.”" },
              { img: "/images/c3.png", title: "Daniel’s Story", desc: "“I viscerally needed to make me better.”" },
            ].map((story, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative">
                  <Image src={story.img} alt={story.title} width={400} height={300} className="w-full h-64 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-white text-xs font-bold bg-gradient-to-t from-black/80 to-transparent px-3 py-1">
                    <span>BEFORE</span>
                    <span>AFTER</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900">{story.title}</h3>
                  <p className="text-gray-700 mb-3">{story.desc}</p>
                  <a href="#" className="text-green-600 font-semibold hover:underline flex items-center gap-1">Read more <span>→</span></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="w-full bg-white py-16 px-6 text-center">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center space-x-2 text-yellow-500 mb-2">
            <div className="flex space-x-1 text-yellow-400">{"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}</div>
            <span className="font-medium text-gray-700">13,000+ Reviews</span>
          </div>
          <h2 className="text-3xl font-bold">Customers Love Perfect Keto.</h2>
        </div>

        <div className="flex justify-center">
          <div className="flex overflow-x-auto gap-4 pb-6 scrollbar-hide max-w-6xl">
            {[
              { user: "conteketo", followers: "36.2k followers", image: "/images/Screenshot 2025-09-27 225234.png" },
              { user: "chefheartandsoul", followers: "6.8k followers", image: "/images/Screenshot 2025-09-27 225240.png" },
              { user: "liftingcake", followers: "142.2k followers", image: "/images/Screenshot 2025-09-27 225247.png" },
              { user: "radiatewithemma", followers: "2.9k followers", image: "/images/Screenshot 2025-09-27 225252.png" },
              { user: "conteketo", followers: "36.2k followers", image: "/images/Screenshot 2025-09-27 225258.png" },
            ].map((review, idx) => (
              <div key={idx} className="flex-shrink-0 w-52 rounded-xl overflow-hidden shadow hover:scale-105 transition bg-white">
                                <Image
                  src={review.image}
                  alt={review.user}
                  width={208}
                  height={360}
                  className="h-80 w-full object-cover"
                />
                <div className="bg-white p-2 text-left text-sm">
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-gray-500">{review.followers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-left max-w-6xl mx-auto">
          {[
            { name: "David H.", initials: "DH", product: "Base Exogenous Ketones", text: "Amazing product - absolutely love the taste and the extra energy it provides." },
            { name: "Crystal L.", initials: "CL", product: "MCT Oil Powder", text: "This is so good. I put it in my coffee every morning. I love it!" },
            { name: "Karen W.", initials: "KW", product: "Keto Bars", text: "These bars are by far the best keto snack there is!" },
          ].map((t, idx) => (
            <div key={idx} className="flex flex-col items-start space-y-3 bg-white p-4 rounded-lg shadow">
              <div className="flex space-x-1 text-yellow-400">★★★★★</div>
              <div className="flex items-center space-x-2">
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">{t.initials}</div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.product}</p>
                </div>
              </div>
              <p className="text-gray-700">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-full px-10 py-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left max-w-xl text-white">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Join the Internet&apos;s Largest Keto newsletter
            </h2>
            <p className="text-sm text-gray-400">
              We&apos;ll send you articles, product guides, and exclusive offers customized to your goals.
            </p>
          </div>
          <form className="mt-6 lg:mt-0 flex items-center bg-gray-700 rounded-full overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="email@example.com"
              className="flex-1 px-4 py-3 bg-transparent text-white text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 flex items-center gap-1 rounded-full"
            >
              SUBMIT
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 px-6 py-12 rounded-t-[40px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
            <div>
              <h3 className="text-white font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Grass-Fed Collagen</a></li>
                <li><a href="#" className="hover:text-white">Collagen Protein Bars</a></li>
                <li><a href="#" className="hover:text-white">MCT Oil Powder</a></li>
                <li><a href="#" className="hover:text-white">Exogenous Ketones</a></li>
                <li><a href="#" className="hover:text-white">Keto Starter Kit</a></li>
                <li><a href="#" className="hover:text-white">Shop All</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Learn</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Keto Diet Guide</a></li>
                <li><a href="#" className="hover:text-white">How to Start Keto</a></li>
                <li><a href="#" className="hover:text-white">Keto Calculator</a></li>
                <li><a href="#" className="hover:text-white">How to Use Our Products</a></li>
                <li><a href="#" className="hover:text-white">All Guides</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Education</a></li>
                <li><a href="#" className="hover:text-white">Recipes</a></li>
                <li><a href="#" className="hover:text-white">Earn Rewards</a></li>
                <li><a href="#" className="hover:text-white">Refer A Friend</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-white">Return Policy</a></li>
                <li><a href="#" className="hover:text-white">Do Not Share</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Our Story</a></li>
                <li><a href="#" className="hover:text-white">Our Editorial Team</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Partner</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Affiliates</a></li>
                <li><a href="#" className="hover:text-white">Wholesale</a></li>
                <li><a href="#" className="hover:text-white">Dropship</a></li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-700 p-4 text-center text-sm text-gray-400 mb-8">
            The content in this website is not medical advice and it's intended for informational and educational purposes only.
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Perfect Keto ・ <a href="#" className="hover:text-white">Terms</a> ・ <a href="#" className="hover:text-white">Privacy</a> ・ <a href="#" className="hover:text-white">Disclaimer</a></p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-xl">
              <a href="#" className="hover:text-white">📸</a>
              <a href="#" className="hover:text-white">📘</a>
              <a href="#" className="hover:text-white">🐦</a>
              <a href="#" className="hover:text-white">📌</a>
              <a href="#" className="hover:text-white">▶</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;

