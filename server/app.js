const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { validateToken } = require("./JWTAuth.js");

const {
	getCollection,
	insertDocument,
	deleteDocument,
	getDocument,
	loginRoute,
} = require("./Routes");

const PORT = 5000;
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

//TODO JWT authentication middleware

//ROUTES//

//Login for JWT Token

app.post(`/login`, loginRoute);

//get collection
app.get(`/api/collection`, validateToken, getCollection);

//Get document
app.get(`/api/collection/:document`, validateToken, getDocument);

//Insert document in collection
app.post(`/api/collection/insert`, validateToken, insertDocument);

//delete document
app.delete(`/api/collection/:id`, validateToken, deleteDocument);

//Update document

app.listen(PORT, () => {
	console.log(`listen on port: ${PORT}`);
});

//
