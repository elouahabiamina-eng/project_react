import { useState } from "react";

export default function RecipeForm(props) {
    const [nom, setNom] = useState(props.recipeToEdit ? props.recipeToEdit.nom : "");
    const [categorie, setCategorie] = useState();
    const [description, setDescription] = useState();
    const [ingredients, setIngredients] = useState();
    const [difficulte, setDifficulte] = useState();
    const [image, setImage] = useState(props.recipeToEdit ? props.recipeToEdit.image : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipeData = {
            nom,
            categorie,
            description,
            ingredients,
            difficulte: ,
            date:,
            image
        };

    };

    return (
        <div className="modal-overlay">
            <div className="recipe-form-container">
                <h2>{props.recipeToEdit ? "Modifier" : "Nouvelle recette"}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nom</label>
                        <input 
                            type="text" 
                            value={nom} 
                            onChange={(e) => setNom(e.target.value)} 
                        />
                    </div>
                    
                    <div>
                        <label>Catégorie</label>
                        <select 
                            value={categorie} 
                            onChange={(e) => setCategorie(e.target.value)}
                        >
                            <option value="Entrée">Entrée</option>
                            <option value="Plat">Plat</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Boisson">Boisson</option>
                        </select>
                    </div>

                    <div>
                        <label>Ingrédients</label>
                        {ingredients.map((ing, index) => (
                            <div key={index}>
                                <input 
                                    type="text" 
                                    value={ing} 
                                    onChange={(e) => {
                                        const newIngs = [...ingredients];
                                        newIngs[index] = e.target.value;
                                        setIngredients(newIngs);
                                    }} 
                                />
                                {ingredients.length > 1 && (
                                    <button 
                                        type="button" 
                                        onClick={() => setIngredients(ingredients.filter((_, i) => i !== index))}
                                    >
                                        X
                                    </button>
                                )}
                            </div>
                        ))}
                        <button 
                            type="button" 
                            onClick={() => setIngredients([...ingredients, ""])}
                        >
                            + Ingrédient
                        </button>
                    </div>

                    <div>
                        <label>Difficulté</label>
                        <input 
                            type="range" 
                            min="1" 
                            max="5" 
                            value={difficulte} 
                            onChange={(e) => setDifficulte(e.target.value)} 
                        />
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div>
                        <label>Image URL</label>
                        <input 
                            type="text" 
                            value={image} 
                            onChange={(e) => setImage(e.target.value)} 
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit">Enregistrer</button>
                        <button type="button" onClick={props.onClose}>Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    );
}