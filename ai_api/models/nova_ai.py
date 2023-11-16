import openai
from constants.constants import UTF_8
from models.utils import *
from config import API_BASE, API_KEY
from typing import List

openai.api_key = API_KEY
openai.api_base = API_BASE

BOOK_SYSTEM_MESSAGE = 'A partir de agora quero que se comporte como um gerador de títulos de livros, o usuário irá te fornecer um título de algum livro e você retornará uma lista de strings contendo o titulo de 10 livros cujo gênero, categoria, autor e faixa etária se assemelham ao do livro informado pelo usuário, a lista não pode ter livros repetidos nem o livro informado pelo usuário. Os títulos devem ser retornados utilizando exatamente este formato de chave e valor: "string contendo o título em pt-BR": "string contendo o nome do autor", a lista deve vir entre as tags de controle __START__ e __END__, delimitando o inicio e o final da lista, e os itens devem ser separados por vírgula, não quero que faça comentários adicionais, que altere o modelo de formatação, que enumere os titulos nem que utilize quebras de linhas, apenas envie os dados solicitados obedecendo a formatação e utilizando as tags de controle, por gentileza.'

class NovaAI():
    """
    Classe que fornece funcionalidades para realizar consultas usando o modelo GPT-3.5-turbo da OpenAI.

    A classe 'NovaAI' é projetada para realizar consultas usando um modelo de linguagem GPT-3.5-turbo por meio
    da API OpenAI. Ela fornece métodos para realizar consultas específicas e extrair informações relevantes.
    """
    MAX_CACHE_SIZE = 100

    # Cache para armazenar os resultados das pesquisas
    cache = {}

    @staticmethod
    def query(system_message: str, user_query: str) -> str:
        """
        Realiza uma consulta usando o modelo GPT-3.5-turbo para gerar uma resposta.
        Esta função usa a API OpenAI para realizar uma consulta com um modelo de linguagem GPT-3.5-turbo.
        :param system_message: Uma string cujo conteúdo ajudará a definir o comportamento da AI ao gerar a resposta.
        :param user_query: Uma string representando a consulta a ser feita pelo usuário ao modelo.
        :return: Uma string contendo a resposta gerada pelo modelo.
        """
        # Verifica se a resposta está no cache
        cache_key = (system_message, user_query)
        if cache_key in NovaAI.cache:
            return NovaAI.cache[cache_key]

        # Se não estiver no cache, realiza a consulta
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": system_message
                },
                {
                    "role": "user",
                    "content": user_query
                }
            ]
        )

        # Obtém a resposta e armazena no cache
        response = completion.choices[0].message.content
        NovaAI.cache[cache_key] = response

        # Mantém o cache dentro do tamanho máximo definido
        if len(NovaAI.cache) > NovaAI.MAX_CACHE_SIZE:
            oldest_key = next(iter(NovaAI.cache))
            del NovaAI.cache[oldest_key]

        return response

    @staticmethod
    def related_books_query(title: str) -> List[str]:
        """
        Realiza uma consulta para encontrar livros relacionados a um título específico.
        Esta função usa o método `NovaAI.query` para realizar uma consulta à API de IA e extrair os títulos dos livros relacionados.
        :param title: Uma string representando o título do livro para o qual se deseja encontrar livros relacionados.
        :return: Uma lista de títulos de livros relacionados ao título fornecido.
        """
        # Adiciona uma mensagem de sistema específica para consultas relacionadas a livros
        system_message = BOOK_SYSTEM_MESSAGE

        # Utiliza a função de consulta com cache
        return extract_titles(NovaAI.query(system_message, title))
