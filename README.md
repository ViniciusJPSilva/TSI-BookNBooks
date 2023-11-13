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


Python versão 3.11

Pip versão 23.3.1

Node.js versão 20.9.0 LTS

<br/>

<h3>API</h3>

Uma API foi implementada para gerenciar as requisições à API do OpenAI, utilizando somente Python e um de seus frameworks, o Flask.
<br/>

É recomendado que seja criado um ambiente virtual para execução da API, conforme o comando abaixo:
```py
python3 -m venv venv
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

Crie um arquivo chamado config.py no diretório ai-api com o seguinte conteúdo (os nomes são fictícios):
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

<h3>FrontEnd</h3>

Foi utilizado React e Materialize CSS para a implementação da página web.

Para acessar a página web é necessário instalar as dependencias utilizando o gerenciador de pacotes do Node.js (certifique-se de executar os comandos dentro do diretório book_n_books):
```js
npm install
```

Em seguida, inicie a aplicação:
```js
npm start
```
