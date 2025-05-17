import React from 'react';

// Types
import { ImageBallProps } from './types/componentTypes';

// Styled components
import {
    BigCircleWrapper,
    BigCircleImage,
    MainContainer,
} from './imageBallStyles';

const BigCircle: React.FC<ImageBallProps> = ({ entry, opacities, index }) => {
    return (
        <MainContainer>
            <BigCircleWrapper
                $opacity={opacities[index]}
                $bottom={entry.outer.big.bottom}
                $right={entry.outer.big.right}
                $top={entry.outer.big.top}
            />
            <BigCircleImage
                src={entry.inner.big.img}
                $opacity={opacities[index]}
                $bottom={entry.inner.big.bottom}
                $right={entry.inner.big.right}
                $top={entry.inner.big.top}
            />
        </MainContainer>
    );
};

export default BigCircle;
