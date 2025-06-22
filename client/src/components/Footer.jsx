import { assets, FOOTER_CONSTANT } from "../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src={assets.logo} 
                alt="Remove BG Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Professional AI-powered background removal tool. 
              Remove backgrounds from images in seconds with stunning quality.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {FOOTER_CONSTANT.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 shadow-sm border border-gray-200 group"
                >
                  <img 
                    src={social.logo} 
                    alt={"Social Icon"}
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">How it works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">API</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Bulk processing</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Tutorials</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} Remove BG. All rights reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;