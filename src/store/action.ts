import {createAction} from '@reduxjs/toolkit';

export const Action = {
  SET_CHARACTERS: 'data/setCharacters',
};

export const incrementLevel = createAction('calc/incrementLevel');
export const decrementLevel = createAction('calc/decrementLevel');

export const incrementStrength = createAction('calc/incrementStrength');
export const decrementStrength = createAction('calc/decrementStrength');
export const incrementStamina = createAction('calc/incrementStamina');
export const decrementStamina = createAction('calc/decrementStamina');
export const incrementAgility = createAction('calc/incrementAgility');
export const decrementAgility = createAction('calc/decrementAgility');

export const resetLevel = createAction('calc/resetLevel');

export const setCharacters = createAction(Action.SET_CHARACTERS);
