export const parseDate = (date) => {
    const jsDate = new Date(date);
    const month = jsDate.toLocaleString("default", {month: "long"});
    return `${month} ${jsDate.getDay()}, ${jsDate.getFullYear()}`;
}