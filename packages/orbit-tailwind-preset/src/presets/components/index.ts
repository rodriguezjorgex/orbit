import plugin from "tailwindcss/plugin";
import { convertHexToRgba, defaultTokens } from "@kiwicom/orbit-design-tokens";
import type { Config } from "tailwindcss";

import orbitFoundationPreset from "../foundation";
import {
  kebabCase,
  getComponentLevelToken,
  ExportedComponentLevelTokens,
} from "../foundation/helpers";

const COLORS: Partial<ExportedComponentLevelTokens>[] = [
  "button",
  "buttonLink",
  "drawer",
  "socialButton",
  "alert",
  "icon",
  "formElement",
  "badge",
  "tag",
  "textLink",
  "text",
  "loading",
  "heading",
  "countryFlag",
];

interface Options {
  /** default: true e.g. does not include default normalize styles */
  disablePreflight?: boolean;
  /** default: [] */
  content?: Config["content"];
}

const getForegroundColors = () => {
  return COLORS.reduce((acc, name) => {
    // eslint-disable-next-line no-param-reassign
    acc = {
      ...acc,
      ...getComponentLevelToken(name, "foreground"),
      ...getComponentLevelToken(name, "foregroundInverted"),
      ...getComponentLevelToken(name, "foregroundHover"),
      ...getComponentLevelToken(name, "foregroundActive"),
    };

    return acc;
  }, {});
};

const getBackgroundColors = () => {
  return COLORS.reduce((acc, name) => {
    // eslint-disable-next-line no-param-reassign
    acc = {
      ...acc,
      ...getComponentLevelToken(name, "background"),
      ...getComponentLevelToken(name, "backgroundHover"),
      ...getComponentLevelToken(name, "backgroundActive"),
    };

    return acc;
  }, {});
};

