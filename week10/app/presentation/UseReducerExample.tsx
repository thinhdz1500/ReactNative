import { useReducer } from "react";
import { Button, Text, View } from "react-native";

const initialState = { count: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":   
            return { count: state.count - 1 };
        default:
            break;
    }
}
export default function UseReducerEX() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <View>
            <Text>{state.count}</Text>
            <Button
                title="+"
                onPress={()=>{
                    dispatch({type:'increment'})
                }}
            />
            <Button
                title="-"
                onPress={()=>{
                    dispatch({type:'decrement'})
                }}
            />
        </View>

    );
}