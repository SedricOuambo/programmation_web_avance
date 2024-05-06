export function getCode(code, title){
    const item = code.find((obj) => obj.title === title);
    return item.content;
}