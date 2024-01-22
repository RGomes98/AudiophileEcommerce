import { useAudiophileContext } from './useAudiophileContext';

export type Toast = { id: string; message: string; status: 'success' | 'error'; isVisible: boolean };

export const useToast = () => {
  const { toasts, setToasts } = useAudiophileContext();
  const uuid = crypto.randomUUID();

  const toast = (message: Toast['message'], delay: number, status: Toast['status']) => {
    setToasts((prev) => [...prev, { id: uuid, message, status, isVisible: true }]);

    setTimeout(() => {
      setToasts((prev) => {
        const currentToast = prev.find(({ id }) => id === uuid);
        if (!currentToast) return prev;

        currentToast.isVisible = false;
        return [currentToast, ...prev.filter(({ id }) => id !== uuid)];
      });
    }, delay);

    setTimeout(() => setToasts((prev) => prev.slice(1)), delay * 2);
  };

  const success = (message: Toast['message'], delay: number) => toast(message, delay, 'success');
  const error = (message: Toast['message'], delay: number) => toast(message, delay, 'error');

  const createToast = { success, error };

  return { createToast, toasts };
};
