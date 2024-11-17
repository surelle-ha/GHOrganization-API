import { Injectable } from "@nestjs/common";

@Injectable()
export class BlitzService {
	constructor() {}
	findOne() {
		return {
			sample: "data",
		};
	}
}
