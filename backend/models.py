from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.sql.sqltypes import NullType
from database import Base
from sqlalchemy.orm import relationship


from database import Base
# metadata = MetaData()

class data(Base):
    __tablename__ = "data"
    id = Column(Integer, primary_key=True, index=True)
    Name = Column(String)
    Photo = Column(String)
    Nationality = Column(String)
    Flag = Column(String)
    Overall = Column(String)
    Potential = Column(String)
    Club = Column(String)
    ClubLogo = Column(String)
    PreferredFoot = Column(String)
    WeakFoot = Column(String)
    SkillMoves = Column(String)
    WorkRate = Column(String)
    Position = Column(String)
    JerseyNumber = Column(String)
    Crossing = Column(String)
    Finishing = Column(String)
    HeadingAccuracy = Column(String)
    ShortPassing = Column(String)
    Volleys = Column(String)
    Dribbling = Column(String)
    Curve = Column(String)
    FKAccuracy = Column(String)
    LongPassing = Column(String)
    BallControl = Column(String)
    Acceleration = Column(String)
    SprintSpeed = Column(String)
    Agility = Column(String)
    Reactions = Column(String)
    Balance = Column(String)
    ShotPower = Column(String)
    Jumping = Column(String)
    Stamina = Column(String)
    Strength = Column(String)
    LongShots = Column(String)
    Aggression = Column(String)
    Interceptions = Column(String)
    Positioning = Column(String)
    Vision = Column(String)
    Penalties = Column(String)

    