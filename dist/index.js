#!/usr/bin/env node
import {Command}from'commander';import {existsSync,promises}from'node:fs';import*as f from'node:path';import f__default from'node:path';import h from'chalk';import M from'lodash.camelcase';import ke from'lodash.kebabcase';import u from'lodash.template';import Ze from'ora';import J from'prompts';import {z}from'zod';import Y from'lodash.startcase';import {cosmiconfig}from'cosmiconfig';import {createMatchPath,loadConfig}from'tsconfig-paths';import*as N from'node:vm';import {Project,SyntaxKind,ScriptKind}from'ts-morph';import {tmpdir}from'node:os';import Ee from'fs-extra';var j=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(o,t)=>(typeof require<"u"?require:o)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var m={error(...e){console.log(h.red(...e));},warn(...e){console.log(h.yellow(...e));},info(...e){console.log(h.cyan(...e));},success(...e){console.log(h.green(...e));},break(){console.log("");}};var y={import:`import { useFieldArray } from 'react-hook-form';
	import { XIcon, PlusIcon } from "lucide-react";`,functions:`
		const { fields, append, remove } = useFieldArray({
			control: form.control,
			name: "<%= name %>",
		});
	`,component:`
		<div>
			{fields.map((field, index) => (
				<div key={field.id} className="flex w-full items-end space-x-2">
					<%= children %>
					<Button
					type="button"
					size="icon"
					variant="ghost"
					onClick={() => remove(index)}
				>
					<XIcon className="size-4" />
				</Button>
			</div>
			))
		}
		<Button
			size="sm"
			className="mt-2"
			type="button"
			onClick={() => append(<%= defaultValues %>)}
			>
				<PlusIcon className="size-4" />
				<span className="ml-2">Add Item</span>
			</Button>
	</div>`};var v=`<FormField
  control={form.control}
  name=<%= name %>
  render={({ field }) => (
    <FormItem>
      <FormLabel><%= label %></FormLabel>
      <FormControl>
        <%= input %>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
`;var C={[z.ZodString.name]:{import:"import { Input } from '@/registry/ui/input';",component:"<Input {...field} />",defaultValue:""},[z.ZodNumber.name]:{import:"import { Input } from '@/registry/ui/input';",component:"<Input {...field} />",defaultValue:0},[z.ZodBoolean.name]:{import:"import { Checkbox } from '@/registry/ui/checkbox';",component:"<Checkbox checked={field.value} onCheckedChange={field.onChange} />",defaultValue:false},[z.ZodEnum.name]:{import:"import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/registry/ui/select';",component:`<Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a value" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <%= children %>
        </SelectGroup>
      </SelectContent>
    </Select>`}},I="<SelectItem value='<%= option %>'><%= option %></SelectItem>";function k(e){let o=[],t=[],n=new Set;return x(e,"",o,n,t),{imports:Array.from(n).filter(r=>r).join(`
`),components:o.join(""),functions:t.join("")}}function x(e,o="",t=[],n=new Set,r=[]){if(e instanceof z.ZodNullable||e instanceof z.ZodOptional)return x(e.unwrap(),o,t,n,r);if(e instanceof z.ZodObject)return ee(e,o,t,n,r);if(e instanceof z.ZodArray)return oe(e,o,t,n,r);let{component:i,import:s}=te(e,o);return t.push(i),n.add(s),{imports:Array.from(n).join(""),components:t.join(""),functions:r.join("")}}function ee(e,o,t,n,r){for(let[i,s]of Object.entries(e.shape)){let a=o?`${o}.${i}`:i;x(s,a,t,n,r);}return {imports:Array.from(n).join(""),components:t.join(""),functions:r.join("")}}function oe(e,o,t,n,r){if(e.element instanceof z.ZodObject){let{components:i}=x(e.element,`${o}.\${index}`),s=ne(e.element),a=u(y.component)({children:i,defaultValues:JSON.stringify(s).replace(/"([^"]+)":/g,"$1:")}),p=u(y.functions)({name:o});t.push(a),n.add(y.import),r.push(p);}else m.warn(`Only objects are supported in arrays, skipping ${o}`);return {imports:Array.from(n).join(""),components:t.join(""),functions:r.join("")}}function te(e,o){let t=C[e.constructor.name],n={children:""};if(!t)return m.warn(`Unsupported field type: ${e.constructor.name}`),{component:"",import:""};e instanceof z.ZodEnum&&(n.children=e.options.map(i=>u(I)({option:i})).join(`
`));let r=o.includes("${")?`{\`${o}\`}`:`"${o}"`;return {...t,component:u(v)({name:r,label:re(o),input:u(t.component)(n)})}}function re(e){return (e.includes(".")?e.split("."):[e]).map(t=>Y(M(t))).join(" ")}function ne(e){let o={};for(let[t,n]of Object.entries(e.shape)){let r=C[n.constructor.name]?.defaultValue;typeof r<"u"&&(o[t]=r);}return o}async function T(e,o){return createMatchPath(o.absoluteBaseUrl,o.paths)(e,undefined,()=>true,[".ts",".tsx"])}var me=cosmiconfig("components",{searchPlaces:["components.json"]}),Z=z.object({form:z.string().optional(),components:z.string(),ui:z.string().optional()}),O=z.object({aliases:Z}),ce=O.extend({aliases:Z.extend({form:z.string()})}),pe=O.extend({resolvedPaths:z.object({forms:z.string()})});async function $(e){let o=await ue(e);return o?await fe(e,o):null}async function le(e){let o=await loadConfig(e);if(o.resultType==="failed")throw new Error(`Failed to load tsconfig.json. ${o.message??""}`.trim());return o}async function fe(e,o){let t=await le(e);return pe.parse({...o,resolvedPaths:{forms:await T(o.aliases.form,t)}})}async function b(e){let o=await me.search(e);if(!o)throw new Error(`Invalid configuration found in ${e}/components.json.`);return o.config}async function ue(e){let o=await b(e);return o?ce.parse(o):null}function F(e){typeof e=="string"&&(m.error(e),process.exit(1)),e instanceof Error&&(m.error(e.message),process.exit(1)),m.error("Something went wrong. Please try again."),process.exit(1);}function R(e,o){let n=new Project().addSourceFileAtPath(o),r={};for(let i of n.getVariableDeclarations()){let s=i.getInitializer();if(s&&ye(s)){let a=i.getName(),p=s.getText();r[a]={schema:Se(p,o),import:he(e,n,i,o)};}}return r}function he(e,o,t,n){let r=o.getExportedDeclarations().get("default")?.some(a=>a===t),i=f.relative(e.resolvedPaths.forms,n);i=i.replace(/\.(ts|tsx|js|jsx)$/,""),i=i.replace(/\\/g,"/");let s=t.getName();return r?`import ${s} from "${i}";`:`import { ${s} } from "${i}";`}function ye(e){return e.getKind()===SyntaxKind.CallExpression&&e.getFirstChild()?.getText().startsWith("z.object")}function Se(e,o){let t={z:z,require:r=>r==="zod"?z:j(f.resolve(f.dirname(o),r)),console},n=`const schema = ${e}; schema;`;return N.runInNewContext(n,t)}var A=`"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
<%= schemaImport %>
<%= imports %>
import { Button } from "@/registry/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/ui/form"

const formSchema = <%= schema %>;

export function <%= formName %>() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values)
  };

  <%= functions %>

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <%= components %>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
`;var V=async({sourceFile:e,config:o})=>{let t=e.getImportDeclarations();for(let n of t){let r=n.getModuleSpecifierValue();r.startsWith("@/registry/ui")&&(o.aliases.ui?n.setModuleSpecifier(r.replace(/^@\/registry\/ui/,o.aliases.ui)):n.setModuleSpecifier(r.replace(/^@\/registry\/ui/,o.aliases.components)));}return e};var be=[V],ze=new Project({compilerOptions:{}});async function je(e){let o=await promises.mkdtemp(f__default.join(tmpdir(),"shadcn-zod-form-"));return f__default.join(o,e)}async function D(e){let o=await je(e.filename),t=ze.createSourceFile(o,e.raw,{scriptKind:ScriptKind.TSX});for(let n of be)n({sourceFile:t,...e});return t.formatText(),t.getFullText()}var Oe=z.object({schema:z.string().describe("the path to zod schemas folder"),name:z.string().optional().describe("the name of the form"),output:z.string().optional().describe("the output directory")}),U=new Command().name("generate").description("Generate shadcn/ui form from zod schema").argument("<schema>","the path to zod schemas folder").option("-n, --name <name>","the name of the form").option("-o, --output <output>","the output directory").action(async(e,o)=>{try{let t=Oe.parse({schema:e,...o}),n=process.cwd(),r=await $(n);r||(m.warn(`Configuration is missing. Please run ${h.green("npx shadcn-zod-form@latest init")} to create a components.json file.`),process.exit(1));let i=R(r,t.schema);Object.keys(i).length===0&&(m.error("No Zod schemas found in the specified file."),process.exit(1));let s=Object.keys(i)[0];if(Object.keys(i).length>1){let g=await J({type:"select",name:"schema",message:"Select a schema to generate the form:",choices:Object.keys(i).map(z=>({title:z,value:z}))});g.schema||(m.error("No schema selected. Exiting."),process.exit(1)),s=g.schema;}let a=t.name||(await J({type:"text",name:"name",message:"Enter the name for the generated form:",initial:()=>`${ke(s).replace(/-schema$/i,"")}-form`,validate:g=>g.length>0||"Form name cannot be empty"})).name,p=Ze(`Generating form for schema: ${s} at ${r.resolvedPaths.forms}/${a}.tsx
`).start(),d=t.output||r.resolvedPaths.forms;existsSync(d)||await promises.mkdir(d,{recursive:!0}),existsSync(f__default.resolve(d,`${a}.tsx`))&&(p.stop(),m.warn(`File ${a}.tsx already exists. Please chose another name.`),process.exit(1));let{components:q,imports:W,functions:_}=k(i[s].schema),H=await D({raw:u(A)({schema:s,formName:M(a).charAt(0).toUpperCase()+M(a).slice(1),functions:_,components:q,schemaImport:i[s].import,imports:W}),filename:`${a}.tsx`,config:r});await promises.writeFile(f__default.resolve(d,`${a}.tsx`),H),p.succeed(`Form for ${s} generated successfully.`);}catch(t){F(t);}});var Ae="@/components/form",K=new Command().name("init").description("Initialize shadcn-zod-form and install form components").action(async()=>{try{let e=process.cwd(),o=await b(e),t=Ze("Updating components.json with form alias...").start(),n=f__default.resolve(e,"components.json"),r={...o,aliases:{...o.aliases,form:Ae}};await promises.writeFile(n,JSON.stringify(r,null,2),"utf8"),t.succeed(),m.success("shadcn-zod-form initialized successfully");}catch(e){F(e);}});function X(){let e=f__default.join("package.json");return Ee.readJSONSync(e)}process.on("SIGINT",()=>process.exit(0));process.on("SIGTERM",()=>process.exit(0));async function Be(){let e=await X(),o=new Command().name("shadcn-zod-form").description("Generate shadcn/ui forms from zod schemas").version(e.version||"1.0.0","-v, --version","display the version number");o.addCommand(U),o.addCommand(K),o.parse();}Be();//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map