import { useState } from 'react';
import style from './Basketball.module.css';
import { formatBasketballNumber } from './formatBasketballNumber';
import { CallBackItemOgurkas } from './CallBackItemOgurkas.jsx';
import { CallBackItemPomidoras } from './CallBackItemPomidoras.jsx';
import firework from '../assets/firework.gif';
import anmatcat from '../assets/anmatcat.gif'
import felix from '../assets/Felix.gif'

export function CallBack() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    const handleOgurkas = (score) => {
        setScore2(score);
    };

    const handlePomidoras = (score) => {
        setScore1(score);
    };
    return (
        <>
            <div className={style.basketball}>
                <div>
                    <img className={`${style.firework} 
                    ${score2 >= 10 ? 
                        style.showFirework : style.hideFirework}`} src={firework} alt="Firework" />
                </div>
                <div className={style.screen}>
                    {formatBasketballNumber(score2)}
                </div>
                    <img className={style.Anmatcat}
                    src={(score2 >= 10 || score1 >= 10) ? felix : anmatcat} alt="Cat" />
                <div className={style.screen}>
                    {formatBasketballNumber(score1)}
                </div>
                <div>
                    <img className={`${style.fireworkPomidoras} 
                    ${score1 >= 10 ? 
                        style.showFirework : style.hideFirework}`} src={firework} alt="Firework" />
                </div>
            </div>
        <div className={style.datzovies}>
            <div className={style.ogurkas}>
                <div className={style.btnOgurkas}>
                    <CallBackItemOgurkas onResultChange={handleOgurkas}
                    />
                </div>
                
            </div>
            <div className={style.pomidoras}>
                <div className={style.btnPomidoras}>
                    <CallBackItemPomidoras onResultChange={handlePomidoras} />
                </div>     
                
            </div>
        </div>
        </>
    );
}