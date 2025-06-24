import os, json
from dotenv import load_dotenv

def load_config():
    load_dotenv()
    return {
        "GITHUB_TOKEN": os.getenv("GITHUB_TOKEN")
    }