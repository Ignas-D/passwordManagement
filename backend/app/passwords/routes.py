from flask import Blueprint, request, jsonify

vault_bp = Blueprint('vault', __name__)

@vault_bp.route('/add', methods=['POST'])
def add_entry():
    data = request.json
    # TODO: encrypt and store password entry
    return jsonify({"status": "success"})

@vault_bp.route('/list', methods=['GET'])
def list_entries():
    # TODO: decrypt and return vault entries
    return jsonify({"entries": []})