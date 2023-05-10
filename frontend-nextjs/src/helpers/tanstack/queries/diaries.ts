import { useQuery } from '@tanstack/react-query'
import api from '~/config/Axios'

export const useGetDiaries = () => {
  return useQuery(['diaries'],
    async () => {
      const diaries = await api.get('/api/diaries?populate=*')
      return diaries.data;
    },
    {
      onError: (error: any) => {
        console.error('ERROR GET DIARIES', error.response.data);
      },
    },
  )
}

export const useGetDiary = (id: string) => {
  return useQuery(['diary', id],
    async () => {
      const diary = await api.get(`/api/diaries/${id}?populate=*`)
      return diary.data;
    },
    {
      enabled: !!id,
      onError: (error: any) => {
        console.error('ERROR GET DIARY', error.response.data);
      },
    },
  )
}
