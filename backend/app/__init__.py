from flask import Flask
from .auth.routes import auth_bp
from .extensions import db, jwt, cors
from dotenv import load_dotenv
import os


def create_app():
    load_dotenv()
    app = Flask(__name__)

    if os.getenv("FLASK_ENV") == "production":
        from app.config import ProdConfig
        app.config.from_object(ProdConfig)
    else:
        from app.config import DevConfig
        app.config.from_object(DevConfig)

    db.init_app(app)
    cors.init_app(app, resources={r"/*": {"origins": "http://localhost:5173"}}, support_credentials=True)
    jwt.init_app(app)

    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix="/auth")
    #app.register_blueprint(vault_bp, url_prefix="/vault")
    with app.app_context():
        db.create_all()


    return app
