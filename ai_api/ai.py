from flask import Flask, jsonify
from flask_cors import CORS
from models.nova_ai import NovaAI
from constants.constants import HOST, PORT

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
            "message": "API online",
            "status": 200
        }), 200

@app.route("/ai/query/related-books/<title>")
def related_books(title):
    if title.strip():
        return jsonify({
            "title": title,
            "related": NovaAI.related_books_query(title),
            "status": 200
        }), 200
    else:
        return jsonify({
            "status": 400
        }), 400

def run_api() -> None:
    app.run(host = HOST, port = PORT, debug = True)

if __name__ == "__main__":
    run_api()