import {createReducer} from '@reduxjs/toolkit';
import {
  incrementLevel,
  decrementLevel,
  incrementStrength,
  decrementStrength,
  incrementStamina,
  decrementStamina,
  incrementAgility,
  decrementAgility,
  resetLevel
} from './action';
import {roundTwoDecimalPlaces} from '../utils';
import {
  FIRST_LEVEL,
  LEVEL_COUNT,
  POINT_COUNT,
  POINTS_PER_LEVEL,
  HEALTH_PER_LEVEL,
  DAMAGE_PER_LEVEL,
  DEFENSE_PER_LEVEL,
  CRIT_DAMAGE_PER_LEVEL,
  CRIT_CHANCE_PER_LEVEL,
  DODGE_PER_LEVEL,
  DOUBLE_STRIKE_CHANCE_PER_LEVEL,
  HEALTH_PER_STRENGTH,
  CRIT_DAMAGE_PER_STRENGTH,
  CRIT_CHANCE_PER_STRENGTH,
  DAMAGE_PER_STAMINA,
  DEFENSE_PER_STAMINA,
  DODGE_PER_AGILITY,
  DOUBLE_STRIKE_CHANCE_PER_AGILITY
} from '../const';


const initialState = {
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
  critDamage: 161,
  critChance: 7,
  dodge: 1.5,
  doubleChance: 0.5,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementLevel, (state) => {
      state.level = state.level + LEVEL_COUNT;
      state.points = state.points + POINTS_PER_LEVEL;
      state.health = Math.round(state.health + HEALTH_PER_LEVEL);
      state.damage = Math.round(state.damage + DAMAGE_PER_LEVEL);
      state.defense = roundTwoDecimalPlaces(state.defense + DEFENSE_PER_LEVEL);
      state.critDamage = state.critDamage + CRIT_DAMAGE_PER_LEVEL;
      state.critChance = roundTwoDecimalPlaces(state.critChance + CRIT_CHANCE_PER_LEVEL);
      state.dodge = roundTwoDecimalPlaces(state.dodge + DODGE_PER_LEVEL);
      state.doubleChance = roundTwoDecimalPlaces(state.doubleChance + DOUBLE_STRIKE_CHANCE_PER_LEVEL);
    })
    .addCase(decrementLevel, (state) => {
      state.level = state.level - LEVEL_COUNT;
      state.points = state.points - POINTS_PER_LEVEL;
      state.health = Math.round(state.health - HEALTH_PER_LEVEL);
      state.damage = Math.round(state.damage - DAMAGE_PER_LEVEL);
      state.defense = roundTwoDecimalPlaces(state.defense - DEFENSE_PER_LEVEL);
      state.critDamage = state.critDamage - CRIT_DAMAGE_PER_LEVEL;
      state.critChance = roundTwoDecimalPlaces(state.critChance - CRIT_CHANCE_PER_LEVEL);
      state.dodge = roundTwoDecimalPlaces(state.dodge - DODGE_PER_LEVEL);
      state.doubleChance = roundTwoDecimalPlaces(state.doubleChance - DOUBLE_STRIKE_CHANCE_PER_LEVEL);
    })
    .addCase(incrementStrength, (state) => {
      state.strength = state.strength + POINT_COUNT;
      state.points = state.points - POINT_COUNT;
      state.health = Math.round(state.health + HEALTH_PER_STRENGTH);
      state.critDamage = state.critDamage + CRIT_DAMAGE_PER_STRENGTH;
      state.critChance = roundTwoDecimalPlaces(state.critChance + CRIT_CHANCE_PER_STRENGTH);
    })
    .addCase(decrementStrength, (state) => {
      state.strength = state.strength - POINT_COUNT;
      state.points = state.points + POINT_COUNT;
      state.health = Math.round(state.health - HEALTH_PER_STRENGTH);
      state.critDamage = state.critDamage - CRIT_DAMAGE_PER_STRENGTH;
      state.critChance = roundTwoDecimalPlaces(state.critChance - CRIT_CHANCE_PER_STRENGTH);
    })
    .addCase(incrementStamina, (state) => {
      state.stamina = state.stamina + POINT_COUNT;
      state.points = state.points - POINT_COUNT;
      state.damage = Math.round(state.damage + DAMAGE_PER_STAMINA);
      state.defense = roundTwoDecimalPlaces(state.defense + DEFENSE_PER_STAMINA);
    })
    .addCase(decrementStamina, (state) => {
      state.stamina = state.stamina - POINT_COUNT;
      state.points = state.points + POINT_COUNT;
      state.damage = Math.round(state.damage - DAMAGE_PER_STAMINA);
      state.defense = roundTwoDecimalPlaces(state.defense - DEFENSE_PER_STAMINA);
    })
    .addCase(incrementAgility, (state) => {
      state.agility = state.agility + POINT_COUNT;
      state.points = state.points - POINT_COUNT;
      state.dodge = roundTwoDecimalPlaces(state.dodge + DODGE_PER_AGILITY);
      state.doubleChance = roundTwoDecimalPlaces(state.doubleChance + DOUBLE_STRIKE_CHANCE_PER_AGILITY);
    })
    .addCase(decrementAgility, (state) => {
      state.agility = state.agility - POINT_COUNT;
      state.points = state.points + POINT_COUNT;
      state.dodge = roundTwoDecimalPlaces(state.dodge - DODGE_PER_AGILITY);
      state.doubleChance = roundTwoDecimalPlaces(state.doubleChance - DOUBLE_STRIKE_CHANCE_PER_AGILITY);
    })
    .addCase(resetLevel, (state) => {
      state.level = FIRST_LEVEL;
      // exp: 0,
      // expToNextLvl: 100 (10/5),
      state.points = 10;
      state.strength = 0;
      state.stamina = 0;
      state.agility = 0;
      state.health = 300;
      state.damage = 75;
      state.defense = 3;
      state.critDamage = 161;
      state.critChance = 7;
      state.dodge = 1.5;
      state.doubleChance = 0.5;
    });
});

export {reducer};
