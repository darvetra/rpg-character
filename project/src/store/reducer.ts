import {createReducer} from '@reduxjs/toolkit';
import {incrementLevel, decrementLevel, resetLevel} from './action';
import {roundTwoDecimalPlaces} from '../utils';
import {
  FIRST_LEVEL,
  LEVEL_COUNT,
  POINTS_PER_LEVEL,
  HEALTH_PER_LEVEL,
  DAMAGE_PER_LEVEL,
  DEFENSE_PER_LEVEL,
  CRIT_DAMAGE_PER_LEVEL,
  CRIT_CHANCE_PER_LEVEL,
  DODGE_PER_LEVEL,
  DOUBLE_DEFENSE_PER_LEVEL
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
      state.doubleChance = roundTwoDecimalPlaces(state.doubleChance + DOUBLE_DEFENSE_PER_LEVEL);
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
      state.doubleChance = roundTwoDecimalPlaces(state.doubleChance - DOUBLE_DEFENSE_PER_LEVEL);
    })
    .addCase(resetLevel, (state) => {
      state.level = FIRST_LEVEL;
      state.strength = 0;
      state.stamina = 0;
      state.agility = 0;
    });
});

export {reducer};
