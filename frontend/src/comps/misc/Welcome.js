import { useState, useEffect } from 'react'
import Button from './Button'
import DarkLogo from '../../assets/images/zenith-logo-dark.png'
import LightLogo from '../../assets/images/zenith-logo.png'

export default function Welcome({startChat, isLoading}){
    const characteristics = ['AI companion', 'friend', 'therapist', 'supporter', 'well-wisher']
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(true)

    useEffect(() => {
        const currentWord = characteristics[currentIndex]
        
        if (isTyping) {
            if (currentText.length < currentWord.length) {
                // Typing effect
                const timeout = setTimeout(() => {
                    setCurrentText(currentWord.slice(0, currentText.length + 1))
                }, 100) // Adjust typing speed here
                return () => clearTimeout(timeout)
            } else {
                // Wait before starting to erase
                const timeout = setTimeout(() => {
                    setIsTyping(false)
                }, 1000) // Wait time before erasing
                return () => clearTimeout(timeout)
            }
        } else {
            if (currentText.length === 0) {
                // Move to next word
                const nextIndex = (currentIndex + 1) % characteristics.length
                setCurrentIndex(nextIndex)
                setIsTyping(true)
            } else {
                // Erasing effect
                const timeout = setTimeout(() => {
                    setCurrentText(currentText.slice(0, -1))
                }, 50) // Adjust erasing speed here
                return () => clearTimeout(timeout)
            }
        }
    }, [currentText, currentIndex, isTyping])

    return (
        <div className="relative flex flex-col w-auto-full m-auto mx-2 lg:mx-auto lg:w-[380px] p-6 gap-6 lg:gap-8 bg-white-100 dark:bg-gray-400/50 lg:dark:bg-gray-400/25 border-[0.5px] border-slate-100 dark:border-gray-500 rounded-[32px] align-center inline-block z-2 purple-shadow overflow-visible">
            <div className="flex flex-col gap-3 w-full text-gray-800 dark:text-gray-800 items-center text-sm">
                <div className="flex flex-col w-full items-center gap-4" >
                    <img className="flex size-12 dark:hidden" src={LightLogo} alt='Zenith logo' />
                    <img className="flex size-12 hidden dark:block" src={DarkLogo} alt='Zenith logo' />

                    <div className="flex flex-col w-full items-center gap-1/2">
                        <p className="text-black dark:text-slate-200 text-xl">
                            Zenith
                        </p>
                        <p>
                            Your personal <span className="text-black dark:text-slate-300">{currentText}</span>
                            <span className="text-gray-700 dark:text-slate-200 animate-pulse">|</span>
                        </p>
                    </div>
                </div>

                <p className="text-center">
                    Feel free to share your thoughts about anything without the fear of judgement. Zenith is here to listen & support you through your struggles
                </p>
            </div>

            <Button label="Start chat" handleEvent={startChat} isLoading={isLoading}/>
        </div>
    )
}