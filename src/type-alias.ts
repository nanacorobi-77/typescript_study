export {};

type Mojiretsu = string;

const foo: string = 'Hello';
const fooMojiretsu: Mojiretsu = "Hello";

const example1 = {
  name: 'Ham',
  age: 12
}

type Profile ={
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'Ham',
  age: 12
}

type Profile2 = typeof example1;