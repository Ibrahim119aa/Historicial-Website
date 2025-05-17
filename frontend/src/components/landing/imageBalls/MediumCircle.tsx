import React from 'react';

// Types
import { ImageBallProps } from './types/componentTypes';

// Styled components
import {
    MediumCircleWrapper,
    MediumCircleImage,
    MainContainer,
} from './imageBallStyles';

const MediumCircle: React.FC<ImageBallProps> = ({
    entry,
    opacities,
    index,
}) => {
    return (
        <MainContainer>
            <MediumCircleWrapper
                key={`medium_outer_${index}`}
                $opacity={opacities[index]}
                $bottom={entry.outer.medium.bottom}
                $right={entry.outer.medium.right}
                $top={entry.outer.medium.top}
            />
            <MediumCircleImage
                key={entry.inner.medium.img}
                src={entry.inner.medium.img}
                $opacity={opacities[index]}
                $bottom={entry.inner.medium.bottom}
                $right={entry.inner.medium.right}
                $top={entry.inner.medium.top}
            />
        </MainContainer>
    );
};

export default MediumCircle;
