import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import {ClerkProvider} from "@clerk/clerk-react"

// Clerk public key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Publishable Key missing.");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <RouterProvider router={router} />
      <Toaster position="top-right" toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }} />
    </ClerkProvider>
  </StrictMode>
);
