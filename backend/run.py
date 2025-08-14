from app import create_app
from flask import Flask
from models import Base, engine
from auth import auth_bp
from vault import vault_bp
from flask_bcrypt import Bcrypt
from flask_cors import CORS


app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app, origins=["http://localhost:5173"])

Base.metadata.create_all(engine)

app.config.from_pyfile('app/config.py')

app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(vault_bp, url_prefix='/vault')


if __name__ == '__main__':
    app.run(debug=True)