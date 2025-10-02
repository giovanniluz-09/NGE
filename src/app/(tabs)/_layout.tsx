import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return(
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#1e40af',
                borderTopWidth: 0,
            },
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#9ca3af',
        }}
        >
        <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
            }}
            
            
        />

        </Tabs>
    )
}