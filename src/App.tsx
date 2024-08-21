import { Flex } from "antd";

import Navbar from "./navbar";
import Content from "./content";

function App() {
	return (
		<Flex vertical gap="middle">
			<Navbar />
			<Content />
		</Flex>
	);
}

export default App;
