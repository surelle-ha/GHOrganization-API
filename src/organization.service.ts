import { Injectable, Inject } from "@nestjs/common";
import axios, { AxiosError } from "axios";

const isEmail = (str: string): boolean => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(str);
};

@Injectable()
export class OrganizationService {
	private readonly githubApiUrl = "https://api.github.com";
	private readonly headers = {
		Authorization: `Bearer ${this.githubToken}`,
		Accept: "application/vnd.github.v3+json",
	};

	constructor(
		@Inject("GITHUB_TOKEN") private readonly githubToken: string,
		@Inject("GITHUB_ORG") private readonly orgName: string
	) {}

	private async sendInvitation(email: string): Promise<any> {
		const inviteUrl = `${this.githubApiUrl}/orgs/${this.orgName}/invitations`;

		try {
			const response = await axios.post(
				inviteUrl,
				{
					email,
					role: "direct_member",
				},
				{ headers: this.headers }
			);
			return { success: true, data: response.data };
		} catch (error) {
			return this.handleAxiosError(error);
		}
	}

	private handleAxiosError(error: any): any {
		if (error instanceof AxiosError) {
			return {
				success: false,
				message: error.response?.data?.message || "An error occurred",
			};
		} else {
			return {
				success: false,
				message: "An unexpected error occurred",
			};
		}
	}

	async inviteToOrganizationByUsername(username: string): Promise<any> {
		try {
			const userResponse = await axios.get(
				`${this.githubApiUrl}/users/${username}`,
				{ headers: this.headers }
			);

			if (!userResponse.data.email) {
				return {
					success: false,
					message: "User does not exist or email is private.",
				};
			}

			return this.sendInvitation(userResponse.data.email);
		} catch (error) {
			return this.handleAxiosError(error);
		}
	}

	async inviteToOrganizationByEmail(email: string): Promise<any> {
		if (!isEmail(email)) {
			return {
				success: false,
				message: "Email is not a valid email address.",
			};
		}
		return this.sendInvitation(email);
	}
}
