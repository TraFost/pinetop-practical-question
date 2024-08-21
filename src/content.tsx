import { Button, Flex, Table } from "antd";
import type { TableColumnsType } from "antd";

interface DataType {
	key: React.Key;
	vehicleId: string;
	type: string;
	lockUnlock: string;
	currentSpeed: number;
	batteryLevel: number;
	status: string;
	location: string;
	lastUpdated: string;
}

const columns: TableColumnsType<DataType> = [
	{
		title: "Vehicle ID",
		dataIndex: "vehicleId",
		sorter: (a, b) => a.vehicleId.localeCompare(b.vehicleId),
	},
	{
		title: "Type",
		dataIndex: "type",
		filters: [
			{ text: "Scooter", value: "Scooter" },
			{ text: "Bike", value: "Bike" },
		],
	},
	{
		title: "Lock/Unlock",
		dataIndex: "lockUnlock",
		filters: [
			{ text: "Locked", value: "Locked" },
			{ text: "Unlocked", value: "Unlocked" },
		],
	},
	{
		title: "Current Speed",
		dataIndex: "currentSpeed",
		sorter: (a, b) => a.currentSpeed - b.currentSpeed,
	},
	{
		title: "Battery Level",
		dataIndex: "batteryLevel",
		sorter: (a, b) => a.batteryLevel - b.batteryLevel,
	},
	{
		title: "Status",
		dataIndex: "status",
		filters: [
			{ text: "Active", value: "Active" },
			{ text: "Inactive", value: "Inactive" },
		],
	},
	{
		title: "Location",
		dataIndex: "location",
		sorter: (a, b) => a.location.localeCompare(b.location),
	},
	{
		title: "Last Updated",
		dataIndex: "lastUpdated",
		sorter: (a, b) => a.lastUpdated.localeCompare(b.lastUpdated),
	},
];

const data: DataType[] = Array.from({ length: 10 }, (_, i) => ({
	key: i,
	vehicleId: `12345${i + 1}`,
	type: "Scooter",
	lockUnlock: Math.random() > 0.5 ? "Locked" : "Unlocked",
	currentSpeed: `${Math.floor(Math.random() * 100)} km/h`,
	batteryLevel: `${Math.floor(Math.random() * 100)}%`,
	status: Math.random() > 0.5 ? "Active" : "Inactive",
	location: `3.12345${i + 1}`,
	lastUpdated: new Date().toLocaleTimeString(),
})) as any;

export default function Content() {
	return (
		<main
			style={{
				padding: "1rem",
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
			}}
		>
			<Flex justify="end">
				<Button style={{ background: "#7adead" }}>+ New Vehicle</Button>
			</Flex>
			<Table columns={columns} dataSource={data} pagination={false} />
		</main>
	);
}
