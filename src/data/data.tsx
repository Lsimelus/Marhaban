import { productIds } from "../@types"

export const verses = ["Verse 1", "Verse 2", "Verse 3"]
export const homeBlurb = "estibulum lacinia tellus non nunc ornare, eget condimentum ipsum pulvinar. Maecenas consectetur leo vel ex semper ultrices. Phasellus ornare ipsum venenatis vestibulum auctor. Nullam efficitur maximus lectus, quis sagittis nisl sodales ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam porta purus, id pellentesque eros ornare in. In hac habitasse plate"

export const home = {
    "title": "Marhaban",
    "subTitle": "Welcome home",
    "blurb": "estibulum lacinia tellus non nunc ornare, eget condimentum ipsum pulvinar. Maecenas consectetur leo vel ex semper ultrices. Phasellus ornare ipsum venenatis vestibulum auctor. Nullam efficitur maximus lectus, quis sagittis nisl sodales ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam porta purus, id pellentesque eros ornare in. In hac habitasse plate",
    "verses": ["Verse 1", "Verse 2", "Verse 3", "Vers4"]
}


export const products : {[key in productIds]: {id: string;title: string; price: number; img: string; items: any; desc: string; }} = {
    "1" :{
        "id" : "1",
        "title": "Explore",
        "price": 9.99,
        "img": "../../assets/test.jpg",
        "items": {
            "itjknbem": "https://mui.com/material-ui/react-button-group/",
            "itljem": "https://mui.com/material-ui/react-button-group/",
            "ijhkbtem": "https://mui.com/material-ui/react-button-group/",
            "itnbem": "https://mui.com/material-ui/react-button-group/"
        },
        "desc": "ghf jhv jvhjb hjgvhjv jhvjhv hg"

    },
    "2" :{
        "id" : "2",
        "title": "hjfjhfjy",
        "price": 19.99,
        "img": "../../assets/test.jpg",
        "items": {
            "itjknbem": "https://mui.com/material-ui/react-button-group/",
            "itljem": "https://mui.com/material-ui/react-button-group/",
            "ijhkbtem": "https://mui.com/material-ui/react-button-group/",
            "itnbem": "https://mui.com/material-ui/react-button-group/"
        },
        "desc": "ghf jhv jvhjb hjgvhjv jhvjhv hg"

    },
    "3" :{
        "id" :"3",
        "title": "hjfjhfjy",
        "price": 24.99,
        "img": "../../assets/test.jpg",
        "items": {
            "itjknbem": "https://mui.com/material-ui/react-button-group/",
            "itljem": "https://mui.com/material-ui/react-button-group/",
            "ijhkbtem": "https://mui.com/material-ui/react-button-group/",
            "itnbem": "https://mui.com/material-ui/react-button-group/"
        },
        "desc": "ghf jhv jvhjb hjgvhjv jhvjhv hg"

    }}

export const faq = [
    ["Question","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis ege"],
    ["Quesaeation", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis ege"],
    ["Questioadsan", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis ege"],
    ["Questionadads", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis ege"],
    ["Questiadsadsadon", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis ege"]
]
export const explore = {
    "title" : "Find out what is going in Muslim countries around the world",
    "category": [
        "general",
        "business",
        "entertainment",

        "health", "science",
        "sports", "technology"
    ],
    "country": [
    ["ID", "Indonesia"],
    ["AE", "United States Emirates"],
    ["ZA", "South Africa"],
    ["MA", "Morocco"],
    ["EG", "Egypt"]]
}


