import metricIco from '../assets/metric_ico.svg';
import coinsIco from '../assets/coins_ico.svg';
import baselineIco from '../assets/baseline_ico.svg';
import clockIco from '../assets/clock_ico.svg';
import cupIco from '../assets/cup_ico.svg';
import textIco from '../assets/text_ico.svg';
import imageIco from '../assets/image_ico.svg';
import tabularIco from '../assets/tabular_ico.svg';

const ELEMENTS_PER_PAGE = 12;
const MINI_DESCRIPTION_LENGTH = 70;
const API = process.env.REACT_APP_API;
const CHALLENGES_PAGE = '/challenges';
const CHALLENGE_PAGE = '/challenge';
const POLICY_PRIVACY_PAGE = '/policy-privacy';
const CSI_LINK = 'https://csi.amu.edu.pl/';
const ROOT_URL = window.location.origin;

const MINI_DESCRIPTION_RENDER = (description) => {
  if (description) {
    if (description.length <= MINI_DESCRIPTION_LENGTH) return description;
    return `${description.slice(0, MINI_DESCRIPTION_LENGTH)}...`;
  }
  return 'xxx';
};

const RENDER_ICO = (type) => {
  switch (type) {
    case 'metric':
      return metricIco;
    case 'prize':
      return coinsIco;
    case 'baseline':
      return baselineIco;
    case 'deadline':
      return clockIco;
    case 'bestScore':
      return cupIco;
    case 'text':
      return textIco;
    case 'image':
      return imageIco;
    case 'tabular':
      return tabularIco;
    default:
      return '';
  }
};

const CALC_PAGES = (objects, n = 1) => {
  if (objects.length === 0) return 1;
  return Math.ceil(objects.length / (ELEMENTS_PER_PAGE * n));
};

const RENDER_DEADLINE_TIME = (time) => {
  if (time) {
    const date = time.slice(0, 10);
    const hour = time.slice(11, 16);
    return `${date} ${hour}`;
  }
  return '';
};

const RENDER_WHEN = (when) => {
  return `${when.slice(0, 10)} ${when.slice(11, 16)}`;
};

const EVALUATIONS_FORMAT = (evaluate) => {
  if (Object.hasOwn(evaluate, 'score')) return evaluate.score.slice(0, 7);
  return evaluate.slice(0, 7);
};

const IS_MOBILE = () => {
  return document.body.clientWidth <= 1024;
};

export {
  ELEMENTS_PER_PAGE,
  API,
  CHALLENGES_PAGE,
  CHALLENGE_PAGE,
  MINI_DESCRIPTION_LENGTH,
  CSI_LINK,
  POLICY_PRIVACY_PAGE,
  ROOT_URL,
  MINI_DESCRIPTION_RENDER,
  RENDER_ICO,
  CALC_PAGES,
  RENDER_DEADLINE_TIME,
  IS_MOBILE,
  RENDER_WHEN,
  EVALUATIONS_FORMAT,
};
