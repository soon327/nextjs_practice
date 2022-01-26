import { MODAL_OPEN } from './actionType';

export const modalOpen = (open: boolean) => {
  return {
    type: MODAL_OPEN,
    payload: { open },
  };
};
