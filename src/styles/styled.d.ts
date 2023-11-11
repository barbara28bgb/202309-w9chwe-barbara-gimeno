import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      mainFont: string;
      background: string;
      secondaryFont: string;
      footer: string;
    };
    typography: {
      mainFontFamily: string;
      secondaryFontFamily: string;
      titleSize: string;
      textSize: string;
      nputTextSize: string;
      inputTitleSize: string;
      footerFont: string;
    };
  }
}
