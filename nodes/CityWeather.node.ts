import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class CityWeather implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
        displayName: 'City Weather',
        name: 'CityWeather',
        // icon: 'file:nasapics.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Get data from City Weather API',
        defaults: {
            name: 'City Weather',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'CityWeatherApi',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL: 'https://api.openweathermap.org/data/2.5/weather',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
		properties: [
            {
                displayName: 'City',
                name: 'cityName',
                type: 'string',
                default: '',
                required: true,
                routing: {
                    request: {
                        qs: {
                            q: '={{$value}}',
                        }
                    }
                }
            },
            // Operations will go here

        ]
	};
}