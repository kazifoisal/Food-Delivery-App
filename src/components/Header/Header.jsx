import "./Header.css";

const Header =()=>{
return (<>
<div id="header" className=" font-semibold">
    <div id="header-contents">
        <h2 className="text-xl md:text-5xl lg:text-8xl text-white">Order your favourite food here .</h2>
        <p className="text-white text-md hidden lg:inline-flex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo dolor dolore doloribus tempore impedit nesciunt consequuntur excepturi! Ipsum porro nesciunt neque, ea inventore quo odio saepe atque laudantium culpa commodi dolorum at explicabo aperiam laboriosam tempore placeat temporibus ducimus? Sunt cumque corporis doloremque animi.</p>
        <button className="border bg-white px-2 py-1 mt-3 md:nt-0 text-sm md:px-8 md:py-2 rounded-xl md:text-lg hover:border-gray-500  hover:shadow-md ">View Menu</button>
    </div>
</div>

</>)
}

export default Header;