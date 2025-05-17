import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hook/useGlobal';

// Helpers
import staticTexts from '../../../miscellaneous/staticTexts.json';

// Types
import { HomeStepperProps } from './types/componentTypes';
import { HomeStepperType } from '../../../page/Carousel/home/types/componentTypes';

// Styled Components
import {
    MainContainer,
    SemiCircle,
    NumLine,
    StepperBox,
    Step,
    Desc,
    IndicatorStep,
    TitleWrapper,
    LargeTitle,
    OtherSteps,
    StepperContainer,
    StyledButton,
    StyledLink,
    ImageSemiCircle,
} from './homeStepperStyles';

const HomeStepper: React.FC<HomeStepperProps> = ({ containerRef, divRefs, opacities }) => {
    const stepInfo = staticTexts.HOME_STEPPER as HomeStepperType;
    const { lang } = useGlobalData();
    const [visibleStepIndex, setVisibleStepIndex] = useState<number>(0);

    useEffect(() => {
        if (!containerRef?.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setVisibleStepIndex(index);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.7,
            }
        );

        const elements = Array.from(containerRef.current.children);
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [containerRef]);

    return (
        <MainContainer>
            <SemiCircle />

            {/* Top Number Line */}
            <OtherSteps $bottom={false}>
                <NumLine />
                <Step>
                    {stepInfo[visibleStepIndex - 1]?.num || stepInfo[stepInfo.length - 1]?.num}
                </Step>
            </OtherSteps>

            {/* Stepper Content */}
            <StepperContainer ref={containerRef}>
                {stepInfo.map((step, i) => (
                    <StepperBox key={i} ref={divRefs[i]} $opacity={opacities[i]}>
                        <IndicatorStep>{step.num}</IndicatorStep>
                        <TitleWrapper>
                            <LargeTitle $fontSize={step.title[lang].font}>
                                {step.title[lang].text}
                            </LargeTitle>
                            <Desc>
                                <div dangerouslySetInnerHTML={{ __html: step.desc.text[lang] }} />
                                <StyledLink to={step.desc.link}>
                                    <StyledButton $length={staticTexts.HOME_EXPLORE[lang].length}>
                                        {staticTexts.HOME_EXPLORE[lang]}
                                    </StyledButton>
                                </StyledLink>
                            </Desc>
                        </TitleWrapper>
                    </StepperBox>
                ))}

                <ImageSemiCircle src={stepInfo[visibleStepIndex]?.inner.big.img} />
            </StepperContainer>

            {/* Bottom Number Line */}
            <OtherSteps $bottom={true}>
                <Step>{stepInfo[visibleStepIndex + 1]?.num || stepInfo[0]?.num}</Step>
                <NumLine />
            </OtherSteps>
        </MainContainer>
    );
};

export default HomeStepper;
