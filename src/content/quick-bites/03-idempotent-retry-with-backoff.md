---
kind: "code"
category: "Code · TypeScript"
title: "Idempotent retry with backoff"
code: "// idempotent retry with backoff\nexport async function retry<T>(fn: () => Promise<T>) {\n  let attempt = 0;\n  while (attempt < 5) {\n    try { return await fn(); }\n    catch (e) {\n      await sleep(2 ** attempt * 100);\n      attempt++;\n    }\n  }\n}"
href: "#"
order: 3
---
