import { colors } from "../assets/colors.json"
import { ColorValue, useColorScheme } from "react-native"
import { useFonts, AdventPro_400Regular, AdventPro_700Bold, AdventPro_800ExtraBold } from "@expo-google-fonts/advent-pro"
type BaseAssets = {
    text: ColorValue
    surface: ColorValue
    primary: ColorValue
    background: ColorValue
    normFont: String
    boldFont: String

}
let assets: BaseAssets = undefined
export default function loadAssets(): BaseAssets {

    const colorScheme = useColorScheme()
    const [fontloaded] = useFonts({
        AdventPro_400Regular,
        AdventPro_800ExtraBold
    })
    if (fontloaded) {
        assets = {
            text: colors.text,
            surface: colors.surface,
            primary: colors.primary,
            background: colors.background,
            normFont: "AdventPro_400Regular",
            boldFont: "AdventPro_800ExtraBold"
        }
    }
    return assets

}
