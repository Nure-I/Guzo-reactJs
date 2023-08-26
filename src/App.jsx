import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Info from "./Components/Info/Info";
import Lounge from "./Components/Lounge/Lounge";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import Subscribe from "./Components/Subscribes/Subscribe";
import Support from "./Components/Support/Support";
import Travelers from "./Components/Travelers/Travelers";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Navbar />
			<Home />
			<Search />
			<Support />
			<Info />
			<Lounge />
			<Travelers />
			<Subscribe />
			<Footer />
		</div>
	);
}

export default App;
