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

@app.route('/other/', methods=['GET', 'POST'])
def other():
    # return "hi";
    return jsonify({'name':'Jimit',
                    'address':'India'})

# GET requests will be blocked
@app.route('/json-example/', methods=['GET', 'POST'])
def json_example():

    # Making a GET request
    r = requests.get('https://www.geeksforgeeks.org/python-programming-language/')
#

    # Parsing the HTML
    soup = BeautifulSoup(r.content, 'html.parser')
    # print(soup.prettify())
    # print(type(soup.prettify()))
#

    # return jsonify({'name':'Jimit',
    #                 'content': 'Some content'})
    return jsonify({'content':str(soup.prettify())})

@app.route('/person/', methods=['GET', 'POST'])
def hello():
    return jsonify({'name':'Jimit',
                    'address':'India'})


@app.route('/numbers/')
def print_list():
    return jsonify(list(range(5)))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
