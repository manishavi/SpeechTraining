export const getScore = (score) => {
  console.log('this is the score: ', score);
  switch (true) {
    case (score >= 0.4):
      return "this is a very positive statement";
      // break;
    case (score >= 0):
      return "this is a somewhat positive statement";
      // break;
    case (score >= -0.4):
      return "this is a somewhat negative statement";
      // break;
    default:
      return "this is a very negative statement";
  }
};


export const textPlus = (text) => {
  console.log(typeof text);
  console.log(text.toString().split(' ').join('+'));
  return text.toString().split(' ').join('+');
}