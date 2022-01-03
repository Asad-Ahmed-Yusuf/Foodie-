export default function getRecipes(){
    fetch("https://tasty.p.rapidapi.com/feeds/list?size=20&timezone=%2B0700&vegetarian=true&from=0", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": "0c3c02b5f5msh7eae81c67d80793p1cee7bjsn813c49585a12"
        }
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
        json.results.map(data => {
            return data;
        })

      })
    .catch(err => {
        console.error(err);
    });
    
}