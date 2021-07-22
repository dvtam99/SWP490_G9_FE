import React from "react";
import { Input } from 'antd';
export default function OTP({
  value,
  label,
  error,
  isDisable = false,
  onChange,
  required = false,
  submitted,
}) {


  return (
    <div className={"form-group" + (submitted && !value ? " has-error" : "")}>
      {label && (
        <label className="bold">
          {label} {required ? <span style={{ color: "red" }}>*</span> : ""}
        </label>
      )}

      <Input
        disabled={isDisable}
        type="text"
        value={value}
        onChange={(e) => {
          if (onChange) {
            let v = e.target.value.replace(/[^0-6]/, "");
            onChange(v);
          }
        }}
        onBlur={(e) => {
          let regex = /(84|0[3|5|7|8|9])+([0-9]{6})\b/;
          if (!regex.test(e.target.value)) {
            return { isValid: false, message: 'Sai định dạng OTP' };
          }
          return { isValid: true, message: '' };
        }}
        required={required}
      />
      {submitted && !value && (
        <div className="help-block">{label} is required</div>
      )}
      {submitted && !error && (
        <div className="help-block">{error}</div>
      )}

    </div>
  );
}
