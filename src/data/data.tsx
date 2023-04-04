import { productIds, product } from "../@types"
import begin from "../assets/begin.png"
import ramadan from "../assets/ramadan.png"
import deep from "../assets/deep.png"

export const verses = [
    ["ٱلْحَمْدُ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ", 'Praise be to Allah, the Lord of the Universe', ""],
    ["قُلۡ اِنَّ هُدَى اللّٰهِ هُوَ الۡهُدٰى", 'Indeed the only guidance is Allah’s Guidance!', 'Al-Quran 6:7'],
    ['قُلْ هُوَ لِلَّذِينَ آمَنُوا هُدًى وَشِفَاءٌ', 'And declare (O Muhammad) that [the Quran] is a guidance and healing for the believers.', 'Al-Quran 41:40'],
    ['هُدًى لِّلنَّاسِ وَ بَيِّنٰتٍ مِّنَ الۡهُدٰى وَالۡفُرۡقَانِۚ', 'A guidance for mankind and clear evidence and discrimination (between wrong).', 'Al-Quran 2:185'],
    ['ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ', 'Guide us to the straight path.', 'Al-Quran 1:6'],
    ['صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ', 'The path of those upon whom You have bestowed favor, not (the path) of that evoked [You’rer] anger or of those who are astray.', 'Al-Quran 1:7'],
    ['وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ', 'And whoever puts all his trust in Allah. He will be enough for him', 'Al-Quran 65:3'],
    ['فَاِذَا عَزَمۡتَ فَتَوَكَّلۡ عَلَى اللّٰهِ​ؕ اِنَّ اللّٰهَ يُحِبُّ الۡمُتَوَكِّلِيۡ', 'Then you have taken a decision, put your trust in Allah. Certainly, Allah loves those who put their trust (in Him)', 'Al-Quran 3:159'],
    ['إِنَّ ٱللَّهَ مَعَ ٱلصَّبِرِينَ', 'I will be with those who have patience.', 'Al-Quran 2:153'],
    ['فَٱصْبِرْ صَبْرًا جَمِيلًا', 'So endure patiently, with beautiful patience.', 'Al-Quran 70:5'],
    ['وَّاَنِ اسۡتَغۡفِرُوۡا رَبَّكُمۡ ثُمَّ تُوۡبُوۡۤا اِلَيۡه', 'Seek forgiveness of your Lord and repent to Him.', 'Al-Quran 11:3'],
    ['رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَاب', 'Our Lord! Forgive my parents and me, and (all) the believers on the Day when the reckoning will be established', 'Al-Quran 40:41'],
    ['وَإِن تَعُدُّوا۟ نِعْمَةَ ٱللَّهِ لَا تُحْصُوهَآ ۗ إِنَّ ٱللَّهَ لَغَفُورٌ رَّحِيمٌ', 'If you would count up the favors of Allah, never would you be able to number them: for Allah is Oft-Forgiving, Most Merciful', 'Al-Quran 16:18'],
    ['وَمَا بِكُمْ مِنْ نِعْمَةٍ فَمِنَ اللَّهِ', 'And whatever you have of favor, it is from Allah', 'Al-Quran 16:53'],
    ['فَبِاَىِّ اٰلَاۤءِ رَبِّكُمَا تُكَذِّبٰنِۙ', 'So which of the favors of your Lord would you deny?', 'Al-Quran 55:74']
]

export const homeBlurb = "estibulum lacinia tellus non nunc ornare, eget condimentum ipsum pulvinar. Maecenas consectetur leo vel ex semper ultrices. Phasellus ornare ipsum venenatis vestibulum auctor. Nullam efficitur maximus lectus, quis sagittis nisl sodales ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam porta purus, id pellentesque eros ornare in. In hac habitasse plate"

export const home = {
    "title": "Marhaban",
    "subTitle": "Welcome home",
    "blurb": "estibulum lacinia tellus non nunc ornare, eget condimentum ipsum pulvinar. Maecenas consectetur leo vel ex semper ultrices. Phasellus ornare ipsum venenatis vestibulum auctor. Nullam efficitur maximus lectus, quis sagittis nisl sodales ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam porta purus, id pellentesque eros ornare in. In hac habitasse plate",
    "verses": ["Verse 1", "Verse 2", "Verse 3", "Vers4"]
}


