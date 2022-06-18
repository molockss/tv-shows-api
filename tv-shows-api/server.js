const express = require('express') // requring express 
const app = express()  // set express to be stored in the variable app
const cors = require('cors') // requiring cors to help get rid of the browsers cors issue
const PORT = 8000  // port is set to local host 8000

app.use(cors())

const tvShows = {  // objects being used for API
  
    'blindspot': {  // this is the property below is the vale. Remember objects consist of propertys and values

        'Description': 'The FBI finds a mysterious tattooed woman in Times Square with no memory of her identity. As she tries to uncover her past, her tattoos are found to contain clues alluding to a criminal conspiracy.',
        'Genre': 'Crime / Drama', 
        'Seasons': 5,
        'Air Date': 'September 21st 2015',
        'IMDB Score':  7.3, 


    },

    'kurulus osman': {
        
        'Description': 'Osman Bey, the son of Ertugrul Ghazi and Halime Sultan, struggles against the Byzantium and the Mongols while trying to establish control over the Ottoman dynasty.',
        'Genre': 'Action / Drama', 
        'Seasons': 3,
        'Air Date': 'November 20th 2019',
        'IMDB Score':  7.5, 
    },

    'how to get away with murder': {

        'Description': 'Annalise Keating, a criminal defence lawyer and professor, teaches a group of aspiring law students. However, their lives alter when they get entangled in an aberrant murder',
        'Genre': 'Legal Thriller', 
        'Seasons': 6,
        'Air Date': 'September 25th 2014',
        'IMDB Score':  8.1, 

    },


    'squid game': {
        'Description': 'Hundreds of cash-strapped contestants accept an invitation to compete in childrens games for a tempting prize, but the stakes are deadly.',
        'Genre': 'Thriller', 
        'Seasons': '1',
        'Air Date' : 'September 17th 2021',
        'IMDB Score': '8', 
    
    },

    'stranger things': {
        'Description': 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.',
        'Genre': 'drama', 
        'Seasons': '4',
        'Air Date' : 'July 15th 2016',
        'IMDB Score': '8.7', 
    
    },
    

    'unknown': {
        'Description': 'unknown',
        'Genre': 'unknown', 
        'Seasons': 'unkown',
        'Air Date' : 'unknown',
        'IMDB Score': 'unkown', 
    
    }

}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')  // the landing page is the index.html, so we send that file
})

app.get ('/api', (request,response)=>{

    response.json(tvShows)  // this is the api route we send json

})

app.get('/api/:showName', (request,response)=>{
    // responding when someone clicks on the API route
    // /:Showname is a query paramter so it returns whatever comes back what youves searched
    console.log(request.params.showName) // name of what you searched should come up in the console
    const series = request.params.showName.toLowerCase() // whatevers being searched is changed to lower case as our objects are all lowercase
    if(tvShows[series]){
        response.json(tvShows[series])
    }else{
        response.json(tvShows['unknown'])
    }
})  // if the object tvShows contains whatver the user searched for, which is now under the var name series then return the show object otherwise return unkown

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})

// the server is listening for a request through the environkent variable or local host
// heroku has its own port so we'll alow it to use that or ele it can use ours