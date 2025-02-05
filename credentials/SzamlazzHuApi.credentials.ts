import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SzamlazzHuApi implements ICredentialType {
	name = 'szamlazzHuApi';
	displayName = 'SzamlazzHu API';
	properties: INodeProperties[] = [
		// {
		// 	displayName: 'API Key',
		// 	name: 'apiKey',
		// 	type: 'string',
		// 	default: '',
		// },
	];

	// authenticate: IAuthenticateGeneric = {
	// 	type: 'generic',
	// 	properties: {
	// 		headers: {
	// 			Authorization: '=Bearer {{$credentials.apiKey}}',
	// 		},
	// 	},
	// };

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://www.szamlazz.hu',
			url: '/szamla/',
		},
	};
}
