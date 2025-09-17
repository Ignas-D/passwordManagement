from flask import Blueprint, jsonify

vault_bp = Blueprint("vault", __name__)

@vault_bp.route("/passwords", methods=["GET"])
def get_passwords():
    # TODO: fetch from DB
    return jsonify({"passwords": []})
