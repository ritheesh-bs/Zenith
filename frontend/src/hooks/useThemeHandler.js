import { useState, useEffect } from 'react';

export function useTheme() {
    const [currentTheme, setCurrentTheme] = useState('');

    useEffect(() => {
        // Apply dark class to the document when theme changes
        if (currentTheme === 'dark') {
            document.getElementById("root").classList.add('dark');
        } else {
            document.getElementById("root").classList.remove('dark');
        }
    }, [currentTheme]);

    const switchTheme = () => {
        setCurrentTheme(prevTheme => prevTheme === 'dark' ? '' : 'dark');
    };

    return {
        currentTheme,
        switchTheme
    };
}