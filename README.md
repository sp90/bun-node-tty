# node-tty bug

```bash
bun run index.js
```

## Expected output

```bash
stdout is a TTY
```

## Actual output

```bash
1 | 
2 | const tty_1 = require("tty");
3 | 
4 | if (process.stdout instanceof tty_1.WriteStream) {
       ^
TypeError: instanceof called on an object with an invalid prototype property.
      at [YOUR_DIR]/node-tty/index.js:4:4
      at globalThis ([YOUR_DIR]/node-tty/index.js:5:31)
```

