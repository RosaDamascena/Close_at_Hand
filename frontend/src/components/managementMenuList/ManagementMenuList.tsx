import Menu from "./Menu";
import { useNavigation } from "@react-navigation/native";

const ManagementMenuList = () => {
	const navigation = useNavigation<Navigation>();

	function handleLaundryPress() {
		navigation.navigate("laundryMain", { fromNoti: false });
	}

	function handleHistoryPress() {
		navigation.navigate("history");
	}
	return (
		<>
			<Menu
				title="빨래 바구니"
				onPress={handleLaundryPress}
				backgroundColor="PaleBlue"
				image={require("../../../assets/image/laundry_Basket.png")}
			/>
			<Menu
				title="옷 관리"
				onPress={handleHistoryPress}
				backgroundColor="PurpleBlue"
				image={require("../../../assets/image/diary.png")}
			/>
		</>
	);
};

export default ManagementMenuList;
