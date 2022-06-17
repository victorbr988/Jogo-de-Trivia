import getRanking from './getRanking';

const saveRanking = (ranking) => {
  if (getRanking() === null) {
    localStorage.setItem('ranking', JSON.stringify([ranking]));
  } else {
    localStorage.setItem(
      'ranking',
      JSON.stringify([
        ...getRanking(),
        ranking,
      ]),
    );
  }
};
export default saveRanking;
// if (typeof module !== 'undefined') {
//   module.exports = saveRanking;
// }
