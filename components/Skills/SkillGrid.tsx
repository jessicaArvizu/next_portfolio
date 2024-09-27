import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid';
import { gridItems } from '@/data';
import { SectionsEnum } from '../_enums/sectionsEnums';

const SkillGrid = () => {
  return (
    <section id={SectionsEnum.Skills} className='px-10 lg:px-20'>
      <BentoGrid>
        {gridItems.map(
          ({ id, title, description, className, titleClassName }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              titleClassName={titleClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}

export default SkillGrid;
