import {
  getLGACode, getFrontCode, getMidCode
} from '<helpers>/utils';

const generatePlateNumber = (min, max, stateName) => {
  const lgaCode = getLGACode(stateName);
  if (lgaCode) {
    const fCode = getFrontCode();
    const mCode = getMidCode(min, max);
    const plateNumber = `${fCode} ${mCode} ${lgaCode}`;
    return plateNumber;
  }
  return false;
};

export default generatePlateNumber;
