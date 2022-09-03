import ReactDOM from "react-dom/client";
import "./styles/app.scss";
import AppRouter from "src/router";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<AppRouter />);
