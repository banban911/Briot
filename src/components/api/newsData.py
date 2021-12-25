import requests
from bs4 import BeautifulSoup
import json

URL = 'https://www.riotgames.com/en/news'


headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0"}

page = requests.get(URL, headers=headers)

soup = BeautifulSoup(page.content, 'html.parser')

newsItemInfo = []

newsItemUrl = soup.find_all('div', class_='responsive-media')
newsItemEyebow = soup.find_all('div', class_='eyebrow')
newsItemTime = soup.find_all('time', class_='summary__date')
newsItemSummary = soup.find_all('div', class_='summary__sell')
newsItemHeading = soup.find_all('h3', class_='summary__heading')

item = 1
while item < len(newsItemUrl):
    newsItemInfo.append({
        'newsItemUrl':newsItemUrl[item].img['src'],
        'newsItemEyebow':newsItemEyebow[item].span.get_text(),
        'newsItemTime':newsItemTime[item].get_text(),
        'newsItemSummary':newsItemSummary[item].get_text(),
        'newsItemHeading':newsItemHeading[item].span.get_text()
    })
    item += 1

print(newsItemInfo)


with open('newsItemInfo.json', 'w', encoding='utf-8') as f:
    json.dump(newsItemInfo, f, ensure_ascii=False, indent=4)