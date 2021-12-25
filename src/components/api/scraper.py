import requests
from bs4 import BeautifulSoup
import json
URL = 'https://www.riotgames.com/en'

headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0"}

page = requests.get(URL, headers=headers)

soup = BeautifulSoup(page.content, 'html.parser')

mainMedia = []
mainMediaUrl = soup.select('.responsive-media > img:nth-child(1)')[0]['src']
mainMediaHeading = soup.select('.whats-happening__hero-content > h3:nth-child(1)')[0].get_text()
mainMediaCategory = soup.select('.whats-happening__hero-content > div:nth-child(2)')[0].get_text()
mainMedia.append({
    'mainMediaUrl':mainMediaUrl,
    'mainMediaHeading':mainMediaHeading,
    'mainMediaCategory':mainMediaCategory
})
nthChild = 1
subMedia = []
while nthChild < 5:
    subMediaUrl = soup.select(f"li.whats-happening__article:nth-child({nthChild}) > a:nth-child(1) > div:nth-child(2)")[0]['style'].replace('background-image:','')
    
    subMediaHeading = soup.select(f'li.whats-happening__article:nth-child({nthChild}) > a:nth-child(1) > div:nth-child(1) > h3:nth-child(1)')[0].get_text()

    subMediaCategory = soup.select(f'li.whats-happening__article:nth-child({nthChild}) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)')[0].get_text()
    
    subMedia.append({'subMediaUrl':subMediaUrl,'subMediaHeading':subMediaHeading, 'subMediaCategory':subMediaCategory })

    nthChild += 1
   
homeData = []
homeData.append({"subMedia": subMedia})
homeData.append({'mainMedia': mainMedia})

print(homeData)

with open('homeData.json', 'w', encoding='utf-8') as f:
    json.dump(homeData, f, ensure_ascii=False, indent=4)




