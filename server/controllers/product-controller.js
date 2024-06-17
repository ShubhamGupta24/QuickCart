const mongoose = require('mongoose');

// ----------------
//  Products logic
// ----------------

const getProducts = async (req, res) => {
    // Querying all documents from the collection
    try {
        const { category } = req.query;

        // Accessing a specific collection directly
        const collection = mongoose.connection.db.collection(category);

        // Querying data from the collection
        const documents = await collection.find({}).toArray();

        
        return res.status(200).json({ message: `Products ${category} doc `, documents })
    } catch (error) {
        return res.status(500).json(`Internal Server Error: ${error}`);
    }
}


module.exports = { getProducts };