# Boolean Practice

Evalúa las siguientes declaraciones. Cada una deberá dar `true` o `false`.

Para las declaraciones complejas, primero evalúa las comparaciones como `===` o `<=`, y luego las comparaciones `&&` y `||`.

```javascript
true && true
false && true
true || false
false || false
10 === 10
10 == '10'
10 === '10'
1 === 1 && 2 <= 1
'test' === 'test'
1 === 1 || 2 !== 1
true && 1 >= 1
false && 0 != 0
true || 1 === 1
'test' === 'testing'
1 !== 0 && 2 >= 1
'test' != 'testing'
'test' == 1
!(true && false)
!(1 === 1 && 0 !== 1)
!(10 === 1 || 1000 <= 1000)
!(1 !== 10 || 3 === 4)
!('testing' === 'testing' && 'Scott' == 'Cool Guy')
1 === 1 && (!('testing' == 1 || 1 === 0))
'chunky' === 'bacon' && (!(3 <= 4 || 3 === 3))
3 === 3 && (! ('testing' === 'testing' || 'JavaScript' === 'Fun'))
```
