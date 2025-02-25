import mongoose from "mongoose";
import Plat from "./models/plat.model.js";
import Ingredient from "./models/ingredient.model.js";
import Recette from "./models/recette.model.js";

async function connectDb() {
    const {MONGO_URI} = process.env;

    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connection to MongoDB : Success');
    }
    catch(err) {
        console.log('Connection to MongoDB : Fail !');
        console.log(err);

        throw err;
    }

    return mongoose.connection;
}
await connectDb();


async function addPlat() {
    const plat = new Plat({
        name: 'Salade'
    });
    await plat.save();
    console.log('Nouveau plat ajouté !');
}
// await addPlat();

async function addIngredients() {
    const i1 = new Ingredient({ name: 'Tomate', allergen: false });
    const i2 = new Ingredient({ name: 'Fromage', allergen: true });
    const i3 = new Ingredient({ name: 'Mâche' });

    await i1.save();
    await i2.save();
    await i3.save();
}
// await addIngredients();

async function addRecette() {

    const ingredients = await Ingredient.find({
        name: ['Tomate', 'Fromage']
    });

    const tempPlat = { name: 'Principal' };
    const plat = await Plat.findOneAndUpdate(tempPlat, tempPlat, { 
        upsert: true, 
        new: true 
    });
    // console.log(plat);

    const recette = new Recette({
        name: 'Demo R2',
        description: 'Exemple !',
        plat,
        ingredients: [
            {
                quantity: 5,
                unite: 'gr',
                ingredient: ingredients[0]
            },
            {
                quantity: 10,
                unite: 'gr',
                ingredient: ingredients[1]
            }
        ]
    });
    await recette.save();
    console.log('Recette ajoutée !');
}
// await addRecette();

async function getRecetteInfo() {

    const result = await Recette.findOne({ name: 'Demo R2'})
                                .populate('plat')
                                .populate('ingredients.ingredient');

    console.log(JSON.stringify(result, undefined, 4));
};
await getRecetteInfo();