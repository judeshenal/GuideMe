import sql_operations

def add_notification(message , type , userIds):
    if type:
       sql_operations.insertDataNotifications(message=message , type=type , userId=0)
    else:
        for user in userIds:
            sql_operations.insertDataNotifications(message=message , userId=user , type=type)
    return "success"

def get_notification_by_user(userId):
    result1 = sql_operations.getDataNotificationsByuserId(userId=userId)
    result2 = sql_operations.getDataNotificationsByType()
    sql_operations.deleteNotificationsByuserId(userId=userId)
    return result1 + result2