export const products: product = {
    "1": {
        "id": "1",
        "title": "First Steps",
        "price": 9.99,
        "img": begin,
        "items": {
            "Prayer Mat": "https://www.amazon.com/Prayer-Rug-Muslim-Mat-Islamic/dp/B08RF3CGP5/ref=sr_1_1_sspa?crid=BXQ7N68ZNFC8&keywords=prayer+mat&qid=1680571820&sprefix=prayer+mat%2Caps%2C103&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFEODI0T0lHTzRGODkmZW5jcnlwdGVkSWQ9QTA1NTU0OTU0RFMySVg1OUxERUImZW5jcnlwdGVkQWRJZD1BMDk2Nzc4MDJBTE5DUUpPQjVLWkUmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
            "Qu'ran": "https://www.amazon.com/Clear-Quran-Dr-Mustafa-Khattab/dp/097730096X/ref=sr_1_1?crid=1ZEANCTCY4JTF&keywords=qu%27ran&qid=1680571916&sprefix=Qu%27ran%2Caps%2C116&sr=8-1",
            "Qu'ran Stand": "https://www.amazon.com/Aashita-Creations-Reading-Furniture-Figurine/dp/B0BVRKGNLX/ref=sr_1_1?crid=31XYCYVGGTTTA&keywords=quran+stand+and+cover&qid=1680571953&sprefix=qu%27ran+stand+and+cover%2Caps%2C102&sr=8-1",
            "Compass": "https://www.amazon.com/Compass-Direction-Islamic-Portable-Camping/dp/B08HL1YXW3/ref=sr_1_4?crid=1HQ1888GBQGBG&keywords=muslim+compass&qid=1680571996&sprefix=muslim+compas%2Caps%2C110&sr=8-4"
        },
        "desc": "This is for anyone who is new to Islam or interested in learning about the religion"

    },
    "2": {
        "id": "2",
        "title": "Ramadan",
        "price": 19.99,
        "img": ramadan,
        "items": {
            "Ramadan Calendar": "https://www.amazon.com/Calendar-Countdown-Calendars-Decoration-Accessories/dp/B0BXH4XK8T/ref=sr_1_7?keywords=ramadan+calendar&qid=1680572051&sprefix=ramadan+cal%2Caps%2C118&sr=8-7",
            "Ramadan Cookbook": "https://www.amazon.com/The-Ramadan-Cookbook/dp/1529907179/ref=sr_1_2?crid=1FO52FIWPP3EV&keywords=ramadan+cookbook&qid=1680572084&sprefix=ramadan+cook%2Caps%2C98&sr=8-2"
        },
        "desc": "This is for current Muslims who wish to deepen their understanding and practice of the religion."

    },
    "3": {
        "id": "3",
        "title": "Deep Dive",
        "price": 24.99,
        "img": deep,
        "items": {
            "Eid Cards": "https://www.amazon.com/Eid-Greeting-Cards-Mubarak-Traditional/dp/B08SHPSLHH/ref=sr_1_1_sspa?crid=2VIAZ4TK2DJDH&keywords=eid+cards&qid=1680572132&sprefix=Eid+cards%2Caps%2C107&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVTk5NEo4UU1ZTkpQJmVuY3J5cHRlZElkPUEwNDg3NTE1MjNNN1paS0oyR0w2QSZlbmNyeXB0ZWRBZElkPUEwMjkxMzM1M0JUSzkxNlA5MDgxMiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
            "Porcelain Model Of Makkah": "https://www.amazon.com/Islamic-Table-Replica-Showpiece-Bookend/dp/B01LGOM8ZS/ref=sr_1_3?crid=2T5IRKDNH8UP2&keywords=Porcelain+Model+Of+Makkah&qid=1680572169&sprefix=porcelain+model+of+makkah%2Caps%2C121&sr=8-3",
            "Azan Clock With four Clock Dials": "https://mui.com/material-ui/react-button-group/",
            "Hijab": "https://www.amazon.com/Avanos-Instant-Jersey-Turbans-Clothes/dp/B0BC1VR7MX/ref=sr_1_1_sspa?crid=3A45L55C23KP6&keywords=hijab&qid=1680572531&sprefix=Hij%2Caps%2C91&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFVMU5UN1dOVzRTRUYmZW5jcnlwdGVkSWQ9QTA1Mzc2OTkzN1pVVlBQMUUzVTc2JmVuY3J5cHRlZEFkSWQ9QTAyNzMwNzkyWkFLNVJUNzBMU0U1JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
        },
        "desc": "This is for current Muslims who wish to deepen their understanding and practice of the religion."

    }
}

export const faq = [
    ["What is Marhaban?", "Marhaban is a non-profit website whose primary focus is expanding the beautiful religion of Islam. The website shares trustworthy news from non-Western news outlet for various Islamic-Countries. The site also congregates items and resources that one may need on their journey towards Islam and offers them in different packages."],
    ["What is Ramadan?", "Ramadan is the ninth month of the Islamic calendar, observed by Muslims worldwide as a month of fasting, prayer, and reflection. It is one of the Five Pillars of Islam, which are the basic tenets of the faith. During Ramadan, Muslims abstain from food, drink, smoking, and sexual activity from dawn until sunset. They also increase their prayer and engage in acts of charity and kindness. The fast is broken at sunset with a meal called iftar, and it is customary to share this meal with family and friends."],
    ["What if I only want one item from a package?", "By clicking the expand view button on the package image, you can see all of the items listed. By clicking the item, a page will open up where you can buy the item yourself."],
    ["Don't see your question?", "Feel free to ask any question you want on the contact page."]
   ]
export const explore = {
    "title": "Find out what is going in Muslim countries around the world",
    "category": [
        "general",
        "business",
        "entertainment",
        "health",
        "science",
        "sports",
        "technology"
    ],
    "country": [
        ["id", "Indonesia"],
        ["ae", "United States Emirates"],
        ["za", "South Africa"],
        ["ma", "Morocco"],
        ["eg", "Egypt"]]
}


