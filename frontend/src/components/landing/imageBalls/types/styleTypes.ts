import { HTMLAttributes } from 'react';

export type BorderProps = HTMLAttributes<HTMLDivElement> & {
    $opacity: number;
    $top?: { d: string; t: string };
    $bottom?: { d: string; t: string };
    $right: { d: string; t: string };
};

export type HomeImageProps = {
    $opacity: number;
    $top?: { d: string; t: string };
    $right: { d: string; t: string };
    $bottom?: { d: string; t: string };
};
