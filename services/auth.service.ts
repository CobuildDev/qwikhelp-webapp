import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

// --- signup mutation ---
export const useSignupMutation = () => {
  return useMutation({
    mutationFn: async (data: {
      firstname: string
      lastname: string
      email: string
      password: string
      confirmPassword: string
    }) => {
      const res = await axios.post('/api/auth/signup', data)
      return res.data
    },
  })
}

// --- login mutation ---
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await axios.post('/api/auth/login', data)
      return res.data
    },
  })
}

// --- current user query ---
// export const useCurrentUserQuery = () => {
//   return useQuery({
//     queryKey: ['currentUser'],
//     queryFn: async () => {
//       const res = await axios.get('/api/auth/me')
//       return res.data
//     },
//   })
// }
