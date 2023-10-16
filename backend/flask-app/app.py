from flask import Flask
from flask import jsonify
from flask import request
from bs4 import BeautifulSoup
from flask_cors import CORS
import requests

app = Flask(__name__)

CORS(app)

CORS(app, origins=['*'])


@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return "Hello World!"


# GET requests will be blocked
@app.route('/json-example/', defaults={'url' : ''})
@app.route('/json-example/?<url>', methods=['GET', 'POST'])
def json_example(url):

    url = request.args.get('url')

    # Making a GET request
    r = requests.get(url)

    # Parsing the HTML
    soup = BeautifulSoup(r.content, 'html.parser')

    print(url)

    # return jsonify({'name':'Jimit',
    #                 'content': 'Some content'})
    return jsonify({'content':str(soup.prettify())})
# TODO: make POST api call with url as parameter. copy json_example()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
