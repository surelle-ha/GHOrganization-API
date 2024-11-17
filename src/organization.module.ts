import { Global, Module, DynamicModule } from "@nestjs/common";
import { OrganizationService } from "./organization.service";

interface OrganizationModuleOptions {
	githubToken: string;
	githubOrg: string;
}

@Global()
@Module({})
export class OrganizationModule {
	static forRoot(options: OrganizationModuleOptions): DynamicModule {
		return {
			module: OrganizationModule,
			providers: [
				{
					provide: "GITHUB_TOKEN",
					useValue: options.githubToken,
				},
				{
					provide: "GITHUB_ORG",
					useValue: options.githubOrg,
				},
				OrganizationService,
			],
			exports: [OrganizationService],
		};
	}
}
