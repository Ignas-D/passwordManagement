from ..extensions import db

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    hashed_password = db.Column(db.LargeBinary, nullable=False)
    vault_entries = db.relationship("VaultEntry", back_populates="user", cascade="all, delete-orphan")


class VaultEntry(db.Model):
    __tablename__ = "vault_entries"
    id = db.Column(db.Integer, primary_key=True)
    service = db.Column(db.String, nullable=False)
    encrypted_password = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    user = db.relationship("User", back_populates="vault_entries")