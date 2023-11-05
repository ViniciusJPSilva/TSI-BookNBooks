import openai
import json
from ai_api.config import API_BASE, API_KEY


openai.api_key = API_KEY
openai.api_base = API_BASE

def extract_titles(text):
    lines = text.split('\n')
    titles = []

    for line in lines:
        line = line.strip()  # Remove leading and trailing whitespace
        if line:  # Check if the line is not empty
            parts = line.split('. ')
            if len(parts) > 1:
                title = parts[1].strip('\"')  # Remove quotes if they exist
                titles.append(title)

    return titles

completion = openai.ChatCompletion.create(
    model = "gpt-3.5-turbo",
    messages = [
        {
            "role": "user",
            "content": "Informe  10 títulos de livros relacionados ao mesmo gênero ou tópico do livro '1984', um por linha, somente o titulo e sem textos adicionais."
        }
    ]
)

# msg = '{"first_name": "Michael", "last_name": "Rodgers", "department": "Marketing"}'#'{\"role\": \"assistant\", \"content\": \"1. \"Admir\u00e1vel Mundo Novo\" \n2. \"A Revolu\u00e7\u00e3o dos Bichos\" \n3. \"Fahrenheit 451\" \n4. \"Eu, Rob\u00f4\" \n5. \"Neuromancer\" \n6. \"O Conto da Aia\" \n7. \"Laranja Mec\u00e2nica\" \n8. \"Adormecidos no Espa\u00e7o\" \n9. \"O Homem do Castelo Alto\" \n10. \"N\u00f3s\"\",}'

# json_object = json.loads()

txt = completion.choices[0].message.content
print(txt)
# books = [line.split('. ')[1] for line in txt.split('\n') if line.strip()]

print(extract_titles(txt))

