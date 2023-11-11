import json
from typing import List

START_FLAG = "__START__"
END_FLAG = "__END__"

def extract_titles(text: str) -> List[str]:
    """
    Extrai títulos de um texto formatado como um dicionário JSON.
    Esta função substitui os marcadores de início e fim definidos (START_FLAG, END_FLAG) para { e } respectivamente,
    e em seguida, extrai as chaves do dicionário JSON contido no texto.
    :param text: Uma string formatada como um dicionário JSON contendo títulos.
    :return: Uma lista de títulos extraídos do texto.
    """
    text = text.replace(START_FLAG, "{").replace(END_FLAG, "}")
    return [key for key in json.loads(text)]