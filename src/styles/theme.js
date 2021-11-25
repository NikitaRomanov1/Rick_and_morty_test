export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "426px",
  tablet: "637px",
  laptop: "1000px",
  laptopL: "1400px",
  desktop: "1900px",
  desktopL: "2250px",
};
export const device = {
  mobileS: `(min-width: ${size.mobileS}) and (max-width: ${size.tablet})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop}) and (max-width: ${size.desktopL})`,
  desktopL: `(min-width: ${size.desktopL})`,
};
