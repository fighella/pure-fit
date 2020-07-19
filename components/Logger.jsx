export const ConsoleLog = ({ name, children }) => {
  console.log(name, children);
  return false;
};