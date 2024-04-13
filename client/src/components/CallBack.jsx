import { useState, useEffect } from 'react';
import style from './Basketball.module.css';
import { formatBasketballNumber } from './formatBasketballNumber';
import { CallBackItemOgurkas } from './CallBackItemOgurkas.jsx';
import { CallBackItemPomidoras } from './CallBackItemPomidoras.jsx';
import cucumber from '../assets/cucumber.png';
import tomato from '../assets/tomato.png';
import firework from '../assets/firework.gif';
import anmatcat from '../assets/anmatcat.gif'
import felix from '../assets/Felix.gif'

export function CallBack() {
    const [totalPointPomidoras, setTotalPointPomidoras] = useState(0);
    const [totalPointOgurkas, setTotalPointOgurkas] = useState(0);
    const [historyPomidoras, setHistoryPomidoras] = useState([]);
    const [historyOgurkas, setHistoryOgurkas] = useState([]);

    function handlePomidorasOne() {
        setHistoryPomidoras(prevHistory => [1, ...prevHistory]);
    }

    function handlePomidorasTwo() {
        setHistoryPomidoras(prevHistory => [2, ...prevHistory]);
    }

    function handlePomidorasThree() {
        setHistoryPomidoras(prevHistory => [3, ...prevHistory]);
    }

    function handleOgurkasOne() {
        setHistoryOgurkas(prevHistory => [1, ...prevHistory]);
    }

    function handleOgurkasTwo() {
        setHistoryOgurkas(prevHistory => [2, ...prevHistory]);
    }

    function handleOgurkasThree() {
        setHistoryOgurkas(prevHistory => [3, ...prevHistory]);
    }

    useEffect(() => {
        setTotalPointPomidoras(historyPomidoras.reduce((acc, curr) => acc + curr, 0));
    }, [historyPomidoras]);

    useEffect(() => {
        setTotalPointOgurkas(historyOgurkas.reduce((acc, curr) => acc + curr, 0));
    }, [historyOgurkas]);

    return (
        <>
            <div className={style.basketball}>
                <div>
                    <img className={`${style.firework} 
                    ${totalPointOgurkas > 10 ? 
                        style.showFirework : style.hideFirework}`} src={firework} alt="Firework" />
                </div>
                <div className={style.screen}>
                    {formatBasketballNumber(totalPointOgurkas)}
                </div>
                    <img className={style.Anmatcat}
                    src={(totalPointOgurkas > 10 || totalPointPomidoras > 10) ? felix : anmatcat} alt="Cat" />
                <div className={style.screen}>
                    {formatBasketballNumber(totalPointPomidoras)}
                </div>
                <div>
                    <img className={`${style.fireworkPomidoras} 
                    ${totalPointPomidoras > 10 ? 
                        style.showFirework : style.hideFirework}`} src={firework} alt="Firework" />
                </div>
            </div>
        <div className={style.datzovies}>
            <div className={style.ogurkas}>
                <div className={style.btnOgurkas}>
                    <CallBackItemOgurkas
                        onResultOneChange={handleOgurkasOne}
                        onResultTwoChange={handleOgurkasTwo}
                        onResultThreeChange={handleOgurkasThree}
                    />
                </div>
                <div>
                <ul className={style.listOgorkas}>
                        {historyOgurkas.map((n, index) => (
                            <li key={index} className={style.textOgurkas}> Ogurkas imete
                            {n === 3 && (
                               <>
                                   <img className={style.cucumber} src={cucumber} alt="cucumber" />
                                   <img className={style.cucumber} src={cucumber} alt="cucumber" />
                                   <img className={style.cucumber} src={cucumber} alt="cucumber" />
                               </>
                           ) || n === 2 && (
                               <>
                                   <img className={style.tomato} src={cucumber} alt="Cucumber" />
                                   <img className={style.cucumber} src={cucumber} alt="Cucumber" />
                               </>
                           ) || n === 1 && (
                               <>
                                   <img className={style.cucumber} src={cucumber} alt="Cucumber" />
                               </>)}

                            task.
                       </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={style.pomidoras}>
                <div className={style.btnPomidoras}>
                <CallBackItemPomidoras 
                    onResultOneChange={handlePomidorasOne}
                    onResultTwoChange={handlePomidorasTwo}
                    onResultThreeChange={handlePomidorasThree}
                    />
                </div>     
                <div>
                    <ul className={style.listPomidoras}>
                        {historyPomidoras.map((n, index) => (
                            <li key={index} className={style.textPomidoras}> Pmidoras imete
                                 {n === 3 && (
                                    <>
                                        <img className={style.tomato} src={tomato} alt="Tomato" />
                                        <img className={style.tomato} src={tomato} alt="Tomato" />
                                        <img className={style.tomato} src={tomato} alt="Tomato" />
                                    </>
                                ) || n === 2 && (
                                    <>
                                        <img className={style.tomato} src={tomato} alt="Tomato" />
                                        <img className={style.tomato} src={tomato} alt="Tomato" />
                                    </>
                                ) || n === 1 && (
                                    <>
                                        <img className={style.tomato} src={tomato} alt="Tomato" />
                                    </>)}

                                 task.
                            </li>
                        ))}
                    </ul>
                </div> 
            </div>
        </div>
        </>
    );
}