from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask_migrate import Migrate

db = SQLAlchemy()
jwt = JWTManager()
migrate = Migrate()


def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    CORS(app)

    from app.routes.auth import auth_bp
    from app.routes.passwords import passwords_bp

    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(passwords_bp, url_prefix='/api/passwords')

    return app