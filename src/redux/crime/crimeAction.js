import { SEE_CRIMES } from "./crimeTypes";

export const seeCrimes = (crimes) => {
  return {
    type: SEE_CRIMES,
    payload: crimes,
  };
};

