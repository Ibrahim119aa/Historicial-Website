import {
    InnerBall,
    OuterBall,
} from '../../../../landingPages/home/types/componentTypes';

export type ImageBallProps = {
    index: number;
    entry: {
        outer: OuterBall;
        inner: InnerBall;
    };
    opacities: number[];
};
