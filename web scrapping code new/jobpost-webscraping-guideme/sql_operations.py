import connection_sql

mydb = connection_sql.getConnection()
myCursur = mydb.cursor()
def createable_job():
    myCursur.execute("CREATE TABLE jobs (job_id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), age VARCHAR(255), cat_id INT ,mongo_id VARCHAR(255))")

def createable_notification():
    myCursur.execute("CREATE TABLE notification (notifi_id INT AUTO_INCREMENT PRIMARY KEY,message VARCHAR(255), all_notifi BOOLEAN, user_id INT)")


def insertDataJobs(name, age, catID, mongo_id):
    sql = "INSERT INTO jobs (name, age , cat_id , mongo_id) VALUES (%s, %s , %s, %s)"
    val = (name, age , catID , mongo_id)
    myCursur.execute(sql, val)
    mydb.commit()
    return

def insertDataNotifications(message, userId , type):
    sql = "INSERT INTO notification (message, user_id , all_notifi) VALUES (%s, %s , %s)"
    val = (message , userId , type)
    myCursur.execute(sql, val)
    mydb.commit()
    return

def getDataNotificationsByType():
    sql = "select message from notification where all_notifi= TRUE"
    myCursur.execute(sql)
    myresult = myCursur.fetchall()
    return myresult

def getDataNotificationsByuserId(userId):
    sql = "select message from notification where user_id= "+userId
    myCursur.execute(sql)
    myresult = myCursur.fetchall()
    return myresult

def deleteNotificationsByuserId(userId):
    sql = "DELETE FROM notification WHERE user_id= "+userId
    myCursur.execute(sql)
    mydb.commit()
