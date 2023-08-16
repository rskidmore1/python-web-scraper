from flask import Flask
from flask import jsonify


app = Flask(__name__)

@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return "Hello World!"

@app.route('/other/', methods=['GET', 'POST'])
def other():
    return jsonify({'name':'Jimit',
                    'address':'India'})



# @app.route('/<int:number>/')
# def incrementer(number):
#     return "Incremented number is " + str(number+1)

# @app.route('/<string:name>/')
# def hello(name):
#     return "Hello " + name

@app.route('/person/', methods=['GET', 'POST'])
def hello():
    return jsonify({'name':'Jimit',
                    'address':'India'})


@app.route('/numbers/')
def print_list():
    return jsonify(list(range(5)))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
