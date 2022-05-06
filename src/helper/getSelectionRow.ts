export default function getSelectionRow(event: any) {
    let textArea = event.target
    let lineNo = textArea.innerText.substr(0, textArea.selectionStextAreart).split(/\r?\n|\r/).length;
    // let lineText = textArea.value.split(/\r?\n|\r/)[lineNo - 1];
    // let numOfSpaces = lineText.split(/\s/).length - 1;
    return lineNo
}