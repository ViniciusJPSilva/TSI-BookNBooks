from flask import Flask, request, jsonify
from constants.constants import HOST, PORT

app = Flask(__name__)

@app.route("/")
def home():
    return "<h1 align=\"center\">O servidor está funcionando!<h1>"

@app.route("/ai/query/related-books/<title>")
def related_books(title):
    print(title)
    return jsonify({
        "title": title,
        "related": [1, 2, 3],
        "status": 200
    }), 200

def run_api() -> None:
    app.run(host = HOST, port = PORT, debug = True)

if __name__ == "__main__":
    run_api()