import { useState } from "react";
import { CallBack } from './components/CallBack.jsx';
import style from './components/Basketball.module.css';

function App() {
  const [answer, setAnswer] = useState('...');
  const [order, setOrder] = useState(0); 

  function handleFormSubmit(e) {
    e.preventDefault();

    if (order === 0) {
      fetch('http://localhost:4836/api/students')
        .then(res => res.json())
        .then(data => {
          setAnswer(JSON.stringify(data.s1));
          setOrder(1); 
        })
        .catch(e => console.error(e));
    } else if (order === 1) {
      fetch('http://localhost:4836/api/students')
        .then(res => res.json())
        .then(data => {
          setAnswer(JSON.stringify(data.s2));
          setOrder(2); 
        })
        .catch(e => console.error(e));
    }else if (order === 2) {
      fetch('http://localhost:4836/api/students')
        .then(res => res.json())
        .then(data => {
          setAnswer(JSON.stringify(data.s3));
          setOrder(3); 
        })
        .catch(e => console.error(e));
    }else if (order === 3) {
      fetch('http://localhost:4836/api/students')
        .then(res => res.json())
        .then(data => {
          setAnswer(JSON.stringify(data.s4));
          setOrder(4); 
        })
        .catch(e => console.error(e));
    }else if (order === 4) {
      fetch('http://localhost:4836/api/students')
        .then(res => res.json())
        .then(data => {
          setAnswer(JSON.stringify(data.s5));
          setOrder(0); 
        })
        .catch(e => console.error(e));
    }
  }

  return (
    <>
      <header className="container">HEADER</header>
      <CallBack className={style}/>
      <main className="container">
        <form onSubmit={handleFormSubmit}>
          
        </form>
        <div className="result"> {answer}  </div>
      </main>
      
      <footer className="container">FOOTER</footer>
    </>
    
  );
}

export default App;