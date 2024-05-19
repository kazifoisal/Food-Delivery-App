import { assets } from "../../assets/assets";

const Footer=()=>{
return(<>
<div id="footer" className="grid grid-cols-3 mt-8 bg-slate-800 p-20 text-white">
    <div id="left">
     <img src={assets.logo} alt="" />
     <p className="mt-6 mb-6 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, dolore quam. Necessitatibus, ab molestiae dolor itaque numquam tempore voluptatem beatae minima accusamus odio, mollitia ad! Perferendis dolore ducimus ab a, ullam saepe distinctio voluptatibus est sit corrupti tempora cupiditate tenetur. Debitis obcaecati consequatur animi sint.</p>
     <div id="socialMedia" className="flex gap-4">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
     </div>
    </div>
    <div id="center" className="mx-auto" >
       <h2 className="text-3xl text-orange-600 font-semibold">COMPANY</h2>
       <ul className="font-semibold text-md flex justify-start flex-col gap-2 mt-6">
       <li  className="text-white hover:text-orange-600">Home</li>
       <li className="text-white hover:text-orange-600">About Us</li>
       <li className="text-white hover:text-orange-600">Delivery</li>
       <li className="text-white hover:text-orange-600">Privecy Policy</li>
       </ul>
    </div>
    <div id="right" className="text-center">
<h2 className="text-3xl font-semibold mb-6  text-orange-600">GET IN TOUCH</h2>
     <p className="mb-2">+8801831672277</p>
     <p>tomato@gmail.com</p>
    </div>
</div>




</>)
}

export default Footer;