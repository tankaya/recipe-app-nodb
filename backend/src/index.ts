import express from 'express';
import cors from 'cors';
import * as RecipeAPI from './recipe-api';
//import "dotenv/config";

const app = express();

app.use(express.json())
app.use(cors())

app.get("/api/recipes/search", async (req, res) => {
    //GET localhost:5000/api/recipes/search?searchTerm=burgers&page=1

    const searchTerm = req.query.searchTerm as string; // .query.searchTerm bize 'burgers' i verecek
    const page = parseInt(req.query.page as string); // .query.page bize '1' i verecek
    const results = await RecipeAPI.searchRecipes(searchTerm, page);

    return res.json(results);
});

app.get("/api/recipes/:recipeId/summary", async (req, res)=>{
    const recipeId = req.params.recipeId;
    const results = await RecipeAPI.getRecipeSummary(recipeId);
    return res.json(results);
});

app.listen(5000, () => {
    console.log("server running on localhost:5000");
});
