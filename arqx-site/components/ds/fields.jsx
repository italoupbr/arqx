/* Campos de formulário ARQX · visual do DS aprovado, focus via CSS
   (.arqx-field em globals.css). Server components. */

export function Input({ label, id, ...rest }) {
  const fid = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return (
    <div className="arqx-field">
      {label && <label htmlFor={fid}>{label}</label>}
      <input id={fid} className="arqx-control" {...rest} />
    </div>
  );
}

export function Select({ label, id, options = [], placeholder, ...rest }) {
  const fid = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return (
    <div className="arqx-field">
      {label && <label htmlFor={fid}>{label}</label>}
      <select id={fid} className="arqx-control" defaultValue="" {...rest}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Textarea({ label, id, ...rest }) {
  const fid = id || (label ? "ta-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return (
    <div className="arqx-field">
      {label && <label htmlFor={fid}>{label}</label>}
      <textarea id={fid} className="arqx-control" {...rest} />
    </div>
  );
}

export function Checkbox({ children, id, ...rest }) {
  return (
    <label className="arqx-check" htmlFor={id}>
      <input type="checkbox" id={id} {...rest} />
      <span>{children}</span>
    </label>
  );
}
