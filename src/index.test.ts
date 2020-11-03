import dayjs from "dayjs"
import dayjs_isodate from "dayjs-isodate"
import tap from "tap"

dayjs.extend(dayjs_isodate)

tap.equals(dayjs("2020-2-23").toISODate(), "2020-02-23")
tap.equals(dayjs("3/6/1953").toISODate(), "1953-03-06")
