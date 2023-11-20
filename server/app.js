const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const cors = require("cors");
const {
	getCollection,
	insertDocument,
	deleteDocument,
	getDocument,
} = require("./Routes");

const PORT = 5000;

app.use(cors());
app.use(express.json());

//TODO JWT authentication middleware

//ROUTES//

//get collection
app.get(`/api/collection`, getCollection);

//Get document
app.get(`/api/collection/:document`, getDocument);

//Insert document in collection
app.post(`/api/collection/insert`, insertDocument);

//delete document
app.delete(`/api/collection/:id`, deleteDocument);

//Update document

app.listen(PORT, () => {
	console.log(`listen on port: ${PORT}`);
});

//
