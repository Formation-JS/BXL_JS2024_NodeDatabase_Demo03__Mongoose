import mongoose from "mongoose";

const ingredientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        trim: true
    },
    allergen: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    collection: 'Ingredient'
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
export default Ingredient;