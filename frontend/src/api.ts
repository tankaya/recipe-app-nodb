export async function searchRecipes(searchTerm: string, page:number){
    const baseUrl = new URL("http://localhost:5000/api/recipes/search");
    baseUrl.searchParams.append("searchTerm", searchTerm)
    baseUrl.searchParams.append("page", String(page))

    const response = await fetch(baseUrl)
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return response.json();
}

export async function getRecipeSummary(recipeId: string) {
    const url = new URL(`http://localhost:5000/api/recipes/${recipeId}/summary`);
    const response = await fetch(url)

    if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json();
}