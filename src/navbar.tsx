import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

export default function Navbar() {
	return (
		<Header className="navbar">
			<Title level={1} style={{ color: "#5A6E64", fontSize: 20 }}>
				Vehicle Management
			</Title>
		</Header>
	);
}
