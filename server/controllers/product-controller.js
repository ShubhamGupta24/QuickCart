const mongoose = require('mongoose');
// ----------------
//  Products logic
// ----------------

const getProducts = async (req, res) => {
    // Querying all documents from the collection
    try {
        const { category } = req.query;
        console.log('hi from product-controller body')
        console.log(category);

        // Accessing a specific collection directly
        const collection = mongoose.connection.db.collection(category);

        // Querying data from the collection
        const documents = await collection.find({}).toArray();

        console.log('Documents:', documents[0]);
        return res.status(200).json({ message: `Products ${category} doc `, documents })
    } catch (error) {
        return res.status(500).json(`Internal Server Error: ${error}`);
    }
}


module.exports = { getProducts };