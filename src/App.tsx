import { BrowserRouter as Router, Route, Link, Routes, useRouteError } from "react-router-dom";
import One from "./Pages/One";

const linkStr = ["4Y6zxoNUiyMPPA", "fre2n4o3f0-F1A", "XWf_vi-Af9cm3A"];

export default function App() {
    return (
        <Router>
            <div>
                {linkStr.map((el: string, index: number) => {
                    return <p key={index}>{el}</p>;
                })}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {linkStr.map((el: string, index: number) => {
                            return (
                                <li key={index}>
                                    <Link to={`/${el}`}>{el}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <Routes>
                    {linkStr.map((el: string, index: number) => {
                        return <Route key={index} path={`/${el}`} element={<One str={el} />} />;
                    })}
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function PageNotFound() {
    return (
        <div>
            <h2>404 Page not found</h2>
        </div>
    );
}
