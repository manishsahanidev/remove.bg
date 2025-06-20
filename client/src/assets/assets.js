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