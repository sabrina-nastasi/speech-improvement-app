from flask import Flask, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

# Function to scrape random quotes
def scrape_random_phrase():
    url = 'http://quotes.toscrape.com/random'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract the quote text
    quote = soup.find('span', class_='text').get_text()

    # Extract the author (optional)
    author = soup.find('small', class_='author').get_text()

    return f"{quote} - {author}"

@app.route('/api/random-phrase', methods=['GET'])
def get_random_phrase():
    phrase = scrape_random_phrase()
    return jsonify({"phrase": phrase})

if __name__ == '__main__':
    app.run(debug=True)
