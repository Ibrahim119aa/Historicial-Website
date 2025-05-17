import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
    height: calc(100svh - var(--header-height));

    @media (max-width: 480px) {
        height: 100svh;
    }
`;

export const SemiCircle = styled.div`
    position: absolute;
    left: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: var(--primary-gold-color);

    &::before {
        content: '';
        height: 3rem;
        width: 3rem;
        background: var(--primary-black-color);
        position: absolute;
        left: -1.5rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        display: none;
    }
`;

export const IndicatorStep = styled.div`
    font-size: 1.5rem;
    color: var(--regular-white-color);
    font-family: var(--fancy-font);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2rem;
    }
`;

export const NumLine = styled.div`
    background: var(--primary-gold-color);
    width: 0.05rem;
    height: 4rem;
    margin-left: 0.5%;

    @media (max-width: 1024px) {
        height: 8rem;
    }
`;

export const StepperContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: scroll;
    padding-left: 6%;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }

    @media (max-width: 480px) {
        padding: var(--page-padding);
        scroll-snap-type: mandatory;
        scroll-snap-type: y mandatory;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding-left: 10%;
        scroll-snap-type: mandatory;
        scroll-snap-type: y mandatory;
    }
`;

export const StepperBox = styled.div<{ $opacity: number }>`
    width: 100%;
    height: 100%;
    display: flex;
    opacity: ${({ $opacity }) => $opacity && $opacity};

    @media (max-width: 1024px) {
        scroll-snap-align: start;
        opacity: ${({ $opacity }) => $opacity && $opacity + 0.5};
    }
`;

export const Step = styled.div`
    font-size: 1.2rem;
    color: var(--secondary-white-color);
    font-family: var(--fancy-font);
    transition: 500ms ease-in-out;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100svh;

    @media (max-width: 480px) {
        justify-content: flex-start;
        max-height: 90svh;
        margin: 0rem;
        gap: var(--text-segment-gap);
        padding: var(--text-segment-gap) 0rem;
    }
`;

export const LargeTitle = styled.div<{ $fontSize: number }>`
    font-weight: bold;
    color: #ffffffd4;
    width: 45rem;
    overflow-wrap: break-word;
    text-transform: uppercase;
    font-family: var(--fancy-font);
    text-shadow: 1rem 0rem 0rem var(--primary-shadow-color);
    ${({ $fontSize }) =>
        $fontSize
            ? css`
                  opacity: 1;
                  font-size: calc(${$fontSize} * var(--stepper-text));
                  line-height: calc(
                      ${$fontSize} * var(--stepper-text) - 0.25rem
                  );
              `
            : css`
                  opacity: 0;
              `};

    @media (max-width: 480px) {
        width: 100%;
        text-shadow: 0.5rem 0rem 0rem var(--primary-shadow-color);
    }
`;

export const Desc = styled.div`
    width: 40%;
    margin-left: 10%;
    position: relative;
    margin-top: 2rem;
    font-size: var(--body-text);
    color: var(--secondary-white-color);
    line-height: var(--body-text-line-height);

    @media (max-width: 480px) {
        margin: 0rem;
        width: 100%;
        padding-left: calc(var(--page-padding) * 2);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 50%;
        margin-left: 3rem;
        font-size: 1.3rem;
    }
`;

export const OtherSteps = styled.div<{ $bottom?: boolean }>`
    gap: 0.5rem;
    width: 3%;
    height: 20%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    ${({ $bottom }) => ($bottom ? 'bottom: 0rem' : 'top: 0rem')};
    justify-content: ${({ $bottom }) => ($bottom ? 'end' : 'start')};

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-left: 10%;
    }
`;

export const StyledButton = styled.div<{ $length: number }>`
    height: fit-content;
    font-weight: 500;
    padding-bottom: 0.25rem;
    margin-top: var(--text-segment-gap);
    color: var(--primary-gold-color);
    width: ${({ $length }) => `calc(${$length} * 0.85rem)`};

    &::before {
        content: '';
        position: absolute;
        height: 0.1rem;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        background-color: var(--regular-white-color);
        transform-origin: bottom right;
        transition: transform 0.3s ease-in-out;
        width: ${({ $length }) => `calc(${$length} * 0.85rem)`};
    }

    &:hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    &:hover {
        border-right: 0.1rem solid var(--regular-white-color);
    }

    @media (max-width: 480px) {
        border-right: 0.1rem solid var(--regular-white-color);
        border-bottom: 0.1rem solid var(--regular-white-color);

        &::before {
            display: none;
        }

        &:hover {
            border-right: 0.1rem solid var(--regular-white-color);
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-right: 0.1rem solid var(--regular-white-color);
        border-bottom: 0.1rem solid var(--regular-white-color);

        &::before {
            display: none;
        }

        &:hover {
            border-right: 0.1rem solid var(--regular-white-color);
        }
    }
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
`;

export const ImageSemiCircle = styled.img`
    display: none;

    @media (max-width: 480px) {
        display: flex;
        position: absolute;
        bottom: -3.25rem;
        right: -2rem;
        border-radius: 50%;
        width: 100svw;
        height: auto;
        padding: 0.5rem;
        z-index: -1;
        opacity: 0.3;
        border: 1px solid var(--primary-gold-color);
    }
`;
