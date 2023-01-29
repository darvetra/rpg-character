/**
 * Округляет выражение до двух знаков
 * @param expression
 */
const roundTwoDecimalPlaces = (expression: number) => Number((expression).toFixed(2));

export {
  roundTwoDecimalPlaces,
};
