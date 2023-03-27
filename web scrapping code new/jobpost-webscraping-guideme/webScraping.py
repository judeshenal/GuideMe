
import requests
from bs4 import BeautifulSoup
import re
import sql_operations
from mongo_operations import inser_data

def getContent(url , cardClassname , cardTag , attributes , job_attributes , cat_id , primary_attribute):
    try:
        content = requests.get(url=url)
        soup = BeautifulSoup(content.content, features="html.parser")
        lists = soup.find_all(cardTag, attrs={'class': cardClassname})
        response = []
        res = {}
        added_data = []
        print(lists)
        for item in lists:
            for attribute in attributes:
                data = item.find(attribute['html_tag'], attrs={'class': attribute['className']})
                words = re.split(r'[><]', str(data))
                if len(words) < 2:
                    continue
                res[attribute['attributeName']] = words[2]
            if not res:
                continue
            if res[primary_attribute] in added_data:
                continue
            added_data.append(res[primary_attribute])
            mongoId = inser_data(attributes, res)
            sql_operations.insertDataJobs(name=res[job_attributes['name']], age=res[job_attributes['age']],
                                          catID=cat_id,
                                          mongo_id=str(mongoId))
            response.append({primary_attribute: res[primary_attribute]})
        return response
    except:
        return "error"
