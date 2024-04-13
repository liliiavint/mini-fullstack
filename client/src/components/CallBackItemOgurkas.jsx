/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './Basketball.module.css';

export function CallBackItemOgurkas({ 
    onResultOneChange, onResultTwoChange, onResultThreeChange }) {
    const [score2, setScore2] = useState(0);

        function handleResultOne() {
            setScore2(score2 + 1);
            onResultOneChange();
        }
    
        function handleResultTwo() {
            setScore2(score2 + 2);
            onResultTwoChange();
        }

        function handleResultThree() {
            setScore2(score2 + 3);
            onResultThreeChange();        
        } 
          
    return (
      <>
            <div className={style.controls}>
                <div className={style.team}>
                    <button onClick={handleResultOne} className={style.btn}>+1</button>
                    <button onClick={handleResultTwo} className={style.btn}>+2</button>
                    <button onClick={handleResultThree} className={style.btn}>+3</button>
                </div>

            </div>
   </>
    );
}