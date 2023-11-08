import json
from typing import List

START_FLAG = "__START__"
END_FLAG = "__END__"

def extract_titles(text: str) -> List[str]:
    """

    """
    text = text.replace(START_FLAG, "{").replace(END_FLAG, "}")
    print(text)
    titles = [key for key in json.loads(text)]
    return titles