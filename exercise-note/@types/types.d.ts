declare module 'customTypes' {
  export namespace eventTypes {
    type Input = React.ChangeEvent<HTMLInputElement>;
  }
}

// 설정
/* tsconfig.json에서
"compilerOptions": {
  "typeRoots": ["./node_modules/@types","./@types"]
} 
설정해줌. */

// 사용
// import {eventTypes} from 'customTypes'
// eventTypes.Input
