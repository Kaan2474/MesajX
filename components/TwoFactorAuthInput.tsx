import colors from '@/utils/colors';
import fonts from '@/utils/fonts';
import { useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type Props = {

};

export default function TwoFactorAuthInput({  }: Props) {

    const [filledInputStyle1, setFilledInputStyle1] = useState(styles.focusedInput);
    const [filledInputStyle2, setFilledInputStyle2] = useState(styles.emptyInput);
    const [filledInputStyle3, setFilledInputStyle3] = useState(styles.emptyInput);
    const [filledInputStyle4, setFilledInputStyle4] = useState(styles.emptyInput);

    const firstField = useRef(null);
    const secondField = useRef(null);
    const thirdField = useRef(null);
    const fourthField = useRef(null);

    

    const handleInput1 = (digit: string) => {
        if (digit.length >= 1) {
            setFilledInputStyle1(styles.filledInput)
            const field = secondField.current;
            field.focus();
            setFilledInputStyle2(styles.focusedInput)
        }
        else {
            setFilledInputStyle1(styles.focusedInput)
        }
    }
    const handleInput2 = (digit: string) => {
        if (digit.length >= 1) {
            setFilledInputStyle2(styles.filledInput)
            const field = thirdField.current;
            field.focus();
            setFilledInputStyle3(styles.focusedInput)
        }
        else {
            setFilledInputStyle2(styles.emptyInput)
            const field = firstField.current;
            field.focus();
            setFilledInputStyle1(styles.filledInput)
        }
    }
    const handleInput3 = (digit: string) => {
        if (digit.length >= 1) {
            setFilledInputStyle3(styles.filledInput)
            const field = fourthField.current;
            field.focus();
            setFilledInputStyle4(styles.focusedInput)
        }
        else {
            setFilledInputStyle3(styles.emptyInput)
            const field = secondField.current;
            field.focus();
            setFilledInputStyle2(styles.filledInput)
        }
    }
    const handleInput4 = (digit: string) => {
        if (digit.length >= 1) {
            setFilledInputStyle4(styles.filledInput)
        }
        else {
            setFilledInputStyle4(styles.emptyInput)
            const field = thirdField.current;
            field.focus();
            setFilledInputStyle3(styles.filledInput)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={filledInputStyle1} maxLength={1} keyboardType='numeric' onChangeText={handleInput1} ref={firstField} autoFocus={true}/>
            <TextInput style={filledInputStyle2} maxLength={1} keyboardType='numeric' onChangeText={handleInput2} ref={secondField}/>
            <TextInput style={filledInputStyle3} maxLength={1} keyboardType='numeric' onChangeText={handleInput3} ref={thirdField}/>
            <TextInput style={filledInputStyle4} maxLength={1} keyboardType='numeric' onChangeText={handleInput4} ref={fourthField}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    emptyInput: {
        height: 110,
        width: 77,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "#e5e9f040",
        backgroundColor: colors.twoFactorAuthEmptyBackgroundColor,
        marginHorizontal: 10,
        color: colors.twoFactorAuthEmptyText,
        fontSize: fonts.size.twoFactorAuthText,
        textAlign: "center"
    },
    filledInput: {
        height: 110,
        width: 77,
        borderRadius: 35,
        borderWidth: 0,
        borderColor: colors.appBackground,
        backgroundColor: colors.twoFactorAuthFilledBackgroundColor,
        marginHorizontal: 10,
        color: colors.twoFactorAuthFilledText,
        fontSize: fonts.size.twoFactorAuthText,
        textAlign: "center"
    },
    focusedInput: {
        height: 110,
        width: 77,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "#E5E9F0",
        backgroundColor: colors.twoFactorAuthEmptyBackgroundColor,
        marginHorizontal: 10,
        color: colors.twoFactorAuthFilledText,
        fontSize: fonts.size.twoFactorAuthText,
        textAlign: "center"
    }
})