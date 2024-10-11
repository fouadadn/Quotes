const Generate = document.getElementById('Generate')
let selecta = document.getElementById('selecta')
let genre

function handlechangeSelect(){
    genre = selecta.value
    Generate.innerText = genre
    fetch(`https://api.api-ninjas.com/v1/${genre}?X-Api-Key=W2JzAVUPGhsGmIsJWLiVNUFy763tpv8ru00jRS6T`)
.then(Response => Response.json())
.then(Response => DisplayQuotes(Response[0]))
}
let author = document.getElementById('author')         

function DisplayQuotes(Response){
    let quot = document.getElementById('quot')
    // genre == 'quotes' ? quot.innerHTML = Response.quote  : quot.innerHTML = Response.joke 
    // genre == 'jokes' ? quot.innerHTML = Response.joke   :  quot.innerHTML = Response.quote
    if(genre == 'jokes'){
        quot.innerHTML = Response.joke 
        author.innerText = ''

    }else if(genre == 'facts'){
        quot.innerHTML = Response.fact
        author.innerText = ''
        
    }else{
        quot.innerHTML = Response.quote
        author.innerHTML = Response.author

    }
}
