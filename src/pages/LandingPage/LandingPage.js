import React from 'react';
import Motivation from './components/Motivation/Motivation';
import Csi from './components/Csi/Csi';
import Commercial from './components/Commercial/Commercial';
import Hero from './components/Hero/Hero';
import Partnerships from './components/Partnerships/Partnerships';
import LandingPageStyle from './LandingPageStyle';
import EntireScreenLoading from '../../components/generic/EntireScreenLoading/EntrieScreenLoading';
import {useDispatch} from 'react-redux';
import {loggedBarPositionHandler} from '../../redux/navigationSlice';
import {FlexColumn} from "../../utils/containers";
import Process from "./components/Process";
import Footer from "../../components/generic/Footer";

const LandingPage = () => {
    const dispatch = useDispatch();
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 1000);
        dispatch(loggedBarPositionHandler('100vw'));
    }, [dispatch]);

    React.useEffect(() => {
        const urlHash = window.location.hash;
        if (urlHash.length) {
            const element = document.getElementById(urlHash.substring(1));
            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
                const padding = 100;
                window.scrollTo({
                    top: offsetTop - padding,
                    behavior: 'smooth'
                });
            }
        }
    });

    if (show) {
        return (
            <LandingPageStyle>
                <Hero/>
                <FlexColumn
                    gap="150px"
                >
                    <Motivation/>
                    <Commercial/>
                    <Process/>
                    <Csi/>
                    <Partnerships/>
                </FlexColumn>
                <Footer/>
            </LandingPageStyle>
        );
    } else return <EntireScreenLoading/>;
};

export default LandingPage;
