import mongoose from "mongoose";

const recetteIngredientSchema = mongoose.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    unite: {
        type: String,
        required: true
    },
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true
    }
});


const recetteSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },
    
    description: {
        type: String,
        required: false,
        minLength: 3,
        trim: true
    },

    plat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plat',
        required: true
    },
    
    ingredients: [{
        type: recetteIngredientSchema
    }]

}, {
    collection: 'Recette',
    timestamps: true
});

const Recette = mongoose.model('Recette', recetteSchema);
export default Recette;