from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

Base = declarative_base()
engine = create_engine("sqlite:///passwords.db")
SessionLocal = sessionmaker(bind=engine)

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    hashed_password = Column(String)
    vault_entries = relationship("VaultEntry", back_populates="user")

class VaultEntry(Base):
    __tablename__ = "vault_entries"
    id = Column(Integer, primary_key=True)
    service = Column(String)
    encrypted_password = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", back_populates="vault_entries")

# Create tables
Base.metadata.create_all(engine)