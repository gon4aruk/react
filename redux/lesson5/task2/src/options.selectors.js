import { createSelector } from 'reselect';

export const optionsListSelector = state => {
  return state.options.optionsList;
};

export const selectedIdsSelector = state => {
  return state.options.selected;
};

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectIdsList) => {
    return allOptionsList.filter(option => !selectIdsList.includes(option.id));
  },
);

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectIdsList) => {
    return allOptionsList.filter(option => selectIdsList.includes(option.id));
  },
);
