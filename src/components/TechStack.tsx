import { lowerTechStackList, upperTechStackList } from '@/data';
import React from 'react'

const TechStack = () => {


    return (
        <section id="tech-stack" className="bg-black-100 py-20 w-full">

            <div className="flex flex-col gap-8 p-4 items-center justify-center">
                <h1 className="heading text-center  ">
                    My <span className="text-green-400">Tech Stacks</span>
                </h1>
                {/* Tech stack lists */}
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:gap-8">
                    {upperTechStackList.map((item, i) => (
                        <span
                            key={i}
                            className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 text-xs lg:text-base opacity-100 
                lg:opacity-100 rounded-full flex items-center justify-center bg-[#10132E]"
                        >
                            <img className="object-center object-contain w-3/4 h-3/4" src={item.icon} alt={item.name} />
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:gap-8">
                    {lowerTechStackList.map((item, i) => (
                        <span
                            key={i}
                            className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 text-xs lg:text-base opacity-100 
                lg:opacity-100 rounded-full flex items-center justify-center bg-[#10132E]"
                        >
                            <img className="object-center object-contain w-3/4 h-3/4" src={item.icon} alt={item.name} />
                        </span>
                    ))}
                </div>
            </div>

        </section>

    )
}

export default TechStack
