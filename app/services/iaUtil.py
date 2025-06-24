import os
from openai import OpenAI
from app.settings import config

settings = config.load_config()

def get_client():
    """Inicializa el cliente del modelo de GitHub con el token de entorno."""
    return OpenAI(
        base_url="https://models.github.ai/inference",
        api_key=settings["GITHUB_TOKEN"],
    )

def get_ai_response(behavior: str, question: str) -> str:
    """
    Envía el comportamiento y la pregunta al modelo de GitHub y devuelve la respuesta.
    El comportamiento se usa como 'developer' y la pregunta como 'user'.
    """
    client = get_client()
    messages = [
        {"role": "developer", "content": behavior},
        {"role": "user", "content": question}
    ]
    response = client.chat.completions.create(
        messages=messages,
        model="openai/o4-mini"
    )
    return response.choices[0].message.content.strip()

# Ejemplo de uso:
# respuesta = get_ai_response("Eres un experto en Python.", "¿Cómo puedo crear una función?")