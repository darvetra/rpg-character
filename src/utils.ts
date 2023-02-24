/**
 * Округляет выражение до двух знаков
 * @param expression
 */
const roundTwoDecimalPlaces = (expression: number) => Number((expression).toFixed(2));

/**
 * Расчитывает шанс двойного удара при увеличении уровня
 * @param currentLevel
 * @param stateDoubleChance
 * @param doubleChancePerLevel
 */
const calcDoubleChanceIncLevel = (currentLevel: number, stateDoubleChance: number, doubleChancePerLevel: number) => {
  switch (currentLevel) {
    case 5:
      return stateDoubleChance + doubleChancePerLevel + 0.1;
    case 12:
      return stateDoubleChance + doubleChancePerLevel - 1;
    default:
      return stateDoubleChance + doubleChancePerLevel;
  }
};

/**
 * Расчитывает шанс двойного удара при уменьшении уровня
 * @param currentLevel
 * @param stateDoubleChance
 * @param doubleChancePerLevel
 */
const calcDoubleChanceDecLevel = (currentLevel: number, stateDoubleChance: number, doubleChancePerLevel: number) => {
  switch (currentLevel) {
    case 11:
      return stateDoubleChance - doubleChancePerLevel + 1;
    case 4:
      return stateDoubleChance - doubleChancePerLevel - 0.1;
    default:
      return stateDoubleChance - doubleChancePerLevel;
  }
};

/**
 * Расчитывает шанс уворота при увеличении уровня
 * @param currentLevel
 * @param stateDodge
 * @param dodgePerLevel
 */
const calcDodgeIncLevel = (currentLevel: number, stateDodge: number, dodgePerLevel: number) => {
  switch (currentLevel) {
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
    case 6:
    case 5:
      return stateDodge - dodgePerLevel + 0.1;
    default:
      return stateDodge - dodgePerLevel;
  }
};

export {
  calcDoubleChanceIncLevel,
  calcDoubleChanceDecLevel,
  roundTwoDecimalPlaces,
  calcDodgeIncLevel,
  calcDodgeDecLevel
};
