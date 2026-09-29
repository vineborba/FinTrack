# FinTrack

Early prototype (2022) of a personal finance app in **React Native**, later
superseded by [Cashflow](https://github.com/vineborba/cashflow-front).

Started on Expo and then migrated to the bare React Native workflow, which is
the state this repository is in: onboarding screens, a themed component
library and the local data model. It's kept as a record of that work, not
as a finished app.

## Stack

- **React Native 0.68** (bare workflow, Android and iOS projects) with TypeScript
- **Realm** (`@realm/react`) for offline-first local storage, with an `Entry` schema for income and expenses
- **React Navigation** (native stack)
- **styled-components** with a typed theme (palette, spacing, typography) and responsive sizing
- **Jest** + **React Native Testing Library** for component tests
- ESLint (Airbnb + TypeScript) and Prettier

## What's there

- Welcome screen and a step-by-step tutorial driven by a `useReducer` state machine
- Reusable `FT*` components: button, text, input and a BRL currency input
- Theme tokens shared across components through `styled-components`

## Running

```sh
yarn install
cp .env.example .env
yarn android   # or: cd ios && pod install && cd .. && yarn ios
yarn test
```

Realm sync needs an Atlas App Services app configured in `realm.json`.
