import { DynamicModule, Module } from "@nestjs/common";
import { CompilerService } from "./compiler.service.js";
import { sassProvider } from './sass.provider.js';

@Module({})
export class CompilerModule {
    static forRootAsync(): DynamicModule {
        return {
            module: CompilerModule,
            providers: [
                sassProvider,
                CompilerService,
            ],
            imports: [],
        }
    }
}
