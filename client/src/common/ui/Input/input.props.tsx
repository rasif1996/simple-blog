import {InputHTMLAttributes} from 'react';
import {UseFormRegister, Path, DeepMap, FieldError} from 'react-hook-form';

export interface Props<TFormValues> extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: Path<TFormValues>;
	register?: UseFormRegister<TFormValues>;
	errors?: Partial<DeepMap<TFormValues, FieldError>>;
}
