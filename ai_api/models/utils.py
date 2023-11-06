import json
from typing import List

def extract_titles(text: str) -> List[str]:
    """
    Extrai títulos de um texto formatado com números e pontos (por exemplo, "1. Título").
    Esta função divide o texto em linhas, analisa cada linha e extrai os títulos formatados com números e pontos.
    :param text: Uma string representando o texto a ser analisado.
    :return: Uma lista de títulos extraídos do texto.
    """
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