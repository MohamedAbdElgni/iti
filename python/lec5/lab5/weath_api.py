import requests
import json
import datetime
class Weather:
    key="7fc4da61c2cf46aa89840215241802"
    baseurl="http://api.weatherapi.com/v1"
    today=datetime.datetime.now()
    @classmethod
    def get_current_temperature(cls,city):
        url=cls.baseurl+"/current.json?key="+cls.key+"&q="+city
        response=requests.get(url)
        if response.status_code!=200:
            print(f"Error: {response.status_code}")
            return
        data=response.json()["current"]["temp_c"]
        print(f"The curreant temp in {city} is {data} C")
        return 
    @classmethod
    def get_temperature_after(cls,city,days=2,hour=None):
        selected_date=cls.today+datetime.timedelta(days=days)
        url=cls.baseurl+"/forecast.json?key="+cls.key+"&q="+city+"&dt="+selected_date.strftime("%Y-%m-%d")
        if not hour or hour>24 or hour<0 :
            raise ValueError("wrong hour should be in 24 formate")
        
            data=response.json()["forecast"]["forecastday"][0]["day"]["avgtemp_c"]
            print(f"The temp in {city} after {days} days is {data} C")
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
        
    @classmethod
    def get_lat_long(cls,city):
        url=cls.baseurl+"/search.json?key="+cls.key+"&q="+city
        response=requests.get(url)
        if response.status_code!=200:
            print(f"Error: {response.status_code}")
            return
        lat=response.json()[0]["lat"]
        lon=response.json()[0]["lon"]
        print(f"lat of {city} is {lat} and the longitude is {lon}")
        return
    
if __name__ == "__main__":
    Weather.get_current_temperature("cairo")
    Weather.get_temperature_after("cairo",2,8)
    Weather.get_lat_long("cairo")