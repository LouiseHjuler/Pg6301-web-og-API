import React from "react";
import ReactDOM from "react-dom/client";

export default function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />}>
                    <Route index element={<NewQuiz />} />
                    <Route path="Success" element={<CorrectAnswer />} />
                    <Route path="Fail" element={<UncorrectAnswer />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function FrontPage(){
    return <div>
        <h1> Front Page</h1>
        <button> <Link to={"/quiz"}>Ny Quiz</Link></button>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application/>);
