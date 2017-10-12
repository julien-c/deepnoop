### Deepnoop


Noop object with arbitrary number of nested attributes that are also noop.

```bash
npm i deepnoop
```

#### How to use

```js
import { deepNoop } from 'deepnoop';

const noop = deepNoop();
noop();                            // => undefined
noop.noop();                       // => undefined
noop.noop.noop.test.foo.bar();     // => undefined
```
