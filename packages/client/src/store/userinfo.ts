import { getUserInfo } from '@/services';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Userinfo = Required<Record<string, any>>;

interface UserinfoStore {
  data: Userinfo | null;
  loading: boolean;
  load: () => Promise<void>;
  clear: () => void;
}

export const userinfoStore = create<UserinfoStore>()(
  devtools<UserinfoStore>(
    (set) => ({
      loading: false,
      data: null,
      clear: () => {
        set({ data: null, loading: false });
      },
      load: async () => {
        set({ loading: true });
        try {
          const res = await getUserInfo();
          const data = res.data.data;
          set({
            data,
          });
        } catch (e) {}
        set({ loading: false });
      },
    }),
    {
      enabled: process.env.NODE_ENV === 'development',
    },
  ),
);

export const useUserinfoStore = userinfoStore;
