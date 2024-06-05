function Class(name, number){
    this.name = name;
    this.number = number;
}
const cse101 = new Class("Design and Analysis of Algorithms", 101);
const cse110 = new Class("Software Engineering", 110);
const cse130 = new Class("Programming Languages: Principles and Paradigms", 130);

function deep(){
    function deeper(){
        function deepest(){
            console.trace();
        }
        deepest();
    }
    deeper();
}

class ParameterTypeError extends Error {
    constructor(message) {
      super(message);
      this.name = "ParameterTypeError";
    }
  }

errorBtns[0].addEventListener('click', () => {
    console.log('Console Log Demo');
});
errorBtns[1].addEventListener('click', () => {
    console.error('Console Error Demo');
});
errorBtns[2].addEventListener('click', () => {
    console.count("Count Button");
});
errorBtns[3].addEventListener('click', () => {
    console.warn('Console Warn Button');
});
errorBtns[4].addEventListener('click', () => {
    const errorMsg = "The number does not equal 3";
    let number = 1;
    console.assert(number == 3, {number, errorMsg});
});
errorBtns[5].addEventListener('click', () => {
    console.clear();
});
errorBtns[6].addEventListener('click', () => {
    console.dir(errorBtns[6]);
});
errorBtns[7].addEventListener('click', () => {
    console.dirxml(errorBtns[7]);
});
errorBtns[8].addEventListener('click', () => {
    console.group();
});
errorBtns[9].addEventListener('click', () => {
    console.groupEnd();
});
errorBtns[10].addEventListener('click', () => {
    console.table([cse101, cse110, cse130]);
});
errorBtns[11].addEventListener('click', () => {
    console.time("Timer Button");
});
errorBtns[12].addEventListener('click', () => {
    console.timeEnd("Timer Button");
});
errorBtns[13].addEventListener('click', () => {
    deep();
});
errorBtns[14].addEventListener('click', () => {
    try {
        const errorClass = new Class(123, "Class");
        if(typeof errorClass.name !== 'string' || typeof errorClass.number !== 'number'){
            throw new ParameterTypeError("Wrong variable parameter types for Class");
        }
      } catch (err) {
        console.error(err);
        console.log('Error caught');
      } finally {
        console.log('An error occurred :(');
      }
});
