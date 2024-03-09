import React from "react"
import { Text, StyleSheet } from "react-native"
import theme from "../theme"
import { useFonts } from "expo-font"

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    textAlingCenter: {
        textAlign: "center"
    }
})

export default function StyledText({ align, children, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyles = [
        styles.text,
        align === "center" && styles.textAlingCenter,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subheading,
        fontWeight === "bold" && styles.bold,
        style     
    ]
    const [fontsLoaded] = useFonts({
      Montserrat_400Regular,
      Montserrat_700Bold
    })
    if (!fontsLoaded) {
      return <Text>Loading...</Text>
    }
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}