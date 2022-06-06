"use strict";

export function createElementWithText(tag_name, text) {
  const tag = document.createElement(tag_name);
  const content = document.createTextNode(text);
  tag.appendChild(content);
  return tag;
}

// module.exports = {
//   createElementWithText: createElementWithText,
// };
