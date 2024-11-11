(function (){
    // selecting elelment from dom 
    const quotesEl =document.querySelector('.quotes')
    const loaderEl = documents.querySelector('.loader')

    // fetching quote from Api 

    const fetchQuote = async (page ,limit)=>{
        const response = await fetch(`https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`)

        if(!response.ok){
            throw new Error (`An Error occured :${response.status}`)
        }

        const data = await response.json()

        return data
    }
})();