const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

const todos = ["First Item", "Second Item", "Third Item"];

app.get('/', (req, res) => {
    res.render('index', {todos});
});

app.post('/add', (req, res) => {
    const newTodo = req.body.todo;
    todos.push(newTodo);
    res.redirect('/');
})

app.post('/delete', (req, res) => {
    const index = req.body.index;
    todos.splice(index, 1);
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
