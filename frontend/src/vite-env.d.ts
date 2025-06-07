/// <reference types="vite/client" />

// Declare modules for raw text file imports
declare module '*.txt?raw' {
  const content: string;
  export default content;
}