import {createAction} from '@reduxjs/toolkit';

export const Action = {
  SET_CHARACTERS: 'data/setCharacters',
};

export const incrementLevel = createAction('calc/incrementLevel');
export const decrementLevel = createAction('calc/decrementLevel');

export const incrementStrength = createAction('calc/incrementStrength');
export const decrementStrength = createAction('calc/decrementStrength');
export const incrementDexterity = createAction('calc/incrementDexterity');
export const decrementDexterity = createAction('calc/decrementDexterity');
export const incrementIntuition = createAction('calc/incrementIntuition ');
export const decrementIntuition = createAction('calc/decrementIntuition ');
export const incrementVitality = createAction('calc/incrementVitality');
export const decrementVitality = createAction('calc/decrementVitality');

export const resetLevel = createAction('calc/resetLevel');

export const setCharacters = createAction(Action.SET_CHARACTERS);
