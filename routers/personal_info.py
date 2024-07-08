from fastapi import  HTTPException, APIRouter, Query,Form,status,Body,Request
from operations import Database
from typing import  Optional,Annotated,List
import re
from datetime import datetime, timedelta
from pydantic import BaseModel




router = APIRouter()

@router.get("/api/get_all_products")
async def get_all_products(request: Request):
    column_list = ["id", "first_name", "last_name", "dob", "address", "pincode", "city", "gender"]
    order_column_0, order_column_1, order_dir_0, order_dir_1, order_query, order_flag = request.query_params.get("order[0][column]"), request.query_params.get("order[1][column]"), request.query_params.get("order[0][dir]"), request.query_params.get("order[1][dir]"), "order by", False
    if order_column_0:
        order_query += ' ' + column_list[int(order_column_0)] + " " + order_dir_0
        order_flag = True
    if order_column_1:
        order_query += ', ' + column_list[int(order_column_1)] + " " + order_dir_1 if order_flag else ' ' + column_list[int(order_column_1)] + " " + order_dir_1
        order_flag = True

    try:
        start, length, search = int(request.query_params.get('start', 0)), int(request.query_params.get('length', 0)), request.query_params.get("search")
        page = (start // length) + 1
        start = (length * page) - length
        contact = Database()
        if search:
            query = "SELECT * FROM Contact WHERE first_name LIKE %s OR last_name LIKE %s OR dob LIKE %s OR address LIKE %s OR pincode LIKE %s OR city LIKE %s OR gender LIKE %s "
            if order_flag:
                query += order_query
            query += " LIMIT %s OFFSET %s"
            params = (f"%{search}%", f"%{search}%", f"%{search}%", f"%{search}%", f"%{search}%", f"%{search}%", f"%{search}%", length, start)
        else:
            query = "SELECT * FROM Contact "
            if order_flag:
                query += order_query
            query += " LIMIT %s OFFSET %s"
            params = (length, start)
        

        contact_data = contact.database_operation((query, params))
        data = contact_data.get("data")

        total_count = contact.get_count_contact()
        total_count_value = total_count['data'][0][0]

        return {"recordsTotal": total_count_value,"recordsFiltered": total_count_value,"data":data}
    except Exception as e:
        raise e



@router.post("/api/insertcontact")
async def insertcontact(
    first_name:Annotated[str,Form(...)],
    last_name:Annotated[str,Form(...)],
    dob:Annotated[str,Form(...)],
    address:Annotated[str,Form(...)],
    pincode:Annotated[str,Form(...)],
    city:Annotated[str,Form(...)], 
    gender:Annotated[str,Form(...)],
):
    pattern = r'^[a-zA-Z\' -]*$'
    
    #Backend validation
    #firstname
    if len(first_name) > 50:
        return {"message": "Name length More than 60 character"}
    

    if not(last_name.isalpha()):
        return {"message": "Name  consist number"}
    
    # #lastname
    if len(last_name) > 50:
        return {"message": "Last name length More than 60 character"}
    
    if not(last_name.isalpha()):
        return {"message": "Last name consist number"}
    
    # #pincode
    if len(pincode) > 8:
        return {"message": "Pincode length More than 8 character"}
    
    if (pincode.isalpha()):
        return {"message": "pincode consist Alphabet"}
    
    # #city
    if len(city) > 20:
        return {"message": "City length More than 20 character"}
    
    if not(city.isalpha()):
        return {"message": "city consist number"}
    
    #address
    if len(address) > 100:
        return {"message": "Address length More than 100 character"}
    
    #dob
    dob = datetime.strptime(dob, '%Y-%m-%d').date()
    today = datetime.today().date()
    age = today.year - dob.year
    if age <=18:
        return {"message":"Age Is less then 18"}
    
    if dob >= datetime.today().date():
        return {"message": "Invalid Date"}
    
    #gender
    if gender not in ["Male", "Female"]:
        return {"message": "Gender should be Male or Female"}
    
    


    try:
        contact = Database()
        query = "insert into Contact (first_name,last_name,dob,address,pincode,city,gender) values(%s,%s,%s,%s,%s,%s,%s)"
        params = (first_name,last_name,dob,address,pincode,city,gender)
        contact_data = contact.database_operation((query,params))

        if contact_data.get("success"):
            return {"message": "Data successfully inserted"}
        else:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Error: No product was inserted"
            )
        
    except Exception as e:
        raise e
    
@router.delete("/api/deletecontact")
async def deletecontact(
    id:Annotated[str,Form(...)]
):
    try:
        contact = Database()
        query = "delete from Contact where id = %s"
        params = (id,)
        contact_data = contact.database_operation((query,params))
        if contact_data.get("success"):
               return {"message": "Data successfully Deleted"}
        else:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Error: No product was Deleted"
            )
    except Exception as e:
        raise e
    

@router.put("/api/updatecontact")
async def updatecontact(
    id:Annotated[str,Form(...)],
    first_name:Annotated[str,Form(...)],
    last_name:Annotated[str,Form(...)],
    dob:Annotated[str,Form(...)],
    address:Annotated[str,Form(...)],
    pincode:Annotated[str,Form(...)],
    city:Annotated[str,Form(...)], 
    gender:Annotated[str,Form(...)],
):
    
    #Backend validation
    # #firstname
    if len(first_name) > 50:
        return {"message": "Name length More than 60 character"}
    

    if not(last_name.isalpha()):
        return {"message": "Name  consist number"}
    
    # #lastname
    if len(last_name) > 50:
        return {"message": "Last name length More than 60 character"}
    
    if not(last_name.isalpha()):
        return {"message": "Last name consist number"}
    
    # #pincode
    if len(pincode) > 8:
        return {"message": "Pincode length More than 8 character"}
    
    if (pincode.isalpha()):
        return {"message": "pincode consist Alphabet"}
    
    # #city
    if len(city) > 20:
        return {"message": "City length More than 20 character"}
    
    if (bool(re.search(r'\d', city))):
        return {"message": "city consist number##############"}
    
    #address
    if len(address) > 100:
        return {"message": "Address length More than 100 character"}
    
    #dob
    dob = datetime.strptime(dob, '%Y-%m-%d').date()
    today = datetime.today().date()
    age = today.year - dob.year
    if age <=18:
        return {"message":"Age Is less then 18"}
    
    if dob >= datetime.today().date():
        return {"message": "Invalid Date"}
    
    #gender
    if gender not in ["Male", "Female"]:
        return {"message": "Gender should be Male or Female"}
    

    try:
        contact = Database()
        query = "update Contact set first_name=%s,last_name=%s,dob=%s,address=%s,pincode=%s,city=%s,gender=%s where id = %s"
        params = (first_name,last_name,dob,address,pincode,city,gender,id,)
        contact_data = contact.database_operation((query,params))

        if contact_data.get("success"):
            return {"message": "Data successfully Updated"}
        else:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Error: No product was inserted"
            )
        
    except Exception as e:
        raise e