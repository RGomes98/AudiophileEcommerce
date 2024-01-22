import { Context } from '@/context/Context';
import { useContext } from 'react';

export const useAudiophileContext = () => {
  const audiophileContext = useContext(Context);
  if (!audiophileContext) throw new Error('Use Audiophile context within its provider.');
  return audiophileContext;
};
