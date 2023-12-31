from flask import Flask, jsonify, request
from flask_cors import CORS
from models.nova_ai import NovaAI
from constants.constants import HOST, PORT

ARG_TITLE = "title"
GET = "GET"
POST = "POST"
RELATED_BOOKS_END_POINT = "/ai/query/related-books"
MAX_ATTEMPTS = 5

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    """
    Rota principal para verificar o status da API.
    :return: Um JSON indicando que a API está online e o status da solicitação.
    """
    return jsonify({
            "message": "API online",
            "status": 200
        }), 200


@app.route("/", methods=["POST"])
def handle_post_request():
    """
    Rota para lidar com solicitações POST.
    :return: Um JSON indicando que o POST foi recebido com sucesso.
    """
    return jsonify({
            "message": "API online",
            "status": 200
        }), 200


# @app.route(f"{RELATED_BOOKS_END_POINT}/<title>")
# def related_books(title):
#     """
#     Rota para obter livros relacionados a um título específico.
#     :param title: O título para o qual se deseja obter livros relacionados.
#     :return: Um JSON contendo o título, os livros relacionados e o status da solicitação.
#     """
#     print(title)
#     for attempt in range(MAX_ATTEMPTS):
#         try:
#             if title.strip():
#                 result = NovaAI.related_books_query(title)
#                 return jsonify({
#                     "title": title,
#                     "related": result,
#                     "status": 200
#                 }), 200
#         except Exception as e:
#             # Se cair no except, imprime o erro e tenta novamente
#             print(f"Erro na tentativa {attempt + 1}: {e}")
#         else:
#             # Se a execução do bloco try for bem-sucedida, saia do loop
#             break
#     else:
#         # Se todas as tentativas falharem, retorne um erro
#         return jsonify({
#             "status": 400
#         }), 400
    

def get_related_books(title):
    for attempt in range(MAX_ATTEMPTS):
        try:
            if title.strip():
                result = NovaAI.related_books_query(title)
                return jsonify({
                    "title": title,
                    "related": result,
                    "status": 200
                }), 200
        except Exception as e:
            # Se cair no except, imprime o erro e tenta novamente
            print(f"Erro na tentativa {attempt + 1}: {e}")
    else:
        # Se todas as tentativas falharem, retorne um erro
        return jsonify({
            "status": 400
        }), 400

@app.route(RELATED_BOOKS_END_POINT, methods=["GET"])
def get_related_books_route():
    """
    Rota para obter livros relacionados com base nos parâmetros da solicitação usando o método GET.
    :return: Um JSON contendo o título, os livros relacionados e o status da solicitação.
    """
    title = request.args.get(ARG_TITLE)
    print(title)
    return get_related_books(title)

@app.route(RELATED_BOOKS_END_POINT, methods=["POST"])
def post_related_books_route():
    """
    Rota para obter livros relacionados com base nos parâmetros da solicitação usando o método POST.
    :return: Um JSON contendo o título, os livros relacionados e o status da solicitação.
    """
    content_type = request.headers.get('Content-Type')

    title = None

    if content_type == 'application/json':
        try:
            data = request.get_json()
            title = data.get(ARG_TITLE, "")
        except Exception as e:
            # If an exception occurs, return an error
            return jsonify({
                "status": 400
            }), 400
    else:
        title = request.form.get(ARG_TITLE)
    
    print(title)
    return get_related_books(title)


def run_api() -> None:
    """
    Inicia o servidor da API.
    :return: None
    """
    app.run(host = HOST, port = PORT, debug = True)


if __name__ == "__main__":
    run_api()