import { library } from "@fortawesome/fontawesome-svg-core";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';

export const prefixTypes = {
  duotone: "fad",
  regular: "far",
  light: "fal",
  solid: "fas",
  brands: "fab"
};

export const configureFontAwesomePro = ( prefixType = "regular" ) => {
  if (prefixTypes[prefixType]) {
    FontAwesomeConfig.familyPrefix = prefixTypes[prefixType];
  }

  library.add( fab, fad, fal, far, fas );
}
