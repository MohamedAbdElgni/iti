import requests
import json
import datetime
class Weather:
    def __init__(self ,key):
        self.key = key
    baseurl="http://api.weatherapi.com/v1"
    today=datetime.datetime.now()
    
    def get_current_temperature(self,city):
        url=self.baseurl+"/current.json?key="+self.key+"&q="+city
        response=requests.get(url)
        if response.status_code!=200:
            print(f"Error: {response.status_code}")
            return
        data=response.json()["current"]["temp_c"]
        print(f"The curreant temp in {city} is {data} C")
        return 
    
    def get_temperature_after(self,city,days=2,hour=None):
        selected_date=self.today+datetime.timedelta(days=days)
        url=self.baseurl+"/forecast.json?key="+self.key+"&q="+city+"&dt="+selected_date.strftime("%Y-%m-%d")
        if hour!=None and (hour<0 or hour>24):
            raise ValueError("wrong hour should be in 24 formate")
        
        elif hour==None:
            response=requests.get(url)
            if response.status_code!=200:
                print(f"Error: {response.status_code}")
                return
            data=response.json()["forecast"]["forecastday"][0]["day"]["maxtemp_c"]
            print(f"max temp in {city} after {days} days is {data} C")
            return
        
        else:
            url+="&hour="+str(hour)
            response=requests.get(url)
            if response.status_code!=200:
                print(f"Error: {response.status_code}")
                return
            data=response.json()["forecast"]["forecastday"][0]["hour"][0]["temp_c"]
            print(f"temp in {city} after {days} days at {hour} is {data} C")
            return
        
        
    def get_lat_long(self,city):
        url=self.baseurl+"/search.json?key="+self.key+"&q="+city
        response=requests.get(url)
        if response.status_code!=200:
            print(f"Error: {response.status_code}")
            return
        lat=response.json()[0]["lat"]
        lon=response.json()[0]["lon"]
        print(f"lat of {city} is {lat} and the longitude is {lon}")
        return
    
if __name__ == "__main__":
    myweather=Weather("7fc4da61c2cf46aa89840215241802")
    myweather.get_current_temperature("cairo")
    myweather.get_temperature_after("cairo",2)
    myweather.get_temperature_after("cairo",2,12)
    myweather.get_lat_long("cairo")
    