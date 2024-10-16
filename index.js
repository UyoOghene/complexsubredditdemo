const express = require('express');
const app = express();
const path = require('path');
const redditdata = require('./data.json');

app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))



app.get('/c/:subredditc',(req, res) => {
    const {subredditc} = req.params
    const data = redditdata[subredditc]
    console.log(data);
    if(data){
        res.render('subreddit', {...data})

    }else{
        res.render('notfound', {subredditc})

    }
})
app.get('/',(req, res) => {
    res.send('subreddit')
})


app.listen('3000', ()=>{
    console.log('listening at port 3000')
})