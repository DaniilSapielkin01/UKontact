import React from "react";

import s from "./FormsControls.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : " ")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = props => {
  //restProps => остаточные пропсы
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} placeholder="Post message" />
    </FormControl>
  );
};
export const Input = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} placeholder="Post message" />
    </FormControl>
  );
};

// export const Input = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={s.formControl + " " + (hasError ? s.error : " ")}>
//       <div>
//         <input {...input} {...props} placeholder="Post message" />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//     </div>
//   );
// };
