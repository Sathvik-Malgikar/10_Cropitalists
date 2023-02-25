import firebase_admin
import random
from datetime import datetime
from firebase_admin import firestore
from firebase_admin import credentials


# Application Default credentials are automatically created.
cred = credentials.Certificate(
    "farmstockapp-firebase-adminsdk-hcgk3-96d6dd2707.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()

stockDataRef = db.collection(u'StockData').document(u'YELL123MZE')
stockOverviewRef = db.collection(u'StockOverviewData').document(u'YELL123MZE')

stockData = stockDataRef.get()
stockOverview = stockOverviewRef.get()
while True:
    stockData = stockDataRef.get()
    stockOverview = stockOverviewRef.get()
    if stockData.exists:
        # print(f'Stock Data: {stockData.to_dict()}')
        stockDataDict = stockData.to_dict()
        for entry in stockDataDict.keys():
            if entry != 'Address' and entry != 'Country' and entry != 'CropType' and entry != 'Currency' and entry != 'Description' and entry != 'DividendDate' and entry != 'ExDividendDate' and entry != 'Exchange' and entry != 'Name' and entry != 'Sector' and entry != 'Symbol':
                stockDataEntry = float(stockDataDict[entry])
                randval = random.uniform(-0.5, 1)
                stockDataEntry = stockDataEntry+randval
                stockDataDict[entry] = str(stockDataEntry)
        stockDataRef.set(stockDataDict)
        print('Stock Data Updated')

    else:
        print('No Stock Data')

    if stockOverview.exists:
        # print(f'Stock Overview: {stockOverview.to_dict()}')
        stockOverviewDict = stockOverview.to_dict()
        for entry in stockOverviewDict.keys():
            for param in stockOverviewDict[entry]:
                if param != 'Date' and param != 'Time':
                    stockOverviewEntry = float(stockOverviewDict[entry][param])
                    randval = random.uniform(-0.2, 0.4)
                    stockOverviewEntry = stockOverviewEntry+randval
                    stockOverviewDict[entry][param] = str(stockOverviewEntry)
                elif param == 'Date':
                    stockOverviewDict[entry][param] = str(datetime.now())[:11]
                elif param == 'Time':
                    stockOverviewDict[entry][param] = str(datetime.now())[11:]

        stockOverviewRef.set(stockOverviewDict)
        print('Stock Overview Updated')

    else:
        print('No Stock Overview')
