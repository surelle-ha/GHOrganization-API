import { Controller, Get } from "@nestjs/common";
import { BlitzService } from "./blitz.service";

@Controller("blitz")
export class BlitzController {
	constructor(private readonly blitzService: BlitzService) {}

	@Get()
	findOne() {
		return this.blitzService.findOne();
	}
}
