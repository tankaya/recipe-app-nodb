import { useEffect, useState } from "react";
import { RecipeSummary } from "../types";
import * as RecipeAPI from '../api';


interface Props {
    recipeId: string;
    onClose: () => void;
}


function RecipeModal({recipeId, onClose}: Props) {

    const [recipeSummary, setRecipeSummary] = useState<RecipeSummary>();

    useEffect(()=>{
        async function fetchRecipeSummary() {
            try {
                const summaryRecipe = await RecipeAPI.getRecipeSummary(recipeId);
                setRecipeSummary(summaryRecipe)
            } catch (error) {
                console.log(error);
            }
        };

        fetchRecipeSummary();
    }, [recipeId]) // recipeId degistikce useEffect tekrardan run ediyor.

    if(!recipeSummary) {
        return <></>
    }

    return(
        <>
            <div className="overlay"></div>
            <div className="modal">
                <div className="modal-content">
                    <div className="model-header">
                        <h2>{recipeSummary?.title}</h2>
                        <span className="close-btn" onClick={onClose}>&times;</span>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: recipeSummary?.summary}}></p>
                </div>
            </div>
        
        
        </>
    );
};

export default RecipeModal;