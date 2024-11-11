const searchInput = document.getElementById("searchInput")

const debounce =(funct ,delay)=>{
    let timeout
    return function(...args){
        clearTimeout(timeout)
        timeout=setTimeout(()=>{
            funct(...args)
        },delay)
    }
}
const myfunct =async(event)=>{
    const query = event.target.value
    console.log(`query:${query}`)

    const res= await fetch(`https://api.example.com/search?query=${query}`)

    const data =await res.json()
}
searchInput.addEventListener("input" ,debounce(myfunct ,500))