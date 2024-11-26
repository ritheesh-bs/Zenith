import { useState, useEffect } from 'react'
import Button from './Button'
import Logo from '../../assets/images/zenith-logo.png'

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
        <div className="relative flex flex-col w-[380px] m-auto p-6 gap-8 bg-[#0B0B0B]/25 border-[0.5px] border-[#222222] rounded-[32px] align-center inline-block z-2 purple-shadow overflow-visible">
            <div className="flex flex-col gap-3 w-full text-[#666666] items-center text-sm">
                <div className="flex flex-col w-full items-center gap-4" >
                    <img className="flex size-12 " src={Logo} alt='Zenith logo' />

                    <div className="flex flex-col w-full items-center gap-1/2">
                        <p className="text-[#CCCCCC] text-xl">
                            Zenith
                        </p>
                        <p>
                            Your personal <span className="text-[#AAAAAA]">{currentText}</span>
                            <span className="text-[#CCCCCC] animate-pulse">|</span>
                        </p>
                    </div>
                </div>

                <p className="text-center">
                    Feel free to share your thoughts about anything without the fear of judgement. Zenith is here to listen & support you through your struggles
                </p>
            </div>

            {/* <button className="flex w-full rounded-full bg-white text-black p-3 h-[48px] justify-center items-center " onClick={startChat} disabled={isLoading}>
                {isLoading ? <DotLoadingicon /> : "Start chat "}
            </button> */}
            <Button label="Start chat" handleEvent={startChat} isLoading={isLoading}/>
        </div>
    )
}