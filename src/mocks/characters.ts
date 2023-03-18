import {CharacterType} from '../types/character';
import {FIRST_LEVEL} from '../const';

export const defaultCharacter : CharacterType = {
  id: 0,
  playerName: 'New Player',
  level: FIRST_LEVEL,
  points: 10,
  strength: 0,
  stamina: 0,
  agility: 0,
  health: 300,
  damage: 75,
  defense: 3,
  critDamagePercent: 215,
  critDamage: 161,
  critChance: 7,
  dodge: 1.5,
  doubleChance: 0.5,
};

export const characters : CharacterType[] = [
  {
    id: 0,
    playerName: 'Player 0',
    level: FIRST_LEVEL,
    // exp: 0,
    // expToNextLvl: 100 (10/5),
    points: 10,
    strength: 0,
    stamina: 0,
    agility: 0,
    health: 300,
    damage: 75,
    defense: 3,
    critDamagePercent: 215,
    critDamage: 161,
    critChance: 7,
    dodge: 1.5,
    doubleChance: 0.5,
  },
  {
    id: 1,
    playerName: 'Player 1',
    level: 5,
    points: 0,
    strength: 14,
    stamina: 0,
    agility: 0,
    health: 1400,
    damage: 103,
    defense: 5,
    critDamagePercent: 231,
    critDamage: 310,
    critChance: 13.8,
    dodge: 3.1,
    doubleChance: 3.4,
  },
  {
    id: 2,
    playerName: 'Player 2',
    level: 5,
    points: 0,
    strength: 14,
    stamina: 0,
    agility: 0,
    health: 1400,
    damage: 103,
    defense: 5,
    critDamagePercent: 231,
    critDamage: 310,
    critChance: 13.8,
    dodge: 3.1,
    doubleChance: 3.4,
  },
];
