let prjectsDB = [
  {
    id:1,
    name: "Pato Resturant",
    img: 'pato1.PNG',
    imgs: ['pato1.PNG','pato2.PNG','pato3.PNG','pato6.PNG','pato5.PNG','pato4.PNG'],
    tools:['Vuejs','Vuex','Json Server','Bootstrapt','Axios','Validation'],
    desc: `A website that display the restaurants products to you ,informational 
    abut restaurant,people's opinions,each product separately you can leave comments,you can make an order for any product if
      you don't have an account you must register first then make the order ,finally you can leave a feedback.`,
    gith: 'http://github.com/Maha4Gaber/Connoisseur',
    video: "Pato",
    filter:"react"
  },
  {
    id:2,
    name: "Connoisseur Resturant",
    img: 'Connoisseur1.PNG',
    imgs: ['Connoisseur1.PNG','Connoisseur2.PNG','Connoisseur3.PNG','Connoisseur4.PNG','Connoisseur5.PNG','Connoisseur6.PNG'],
    tools:['Vuejs','Vuex','Json Server','Bootstrapt','Axios','Validation'],
    desc: `A website that display the restaurants products to you ,informational 
    abut restaurant,people's opinions,each product separately you can leave comments,you can make an order for any product if
      you don't have an account you must register first then make the order ,finally you can leave a feedback.`,
    gith: 'http://github.com/Maha4Gaber/Connoisseur',
    video: "5",
    filter:"vue"
  },
  {
    id:3,
    name: "عقارات",
    img: 'last1.PNG',
    imgs: ['last1.PNG','last2.PNG','last3.PNG','last4.PNG','last5.PNG','last6.PNG'],
    tools:["React.JS",  "Bootstrap","Api - Sanity.IO","html",  "css"],
    desc:"An example  for using some features in  React.js like <br> 1- Add To favorites  Using Redux-Toolkit <br> 2- language switcher using react.i8next <br> 3- Save Mood Light Or Dark - redux persist <br> 4- Search In Products With Search Query URL <br> 5 - Api - Sanity.IO Api Groq Lang Like Graphql as Backend",
    gith: 'http://github.com/Maha4Gaber/React_Project_1',
    video: "last",
    filter:"react"
  },
  {
    id:4,
    name: "OnlineShop",
    img: 'OnlineShop11.png',
    imgs: ['OnlineShop11.png','OnlineShop2.png','OnlineShop3.png','OnlineShop4.png','OnlineShop5.png','OnlineShop6.png'],
    tools:["React.JS",  "Bootstrap","FackApi",'Axios',"html",  "css"],
    desc:"An example for use Fake API with vueJs",
    gith: 'http://github.com/Maha4Gaber/OnlineShop',
    live: "https://maha4gaber.github.io/OnlineShop/",
    filter:"react"
  },
  
  {
    id:5,
    name: "Ultra Profile",
    img: 'ultra1.PNG',
    imgs: ['ultra1.PNG','ultra2.PNG','ultra3.PNG','ultra4.PNG','ultra5.PNG','ultra6.PNG'],
    tools:["React.JS",  "Bootstrap","Json server","html",  "css"],
    desc:"Simple app on React JS",
    gith: 'http://github.com/Maha4Gaber/Pato',
    video: "ultra",
    filter:"react"
  },
  {
    id:6,
    name: "Quiz App",
    img: 'quiz1.PNG',
    imgs: ['quiz1.PNG','quiz2.PNG','quiz3.PNG','quiz4.PNG','quiz5.PNG','quiz6.PNG'],
    tools:["vue.JS",  "Bootstrap","Trivia API",'Axios',"html",  "css"],
    desc:"An example for use API with vueJs",
    gith: 'https://github.com/Maha4Gaber/Quiz-app',
    video: "quiz-app",
    filter:"vue"
  },
  {
    id:7,
    name: "Todo List",
    img: 'todo4.png',
    imgs: ['todo1.png','todo2.png','todo3.png','todo4.png'],
    tools:["html",  "css","vueJs"],
    desc:"An example for crud system with vueJs",
    video: "todo",
    filter:"vue"
  },
  {
    id: 8,
    name: "TIC TAC TOE",
    img: 'xo1.PNG',
    imgs: ['xo1.PNG','xo2.PNG','xo3.PNG','xo4.PNG','xo5.PNG','xo6.PNG'],
    tools:["Vue JS",  "HTMl","Css","JS"],
    desc:"Simple app on vue JS",
    gith: 'https://github.com/Maha4Gaber/Tic-Tak-Tok',
    video: "XO",
    filter:"vue"
  },
  {
    id: 9,
    name: "Ecomerce with js",
    img: 'app81.PNG',
    imgs: ['app81.PNG','app82.PNG','app83.PNG','app84.PNG','app85.PNG','app86.PNG'],
    tools:[  "HTMl","Css","JS","localstorage"],
    desc:"E-commerce website using JS and local storage as an alternative to Backand and contains pages such as <br> 1- home page <br> 2- Signup <br> 3- Login <br> 4-Profile <br> 5-Cart <br> 6-Favourites <br> 7-Create New Product <br> 8-Update Product <br>9-My Products",
    gith: 'https://github.com/Maha4Gaber/shopping_97',
    live: 'https://maha4gaber.github.io/shopping_97/',
    filter:"js"
  },
  {
    id: 10,
    name: "Molla Online Shop",
    img: 'app71.PNG',
    imgs: ['app71.PNG','app72.PNG','app73.PNG','app74.PNG','app75.PNG','app76.PNG'],
    tools:[  "HTMl","Css","JS","bootstrap",'jQuery'],
    desc:"An actual application on JavaScript,  Bootstrap, and the use of some jQuery libraries. It contains pages to display many products with different designs.",
    gith: 'https://github.com/Maha4Gaber/Task_2',
    live: 'https://maha4gaber.github.io/Task_2/',
    filter:"js"
  },
  {
    id: 11,
    name: "BEMAX",
    img: 'app51.PNG',
    imgs: ['app51.PNG','app52.PNG','app53.PNG','app54.PNG','app55.PNG','app56.PNG'],
    tools:[  "HTMl","Css","JS","bootstrap",'jQuery'],
    desc:"An actual implementation of JavaScript, Bootstrap, and the use of some jQuery libraries",
    gith: 'https://github.com/Maha4Gaber/Task1',
    live: 'https://maha4gaber.github.io/Task1/',
    filter:"js"
  },  
  {
    id: 12,
    name: "Special Design",
    img: 'app61.PNG',
    imgs: ['app61.PNG','app62.PNG','app63.PNG','app64.PNG','app65.PNG','app66.PNG'],
    tools:[  "JS" ,"HTMl","Css",],
    desc:"Simple practical application of Javascript ",
    gith: 'https://github.com/Maha4Gaber/js',
    live: 'https://maha4gaber.github.io/js/',
    filter:"js"
  },
  {
    id: 13,
    name: "Bondi",
    img: 'bondi1.PNG',
    imgs: ['bondi1.PNG','bondi2.PNG','bondi3.PNG','bondi4.PNG','bondi5.PNG','bondi6.PNG'],
    tools:["html",  "css",'Bootstrap'],
    desc:"Simple practical application on Bootstrap",
    gith: 'https://github.com/Maha4Gaber/bondi/',
    live: "https://maha4gaber.github.io/bondi/",
    filter:"others"
  },
  {
    id: 14,
    name: "Search Jop",
    img: 'search1.PNG',
    imgs: ['search1.PNG','search2.PNG','search3.PNG','search4.PNG','search5.PNG','search6.PNG'],
    tools:["html",  "css",'js'],
    desc:"A simple practical application on HTML, CSS, and js, and responsive use to query media, use effects, animations, and filters, with the use of JavaScript in navigation and movement",
    gith: 'http://github.com/Maha4Gaber/Search/',
    live: 'https://maha4gaber.github.io/Search/',
    filter:"js"
  },
  {
    id: 15,
    name: "Template_Thee",
    img: 'app31.PNG',
    imgs: ['app31.PNG','app32.PNG','app33.PNG','app34.PNG','app35.PNG','app36.PNG'],
    tools:["html",  "css"],
    desc:"Great practical application on HTML, CSS, and responsive use for querying media, using effects, animations, and filters.",
    gith: 'https://maha4gaber.github.io/T3/',
    live: "http://github.com/Maha4Gaber/T3/",
    filter:"others"
  },
  {
    id: 16,
    name: "Kasper",
    img: 'app21.PNG',
    imgs: ['app21.PNG','app22.PNG','app23.PNG','app24.PNG','app25.PNG','app26.PNG'],
    tools:["html",  "css"],
    desc:"Hands-on HTML, CSS, and responsive use for querying media and using effects",
    gith: 'http://github.com/Maha4Gaber/T2/',
    live: "https://maha4gaber.github.io/T2/",
    filter:"others"
  },
  {
    id: 17,
    name: "Template_One",
    img: 'app1.PNG',
    imgs: ['app1.PNG','app2.PNG','app3.PNG','app4.PNG','app5.PNG','app6.PNG'],
    tools:["html",  "css"],
    desc:"Practical application on HTML, CSS and responsive use of media query",
    gith: "https://github.com/Maha4Gaber/l1",
    live: 'https://maha4gaber.github.io/l1/',
    filter:"others"
  },
  
  
  {
    id: 18,
    name: "Fintech",
    img: 'app41.PNG',
    imgs: ['app41.PNG','app42.PNG','app43.PNG','app44.PNG','app45.PNG','app46.PNG'],
    tools:["html",  "css"],
    desc:"Practical application on flex and grid CSS",
    gith: 'https://github.com/Maha4Gaber/fintech/',
    live: "https://maha4gaber.github.io/fintech/",
    filter:"others"
  },
  {
    id: 19,
    name: "Orlando Health",
    img: 'app91.PNG',
    imgs: ['app91.PNG','app92.PNG','app93.PNG','app94.PNG','app95.PNG','app96.PNG'],
    tools:["html","css"],
    desc:"Using HTML and CSS 2021, create a realistic website application",
    gith: 'https://github.com/Maha4Gaber/Search_Jobs/',
    live: "https://maha4gaber.github.io/Search_Jobs/",
    filter:"others"
  },
  
  
]
