import { UserConfig } from '@gnocchicss/core';
import { NestFactory } from '@nestjs/core';
import { CompilerModule } from './compiler.module.js';
import { CompilerService } from './compiler.service.js';

export async function compile(userConfig: UserConfig) {
    const app = await NestFactory.createApplicationContext(await CompilerModule.forRootAsync());
    const compilerService = app.get(CompilerService);
    const virtualFileMapping = await compilerService.compile(userConfig);
    await app.close();

    return { virtualFileMapping };
}