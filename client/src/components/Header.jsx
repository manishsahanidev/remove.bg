import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* Left side: video banner */}
        <div className="order-2 md:order-1 flex justify-center">
            <div className="overflow-hidden rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
                <video src={assets.video_banner} autoPlay loop muted className="w-full max-w-[400px] h-auto object-cover"/>
            </div>
        </div>

        {/* Right side: text content */}
        <div className="order-1 md:order-2">
            <h1 className="text-4xl md:text-5xl text-gray-900 font-bold mb-6 leading-tight">Remove Image <span className="bg-gradient-to-r from-blue-800 to-indigo-800 text-transparent bg-clip-text">Background</span></h1>
            <p className="text-lg mb-8 text-gray-600 leading-relaxed">
              Thanks to remove.bg's clever AI, you can slash editing time - and have more fun!<br /><br />
              No matter if you want to make a background transparent (PNG), add a white background to a photo, extract or isolate the subject, or get the cutout of a photo - you can do all this and more with remove.bg, the AI background remover for professionals.
            </p>

            <div className="">
              <input type="file" accept="image/*" id="upload1" hidden />
              <label htmlFor="upload1" className="bg-black text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-transform hover:scale-105  text-lg">Upload Image</label>
            </div>
        </div>
    </div>
  )
}

export default Header;