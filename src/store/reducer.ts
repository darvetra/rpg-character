import {createReducer} from '@reduxjs/toolkit';
import {
  incrementLevel,
  decrementLevel,
  incrementStrength,
  decrementStrength,
  incrementDexterity,
  decrementDexterity,
  incrementIntuition,
  decrementIntuition,
  incrementVitality,
  decrementVitality,
  resetLevel,
  // setCharacters
} from './action';

import {
  calcDoubleChanceIncLevel,
  calcDoubleChanceDecLevel,
  calcDodgeDecLevel,
  calcDodgeIncLevel,
  roundTwoDecimalPlaces
} from '../utils/utils';

import {
  FIRST_LEVEL,
  STEP_COUNT,
  POINTS_PER_LEVEL,
  DAMAGE_PER_LEVEL,
  CRIT_DAMAGE_PERCENT_PER_LEVEL,
  CRIT_CHANCE_PER_LEVEL,
  DODGE_PER_LEVEL,
  DOUBLE_STRIKE_CHANCE_PER_LEVEL,
  CRIT_CHANCE_PER_INTUITION,
  DAMAGE_PER_STRENGTH,
  DODGE_PER_DEXTERITY,
  DOUBLE_STRIKE_CHANCE_PER_DEXTERITY,
  CRIT_DAMAGE_PERCENT_PER_STRENGTH,
  HEALTH_PER_VITALITY
} from '../const';

import {characters, CharacterServer, defaultCharacter} from '../mocks/characters';
import {equip, helm} from '../mocks/items';

const initialState = {
  level: FIRST_LEVEL,
  // exp: 0,
  // expToNextLvl: 100 (10/5),
  points: 10,
  strength: 0,
  dexterity: 0,
  intuition: 0,
  vitality: 0,
  health: 300,
  damage: 75,
  defense: 0,
  critDamagePercent: 215,
  critDamage: 161,
  critChance: 7,
  dodgeChance: 1.5,
  doubleChance: 0.5,

  characters: characters,
  character: defaultCharacter,
  characterServer: CharacterServer,
  equip: equip,
  helm: helm,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    // .addCase(setCharacters, (state) => {
    //   state.characters = state.characters;
    // })
    .addCase(incrementLevel, (state) => {
      state.level = state.level + STEP_COUNT;
      state.points = state.points + POINTS_PER_LEVEL;
      state.damage = Math.round(state.damage + DAMAGE_PER_LEVEL);
      state.critDamagePercent = state.critDamagePercent + CRIT_DAMAGE_PERCENT_PER_LEVEL;
      state.critChance = roundTwoDecimalPlaces(state.critChance + CRIT_CHANCE_PER_LEVEL);
      state.dodgeChance = roundTwoDecimalPlaces(calcDodgeIncLevel(state.level, state.dodgeChance, DODGE_PER_LEVEL));
      state.doubleChance = roundTwoDecimalPlaces(calcDoubleChanceIncLevel(state.level, state.doubleChance, DOUBLE_STRIKE_CHANCE_PER_LEVEL));
      state.critDamage = Math.round(state.damage / 100 * (state.critDamagePercent + (CRIT_DAMAGE_PERCENT_PER_STRENGTH * state.strength)));
    })
    .addCase(decrementLevel, (state) => {
      state.level = state.level - STEP_COUNT;
      state.points = state.points - POINTS_PER_LEVEL;
      state.damage = Math.round(state.damage - DAMAGE_PER_LEVEL);
      state.critDamagePercent = state.critDamagePercent - CRIT_DAMAGE_PERCENT_PER_LEVEL;
      state.critChance = roundTwoDecimalPlaces(state.critChance - CRIT_CHANCE_PER_LEVEL);
      state.dodgeChance = roundTwoDecimalPlaces(calcDodgeDecLevel(state.level, state.dodgeChance, DODGE_PER_LEVEL));
      state.doubleChance = roundTwoDecimalPlaces(calcDoubleChanceDecLevel(state.level, state.doubleChance, DOUBLE_STRIKE_CHANCE_PER_LEVEL));
      state.critDamage = Math.round(state.damage / 100 * (state.critDamagePercent + (CRIT_DAMAGE_PERCENT_PER_STRENGTH * state.strength)));
    })
    .addCase(incrementStrength, (state) => {
      state.strength = state.strength + STEP_COUNT;
      state.points = state.points - STEP_COUNT;
      state.damage = Math.round(state.damage + DAMAGE_PER_STRENGTH);
      state.critDamage = Math.round(state.damage / 100 * (state.critDamagePercent + (CRIT_DAMAGE_PERCENT_PER_STRENGTH * state.strength)));
    })
    .addCase(decrementStrength, (state) => {
      state.strength = state.strength - STEP_COUNT;
      state.points = state.points + STEP_COUNT;
      state.damage = Math.round(state.damage - DAMAGE_PER_STRENGTH);
      state.critDamage = Math.round(state.damage / 100 * (state.critDamagePercent + (CRIT_DAMAGE_PERCENT_PER_STRENGTH * state.strength)));
    })
    .addCase(incrementDexterity, (state) => {
      state.dexterity = state.dexterity + STEP_COUNT;
      state.points = state.points - STEP_COUNT;
      state.dodgeChance = roundTwoDecimalPlaces(state.dodgeChance + DODGE_PER_DEXTERITY);
      state.doubleChance = roundTwoDecimalPlaces(state.doubleChance + DOUBLE_STRIKE_CHANCE_PER_DEXTERITY);
    })
    .addCase(decrementDexterity, (state) => {
      state.dexterity = state.dexterity - STEP_COUNT;
      state.points = state.points + STEP_COUNT;
      state.dodgeChance = roundTwoDecimalPlaces(state.dodgeChance - DODGE_PER_DEXTERITY);
      state.doubleChance = roundTwoDecimalPlaces(state.doubleChance - DOUBLE_STRIKE_CHANCE_PER_DEXTERITY);
    })
    .addCase(incrementIntuition, (state) => {
      state.intuition = state.intuition + STEP_COUNT;
      state.points = state.points - STEP_COUNT;
      state.critChance = roundTwoDecimalPlaces(state.critChance + CRIT_CHANCE_PER_INTUITION);
    })
    .addCase(decrementIntuition, (state) => {
      state.intuition = state.intuition - STEP_COUNT;
      state.points = state.points + STEP_COUNT;
      state.critChance = roundTwoDecimalPlaces(state.critChance - CRIT_CHANCE_PER_INTUITION);
    })
    .addCase(incrementVitality, (state) => {
      state.vitality = state.vitality + STEP_COUNT;
      state.points = state.points - STEP_COUNT;
      state.health = Math.round(state.health + HEALTH_PER_VITALITY);
    })
    .addCase(decrementVitality, (state) => {
      state.vitality = state.vitality - STEP_COUNT;
      state.points = state.points + STEP_COUNT;
      state.health = Math.round(state.health - HEALTH_PER_VITALITY);
    })
    .addCase(resetLevel, (state) => {
      state.level = FIRST_LEVEL;
      // exp: 0,
      // expToNextLvl: 100 (10/5),
      state.points = 10;
      state.strength = 0;
      state.vitality = 0;
      state.dexterity = 0;
      state.health = 300;
      state.damage = 75;
      state.defense = 0;
      state.critDamagePercent = 215;
      state.critDamage = 161;
      state.critChance = 7;
      state.dodgeChance = 1.5;
      state.doubleChance = 0.5;
    });
});

export {reducer};
