import { Global, Module } from "@nestjs/common";
import { BlitzService } from "./blitz.service";
import { BlitzController } from "./blitz.controller";

@Global()
@Module({
	imports: [BlitzService],
	controllers: [BlitzController],
	exports: [BlitzService],
})
export class BlitzModule {}
