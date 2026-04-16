/// <reference types="vite/client" />

// CSS modules
declare module '*.css' {
  const css: { [key: string]: string }
  export default css
}