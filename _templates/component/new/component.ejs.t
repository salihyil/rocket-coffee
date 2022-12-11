---
to: src/<%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>.js
---

import React from 'react'

const <%= name %> = () => {
  return <h1>Hello from <%= name %></h1>;
}

export default <%= name %>