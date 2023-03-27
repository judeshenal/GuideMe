import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  # password="password",
  database="job_seeker"
)

def getConnection():
  return mydb