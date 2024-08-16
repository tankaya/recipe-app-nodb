//const apiKey = process.env.API_KEY;
const apiKey = '8c453933e1c845e29ee52a750e9191be'

export async function searchRecipes (searchTerm: string, page:number) {
    if(!apiKey) {
        throw new Error("API Key not found")
    }

    const url = new URL('https://api.spoonacular.com/recipes/complexSearch');

    const queryParams = { // bu degerlerin string olmasi sart!
        apiKey: apiKey,
        query: searchTerm,
        number: '10', //string deger verdik
        offset: (page * 10).toString() // o yuzden string cevirdik

    }
    url.search = new URLSearchParams(queryParams).toString()

    try {
        const searchResponse = await fetch(url);
        const resultsJson = await searchResponse.json();
        return resultsJson;
    } catch (error) {
        console.log(error);
    }
}

export const getRecipeSummary = async (recipeId:string) => {
    if(!apiKey) {
        throw new Error("API Key not found")
    }

    const url = new URL(`https://api.spoonacular.com/recipes/${recipeId}/summary`);

    const params = {
        apiKey: apiKey,
    };

    url.search = new URLSearchParams(params).toString();
    
    const response = await fetch(url);
    const json = await response.json();

    return json;
}