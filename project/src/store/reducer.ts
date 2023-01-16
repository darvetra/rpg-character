import {createReducer} from '@reduxjs/toolkit';
import {incrementLevel} from './action';
import {FIRST_LEVEL} from '../const';

const STEP_COUNT = 1;

const initialState = {
  // level: 1,
  level: FIRST_LEVEL,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementLevel, (state) => {
      state.level = state.level + STEP_COUNT;
    });
});

export {reducer};
