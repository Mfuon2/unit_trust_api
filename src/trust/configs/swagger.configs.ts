import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

export const initializeSwagger = async (app: any) => {
    const config = new DocumentBuilder()
        .setTitle('Investor Module')
        .setDescription('Investments')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
}

