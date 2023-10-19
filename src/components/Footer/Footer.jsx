
import { BsFacebook,BsYoutube,BsTwitter } from 'react-icons/bs';
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-800 text-white">
                <nav>
                    <header className="footer-title text-xl">Category</header>
                    <a className="link link-hover">Milk & Dairy</a>
                    <a className="link link-hover">Coffee & Drinks</a>
                    <a className="link link-hover">Fresh Fruits</a>
                    <a className="link link-hover">Fresh Vegetable</a>
                    <a className="link link-hover">Fresh Meat</a>
                </nav>
                <nav>
                    <header className="footer-title text-xl">Contact Us</header>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">SignUp</a>
                    <a className="link link-hover">SignIn</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>
                <nav>
                    <header className="footer-title text-xl">Our Services</header>
                    <a className="link link-hover">Agriculture Products</a>
                    <a className="link link-hover">Organic Products</a>
                    <a className="link link-hover">Milk Sweet Products</a>
                    <a className="link link-hover">Delivery Service</a>
                    <a className="link link-hover">Meat & Seafood</a>
                    <a className="link link-hover">Fresh Vegetables</a>
                </nav>
                <nav>
                    <header className="footer-title text-xl">Quick Links</header>
                    <a className="link link-hover">Aarong Dairy</a>
                    <a className="link link-hover">Product</a>
                    <a className="link link-hover">service</a>
                    <a className="link link-hover">News</a>
                </nav>
            </footer>
            <hr />
            <div className="footer items-center p-4 bg-slate-800 text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <h1 className="normal-case text-2xl font-bold">Grocery<span className="text-green-600">Shop</span></h1>
                    
                </aside>
                <p>Copyright © 2023 - All right reserved</p>
                <nav className="grid-flow-col gap-4 text-3xl md:place-self-center md:justify-self-end">
                    <a href="#"><BsFacebook/></a>
                    <a href="#"><BsYoutube/></a>
                    <a href="#"><BsTwitter/></a>
                </nav>
            </div>
        </div>

    );
};

export default Footer;