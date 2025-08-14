from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt

from models import User, SessionLocal


auth_bp = Blueprint('auth', __name__)
bcrypt = Bcrypt()

def hash_password(password):
    hashed_pw = bcrypt.generate_password_hash(password).decode('utf-8')
    return hashed_pw

@auth_bp.route('/sign-up', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    masterPass = data.get('masterPass')

    db = SessionLocal()
    try:

        if not email or not masterPass:
            return jsonify({'error': 'Email and master password are required'}), 400

        existing_user = db.query(User).filter(User.username == email).first()
        if existing_user:
            return jsonify({'error': 'Email already registered'}), 400
        else:
            hashed_pw = hash_password(masterPass)
            new_user = User(username=email, hashed_password=hashed_pw)
            db.add(new_user)
            db.commit()
        return jsonify({"status": "success" , "message": "User Created"})
    finally:
        db.close()
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    masterPass = data.get('masterPass')

    db = SessionLocal()
    try:
        # Find user
        user = db.query(User).filter(User.username == email).first()
        if not user:
            return jsonify({"status": "error", "message": "Invalid username or password"}), 401

        # Check password
        if bcrypt.check_password_hash(user.hashed_password, masterPass):
            return jsonify({"status": "success", "message": "Login successful"}), 200
        else:
            return jsonify({"status": "error", "message": "Invalid username or password"}), 401
    finally:
        db.close()
