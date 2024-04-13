/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './Basketball.module.css';
// import firework from '../assets/firework.gif'

export function CallBackItemPomidoras({ 
    onResultOneChange, onResultTwoChange, onResultThreeChange}) {
    const [score1, setScore1] = useState(0);
    // const [showChildComponent, setShowChildComponent] = useState(true);

        function handleResultOne() {
            setScore1(score1 + 1);
            onResultOneChange();
        }
    
        function handleResultTwo() {
            setScore1(score1 + 2);
            onResultTwoChange();
           
        }

        function handleResultThree() {
            setScore1(score1 + 3);
            onResultThreeChange();
        } 
          
    return (
                <div className={style.controls}>
                    <div className={style.team}>
                    <button onClick={handleResultOne} className={style.btn}>+1</button>
                    <button onClick={handleResultTwo} className={style.btn}>+2</button>
                    <button onClick={handleResultThree} className={style.btn}>+3</button>
                                    {/* {showChildComponent && <ChildComponent />} */}
                    </div>
            </div>
    );
}
// const ChildComponent = () => {
//     const [gifLoaded, setGifLoaded] = useState(false);
//     useEffect(() => {
//         const loadGif = () => {
//             setTimeout(() => {
//             setGifLoaded(true);
//             }, 0);
//         };
//         if (!gifLoaded) {
//             loadGif();
//         }
//         return () => {
//             setGifLoaded(false);
//         };
//         }, [gifLoaded]);
    
//         return gifLoaded ? <img src={firework} alt="Logo" /> : null;
//     };
  