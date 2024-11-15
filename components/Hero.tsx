import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenereteEffect'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
         <div>
            {/* <Spotlight className="top-40 left-10
            md:-left-32 md:-top-20 h-screen" fill="white"/> */}
            {/* <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="white"/> */}
            <Spotlight className="top-28 left-80 h-[90vh] w-[50vw] opacity-10" fill="white"/>
            <Spotlight className="-top-50 right-[340px] h-[95vh] w-[40vw] opacity-30" fill="white"/>
        </div> 
            <div className="h-screen w-full dark:bg-black bg-white dark:bg-dot-white-100/[0.3] bg-dot-/[0.2]
            flex items-center justify-center absolute top-0 left-0">
               
               <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white
               [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
                
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="'max--[89vw] md:max-w-2xl lg:max-w-[60vw]
                flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs
                    text-center text-white-100
                    max-q-80">Dinamic web Magic with Next.js
                    </h2>
                    <TextGenerateEffect
                      className="text-center text-[40px] md:text-5xl lg:text-6xl"
                      words="Transforming concepts into Seamless User Experiences"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg
                    lg:text-2xl">
                        Hi, I&apos;m Josip, a Next.js Developer based in Stuttgart.

                    </p>

                    <a href="#about">
                        <MagicButton
                          title="Show my work"
                          icon={<FaLocationArrow />}
                          position='right'
                        />
                    </a>

                </div>

            </div>
    </div>
  )
}

export default Hero