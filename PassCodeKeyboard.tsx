import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import {
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from "react-native";
import { ZoomOut } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");

// Constants
const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "space", 0, "delete"];
const passcodeLength = 4;
const _keySize = width / 4;
const _passcodeSpacing = (width - 3 * _keySize) / 2;
const _passCodeSize = width / (passcodeLength + 2);
const _correctPasscode = "2024";

// Types
type Keys = typeof keys[number];
type PassCodeProps = {
  passcode: Keys[];
  isValid: boolean;
};

const PassCode = ({ passcode, isValid }: PassCodeProps) => {
  const animation = React.useRef(new Animated.Value(0)).current;
    
  React.useEffect(() => {
    if (!isValid && passcode.length === passcodeLength) {
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isValid, passcode, animation]);

  const interpolated = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -10, 10],
  });

  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: _passcodeSpacing,
        justifyContent: 'center',
      }}>
      {[...Array(passcodeLength).keys()].map((i) => {
        const isFilled = passcode[i] !== undefined;
        const backgroundColor = isFilled ? (isValid ? "#72C17F" : "#7a49a5") : "grey";
        // const backgroundColor = isValid ? "#72C17F" : "#7a49a5";
        return (
          <Animated.View
            key={`passcode-${i}-${passcode[i]}`}
            style={{
              width: _passCodeSize,
              height: _passCodeSize,
              borderRadius: _passCodeSize,
              backgroundColor: "rgba(0,0,0,0.1)",
              transform: [{ translateX: interpolated }],
              marginHorizontal: 10,
            }}>
            <View
              style={{
                backgroundColor,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                borderRadius: _passCodeSize,
              }}>
              <Text
                style={{
                  fontSize: _passCodeSize / 2,
                  color: "#fff",
                  fontWeight: "700",
                }}>
                {passcode[i]}
              </Text>
            </View>
          </Animated.View>
        );
      })}
    </View>
  );
};

const PassCodeKeyboard = ({ onPress }: { onPress: (key: Keys) => void }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: _passcodeSpacing,
        alignItems: "center",
      }}>
      {keys.map((key) => {
        if (key === "space") {
          return <View style={{ width: _keySize }} key="space" />;
        }
        return (
          <TouchableOpacity
            onPress={() => onPress(key)}
            key={key.toString()}
            style={{
              width: _keySize,
              height: _keySize,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <View>
              {key === "delete" ? (
                <MaterialCommunityIcons name="keyboard-backspace" size={42} color="rgba(0,0,0,0.3)" />
              ) : (
                <Text style={{ color: "#000", fontSize: 32, fontWeight: "700" }}>
                  {key}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function PassCodeV1() {
  const [passcode, setPasscode] = React.useState<Keys[]>([]);
  const [isValid, setIsValid] = React.useState<boolean>(false);
  const navigation = useNavigation();
  React.useEffect(() => {
    if (passcode.length === passcodeLength) {
        const isCorrect = passcode.join('') === _correctPasscode;
        setIsValid(isCorrect);
        if (isCorrect) {
          navigation.navigate('NewScreen');
        }
      }
  },[passcode, navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <StatusBar hidden /> */}
      <Text
        style={{
          fontSize: 16,
          paddingHorizontal: _passcodeSpacing * 2,
          textAlign: "center",
          color: "rgba(0,0,0,0.3)",
        }}>
        BTW, la contraseña es 2024
      </Text>
      <PassCode
        passcode={passcode}
        isValid={passcode.length !== passcodeLength || isValid}
      />
      <PassCodeKeyboard
        onPress={(key) => {
          if (key === "delete") {
            setPasscode((prev) =>
              prev.length === 0 ? [] : prev.slice(0, prev.length - 1)
            );
          } else if (passcode.length < passcodeLength) {
            setPasscode((prev) => [...prev, key]);
          }
        }}
      />
    </View>
  );
}
