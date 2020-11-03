import { PluginFunc } from "dayjs"

declare module "dayjs" {
	export interface Dayjs {
		toISODate(): string
	}
}

const plugin: PluginFunc = (_option, dayjsClass) => {
	dayjsClass.prototype.toISODate = function () {
		return this.format("YYYY-MM-DD")
	}
}

export default plugin
