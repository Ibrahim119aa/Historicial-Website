import { RefObject } from 'react';

export type HomeStepperProps = {
    containerRef: RefObject<HTMLDivElement>;
    divRefs: RefObject<HTMLDivElement>[];
    opacities: number[];
};
