import { DynamicModule, OnApplicationShutdown, OnModuleDestroy } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { PuppeteerModuleAsyncOptions } from './interfaces/puppeteer-options.interface';
export declare class PuppeteerCoreModule implements OnApplicationShutdown, OnModuleDestroy {
    private readonly instanceName;
    private readonly moduleRef;
    constructor(instanceName: string, moduleRef: ModuleRef);
    onApplicationShutdown(): Promise<void>;
    static forRoot(launchOptions?: any, instanceName?: string): DynamicModule;
    static forRootAsync(options: PuppeteerModuleAsyncOptions): DynamicModule;
    onModuleDestroy(): Promise<void>;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
