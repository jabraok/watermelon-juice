import Component from '@ember/component';
import { notEmpty } from '@ember/object/computed';
import { style } from "watermelon-juice/utils/styles";
import colors from "watermelon-juice/constants/colors";
import Clickable from "watermelon-juice/mixins/clickable";

export default Component.extend(Clickable, {
  tagName: "a",

  classNames: ["row"],
  classNameBindings: ["disabled", "flat:flat:card-1"],
  attributeBindings:["componentStyles:style", "href", "type"],

  hasLabel: notEmpty("label"),

  @style("size", "padding", "color", "backgroundColor", "borderRadius")
  componentStyles(
    size = "1",
    padding,
    color = "white",
    backgroundColor = colors.SKY_BLUE,
    borderRadius = 0
  ) {

    padding = padding === undefined? size: padding;
    return {
      "padding": `${padding}em`,
      "font-size": `${size/2}em`,
      "border-radius": `${borderRadius}px`,
      "color": color,
      "background-color": backgroundColor
    };
  }
});
