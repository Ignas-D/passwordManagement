from flask import Flask
from .auth.routes import auth_bp
from .extensions import db, jwt, cors


def create_app(config_class="app.config.DevConfig"):
    app = Flask(__name__)
    app.config.from_object(config_class)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SECRET_KEY"] = "supersecretkey"

    jwt.init_app(app)
    db.init_app(app)
    cors.init_app(app, resources={r"/*": {"origins": "http://localhost:5173"}}, support_credentials=True)
    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix="/auth")
    #app.register_blueprint(vault_bp, url_prefix="/vault")
    with app.app_context():
        db.create_all()


    return app
