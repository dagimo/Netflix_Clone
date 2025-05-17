import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:'Netflix_Clone',
  define: {
    'process.env': {
      REACT_APP_API_KEY: JSON.stringify(process.env.REACT_APP_API_KEY),
      
    },
  },
})