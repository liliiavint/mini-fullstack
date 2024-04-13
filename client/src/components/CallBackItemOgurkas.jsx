/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './Basketball.module.css';
import cucumber from '../assets/cucumber.png';

export function CallBackItemOgurkas({onResultChange}) {
    const [score, setScore] = useState(0);
    const [historyOgurkas, setHistoryOgurkas] = useState([]);
    function handleResult(komanda, task) {
        const newScore = komanda === 'ogurkas' ? score + task : score;
        setScore(newScore);
        onResultChange(newScore);
    }
    function handleOgurkas(task) {
        setHistoryOgurkas(prevHistory => [...prevHistory, task]);
    }

          
    return (
                <div className={style.controls}>
                    <div className={style.team}>
                        <button onClick={() =>{handleResult('ogurkas', 1); handleOgurkas(1);}} className={style.btn}>+1</button>
                        <button onClick={() =>{handleResult('ogurkas', 2); handleOgurkas(2);}} className={style.btn}>+2</button>
                        <button onClick={() =>{handleResult('ogurkas', 3); handleOgurkas(3);}} className={style.btn}>+3</button>
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
    );
}