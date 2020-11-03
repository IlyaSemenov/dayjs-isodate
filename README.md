# dayjs ISO date plugin

## Install

```
yarn add dayjs-isodate
```

## Use

```ts
import dayjs from "dayjs"
import dayjs_isodate from "dayjs-isodate"

dayjs.extend(dayjs_isodate)

dayjs().toISODate() // "2020-10-31"
```
