export function renderLabel(str: string): string {
  let output = "";
  let len = str.length;
  let char;

  for (var i = 0; i < len; i++) {
    char = str.charAt(i);

    if (i === 0) {
      output += char.toUpperCase();
    } else if (char !== char.toLowerCase() && char === char.toUpperCase()) {
      output += " " + char;
    } else if (char == "-" || char == "_") {
      output += " ";
    } else {
      output += char;
    }
  }

  return output;
}
