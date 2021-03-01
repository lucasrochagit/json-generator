declare var jsonGenerator: jsonGenerator.JsonGenerator;
export = jsonGenerator;

declare namespace jsonGenerator {
    export interface JsonGenerator {
        generateJson(schema: object): object;
    }
}