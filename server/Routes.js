const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri =
	"mongodb+srv://BiffJonas:InfoBord@clustertest.ufs5xht.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

//all these routes need to be sanitized

const getCollection = async (req, res) => {
	try {
		const data = await client
			.db("test")
			.collection("posts")
			.find({})
			.toArray();
		res.json(data);
	} catch (err) {
		console.error(err);
	}
};

const getDocument = async (req, res) => {
	try {
		const { document } = req.params;
		console.log(document);
		const data = await client
			.db("test")
			.collection("posts")
			.find({ item: document })
			.toArray();
		res.json(data);
	} catch (err) {
		console.error(err);
	}
};

const insertDocument = async (req, res) => {
	try {
		const { document } = req.body;
		const data = await client
			.db("test")
			.collection("posts")
			.insertOne({ item: document });
		res.json(data);
	} catch (err) {
		console.log("Server: Could not insert document ");
	}
};

const deleteDocument = async (req, res) => {
	try {
		const { id } = req.params;
		console.log(id);
		const data = await client
			.db("test")
			.collection("posts")
			.deleteOne({ _id: new ObjectId(id) });

		if (data.deletedCount === 1) {
			return res
				.status(200)
				.json({ message: "Document sucessfully deleted" });
		} else return res.status(404).json({ message: "Document Not found" });
	} catch (err) {
		console.error(err);
	}
};

module.exports = { getCollection, getDocument, insertDocument, deleteDocument };
