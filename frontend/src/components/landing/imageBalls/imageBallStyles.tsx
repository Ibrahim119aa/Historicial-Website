import styled, { css } from 'styled-components';

// Types
import { BorderProps, HomeImageProps } from './types/styleTypes';

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0rem;
    pointer-events: none;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const SphereBox = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0rem;
`;

const CircleWrapperBase = styled.div`
    z-index: 1;
    border-radius: 50%;
    position: absolute;
    will-change: transform;
    border: 1px solid var(--primary-gold-color);
`;

export const BigCircleWrapper = styled(CircleWrapperBase)<BorderProps>`
    width: 30rem;
    height: 30rem;
    opacity: ${({ $opacity }) => $opacity && $opacity};
    transform: scale(${({ $opacity }) => $opacity && $opacity});
    ${({ $bottom, $top, $right }) => css`
        bottom: ${$bottom && $bottom.d};
        top: ${$top && $top.d};
        right: ${$right && $right.d};
    `}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${({ $bottom, $top, $right }) => css`
            bottom: ${$bottom && $bottom.t};
            top: ${$top && $top.t};
            right: ${$right && $right.t};
        `}
    }
`;

export const MediumCircleWrapper = styled(CircleWrapperBase)<BorderProps>`
    width: 16rem;
    height: 16rem;
    opacity: ${({ $opacity }) => $opacity && $opacity};
    transform: scale(${({ $opacity }) => $opacity && $opacity});
    ${({ $bottom, $top, $right }) => css`
        bottom: ${$bottom && $bottom.d};
        top: ${$top && $top.d};
        right: ${$right && $right.d};
    `}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${({ $bottom, $top, $right }) => css`
            bottom: ${$bottom && $bottom.t};
            top: ${$top && $top.t};
            right: ${$right && $right.t};
        `}
    }
`;

export const SmallCircleWrapper = styled(CircleWrapperBase)<BorderProps>`
    width: 11rem;
    height: 11rem;
    opacity: ${({ $opacity }) => $opacity && $opacity};
    transform: scale(${({ $opacity }) => $opacity && $opacity});
    ${({ $bottom, $top, $right }) => css`
        bottom: ${$bottom && $bottom.d};
        top: ${$top && $top.d};
        right: ${$right && $right.d};
    `}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${({ $bottom, $top, $right }) => css`
            bottom: ${$bottom && $bottom.t};
            top: ${$top && $top.t};
            right: ${$right && $right.t};
        `}
    }
`;

const CircleImageBase = styled.img`
    position: absolute;
    object-fit: contain;
    border-radius: 50%;
    will-change: transform;
    z-index: 0;
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
`;

export const BigCircleImage = styled(CircleImageBase)<HomeImageProps>`
    width: 29rem;
    height: 29rem;
    transform: scale(${({ $opacity }) => $opacity && $opacity});
    opacity: ${({ $opacity }) => $opacity && $opacity};

    ${({ $top, $bottom, $right }) => css`
        top: ${$top && $top.d};
        bottom: ${$bottom && $bottom.d};
        right: ${$right && $right.d};
    `}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${({ $top, $bottom, $right }) => css`
            top: ${$top && $top.t};
            bottom: ${$bottom && $bottom.t};
            right: ${$right && $right.t};
        `}
    }
`;

export const MediumCircleImage = styled(CircleImageBase)<HomeImageProps>`
    width: 15rem;
    height: 15rem;
    transform: scale(${({ $opacity }) => $opacity && $opacity});
    opacity: ${({ $opacity }) => $opacity && $opacity};

    ${({ $top, $bottom, $right }) => css`
        top: ${$top && $top.d};
        bottom: ${$bottom && $bottom.d};
        right: ${$right && $right.d};
    `}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${({ $top, $bottom, $right }) => css`
            top: ${$top && $top.t};
            bottom: ${$bottom && $bottom.t};
            right: ${$right && $right.t};
        `}
    }
`;

export const SmallCircleImage = styled(CircleImageBase)<HomeImageProps>`
    width: 10rem;
    height: 10rem;
    transform: scale(${({ $opacity }) => $opacity && $opacity});
    opacity: ${({ $opacity }) => $opacity && $opacity};

    ${({ $top, $bottom, $right }) => css`
        top: ${$top && $top.d};
        bottom: ${$bottom && $bottom.d};
        right: ${$right && $right.d};
    `}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${({ $top, $bottom, $right }) => css`
            top: ${$top && $top.t};
            bottom: ${$bottom && $bottom.t};
            right: ${$right && $right.t};
        `}
    }
`;
