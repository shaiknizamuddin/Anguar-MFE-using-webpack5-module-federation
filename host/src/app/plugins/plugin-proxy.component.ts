import { Component, Input, OnChanges, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PluginOptions } from './plugin';

@Component({
    selector: 'plugin-proxy',
    template: `
        <ng-container #placeHolder></ng-container>
    `
})
export class PluginProxyComponent implements OnChanges {
    @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
    viewContainer: ViewContainerRef;

    constructor(
        private injector: Injector,
        private cfr: ComponentFactoryResolver) { }

    @Input() options: PluginOptions;

    async ngOnChanges() {
        // console.log(this.options, ' this.options++++');
        this.viewContainer.clear();

        
        setTimeout(async () => {
            // console.log(this.options, ' this.options++++');
            const Component = await loadRemoteModule(this.options)
                .then(m => m[this.options.componentName]);
            // console.log(Component, 'Component')
            // Ivy --> ViewEngine
            const factory = this.cfr.resolveComponentFactory(Component);
            // this.viewContainer.createComponent(factory, null, this.injector);
            const compRef = this.viewContainer.createComponent(factory, null, this.injector);
            const compInstance = compRef.instance;
            // console.log(compInstance , 'compInstance++')
            compInstance['a'] = 'xx'
            // compInstance.onChange.subscribe(...)
            // compInstance.m();
        }, 1);


    }
}

