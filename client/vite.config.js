import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: "/sub-domain-deploy-react-app/client",
    plugins: [react()],
})