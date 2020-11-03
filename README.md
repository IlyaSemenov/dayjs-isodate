# dayjs ISO date plugin

## Install

```
yarn add dayjs_isodate
```

## Use

```ts
import dayjs from "dayjs"
import dayjs_isodate from "dayjs_isodate"

dayjs.extend(dayjs_isodate)

dayjs().toISODate() // "2020-10-31"
```
