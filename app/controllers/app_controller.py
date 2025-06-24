from app.services.iaUtil import get_ai_response
from flask import request, jsonify, render_template

from app import app

@app.route('/')
def index():
    return render_template('app.html')


@app.route('/api/ask', methods=['POST'])
def ask():
    data = request.get_json()
    if not data or 'behavior' not in data or 'question' not in data:
        return jsonify({'error': 'Invalid input'}), 400

    behavior = data['behavior']
    question = data['question']

    response = get_ai_response(behavior, question)

    return jsonify({'response': response})