from flask import Blueprint, request, jsonify
from flask_cors import CORS

from ..extensions import db
from ..models.routes import User
import bcrypt

auth_bp = Blueprint("auth", __name__)
CORS(auth_bp, origins=["http://localhost:5173"])

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    email = data.get("email")
    master_pass = data.get("masterPass")
    # hash the master password, store into a database
    if email is None or master_pass is None:
        return jsonify({"error": "email and password are required"}), 400

    existing_user = User.query.filter_by(username=email).first()
    if existing_user:
        return jsonify({"error": "Email already registered"}), 409

    pass_bytes = master_pass.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(pass_bytes, salt)

    register_user = User(username=email, hashed_password=hashed_password)
    db.session.add(register_user)
    db.session.commit()
    return jsonify({"message": "User registered", "email": email})



@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    master_pass = data.get("masterPass")
    bytes = master_pass.encode('utf-8')
    salt = bcrypt.gensalt()
    password = bcrypt.hashpw(bytes, salt)

    login = User.query.filter_by(email=email, hashed_password=password).first()
    if login is not None:
        return jsonify({"message": "User exists", "email": email})
