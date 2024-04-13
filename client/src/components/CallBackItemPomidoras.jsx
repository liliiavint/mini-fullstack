/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './Basketball.module.css';
import tomato from '../assets/tomato.png';


export function CallBackItemPomidoras({onResultChange}) {
    const [score, setScore] = useState(0);
    const [historyPomidoras, setHistoryPomidoras] = useState([]);
    function handleResult(komanda, task) {
        const newScore = komanda === 'pomidoras' ? score + task : score;
        setScore(newScore);
        onResultChange(newScore);
    }
    function handlePomidoras(task) {
        setHistoryPomidoras(prevHistory => [ ...prevHistory, task]);
    }
          
    return (
                <div className={style.controls}>
                    <div className={style.team}>
                        <button onClick={() => { handleResult('pomidoras', 1); handlePomidoras(1); }} className={style.btn}>+1</button>
                        <button onClick={( ) => { handleResult('pomidoras', 2); handlePomidoras(2); }} className={style.btn}>+2</button>
                        <button onClick={() => { handleResult('pomidoras', 3); handlePomidoras(3); }} className={style.btn}>+3</button>
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
    );
}

  