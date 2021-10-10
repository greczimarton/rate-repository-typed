import { Platform } from "react-native";

const Theme = {
    Colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        appBarBg: '#24292e',
        appBarTextColor: '#FFFFFF'
    },
    Heading: {
        color: '#FFFFFF',
        fontSize: 24,
        paddingBottom: 10,
        paddingTop: 10
    },
    RepoItem: {
        container: {
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column'
        },
        item: {

        }

    },
    fontSizes: {
        body: 14,
        subheading: 16,
        heading: 24
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
};

export default Theme;