const cfg = (options?: Options): Config => {
  const { disablePreflight = true } = options || {};

  return {
    content: ["auto"],
    presets: [orbitFoundationPreset],
    corePlugins: {
      preflight: disablePreflight ? false : undefined,
    },
    theme: {
      extend: {
        fontSize: {
          "heading-display": defaultTokens.headingDisplayFontSize,
          "heading-display-subtitle": defaultTokens.headingDisplaySubtitleFontSize,
          "heading-title1": defaultTokens.headingTitle1FontSize,
          "heading-title2": defaultTokens.headingTitle2FontSize,
          "heading-title3": defaultTokens.headingTitle3FontSize,
          "heading-title4": defaultTokens.headingTitle4FontSize,
          "heading-title5": defaultTokens.headingTitle5FontSize,
          "heading-title6": defaultTokens.headingTitle6FontSize,
          "button-large": defaultTokens.buttonLargeFontSize,
          "button-normal": defaultTokens.buttonNormalFontSize,
          "button-small": defaultTokens.buttonSmallFontSize,
          "form-element-normal": defaultTokens.formElementNormalFontSize,
          "form-element-small": defaultTokens.formElementSmallFontSize,
        },
        fontWeight: {
          "heading-display": defaultTokens.headingDisplayFontWeight,
          "heading-display-subtitle": defaultTokens.headingDisplaySubtitleFontWeight,
          "heading-title1": defaultTokens.headingTitle1FontWeight,
          "heading-title2": defaultTokens.headingTitle2FontWeight,
          "heading-title3": defaultTokens.headingTitle3FontWeight,
          "heading-title4": defaultTokens.headingTitle4FontWeight,
          "heading-title5": defaultTokens.headingTitle5FontWeight,
          "heading-title6": defaultTokens.headingTitle6FontWeight,
          "table-head": String(defaultTokens.fontWeightTableHead),
        },
        lineHeight: {
          none: "1",
          text: defaultTokens.lineHeightText,
          heading: defaultTokens.lineHeightHeading,
          "heading-display": defaultTokens.headingDisplayLineHeight,
          "heading-display-subtitle": defaultTokens.headingDisplaySubtitleLineHeight,
          "heading-title1": defaultTokens.headingTitle1LineHeight,
          "heading-title2": defaultTokens.headingTitle2LineHeight,
          "heading-title3": defaultTokens.headingTitle3LineHeight,
          "heading-title4": defaultTokens.headingTitle4LineHeight,
          "heading-title5": defaultTokens.headingTitle5LineHeight,
          "heading-title6": defaultTokens.headingTitle6LineHeight,
          checkbox: defaultTokens.heightCheckbox,
        },
        height: {
          "icon-small": defaultTokens.heightIconSmall,
          "icon-medium": defaultTokens.heightIconMedium,
          "icon-large": defaultTokens.heightIconLarge,
          "input-normal": defaultTokens.heightInputNormal,
          separator: defaultTokens.heightSeparator,
          "button-small": defaultTokens.heightButtonSmall,
          "button-normal": defaultTokens.heightButtonNormal,
          "button-large": defaultTokens.heightButtonLarge,
          checkbox: defaultTokens.heightCheckbox,
          "country-flag-small": defaultTokens.countryFlagSmallHeight,
          "country-flag-medium": defaultTokens.countryFlagMediumHeight,
        },
        minHeight: {
          "icon-small": defaultTokens.heightIconSmall,
          "icon-medium": defaultTokens.heightIconMedium,
          "icon-large": defaultTokens.heightIconLarge,
          "input-normal": defaultTokens.formBoxNormalHeight,
          "button-small": defaultTokens.formBoxSmallHeight,
          "button-normal": defaultTokens.formBoxNormalHeight,
          "button-large": defaultTokens.formBoxLargeHeight,
          checkbox: defaultTokens.iconSmallSize,
        },
        maxHeight: {
          "illustration-extra-small": defaultTokens.illustrationExtraSmallHeight,
          "illustration-small": defaultTokens.illustrationSmallHeight,
          "illustration-medium": defaultTokens.illustrationMediumHeight,
          "illustration-large": defaultTokens.illustrationLargeHeight,
          "illustration-display": defaultTokens.illustrationDisplayHeight,
        },
        width: {
          "icon-small": defaultTokens.iconSmallSize,
          "icon-medium": defaultTokens.iconMediumSize,
          "icon-large": defaultTokens.iconLargeSize,
          "modal-extra-small-width": defaultTokens.modalExtraSmallWidth,
          "modal-small-width": defaultTokens.modalSmallWidth,
          "modal-normal-width": defaultTokens.modalNormalWidth,
          "modal-large-width": defaultTokens.modalLargeWidth,
          "modal-extra-large-width": defaultTokens.modalExtraLargeWidth,
          "button-small": defaultTokens.heightButtonSmall,
          "button-normal": defaultTokens.heightButtonNormal,
          "button-large": defaultTokens.heightButtonLarge,
          checkbox: defaultTokens.widthCheckbox,
          "country-flag-small": defaultTokens.countryFlagSmallWidth,
          "country-flag-medium": defaultTokens.countryFlagMediumWidth,
        },
        minWidth: {
          "icon-small": defaultTokens.iconSmallSize,
          "icon-medium": defaultTokens.iconMediumSize,
          "icon-large": defaultTokens.iconLargeSize,
          checkbox: defaultTokens.iconSmallSize,
          "dialog-width": defaultTokens.dialogWidth,
        },
        padding: {
          ...getComponentLevelToken("button", "padding"),
          ...getComponentLevelToken("formElement", "padding"),
          table: defaultTokens.paddingTable,
          "button-padding-xs": defaultTokens.buttonPaddingXSmall,
          "button-padding-sm": defaultTokens.buttonPaddingSmall,
          "button-padding-md": defaultTokens.buttonPaddingNormal,
          "button-padding-lg": defaultTokens.buttonPaddingLarge,
        },
        borderRadius: {
          "dialog-desktop": defaultTokens.dialogBorderRadiusDesktop,
          "dialog-mobile": defaultTokens.dialogBorderRadiusMobile,
          "button-circled-small": defaultTokens.heightButtonSmall,
          "button-circled-normal": defaultTokens.heightButtonNormal,
          "button-circled-large": defaultTokens.heightButtonLarge,
          badge: defaultTokens.badgeBorderRadius,
        },
        borderColor: {
          ...Object.keys(defaultTokens).reduce((acc, token) => {
            if (token.startsWith("borderColor")) {
              const name = kebabCase(token).replace("border-color-", "");
              return { ...acc, [name]: defaultTokens[token] };
            }
            // eslint-disable-next-line no-param-reassign
            acc = {
              ...acc,
              ...getComponentLevelToken(token as ExportedComponentLevelTokens, "borderColor"),
            };

            return acc;
          }, {}),
          "radio-disabled": defaultTokens.paletteCloudNormal,
          white: defaultTokens.paletteWhite,
          "radio-hover": defaultTokens.paletteBlueLightActive,
          "radio-active": defaultTokens.paletteBlueNormal,
          "form-element": defaultTokens.formElementBorderColor,
          "form-element-hover": defaultTokens.formElementBorderColorHover,
          "form-element-active": defaultTokens.formElementBorderColorActive,
          "form-element-focus": defaultTokens.formElementBorderColorFocus,
          "form-element-error": defaultTokens.formElementBorderColorError,
        },
        backgroundImage: {
          "button-bundle-basic-background": defaultTokens.buttonBundleBasicBackground,
          "button-bundle-basic-background-hover": defaultTokens.buttonBundleBasicBackgroundHover,
          "button-bundle-basic-background-active": defaultTokens.buttonBundleBasicBackgroundActive,
          "button-bundle-medium-background": defaultTokens.buttonBundleMediumBackground,
          "button-bundle-medium-background-hover": defaultTokens.buttonBundleMediumBackgroundHover,
          "button-bundle-medium-background-active":
            defaultTokens.buttonBundleMediumBackgroundActive,
          "button-bundle-top-background": defaultTokens.buttonBundleTopBackground,
          "button-bundle-top-background-hover": defaultTokens.buttonBundleTopBackgroundHover,
          "button-bundle-top-background-active": defaultTokens.buttonBundleTopBackgroundActive,
          "badge-bundle-basic-background": defaultTokens.badgeBundleBasicBackground,
          "badge-bundle-medium-background": defaultTokens.badgeBundleMediumBackground,
          "badge-bundle-top-background": defaultTokens.badgeBundleTopBackground,
        },
        boxShadow: {
          "button-focus": defaultTokens.boxShadowButtonFocus,
          "button-active": `inset 0 0 6px 3px ${convertHexToRgba(
            defaultTokens.paletteInkDark,
            15,
          )}`,
          "button-active-pale": `inset 0 0 6px 3px ${convertHexToRgba(
            defaultTokens.paletteInkDark,
            8,
          )}`,
          "country-flag": defaultTokens.countryFlagShadow,
        },
        keyframes: {
          "slow-pulse": {
            "0%": { opacity: "1" },
            "50%": { opacity: "0.3" },
            "100%": { opacity: "1" },
          },
          spinner: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
          loader: {
            "0%": { opacity: "0.3", transform: "translateY(0px)" },
            "20%": { opacity: "1", transform: "translateY(-3px)" },
            "40%": { opacity: "0.3", transform: "translateY(0px)" },
            "100%": { opacity: "0.3", transform: "translateY(0px)" },
          },
          pulse: {
            "0%": { transform: "scale(1)" },
            "50%": { transform: "scale(2)" },
            "100%": { transform: "scale(1)" },
          },
        },
        animation: {
          "pulse-slow": "slow-pulse 2s ease-in-out 0.5s infinite",
          spinner: "spinner 0.75s linear infinite",
          loader: "loader 1.25s infinite ease-in-out",
          pulse: "pulse 1.5s infinite",
        },
        textColor: Object.entries(getForegroundColors()).reduce((acc, [key, value]) => {
          const name = key.replace("text-", "");
          return { ...acc, [name]: value };
        }, {}),
        backgroundColor: getBackgroundColors(),
      },
    },
    plugins: [
      plugin(({ addVariant }) => {
        return (
          addVariant("not-last", "&:not(:last-child)"),
          addVariant("not-first", "&:not(:first-child)"),
          addVariant("type-even", "&:nth-of-type(even)"),
          addVariant("type-odd", "&:nth-of-type(odd)"),
          addVariant("target-blank", "&[target='_blank']"),
          addVariant(
            "safari",
            "@supports (-webkit-touch-callout: none) and (not (translate: none))",
          )
        );
      }),
    ],
  };
};

export default cfg;
