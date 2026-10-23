export default function RecipeFilter(props) {
    return (
        <div className="recipe_filter">
            <input 
                type="text" 
                value={props.Recherch} 
                onChange={(e) => props.setRecherch(e.target.value)} 
            />
            <select 
                value={props.Selec} 
                onChange={(e) => props.setSelec(e.target.value)}
            >
                <option value="">Toutes catégories</option>
                <option value="Entrée">Entrée</option>
                <option value="Plat">Plat</option>
                <option value="Dessert">Dessert</option>
                <option value="Boisson">Boisson</option>
            </select>
        </div>
    );
}