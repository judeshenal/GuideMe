from bson import ObjectId

from connection_mongo import connect_mongo_job

collection_name = connect_mongo_job()

def inser_data(attributes , res):
    body = {}
    for item in attributes:
        body[item["attributeName"]] = res[item["attributeName"]]
    item = collection_name.insert_one(body)
    return item.inserted_id

def get_by_id(id):
    item = collection_name.find_one({'_id':ObjectId(id)})
    if item is None:
        response = {
            "status":False,
            "error":"error id"
        }
    else:
        del item['_id']
        response = {
            "status": True,
            "body": item
        }
    return response