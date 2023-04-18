import express from 'express';

import {fileURLToPath} from 'url';
import path from 'path';

const port = 3000;
const app = express();

const correctEmail = 'email@example.com';
const correctPassword = 'password';

// caminho para arquivos estáticos como folhas de estilo e imagens...
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/public')));


// Configurando engine para EJS
app.set('view engine', 'ejs');
// Caminho para as páginas que serão renderizadas
app.set('views', './views');

// Rota inicial redirecionada
app.get('/', (req, res) => {
    res.status(301).redirect('/login');
})

// Rota do formulário de login
app.get('/login', (req, res) => {
    res.render('login');
});

// rota de recebimento de login
app.post('/login', (req, res) => {
    
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
