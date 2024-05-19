import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <>
            <div id="footer" className="mt-8 bg-slate-800 p-5 md:p-10 lg:p-20 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <div id="left">
                    <img src={assets.logo} alt="Company Logo" className="max-w-full h-auto" />
                    <p className="mt-6 mb-6 text-sm md:text-base">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, dolore quam. Necessitatibus, ab molestiae dolor itaque numquam tempore voluptatem beatae minima accusamus odio, mollitia ad! Perferendis dolore ducimus ab a, ullam saepe distinctio voluptatibus est sit corrupti tempora cupiditate tenetur. Debitis obcaecati consequatur animi sint.
                    </p>
                    <div id="socialMedia" className="flex gap-4">
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                        <img src={assets.twitter_icon} alt="Twitter" />
                    </div>
                </div>
                <div id="center" className="lg:mx-auto">
                    <h2 className="text-2xl md:text-3xl text-orange-600 font-semibold">COMPANY</h2>
                    <ul className="font-semibold text-sm md:text-md flex justify-start flex-col gap-2 mt-6">
                        <li className="text-white cursor-pointer hover:text-orange-600">Home</li>
                        <li className="text-white cursor-pointer hover:text-orange-600">About Us</li>
                        <li className="text-white cursor-pointer hover:text-orange-600">Delivery</li>
                        <li className="text-white cursor-pointer hover:text-orange-600">Privacy Policy</li>
                    </ul>
                </div>
                <div id="right" className="lg:mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-600">GET IN TOUCH</h2>
                    <p className="mb-2">+8801831672277</p>
                    <p>tomato@gmail.com</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
