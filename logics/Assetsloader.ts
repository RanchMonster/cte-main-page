import { light, dark } from "../assets/colors.json"
import { ColorValue, useColorScheme } from "react-native"
import { useFonts, AdventPro_400Regular, AdventPro_700Bold,AdventPro_800ExtraBold } from "@expo-google-fonts/advent-pro"
type BaseAssets = {
    text: ColorValue
    surface: ColorValue
    primary: ColorValue
    background: ColorValue
    normFont: String
    boldFont: String

}
let assets: BaseAssets = undefined
let loaded: boolean = false
export default function loadAssets(): BaseAssets {

    const colorScheme = useColorScheme()
    const [fontloaded] = useFonts({
        AdventPro_400Regular,
        AdventPro_800ExtraBold
    })
    if (fontloaded) {

        if (colorScheme === 'light') {
            assets = {
                text: light.text,
                surface: light.surface,
                primary: light.primary,
                background: light.background,
                normFont: "AdventPro_400Regular",
                boldFont: "AdventPro_800ExtraBold"

            }
        } else {
            assets = {
                text: dark.text,
                surface: dark.surface,
                primary: dark.primary,
                background: dark.background,
                normFont: "AdventPro_400Regular",
                boldFont: "AdventPro_800ExtraBold"
            }
        }
    }
    return assets

}
