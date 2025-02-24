import mongoose from "mongoose";

const platSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    collection: 'Plat',
    timestamps: true
});

const Plat = mongoose.model('Plat', platSchema);
export default Plat;