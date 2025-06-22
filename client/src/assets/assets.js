import logo from "./logo.png";
import video_banner from "./home-page-banner.mp4";
import people from './people.png';
import people_original from './people-original.png';

export const assets = {
  logo,
  video_banner,
  people,
  people_original,
};

export const steps = [
  {
    step: "Step 1",
    title: "Select an Image",
    description: `Click the "Upload Image" button to select an image from your device. Supported formats include JPG, PNG, and GIF.`,
  },
  {
    step: "Step 2",
    title: "AI Background Removal",
    description: `Our AI will automatically detect and remove the background from your image, leaving you with a clean cutout.`,
  },
  {
    step: "Step 3",
    title: "Download Your Image",
    description: `Once the background is removed, you can download your image in PNG format with a transparent background or choose to add a new background.
`,
  },
];

export const categories = ["People", "Products", "Animals", "Cars", "Graphics"];

export const plans = [
  {
    id: "Basic",
    name: "Basic Package",
    price: 499,
    credits: "100 credits",
    description: "Best for personal use",
    popular: false
  },
  {
    id: "Premium",
    name: "Premium Package",
    price: 999,
    credits: "300 credits",
    description: "Best for commercial use",
    popular: true
  },
  {
    id: "Pro",
    name: "Pro Package",
    price: 1999,
    credits: "1000 credits",
    description: "Best for professionals",
    popular: false
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "This service is amazing! The AI background removal is so accurate and fast.",
    author: "Abhimanyu Vishwakarma",
    handle: "@abhimanyu",
  },
  {
    id: 2,
    quote: "I love how easy it is to use. I can remove backgrounds in seconds!",
    author: "Sumit Vishwakarma",
    handle: "@sumit",
  },
  {
    id: 3,
    quote: "The AI does a great job. Highly recommend! I use it for all my product photos.",
    author: "Aditiya Singh",
    handle: "@aditiya",
  }
];

export const FOOTER_CONSTANT = [
  {
    url: "https://facebook.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
  },
  {
    url: "https://instagram.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
  },
  {
    url: "https://twitter.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/260px-X_logo_2023.svg.png"
  },
  {
    url: "https://linkedin.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
  }
];