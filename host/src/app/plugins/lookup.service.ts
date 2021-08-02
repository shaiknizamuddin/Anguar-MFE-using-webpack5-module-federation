import { Injectable } from '@angular/core';
import { PluginOptions } from './plugin';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<PluginOptions[]> {
        return Promise.resolve([
            {
                // remoteEntry: 'http://localhost:4300/remote1Entry.js',
                remoteName: 'remote1',
                exposedModule: './Payments',

                displayName: 'Payments',
                componentName: 'PaymentsComponent'
            },
            // {
            //     remoteEntry: 'http://localhost:3000/remoteEntry.js',
            //     remoteName: 'mfe1',
            //     exposedModule: './Upload',

            //     displayName: 'Upload',
            //     componentName: 'UploadComponent'
            // },
            // {
            //     remoteEntry: 'http://localhost:3001/remoteEntry.js',
            //     remoteName: 'mfe2',
            //     exposedModule: './Analyze',

            //     displayName: 'Analyze',
            //     componentName: 'AnalyzeComponent'
            // },
            // {
            //     remoteEntry: 'http://localhost:3001/remoteEntry.js',
            //     remoteName: 'mfe2',
            //     exposedModule: './Enrich',

            //     displayName: 'Enrich',
            //     componentName: 'EnrichComponent'
            // }
        ] as PluginOptions[]);
    }
}
