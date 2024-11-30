import { useState, useEffect } from 'react';

export function useTheme() {
    // Use localStorage to persist theme preference and provide an initial value
    const [currentTheme, setCurrentTheme] = useState(() => {
        // Retrieve theme from localStorage, default to light mode
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    useEffect(() => {
        // Apply dark class to the document when theme changes
        if (currentTheme === 'dark') {
            document.getElementById("root").classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.getElementById("root").classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [currentTheme]);

    const switchTheme = () => {
        setCurrentTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return {
        currentTheme,
        switchTheme
    };
}