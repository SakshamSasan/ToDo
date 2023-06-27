from fastapi import FastAPI,HTTPException
from typing import List
from models import User,Gender,Role,UpdateUser
from uuid import UUID,uuid4

app = FastAPI()

db:List[User] = [
    User(
        id = UUID('8339282f-5c2c-493e-97ab-15a96bd4de6d'),
        first_name = 'Jamilla',
        last_name = 'Ahmed',
        gender = Gender.female,
        roles = [Role.student]
    ),
    User(
        id = UUID('6798b42b-5aae-4d9a-9ad5-72e6bdb1564a'),
        first_name = 'Alex',
        last_name = 'Jones',
        gender = Gender.male,
        roles = [Role.user, Role.admin]
    )
]

@app.get('/')
def root():
    return {"name":"Saksham Sasan"}

@app.get('/api/v1/users')
async def get_users():
    return db

@app.post("/api/v1/users")
async def add_user(user:User):
    db.append(user)
    return {'id':user.id,"middle_name":user.middle_name}

@app.delete('/api/v1/users/{user_id}')
async def delete_user(user_id:UUID):
    for user in db:
        if(user.id==user_id):
            db.remove(user)
            return {"success":"true"}
    
    raise HTTPException(
        status_code=404,
        detail=f'user with id: {user_id} does not exist'
    )
@app.put('/api/v1/users/{user_id}')
async def edit_user(req_user:UpdateUser,user_id):
    for user in db:
        if(user.id==user_id):
            return