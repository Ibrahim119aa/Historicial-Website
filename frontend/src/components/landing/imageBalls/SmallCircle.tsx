import React from 'react';

// Types
import { ImageBallProps } from './types/componentTypes';

// Styled components
import {
    SmallCircleWrapper,
    SmallCircleImage,
    MainContainer,
} from './imageBallStyles';

const SmallCircle: React.FC<ImageBallProps> = ({ entry, opacities, index }) => {
    return (
        <MainContainer>
            <SmallCircleWrapper
                key={`small_outer_${index}`}
                $opacity={opacities[index]}
                $bottom={entry.outer.small.bottom}
                $right={entry.outer.small.right}
                $top={entry.outer.small.top}
            />
            <SmallCircleImage
                key={entry.inner.small.img}
                src={entry.inner.small.img}
                $opacity={opacities[index]}
                $bottom={entry.inner.small.bottom}
                $right={entry.inner.small.right}
                $top={entry.inner.small.top}
            />
        </MainContainer>
    );
};

export default SmallCircle;
