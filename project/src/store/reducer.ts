import {createReducer} from '@reduxjs/toolkit';
import {incrementLevel, resetLevel} from './action';
import {FIRST_LEVEL} from '../const';

const STEP_COUNT = 1;

const initialState = {
  level: FIRST_LEVEL,
  strength: 0,
  stamina: 0,
  agility: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementLevel, (state) => {
      state.level = state.level + STEP_COUNT;
    })
    .addCase(resetLevel, (state) => {
      state.level = FIRST_LEVEL;
      state.strength = 0;
      state.stamina = 0;
      state.agility = 0;
    });
});

export {reducer};
