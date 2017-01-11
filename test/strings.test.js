import Test from 'ava';
import * as Strings from '../src/internals/strings';

Test('toDash formats strings with dashes', t => {
  const value = 'HelloWorld';
  t.is(Strings.toDash(value), '-hello-world');
});

Test('toFirstUpper formats string with first uppercase', t => {
  const value = 'helloWorld';
  t.is(Strings.toFirstUpper(value), 'HelloWorld');
});

Test('toFirstUpper formats string with first uppercase', t => {
  const value = 'HelloWorld';
  t.is(Strings.toFirstLower(value), 'helloWorld');
});