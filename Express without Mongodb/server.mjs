import express, { json } from 'express'
import path from 'path';
const app = express()
const port = 3000
app.use(express.json());


const dirname = path.resolve();


import schoolRoutes from './routes/schoolRoutes.mjs';


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/vs-code',(req,res)=>{
    res.download('static/VSCodeUserSetup-x64-1.100.2.exe')
})

app.get('/statusCode',(req,res)=>{
    res.status(500).send('Status Code')
})



app.use('/home', express.static(dirname, { index: 'static/hello.html' }))


app.get('/image',(req,res)=>{
    // console.log(dirname)
    res.sendFile(dirname + '/static/1.jpg')
})


// /posts/23
app.get('/posts/:id', (req, res) => {


    let postId = req.params.id;

    let postObj = [
        {
            postId: 23,
            postTitle: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            postDescription: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            postId: 3,
            postTitle: "qui est esse",
            postDescription: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
        ,
        {
            postId: 43,
            postTitle: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            postDescription: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
        ,
        {
            postId: 27,
            postTitle: "eum et est occaecati",
            postDescription: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        }
    ]




    // console.log();

    postObj.map((post) => {
        if (post.postId == postId) {
            console.log(post);
            postObj = post
        }
    })

    res.send(postObj)








})

// /weather/karachi
app.get('/weather/:cityName', (req, res) => {

    let { cityName } = req.params;

    console.log(cityName)

    cityName = cityName.toLowerCase()


    // let weatherObj = [

    //         { cityName: 'Karachi', tempInC: 40, tempInF: 104 },
    //         { cityName: 'Lahore', tempInC: 38, tempInF: 100.4 },
    //         { cityName: 'Islamabad', tempInC: 35, tempInF: 95 },
    //         { cityName: 'Peshawar', tempInC: 37, tempInF: 98.6 },
    //         { cityName: 'Quetta', tempInC: 30, tempInF: 86 },
    //         { cityName: 'Multan', tempInC: 42, tempInF: 107.6 },
    //         { cityName: 'Faisalabad', tempInC: 39, tempInF: 102.2 },
    //         { cityName: 'Hyderabad', tempInC: 41, tempInF: 105.8 },
    //         { cityName: 'Sialkot', tempInC: 36, tempInF: 96.8 },
    //         { cityName: 'Rawalpindi', tempInC: 34, tempInF: 93.2 },
    //         { cityName: 'Gujranwala', tempInC: 38, tempInF: 100.4 },
    //         { cityName: 'Bahawalpur', tempInC: 43, tempInF: 109.4 },
    //         { cityName: 'Sukkur', tempInC: 44, tempInF: 111.2 },
    //         { cityName: 'Larkana', tempInC: 45, tempInF: 113 },
    //         { cityName: 'Abbottabad', tempInC: 28, tempInF: 82.4 },
    //         { cityName: 'Murree', tempInC: 22, tempInF: 71.6 },
    //         { cityName: 'Gilgit', tempInC: 25, tempInF: 77 },
    //         { cityName: 'Skardu', tempInC: 20, tempInF: 68 },
    //         { cityName: 'Mardan', tempInC: 33, tempInF: 91.4 },
    //         { cityName: 'Sahiwal', tempInC: 37, tempInF: 98.6 },

    // ];
    let weatherObj = {

        karachi: { cityName: 'Karachi', tempInC: 40, tempInF: 104 },
        lahore: { cityName: 'Lahore', tempInC: 38, tempInF: 100.4 },
        islamabad: { cityName: 'Islamabad', tempInC: 35, tempInF: 95 },

    };


    console.log(weatherObj[cityName])


    // weatherObj.map((weather) => {
    //     if (weather.cityName.toLowerCase() == cityName.toLowerCase()) {

    //         console.log(weather);
    //         weatherObj = weather
    //     }
    // })

    res.send(weatherObj[cityName] || 'Data not found')


})



//weather?cityName=karachi
app.get('/weather', (req, res) => {

    // let { cityName, hello } = req.query;
    let a = req.query.cityName;
    // let { cityName } = req.params;

    console.log(cityName,hello)

    cityName = cityName.toLowerCase()


    // let weatherObj = [

    //         { cityName: 'Karachi', tempInC: 40, tempInF: 104 },
    //         { cityName: 'Lahore', tempInC: 38, tempInF: 100.4 },
    //         { cityName: 'Islamabad', tempInC: 35, tempInF: 95 },
    //         { cityName: 'Peshawar', tempInC: 37, tempInF: 98.6 },
    //         { cityName: 'Quetta', tempInC: 30, tempInF: 86 },
    //         { cityName: 'Multan', tempInC: 42, tempInF: 107.6 },
    //         { cityName: 'Faisalabad', tempInC: 39, tempInF: 102.2 },
    //         { cityName: 'Hyderabad', tempInC: 41, tempInF: 105.8 },
    //         { cityName: 'Sialkot', tempInC: 36, tempInF: 96.8 },
    //         { cityName: 'Rawalpindi', tempInC: 34, tempInF: 93.2 },
    //         { cityName: 'Gujranwala', tempInC: 38, tempInF: 100.4 },
    //         { cityName: 'Bahawalpur', tempInC: 43, tempInF: 109.4 },
    //         { cityName: 'Sukkur', tempInC: 44, tempInF: 111.2 },
    //         { cityName: 'Larkana', tempInC: 45, tempInF: 113 },
    //         { cityName: 'Abbottabad', tempInC: 28, tempInF: 82.4 },
    //         { cityName: 'Murree', tempInC: 22, tempInF: 71.6 },
    //         { cityName: 'Gilgit', tempInC: 25, tempInF: 77 },
    //         { cityName: 'Skardu', tempInC: 20, tempInF: 68 },
    //         { cityName: 'Mardan', tempInC: 33, tempInF: 91.4 },
    //         { cityName: 'Sahiwal', tempInC: 37, tempInF: 98.6 },

    // ];
    let weatherObj = {

        karachi: { cityName: 'Karachi', tempInC: 40, tempInF: 104 },
        lahore: { cityName: 'Lahore', tempInC: 38, tempInF: 100.4 },
        islamabad: { cityName: 'Islamabad', tempInC: 35, tempInF: 95 },

    };


    console.log(weatherObj[cityName])


    // weatherObj.map((weather) => {
    //     if (weather.cityName.toLowerCase() == cityName.toLowerCase()) {

    //         console.log(weather);
    //         weatherObj = weather
    //     }
    // })

    res.send(weatherObj[cityName] || 'Data not found')


})


app.post('/user',(req,res)=>{
    
    let userObj = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password

    }
    
    res.send(userObj)
})



app.use('/api/v1', schoolRoutes);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
