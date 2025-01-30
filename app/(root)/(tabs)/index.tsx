import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className="font-bold text-lg my-10" >Hello</Text>
      <Text>app/index.tsx to edit this screen.</Text>
    </View>
  );
}
