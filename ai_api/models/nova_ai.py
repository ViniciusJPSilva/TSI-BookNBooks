import openai
from models.utils import extract_titles
from constants.constants import UTF_8
from config import API_BASE, API_KEY
from typing import List

openai.api_key = API_KEY
openai.api_base = API_BASE

RELATED_BOOKS_QUERY = "Informe  10 títulos de livros relacionados ao mesmo gênero ou tópico do livro '{}', um por linha, somente o titulo e sem textos adicionais."

class NovaAI():
    """
    Classe que fornece funcionalidades para realizar consultas usando o modelo GPT-3.5-turbo da OpenAI.

    A classe 'NovaAI' é projetada para realizar consultas usando um modelo de linguagem GPT-3.5-turbo por meio
    da API OpenAI. Ela fornece métodos para realizar consultas específicas e extrair informações relevantes.
    """

    @staticmethod
    def query(query: str) -> str:
        """
        Realiza uma consulta usando o modelo GPT-3.5-turbo para gerar uma resposta.
        Esta função usa a API OpenAI para realizar uma consulta com um modelo de linguagem GPT-3.5-turbo.
        :param query: Uma string representando a consulta a ser feita ao modelo.
        :return: Uma string contendo a resposta gerada pelo modelo.
        """
        completion = openai.ChatCompletion.create(
                model = "gpt-3.5-turbo",
                messages = [
                    {
                        "role": "user",
                        "content": query
                    }
                ]
            )
        
        return completion.choices[0].message.content

        
    @staticmethod
    def related_books_query(title: str) -> List[str]:
        """
        Realiza uma consulta para encontrar livros relacionados a um título específico.
        Esta função usa o método `NovaAI.query` para realizar uma consulta à API de IA e extrair os títulos dos livros relacionados.
        :param title: Uma string representando o título do livro para o qual se deseja encontrar livros relacionados.
        :return: Uma lista de títulos de livros relacionados ao título fornecido.
        """
        return extract_titles(NovaAI.query(RELATED_BOOKS_QUERY.format(title)))
