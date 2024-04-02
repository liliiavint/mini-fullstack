import express from 'express';
import cors from 'cors';


const PORT = 4836;
const app = express();

const corsOptions = {
    origin: 'http://localhost:4835',
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    return res.send('Home page');
});
const tomas = {
    names: 'Tomas',
    age: 20,
    marks: [6, 6, 5, 7]
}
const ona = {
    names: 'Ona',
    age: 25,
    marks: [8, 9, 9]
}
const peter = {
    names: 'Peter',
    age: 22,
    marks: [9, 9, 10, 11]
}
const darius = {
    names: 'Darius',
    age: 28,
    marks: [10, 10, 12]
}
const maryte = {
    names: 'Maryte',
    age: 21,
    marks: [7, 10]
}
app.get('/api/students', (req, res) => {
    return res.send(JSON.stringify({
        s1: `names - ${tomas.names}, age - ${tomas.age}, marks - ${tomas.marks.join(', ')}`,
        s2: `names - ${ona.names}, age - ${ona.age}, marks - ${ona.marks.join(', ')}`,
        s3: `names - ${peter.names}, age - ${peter.age}, marks - ${peter.marks.join(', ')}`,
        s4: `names - ${darius.names}, age - ${darius.age}, marks - ${darius.marks.join(', ')}`,
        s5: `names - ${maryte.names}, age - ${maryte.age}, marks - ${maryte.marks.join(', ')}`
    }));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

