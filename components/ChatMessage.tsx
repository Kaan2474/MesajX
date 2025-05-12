import { Text, View, StyleSheet } from 'react-native';

type Props = {
    relation: string,
    message: string,
    time: string
}

export default function ChatMessage({ relation, message, time}: Props) {

    if (relation === "sender") {
        return (
            <View style={[styles.ChatContainer, {alignItems:"flex-start"}]}>
                <View style={styles.senderMessageTimeContainer}>
                    <View style={[styles.MessageContainer, {backgroundColor: "#4A5160"}]}>
                        <Text style={[styles.message, {color: "#E5E9F0"}]}>{message}</Text>
                    </View>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
          );
    }

    else if (relation === "receiver") {
        return (
            <View style={[styles.ChatContainer, {alignItems: "flex-end"}]}>
                <View style={styles.receiverMessageTimeContainer}>
                    <View style={[styles.MessageContainer, {backgroundColor: "#30C5FF"}]}>
                        <Text style={[styles.message, {color: "#fff"}]}>{message}</Text>
                    </View>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
          );
    }

    return (
        <></>
    );
}

const styles = StyleSheet.create({
    ChatContainer: {
        marginBottom: 20
    },
    senderMessageTimeContainer: {
        left: 10
    },
    receiverMessageTimeContainer: {
        right: 10
    },
    MessageContainer: {
        borderRadius: 20,
        padding: 15,
        maxWidth: 270,
    },
    message: {
        fontSize: 16,
    },
    time: {
        color: "#E5E9F0",
        left: 10,
        top: 2.75
    },
});
