import {FormikErrors} from "formik";

export function mapFormikErrorsToStringArr<T>(errors: FormikErrors<T>) {
  const errorsArray: string[] = [];

  for (const key in errors) {
    errorsArray.push(errors[key] as string);
  }

  return errorsArray;
}
