import { useAudiophileContext } from './useAudiophileContext';

export type Toast = { id: string; message: string; status: 'success' | 'error'; isVisible: boolean };

export const useToast = () => {
  const { toasts, setToasts } = useAudiophileContext();
  const activeToastsAmount = toasts.filter(({ isVisible }) => isVisible).length;
  const ACTIVE_TOASTS_LIMIT = 5;

  const isMaxActiveToastsReached = activeToastsAmount === ACTIVE_TOASTS_LIMIT;

  const createToast = (status: Toast['status'], message: Toast['message'], delay: number) => {
    const uuid = crypto.randomUUID();
    setToasts((prev) => [...prev, { id: uuid, message, status, isVisible: true }]);

    setTimeout(() => {
      setToasts((prev) => {
        const currentToast = prev.find(({ id }) => id === uuid);
        if (!currentToast) return prev;

        currentToast.isVisible = false;
        return [currentToast, ...prev.filter(({ id }) => id !== currentToast.id)];
      });
    }, delay);

    setTimeout(() => setToasts((prev) => prev.slice(1)), delay * 2);
  };

  return { toasts, isMaxActiveToastsReached, createToast };
};
