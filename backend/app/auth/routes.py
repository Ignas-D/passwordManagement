from flask import Blueprint, request, jsonify

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    email = data.get("email")
    master_pass = data.get("masterPass")
    # hash the master password, store into a database

    return jsonify({"message": "User registered", "email": email})


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    master_pass = data.get("masterPass")
