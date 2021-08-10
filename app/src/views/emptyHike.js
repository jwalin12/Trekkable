import { NativeBaseProvider } from "native-base";

export default function EmptyHike() {
    const [mode, setMode] = useState('Basic');

    return (
        <NativeBaseProvider>
            <Text>Oh no! We couldn't find your hike</Text>
        </NativeBaseProvider>
    );
}
