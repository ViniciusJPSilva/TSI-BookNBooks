import openai
from ai_api.config import API_BASE, API_KEY
from typing import List

openai.api_key = API_KEY
openai.api_base = API_BASE


class NovaAI():
    @staticmethod
    def query(query: str) -> str:
        completion = openai.ChatCompletion.create(
                model = "gpt-3.5-turbo",
                messages = [
                    {
                        "role": "user",
                        "content": query
                    }
                ]
            )
        print(completion.choices[0].message)

        
    @staticmethod
    def related_books_query(title: str) -> List[str]:


