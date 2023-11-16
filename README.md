<h1 align="center"> 
 Book and Books
</h1>
<h4 align="center">
 Descubra, Leia, Compartilhe
</h4>

<br/>

<div align="center" >
 
![image](https://github.com/ViniciusJPSilva/TSI-BookNBooks/assets/81810017/9ec2ca86-6136-4e87-a7bb-85bdf1a98ac9)

</div>

<hr/>

<h3>
 Proposta
</h3>

<p>
Book N' Books é um web app (página web responsiva mobile first) de busca e recomendações de livros, criado com o intuito de consumir e combinar os dados de duas APIs HTTP.
</p>

<br/>

<strong>Requisitos:</strong>
- Python versão 3.11
- Pip versão 23.3.1
- Node.js versão 20.9.0 LTS
- Chave e link base (ou endpoint) da API GalaxyAI ou outra API baseada na OpenAI.

<br>

<strong>Tecnologias Utilizadas:</strong>
- Python
- Flask
- Node.js
- React
- HTML 5
- CSS 3
- JavaScript

<br/>

<strong>APIs utilizadas:</strong>
- <a href="https://developers.google.com/books?hl=pt-br">Google Books</a>
- <a href="https://galaxyai.vercel.app/">Galaxy AI</a>

<br/>

<hr/>

<h2 align="center" >Instalação e Execução</h2>

<h3>AI_API</h3>

Uma AI_API foi implementada para gerenciar as requisições à API do OpenAI por meio da Galaxy AI, utilizando somente Python e um de seus frameworks, o Flask.
<br/>

É recomendado que seja criado um ambiente virtual para execução da API, conforme o comando abaixo:
```py
python -m venv venv
```

<br/>

Acesse o ambiente virtual (Powershell):
```py
.\venv\Scripts\Activate.ps1  
```

<br/>

Instale os pacotes python:
```py 
pip install -r requirements.txt
```

<br/>

Crie um arquivo chamado config.py no diretório ai-api com o seguinte conteúdo (os conteúdos das constantes são fictícios):
```py
API_KEY = 'SUA_CHAVE_DA_API'
API_BASE = 'https://sua.api.endpoint/'
```

<br/>

Inicie a API (certifique-se de executar o comando dentro do diretório ai_api):
```py 
python ai.py
```

<br/>

<hr/>

<h3>Página do Book N' Books</h3>

<p>
Foi utilizado <strong>React</strong> e <strong>Materialize CSS</strong> para a implementação da página web.
</p>

Para acessar a página web é necessário instalar as dependências utilizando o gerenciador de pacotes do Node.js (certifique-se de executar os comandos dentro do diretório book_n_books):

```js
npm install
```

Em seguida, inicie a aplicação:
```js
npm start
```

<br/>

<hr/>


<h3>Vídeo de apresentação</h3>

<div align="center">
 
[![IMAGE ALT TEXT](http://img.youtube.com/vi/qeIXWsM12eE/0.jpg)](https://www.youtube.com/watch?v=qeIXWsM12eE)

</div>
