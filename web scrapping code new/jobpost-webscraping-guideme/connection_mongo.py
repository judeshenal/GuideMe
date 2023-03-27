from pymongo import MongoClient

def connect_mongo_job():
    CONNECTION_STRING = "mongodb+srv://jseeker891:2AjIuC5fX1q2l9il@cluster0.mui2gof.mongodb.net/?retryWrites=true&w=majority"
    client = MongoClient(CONNECTION_STRING)
    db_Name = client['job']
    collection_name = db_Name["job"]
    return collection_name