import mongoose from "mongoose";
import Plat from "./models/plat.model.js";
import Ingredient from "./models/ingredient.model.js";

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