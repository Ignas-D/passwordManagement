from flask import Flask
from .auth.routes import auth_bp
from .extensions import db, jwt, cors


def create_app(config_class="app.config.DevConfig"):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize extensions.py

    cors.init_app(app, resources={r"/*": {"origins": "http://localhost:5173"}})

    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix="/auth")
    #app.register_blueprint(vault_bp, url_prefix="/vault")

    return app
