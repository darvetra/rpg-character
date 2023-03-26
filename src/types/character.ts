
export type CharacterType = {
  id: number,
  playerName: string,
  level: number,
  points: number,
  strength: number,
  stamina: number,
  agility: number,
  health: number,
  damage: number,
  defense: number,
  critDamagePercent: number,
  critDamage: number,
  critChance: number,
  dodge: number,
  doubleChance: number,
};

export type CharacterTypeServer = {
  status: string,
  userLevel: number,
  userXp: number,
  userName: string,
  language: string,
  userHp: number,
  userDamage: number,
  nextLevelXp: number,
  userTickets: number,
  hideId: string,
  energy: number,
  resetPoints: number,
  points: number,
  maxPointsToChar: number,
  userCritChance: number,
  userCritPercent: number,
  userCritDamage: number,
  userDoubleHitChance: number,
  userRating: number,
  isAnonim: boolean,
  userEvasionChance: number,
  userStrength: number,
  userAgility: number,
  userIntellect: number,
  userStamina: number,
  levelStrength: number,
  levelAgility: number,
  levelWinExp: number,
  levelLooseExp: number,
  levelWinExpWot: number,
  levelLooseExpWot: number,
  levelPoints: number,
  levelIntellect: number,
  levelStamina: number,
  userDefence: number,
  searchValue: number,
  levelSearchPool: number,
  equip: {
    head: string,
    torso: string,
    leftHand: string,
    rightHand: string,
    hands: string,
    legs: string,
    feet: string,
    throwingOption: string,
    ring1: string,
    ring2: string,
    amulet: string,
    cloak: string,
    artifact: string,
    quickItem: string
  },
  inv: {
    0: string[],
      1: string[],
      2: string[],
      3: string[],
      4: string[],
      5: string[],
      6: string[],
      7: string[],
      8: string[],
      9: string[],
      10: string[],
      11: string[],
      12: string[],
      13: string[]
  }
};
