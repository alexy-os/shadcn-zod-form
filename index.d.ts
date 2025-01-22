import { Command } from "commander";
import { z } from "zod";

export interface FormField {
	name: string;
	type: string;
	label?: string;
	placeholder?: string;
	description?: string;
	validation?: z.ZodType<any>;
}

export interface FormConfig {
	name: string;
	fields: FormField[];
}

export interface GenerateOptions {
	schema: string;
	name?: string;
	output?: string;
}

export interface InitOptions {
	force?: boolean;
}

export declare const generate: Command;
export declare const initCommand: Command;

export declare function generateForm(options: GenerateOptions): Promise<void>;
export declare function initializeForm(options?: InitOptions): Promise<void>; 