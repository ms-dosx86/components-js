# LiveKit Components **React**

A LiveKit Components implementation in [React](https://reactjs.org/).

<!--NAV_START-->

## Monorepo Navigation

- [Home](../../README.md)
- **Framework Implementations**:
  - [React 👈](../../packages/react/README.md)
- **Examples**
  - [Next.js](../../examples/nextjs/README.md)
- **Internal Packages**
  - [Core](../../packages/core/README.md)
  - [Styles](../../packages/styles/README.md)

<!--NAV_END-->

## Install

```bash
npm install @ms-dosx86/components-react
```

## Usage

```tsx
import { LiveKitRoom } from '@ms-dosx86/components-react';

<LiveKitRoom token="<livekit-token>" serverUrl="<url-to-livekit-server>" connect={true} />;
```

## Architecture Overview

![React specific implementation of LiveKit Components](./../../.github/assets/components-react-implementation.png)
