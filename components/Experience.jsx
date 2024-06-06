import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

const Experience = () => {
  return (
    <div className='py-20' id="Testimonials">
        <h1 className='heading'>

        My 
        <span className='text-purple'> work Experience</span>
        </h1>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
            {workExperience.map((card) =>(
                
                <Button key={card.id} duration={Math.floor(Math.random() *10000) + 10000} className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                    <div className='flex lg:flex-row flex-col items-start p-3 py-6 md:p-5 lg:p-10 lg:items-center'>
                        <img src={card.thumbnail} alt={card.thumbnail} className=''/>

                        <div className='lg:ms-5'>
                            <h1 className='flex text-start text-xl md:text-2xl font-black'>
                                {card.title}
                            </h1>

                            <p className='flex text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                        </div>
                    </div>

                </Button>
            ))}

        </div>
    </div>
  )
}

export default Experience