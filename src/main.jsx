import ReactDOM from "react-dom/client";
import router from "./Routes";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Theme accentColor="lime" appearance="dark">
    <RouterProvider router={router} />
  </Theme>
);
