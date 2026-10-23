export default function Recipeitem(props){
    return(
        <div className="recipe_card">
            <img src={props.recipe.image} alt={props.recipe.nom} />
            <h3>{props.recipe.nom}</h3>
            <span>{props.recipe.categorie}</span>
            <p>{props.recipe.description}</p>
            <div className="ingredi_list">
                {props.recipe.ingredients.map((ing, index) => (
                    <span key={index}>{ing}</span>
                ))}
            </div>
            <p>Difficulte: {props.recipe.difficulte}</p>
            <p>Créée: {props.recipe.date}</p>
            <div className="butt">
                <button>Modifier</button>
                <button>Dupliquer</button>
                <button>Supprimer</button>
            </div>
        </div>
    )
}