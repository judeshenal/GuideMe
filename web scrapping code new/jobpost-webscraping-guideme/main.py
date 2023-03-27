
import webScraping as w
import mongo_operations
import mailSend
import notificationSend

from flask import Flask,request, jsonify
from flask_cors import CORS , cross_origin
app = Flask(__name__)
CORS(app , resources={r"/":{"origins":"*"}})

@app.route("/")
def main():
    return "hello world"

@app.route("/home")
@cross_origin()
def home():
    return "First Page"

@app.route("/scrape" , methods = ["POST"])
@cross_origin()
def websScrape():
    if request.data:
        return {
            "url": request.json["web_page_url"],
            "attribute_tags": request.json["attributes"][0]['attributeName'],
            "response": w.getContent(request.json["web_page_url"],request.json["card_class_name"],request.json["card_html_tag"],request.json["attributes"],request.json["jobAttributes"],request.json["categoryId"],request.json["primary_attribute"])
        }
    else:
        return "Error no body"

@app.route("/getById/<id>" , methods = ["GET"])
@cross_origin()
def getById(id):
    print('id ' + id)
    return mongo_operations.get_by_id(id)

@app.route("/mailSend" , methods = ["POST"])
@cross_origin()
def mailSend():
    if request.data:
        return {
            mailSend.sendMail(email=request.json['email'],body=request.json['body'])
        }
    else:
        return "Error no body"

@app.route("/addNotification" , methods = ["POST"])
@cross_origin()
def addNotifi():
    if request.data:
        return {
            "message": notificationSend.add_notification(message=request.json['message'],type=request.json['type'],userIds=request.json['userIds'])
        }
    else:
        return {
            "message": "Error no body"
        }

@app.route("/getNotifications/<id>" , methods = ["GET"])
@cross_origin()
def getNotifiById(id):
    print('id ' + id)
    return {
        "massages":notificationSend.get_notification_by_user(id)
    }

if __name__ == '__main__':
    app.debug = True
    #init api port and ip address of the server
    app.run(host='localhost',port=5000)