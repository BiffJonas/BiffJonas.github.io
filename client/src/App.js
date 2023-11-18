import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import GetCollection from "./components/GetCollection";
import InsertDocument from "./components/InsertDocument";
import DeleteDocument from "./components/DeleteDocument";
import GetDocument from "./components/GetDocument";

function App() {
	//TODO sanitize all user inputs
	return (
		<div>
			<GetDocument />
			<GetCollection />
			<InsertDocument />
			<DeleteDocument />
		</div>
	);
}

export default App;
