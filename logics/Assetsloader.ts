import { colors } from "../assets/colors.json"
import { ColorValue, useColorScheme } from "react-native"
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins"
type BaseAssets = {
    text: ColorValue
    surface: ColorValue
    primary: ColorValue
    background: ColorValue
    normFont: String
    boldFont: String
    logo: any
    backgroundImage: any

}
let assets: BaseAssets = undefined
export default function loadAssets(): BaseAssets {
    const colorScheme = useColorScheme()
    const [fontloaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    })
    if (fontloaded) {
        if (assets === undefined) {
            assets = {
                text: colors.text,
                surface: colors.surface,
                primary: colors.primary,
                background: colors.background,
                normFont: "Poppins_400Regular",
                boldFont: "Poppins_700Bold",
                logo: require("../assets/logo.png"),
                backgroundImage:require("../assets/cte.webp")
            }
        }
    }
    return assets

}
