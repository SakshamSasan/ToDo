from pydantic import BaseModel
from typing import Optional,List
from uuid import UUID,uuid4
from enum import Enum

class Gender(str,Enum):
    male="male"
    female="female"
class Role(str,Enum):
    admin='admin'
    user='user'
    student='student'

class User(BaseModel):
    id:Optional[UUID] = uuid4()
    first_name:str
    middle_name:Optional[str] = 'none'
    last_name:str
    gender: Gender
    roles:List[Role]

class UpdateUser(BaseModel):
    first_name:Optional[str]
    last_name:Optional[str]
    gender:Optional[Gender]
    roles:Optional[List[Role]]