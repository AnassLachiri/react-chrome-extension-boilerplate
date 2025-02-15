import { createRoot } from "react-dom/client";
import './popup.css'
const rootElement = document.getElementById("root");

const Popup = () => {
    return (
        <div className="container">
            <h2>Simple React Extension with Webpack and Typescript</h2>
            <button onClick={() => alert("Hello!")}>Click Me</button>
        </div>
    );
};

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Popup />);
}