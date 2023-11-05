import openai
from api_settings.config import API_BASE, API_KEY

openai.api_key = API_KEY
openai.api_base = API_BASE

completion = openai.ChatCompletion.create(
    model = "gpt-3.5-turbo",
    messages = [
        {
            "role": "user",
            "content": "Lista com 5 filmes de ficção, envie somente os nomes, 1 por linha"
        }
    ]
)

print(completion.choices[0].message)