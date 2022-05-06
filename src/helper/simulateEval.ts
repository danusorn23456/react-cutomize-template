export default function simulateEval(code?: string) {
    let result;
    try {
        let stringFunctionPattern = `
  return()=>{
    let text = [];
    let initConsole = {
      log:(param)=>{
        text.push(param)
      }
    }
    try{
      ${code}
    }catch(e){
      
    }
    return text;
  }
   `.replaceAll("console", "_console").replaceAll("initConsole", "_console").replaceAll("alert(", "_console.log(");

        try {
            // eslint-disable-next-line
            new Function(stringFunctionPattern)
        } catch (e) {

        }
        // eslint-disable-next-line
        let code_runner = new Function(stringFunctionPattern)()
        result = code_runner().join('\r\n')
    } catch (e) {
        result = e
    }
    return result
}