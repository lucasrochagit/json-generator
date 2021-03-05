declare var jsonGenerator: jsonGenerator.JsonGenerator;
export = jsonGenerator;

declare namespace jsonGenerator {
    export interface JsonGenerator {
        generateJson(schema: object): object;
        getAddress(mask?: string): string;
        getCnpj(useMask?: boolean): string;
        getColor(): string;
        getCpf(useMask?: boolean): string;
        getFloat(min?: number, max?: number, decimals?: number): number;
        getGender(): string;
        getId(format?: string, length?: number): string;
        getInt(min?: number, max?: number): number;
        getMaskInt(mask?: string): string;
        getMoney(mask?: string): string;
        getFirstName(): string;
        getLastName(): string;
        getFullName(firstName?: string, lastName?: string): string;
        getRandom(list?: Array<any>): any;
        getStr(length?: number, encode?: string): string;
        getText(paragraphs?: number, phrases?: number, words?: number): string;
        isValidCpf(cpf: string): boolean;
        isValidCnpj(cnpj: string): boolean;
    }
}
