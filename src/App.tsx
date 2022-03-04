import { useEffect, useState } from "react";
import { apiAdvide } from "./api/apiAdvide";
import { AdvideResponse, Slip } from "./interfaces/interface";
import { IconDiceSVG } from "./assets/svg/patterDivider";

import "./App.css";

const App = () => {
    const [advice, setAdvice] = useState<Slip>();

    useEffect(() => {
        apiAdvide
            .get<AdvideResponse>("https://api.adviceslip.com/advice")
            .then((resp) => setAdvice(resp.data.slip))
            .catch(console.log);
    }, []);
    return (
        <main className="container">
            <div className="card">
                <div className="card__id">Advice #{advice?.id}</div>
                <p className="card__text">"{advice?.advice}"</p>
                <div className="divider">{/* <PatternDivider /> */}</div>
                <div className="card__icon">
                    <IconDiceSVG color="var(--dark-blue)" />
                </div>
            </div>
        </main>
    );
};

export default App;
