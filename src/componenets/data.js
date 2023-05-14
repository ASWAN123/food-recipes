

const  api = "api.edamam.com/api/recipes/v2?type=public&q=food&app_id=fe917a7d&app_key=dbbfadc4f4049de4dfb35d6660423d9a" 

const fetchData  = async() => {
    const  data = await fetch(api) ;
    data.then((res) => res.json).then((res) => console.log(res))
}