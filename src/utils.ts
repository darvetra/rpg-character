/**
 * Округляет выражение до двух знаков
 * @param expression
 */
const roundTwoDecimalPlaces = (expression: number) => Number((expression).toFixed(2));

/**
 * Расчитывает шанс уворота при увеличении уровня
 * @param currentLevel
 * @param stateDodge
 * @param dodgePerLevel
 */
const calcDodgeIncLevel = (currentLevel: number, stateDodge: number, dodgePerLevel: number) => {
  switch (currentLevel) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return stateDodge + dodgePerLevel;
    case 6:
    case 7:
      return stateDodge + dodgePerLevel - 0.1;
    default:
      return stateDodge + dodgePerLevel;
  }
};

/**
 * Расчитывает шанс уворота при уменьшении уровня
 * @param currentLevel
 * @param stateDodge
 * @param dodgePerLevel
 */
const calcDodgeDecLevel = (currentLevel: number, stateDodge: number, dodgePerLevel: number) => {
  switch (currentLevel) {
    case 20:
    case 19:
    case 18:
    case 17:
    case 16:
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
      return stateDodge - dodgePerLevel;
    case 6:
    case 5:
      return stateDodge - dodgePerLevel + 0.1;
    default:
      return stateDodge - dodgePerLevel;
  }
};

export {
  roundTwoDecimalPlaces,
  calcDodgeIncLevel,
  calcDodgeDecLevel
};
