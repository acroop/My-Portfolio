import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem 
            id={item.id}
            title={item.title}
            description={item.description}
            key={item.id}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
          
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
