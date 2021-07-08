from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS

from flask_jwt_extended import create_access_token

from flask_jwt_extended import JWTManager

app = Flask(__name__)
CORS(app)

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "qwinjdwqmdn37r4fb23n8"  # Change this!
jwt = JWTManager(app)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@app.route("/login", methods=["POST"])
def login():
    
    username = request.json.get("user", None)
    password = request.json.get("senha", None)
    
    if  password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)


if __name__ == "__main__":
    app.run()