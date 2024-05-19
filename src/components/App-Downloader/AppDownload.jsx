import { assets } from "../../assets/assets";

const AppDownload = () => {
    return (
        <>
            <div id="app-download" className="container mt-10 mx-auto px-4">
                <div id="app-download-contents" className="flex flex-col justify-center text-center p-4 sm:p-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">For a better experience, download</h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl mt-4 md:mt-8 font-semibold">Tomato App</h1>
                    <div id="app-download-img" className="flex gap-2 justify-center mt-6 md:mt-10">
                        <img src={assets.play_store} alt="Play Store" className="w-24 md:w-32" />
                        <img src={assets.app_store} alt="App Store" className="w-24 md:w-32" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppDownload;
