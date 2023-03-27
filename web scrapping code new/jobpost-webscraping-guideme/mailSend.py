import smtplib, ssl
port = 587
context = ssl.create_default_context()

def sendMail(email , body):
    with smtplib.SMTP("smtp.gmail.com", port) as server:
        server.ehlo()
        server.starttls()
        server.login("jseeker891@gmail.com", "lbuvsuqxklbvklgb")
        sender = 'jseeker891@gmail.com'
        try:
            server.sendmail(sender, email, body)
            return "Successfully sent email"
        except:
            return "Error: unable to send email : "