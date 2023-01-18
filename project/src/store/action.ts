import {createAction} from '@reduxjs/toolkit';

export const incrementLevel = createAction('calc/incrementLevel');
export const decrementLevel = createAction('calc/decrementLevel');

export const resetLevel = createAction('calc/resetLevel');
