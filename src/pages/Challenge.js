import React from "react";
import {Container, FlexColumn, FlexRow, Svg} from "../utils/containers";
import {useParams} from "react-router-dom";
import {H1, Medium} from "../utils/fonts";
import theme from "../utils/theme";
import MobileChallengeMenu from "../components/elements/MobileChallengeMenu";
import Leaderboard from "../components/sections/Leaderboard";
import Readme from "../components/sections/Readme";
import HowTo from "../components/sections/HowTo";
import MyEntries from "../components/sections/MyEntries";
import Submit from "../components/sections/Submit";
import Media from "react-media";
import DesktopChallengeMenu from "../components/elements/DesktopChallengeMenu";
import {MINI_DESCRIPTION_RENDER, RENDER_ICO} from "../utils/globals";
import textIco from "../assets/text_ico.svg";
import getChallengeInfo from "../api/getChallengeInfo";

const Challenge = () => {
    const challengeName = useParams().challengeId;
    const [challenge, setChallenge] = React.useState([]);
    const [section, setSection] = React.useState(0);

    React.useEffect(() => {
        getChallengeInfo(setChallenge, challengeName);
    }, []);

    const sectionRender = () => {
        switch (section) {
            case 0:
                return <Leaderboard challengeName={challengeName}/>
            case 1:
                return <Readme/>
            case 2:
                return <HowTo/>
            case 3:
                return <MyEntries/>
            case 4:
                return <Submit/>
            default:
                return <Leaderboard challengeName={challengeName}/>
        }
    }

    const mobileRender = () => {
        return (
            <FlexColumn minHeight='100vh' gap='12px' alignmentY='flex-start' padding='66px 0 0 0'>
                <H1 as='h1' margin='0 0 8px 0' textAlign='center'>
                    {challenge.title}
                </H1>
                <MobileChallengeMenu setSection={setSection} section={section}/>
                <Container width='75%' height='1px' backgroundColor={theme.colors.dark}/>
                {sectionRender()}
            </FlexColumn>
        );
    }

    const desktopRender = () => {
        return (
            <>
                <DesktopChallengeMenu setSection={setSection} section={section}/>
                <FlexColumn minHeight='100vh' alignmentY='flex-start' padding='64px 0 64px 310px'>
                    <FlexRow gap='32px' margin='0 0 32px 0' padding='16px'>
                        <FlexColumn alignmentX='flex-start' gap='24px' maxWidth='500px'>
                            <H1 as='h1'>
                                {challenge.title}
                            </H1>
                            <Medium as='p'>
                                {MINI_DESCRIPTION_RENDER(challenge.description)}
                            </Medium>
                        </FlexColumn>
                        <Svg src={challenge.type ? RENDER_ICO(challenge.type) : textIco}
                             width='120px' height='120px' size='contain'/>
                    </FlexRow>
                    <Container width='55%' height='1px' backgroundColor={theme.colors.dark}/>
                    {sectionRender()}
                </FlexColumn>
            </>
        );
    }

    return (
        <>
            <Media query={theme.mobile}>
                {mobileRender()}
            </Media>
            <Media query={theme.desktop}>
                {desktopRender()}
            </Media>
        </>
    );
}

export default Challenge;