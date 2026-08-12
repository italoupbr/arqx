/* @ds-bundle: {"format":4,"namespace":"ARQXDesignSystem_3ac7f8","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ConfirmTag","sourcePath":"components/core/ConfirmTag.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"FeatureRow","sourcePath":"components/surfaces/FeatureRow.jsx"},{"name":"PullQuote","sourcePath":"components/surfaces/PullQuote.jsx"},{"name":"StatBlock","sourcePath":"components/surfaces/StatBlock.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7bc80a17e14a","components/core/Button.jsx":"155dcd461d52","components/core/ConfirmTag.jsx":"9df9a9c70f45","components/core/Divider.jsx":"2bcb3a9a971f","components/core/Eyebrow.jsx":"1fde4a85469d","components/core/IconButton.jsx":"f297e93295df","components/core/Tag.jsx":"42d1343f3d52","components/forms/Checkbox.jsx":"06257cdfe4b2","components/forms/Input.jsx":"c446cc453731","components/forms/Select.jsx":"70fd4a25aa50","components/forms/Textarea.jsx":"50870095b368","components/surfaces/Card.jsx":"f49ae39376f3","components/surfaces/FeatureRow.jsx":"41e4b07f6621","components/surfaces/PullQuote.jsx":"e4941cedb97c","components/surfaces/StatBlock.jsx":"5187b00d0044","ui_kits/site/Blog.jsx":"7ec56c04fba9","ui_kits/site/Contato.jsx":"0c8bf98008d0","ui_kits/site/Footer.jsx":"b31bdbbabc1d","ui_kits/site/Franquia.jsx":"a02ca986d21d","ui_kits/site/Header.jsx":"80e8575d6db5","ui_kits/site/Home.jsx":"735be793a281","ui_kits/site/LucasGaly.jsx":"37cc67477e27","ui_kits/site/Manifesto.jsx":"8a1fcfd47d66","ui_kits/site/Metodo.jsx":"793a8623f3d5","ui_kits/site/MobileNav.jsx":"5b26f0e20c59","ui_kits/site/Projetos.jsx":"eeb203a5036b","ui_kits/site/QuemSomos.jsx":"510fa2d57d55"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ARQXDesignSystem_3ac7f8 = window.ARQXDesignSystem_3ac7f8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    background: "var(--accent-quiet)",
    color: "var(--text-secondary)",
    border: "1px solid var(--line-soft)"
  },
  accent: {
    background: "var(--accent-quiet)",
    color: "var(--text-accent)",
    border: "1px solid rgba(165,141,126,.4)"
  },
  solid: {
    background: "var(--stone-050)",
    color: "var(--stone-900)",
    border: "1px solid var(--stone-050)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-muted)",
    border: "1px solid var(--line-strong)"
  },
  positive: {
    background: "rgba(127,138,106,.16)",
    color: "#a6b088",
    border: "1px solid rgba(127,138,106,.4)"
  },
  critical: {
    background: "rgba(168,87,76,.16)",
    color: "#cf8579",
    border: "1px solid rgba(168,87,76,.4)"
  }
};

/** ARQX Badge — small Delta-set status/label token. */
function Badge({
  children,
  tone = "neutral",
  dot,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      fontFamily: "var(--font-structure)",
      textTransform: "uppercase",
      letterSpacing: ".14em",
      fontSize: "10.5px",
      fontWeight: 500,
      lineHeight: 1,
      padding: "6px 11px",
      borderRadius: "var(--radius-pill)",
      ...tones[tone],
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: "8px 16px",
    fontSize: "12px",
    letterSpacing: ".1em"
  },
  md: {
    padding: "12px 24px",
    fontSize: "13px",
    letterSpacing: ".12em"
  },
  lg: {
    padding: "16px 34px",
    fontSize: "14px",
    letterSpacing: ".14em"
  }
};
const variants = {
  primary: {
    background: "var(--stone-050)",
    color: "var(--stone-900)",
    border: "1px solid var(--stone-050)"
  },
  accent: {
    background: "var(--accent)",
    color: "var(--stone-900)",
    border: "1px solid var(--accent)"
  },
  secondary: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--line-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-secondary)",
    border: "1px solid transparent"
  }
};
const hovers = {
  primary: {
    background: "var(--stone-100)",
    borderColor: "var(--stone-100)"
  },
  accent: {
    background: "var(--accent-hover)",
    borderColor: "var(--accent-hover)"
  },
  secondary: {
    background: "var(--accent-quiet)",
    borderColor: "var(--line-strong)",
    color: "var(--text-primary)"
  },
  ghost: {
    background: "var(--accent-quiet)",
    color: "var(--text-primary)"
  }
};

/** ARQX Button — Delta-set, uppercase, tracked. The primary action language. */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  disabled,
  full,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: full ? "flex" : "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: full ? "100%" : "auto",
    fontFamily: "var(--font-structure)",
    textTransform: "uppercase",
    fontWeight: 500,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    whiteSpace: "nowrap",
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    transform: hover && !disabled ? "translateY(-1px)" : "none",
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: base,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onMouseDown: e => e.currentTarget.style.transform = "translateY(0)"
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginLeft: "-2px"
    }
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginRight: "-2px"
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ConfirmTag.jsx
try { (() => {
/** ARQX ConfirmTag — flags a claim/fact still pending client sign-off. Amber, dashed. */
function ConfirmTag({
  children = "CONFIRMAR",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: "var(--font-body)",
      fontSize: "10.5px",
      fontWeight: 600,
      color: "var(--confirm)",
      border: "1px dashed rgba(224,176,64,.45)",
      background: "var(--confirm-quiet)",
      padding: "1px 8px",
      borderRadius: "5px",
      marginLeft: "6px",
      letterSpacing: ".02em",
      verticalAlign: "middle",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { ConfirmTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ConfirmTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/** ARQX Divider — hairline rule, optionally labelled (Delta caption centered). */
function Divider({
  label,
  orientation = "horizontal",
  style
}) {
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        width: 1,
        alignSelf: "stretch",
        background: "var(--line-soft)",
        ...style
      }
    });
  }
  if (!label) return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: "none",
      borderTop: "1px solid var(--line-soft)",
      margin: 0,
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--line-soft)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-structure)",
      textTransform: "uppercase",
      letterSpacing: ".18em",
      fontSize: "11px",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--line-soft)"
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/** ARQX Eyebrow — Delta uppercase overline, optional leading rule. */
function Eyebrow({
  children,
  rule = true,
  tone = "accent",
  style
}) {
  const color = tone === "accent" ? "var(--text-accent)" : tone === "muted" ? "var(--text-muted)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "14px",
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: "currentColor",
      opacity: 0.5,
      color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-structure)",
      textTransform: "uppercase",
      letterSpacing: ".22em",
      fontSize: "12px",
      fontWeight: 500,
      color
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};

/** ARQX IconButton — square-ish, hairline, for tertiary icon-only actions. */
function IconButton({
  children,
  size = "md",
  variant = "secondary",
  label,
  disabled,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const variants = {
    secondary: {
      background: "transparent",
      border: "1px solid var(--line-soft)",
      color: "var(--text-secondary)"
    },
    solid: {
      background: "var(--surface-card)",
      border: "1px solid var(--line-soft)",
      color: "var(--text-primary)"
    },
    ghost: {
      background: "transparent",
      border: "1px solid transparent",
      color: "var(--text-secondary)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast)",
      ...variants[variant],
      ...(hover && !disabled ? {
        background: "var(--accent-quiet)",
        color: "var(--text-primary)",
        borderColor: "var(--line-strong)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** ARQX Tag — soft removable/selectable chip for filters and categories. */
function Tag({
  children,
  active,
  onClick,
  onRemove,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = onClick || onRemove;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 500,
      lineHeight: 1,
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)",
      cursor: interactive ? "pointer" : "default",
      color: active ? "var(--stone-900)" : "var(--text-secondary)",
      background: active ? "var(--accent)" : hover && interactive ? "var(--surface-card-hover)" : "var(--surface-card)",
      border: active ? "1px solid var(--accent)" : "1px solid var(--line-soft)",
      transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast)",
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: "inline-flex",
      opacity: 0.6,
      fontSize: "14px",
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** ARQX Checkbox — square, hairline, taupe when checked. Controlled or not. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const fid = id || (label ? "cb-" + String(label).replace(/\s+/g, "-").toLowerCase() : undefined);
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      border: `1px solid ${on ? "var(--accent)" : "var(--line-strong)"}`,
      background: on ? "var(--accent)" : "var(--surface-inset)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--dur-fast), border-color var(--dur-fast)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--stone-900)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-secondary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ARQX Input — quiet field on dark ground; taupe focus ring. */
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: "var(--font-structure)",
      textTransform: "uppercase",
      letterSpacing: ".14em",
      fontSize: "11px",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "0 14px",
      background: "var(--surface-inset)",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${error ? "var(--critical)" : focus ? "var(--accent)" : "var(--line-soft)"}`,
      boxShadow: focus ? "0 0 0 3px var(--accent-quiet)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontSize: "14px"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      background: "transparent",
      border: "none",
      outline: "none",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      padding: "13px 0"
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontSize: "14px"
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: error ? "var(--critical)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ARQX Select — native select styled to match Input, custom chevron. */
function Select({
  label,
  hint,
  options = [],
  placeholder,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: "var(--font-structure)",
      textTransform: "uppercase",
      letterSpacing: ".14em",
      fontSize: "11px",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      width: "100%",
      background: "var(--surface-inset)",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${focus ? "var(--accent)" : "var(--line-soft)"}`,
      boxShadow: focus ? "0 0 0 3px var(--accent-quiet)" : "none",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      padding: "13px 40px 13px 14px",
      outline: "none",
      cursor: "pointer",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lbl = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2",
    style: {
      position: "absolute",
      right: 14,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ARQX Textarea — multi-line field matching Input styling. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? "ta-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: "var(--font-structure)",
      textTransform: "uppercase",
      letterSpacing: ".14em",
      fontSize: "11px",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: "var(--surface-inset)",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${error ? "var(--critical)" : focus ? "var(--accent)" : "var(--line-soft)"}`,
      boxShadow: focus ? "0 0 0 3px var(--accent-quiet)" : "none",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: 1.6,
      padding: "13px 14px",
      outline: "none",
      resize: "vertical",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)"
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: error ? "var(--critical)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
/** ARQX Card — the base surface. Hairline border, soft pooled shadow. */
function Card({
  children,
  image,
  imageAlt,
  eyebrow,
  interactive,
  padding = "var(--space-6)",
  style,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--line-soft)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: hover && interactive ? "var(--shadow-lg)" : "var(--shadow-md)",
      transform: hover && interactive ? "translateY(-2px)" : "none",
      cursor: interactive ? "pointer" : "default",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base)",
      borderColor: hover && interactive ? "var(--line-strong)" : "var(--line-soft)",
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 10",
      overflow: "hidden",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover && interactive ? "scale(1.04)" : "scale(1)",
      transition: "transform var(--dur-editorial) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-structure)",
      textTransform: "uppercase",
      letterSpacing: ".2em",
      fontSize: "11px",
      color: "var(--text-accent)",
      marginBottom: "12px"
    }
  }, eyebrow), children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureRow.jsx
try { (() => {
/** ARQX FeatureRow — indexed list item: Delta numeral, title, body. */
function FeatureRow({
  index,
  title,
  children,
  icon,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "20px",
      padding: "22px 0",
      borderTop: "1px solid var(--line-soft)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      width: "44px"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-accent)"
    }
  }, icon) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-structure)",
      fontSize: "16px",
      color: "var(--text-accent)",
      letterSpacing: ".05em"
    }
  }, String(index).padStart(2, "0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "18px",
      fontWeight: 600,
      color: "var(--text-primary)",
      marginBottom: "6px"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      maxWidth: "56ch"
    }
  }, children)));
}
Object.assign(__ds_scope, { FeatureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureRow.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PullQuote.jsx
try { (() => {
/** ARQX PullQuote — the Berling display voice, for testimonials & statements. */
function PullQuote({
  children,
  cite,
  role,
  size = "md",
  style
}) {
  const sizes = {
    sm: "26px",
    md: "36px",
    lg: "clamp(34px,4.5vw,58px)"
  };
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: sizes[size],
      lineHeight: 1.12,
      letterSpacing: "-.01em",
      color: "var(--text-primary)",
      textTransform: "lowercase"
    }
  }, children), (cite || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "22px",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-structure)",
      textTransform: "uppercase",
      letterSpacing: ".16em",
      fontSize: "12px",
      color: "var(--text-secondary)"
    }
  }, cite, role && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, " \xB7 ", role))));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatBlock.jsx
try { (() => {
/** ARQX StatBlock — a Delta numeral over a quiet caption. For results/metrics. */
function StatBlock({
  value,
  label,
  prefix,
  suffix,
  align = "left",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-structure)",
      fontSize: "clamp(38px,5vw,64px)",
      lineHeight: 0.95,
      color: "var(--text-primary)",
      letterSpacing: "-.02em",
      display: "flex",
      alignItems: "baseline",
      gap: "4px",
      justifyContent: align === "center" ? "center" : "flex-start"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.5em",
      color: "var(--text-accent)"
    }
  }, prefix), value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.5em",
      color: "var(--text-accent)"
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: "10px",
      letterSpacing: ".02em",
      lineHeight: 1.4,
      maxWidth: "26ch",
      marginInline: align === "center" ? "auto" : 0
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Blog.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Tag,
  Card
} = window.ARQXDesignSystem_3ac7f8;
const hubs = [["Hub 1 · Captação (mês 1)", "Captação", [["Marketing para arquitetos: por que agência e curso não resolvem sozinhos", "marketing para arquitetos · 140/mês"], ["Como captar clientes de arquitetura sem depender de indicação", "captar clientes arquitetura · 20/mês"], ["Branding pessoal para arquitetos: o que realmente constrói autoridade", "branding para arquitetos · 20/mês"], ["Instagram para arquitetos: o que postar além de obra pronta", "instagram para arquitetos · 20/mês"]]], ["Hub 2 · Gestão (mês 2)", "Gestão", [["Gestão de escritório: o que muda quando você para de ser só técnico", "gestão de escritório de arquitetura · 50/mês"], ["Como montar um escritório de arquitetura do zero", "como montar escritório de arquitetura · 20/mês"], ["Como abrir um escritório: passo a passo e quanto custa", "como abrir um escritório de arquitetura · 30/mês"], ["Franquia de arquitetura: como escolher entre os modelos disponíveis no Brasil", "franquia de arquitetura · 20/mês · comparação direta"]]], ["Hub 3 · Comercial (mês 3)", "Comercial", [["Proposta comercial de arquitetura: estrutura que fecha mais projetos", "proposta comercial arquitetura · 30/mês"], ["Como precificar e cobrar por projeto sem deixar dinheiro na mesa", "precificação de projetos de arquitetura · 20/mês"]]], ["Hub 4 · Franquia e Reposicionamento (mês 3)", "Franquia", [["Mentoria de arquitetura ou franquia estruturada? Entenda a diferença", "mentoria arquitetura · 20/mês"], ["Para quem é a franquia ARQX, e para quem não é", "franquia para arquitetos · 20/mês · qualificação"]]]];
function Blog() {
  const filters = ["Todos", "Captação", "Gestão", "Comercial", "Franquia"];
  const [active, setActive] = React.useState("Todos");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-20) var(--page-gutter) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Conte\xFAdo"), /*#__PURE__*/React.createElement("h1", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(40px,6vw,72px)",
      margin: "18px 0 14px"
    }
  }, "blog ARQX."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      color: "var(--text-secondary)",
      maxWidth: "60ch",
      marginBottom: "var(--space-10)"
    }
  }, "Conte\xFAdo real sobre os quatro pilares do m\xE9todo, para voc\xEA aplicar no seu escrit\xF3rio antes mesmo de se candidatar \xE0 franquia."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "var(--space-16)"
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    active: active === f,
    onClick: () => setActive(f)
  }, f))), hubs.filter(([, cat]) => active === "Todos" || active === cat).map(([label,, posts]) => /*#__PURE__*/React.createElement("section", {
    key: label,
    style: {
      marginBottom: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: false
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
      marginTop: "16px"
    }
  }, posts.map(([title, meta]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    interactive: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "16px",
      lineHeight: 1.4
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      marginTop: "10px"
    }
  }, meta)))))));
}
Object.assign(window, {
  Blog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Contato.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Input,
  Textarea,
  Button,
  ConfirmTag
} = window.ARQXDesignSystem_3ac7f8;
function Contato({
  onNavigate
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-20) var(--page-gutter) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Contato"), /*#__PURE__*/React.createElement("h1", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(40px,6vw,72px)",
      margin: "18px 0 14px"
    }
  }, "fale com a ARQX."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      color: "var(--text-secondary)",
      maxWidth: "60ch",
      marginBottom: "var(--space-20)"
    }
  }, "J\xE1 sabe que quer se candidatar \xE0 franquia? ", /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate("franquia"),
    style: {
      textDecoration: "underline",
      cursor: "pointer"
    }
  }, "V\xE1 direto para a candidatura"), ". Se ainda tem d\xFAvida antes disso, fale com a gente por aqui."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Canais"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      color: "var(--text-secondary)",
      marginTop: "16px"
    }
  }, "WhatsApp: +55 44 99103-7921", /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR canal comercial")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      color: "var(--text-secondary)",
      marginTop: "10px"
    }
  }, "E-mail: lucasgaly@arqx.com.br", /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR se \xE9 contato geral ou pessoal \u2014 considerar contato@arqx.com.br"))), sent ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "arqx-display",
    style: {
      fontSize: "32px",
      marginBottom: "10px"
    }
  }, "obrigado."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: "15px"
    }
  }, "Recebemos sua mensagem \u2014 respondemos em breve.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Seu nome",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "seu@email.com",
    required: true
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Mensagem",
    rows: 3,
    placeholder: "Como podemos ajudar",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    full: true
  }, "Enviar"))));
}
Object.assign(window, {
  Contato
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Contato.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Footer.jsx
try { (() => {
/* global React */
const {
  Divider,
  ConfirmTag
} = window.ARQXDesignSystem_3ac7f8;

/* Footer mirrors the real site's two columns exactly:
   Sistema -> Método, Projetos, Franquia, Blog
   Empresa -> Quem Somos, Lucas Galy, Manifesto, Contato */
function Footer({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--line-soft)",
      background: "var(--bg-sunken)",
      padding: "var(--space-16) var(--page-gutter) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: "40px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "arqx-display",
    style: {
      fontSize: "21px",
      marginBottom: "12px"
    }
  }, "arqx", /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: ".55em"
    }
  }, "\xAE")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "13px",
      lineHeight: 1.6,
      maxWidth: "280px"
    }
  }, "O primeiro sistema de franquias para arquitetos do Brasil.", /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR alega\xE7\xE3o"))), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Sistema",
    items: [["O Método", "metodo"], ["Projetos", "projetos"], ["Franquia", "franquia"], ["Blog", "blog"]],
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Empresa",
    items: [["Quem Somos", "quem-somos"], ["Lucas Galy", "lucas-galy"], ["Manifesto", "manifesto"], ["Contato", "contato"]],
    onNavigate: onNavigate
  })), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: "var(--space-12) 0 var(--space-6)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "8px",
      color: "var(--text-muted)",
      fontSize: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ARQX. Todos os direitos reservados.", /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR nome legal / CNPJ")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic"
    }
  }, "a jun\xE7\xE3o da arquitetura e do dinheiro")));
}
function FooterCol({
  title,
  items,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "arqx-label",
    style: {
      marginBottom: "14px"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, items.map(([l, k], i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    onClick: () => onNavigate(k),
    style: {
      fontSize: "14px",
      color: "var(--text-secondary)",
      cursor: "pointer"
    }
  }, l))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Franquia.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Input,
  Select,
  Checkbox,
  Button,
  Divider,
  Card,
  ConfirmTag
} = window.ARQXDesignSystem_3ac7f8;
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const faqs = [["Preciso ter um escritório físico para ser franqueado?", "A confirmar com o Lucas.", true], ["Qual o investimento inicial?", "O valor de investimento faz parte da Circular de Oferta de Franquia (COF), documento exigido pela Lei 13.966/2019, entregue durante o processo comercial, com no mínimo 10 dias de antecedência de qualquer assinatura ou pagamento.", "CONFIRMAR se a COF já existe"], ["Quanto tempo até a unidade abrir?", "A confirmar com o Lucas.", true], ["A ARQX atende meu estado?", "Hoje com unidades ativas em 14 estados. Preencha o formulário para confirmar disponibilidade na sua praça.", false]];
function Franquia() {
  const [sent, setSent] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-16) var(--page-gutter) 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "arqx-display",
    style: {
      fontSize: "24px",
      marginBottom: "10px"
    }
  }, "a jun\xE7\xE3o da arquitetura e do dinheiro."), /*#__PURE__*/React.createElement("h1", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(36px,5vw,60px)",
      marginBottom: "14px"
    }
  }, "seja um franqueado."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      color: "var(--text-secondary)",
      maxWidth: "56ch",
      marginBottom: "var(--space-16)"
    }
  }, "Vagas limitadas por pra\xE7a. Preencha e nosso time comercial retorna em at\xE9 48h.", /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR prazo real")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "start",
      paddingBottom: "var(--space-20)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Candidatura"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "18px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "arqx-display",
    style: {
      fontSize: "36px",
      marginBottom: "10px"
    }
  }, "obrigado."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: "15px",
      lineHeight: 1.6
    }
  }, "Sua candidatura chegou at\xE9 n\xF3s. Em breve um consultor ARQX entra em contato."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Enviar outra"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (ok) setSent(true);
    },
    style: {
      marginTop: "18px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      maxWidth: "440px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome completo",
    placeholder: "Seu nome",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "seu@email.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "WhatsApp",
    placeholder: "(00) 00000-0000",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Estado",
    placeholder: "UF",
    options: ["SP", "RJ", "MG", "PR", "SC", "RS", "BA", "Outro"]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Faturamento hoje",
    placeholder: "Faixa",
    options: ["Até R$ 20k/mês", "R$ 20–50k/mês", "R$ 50–100k/mês", "+R$ 100k/mês"]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Sou arquiteto(a) com registro ativo no CAU",
    onChange: setOk
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    full: true,
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, "Enviar Candidatura"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, "Ao enviar voc\xEA concorda com nossa pol\xEDtica de privacidade."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "O que est\xE1 incluso"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "18px",
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "16px",
      marginBottom: "6px"
    }
  }, "Enxoval de entrada"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      color: "var(--text-secondary)"
    }
  }, "Marca, identidade, sistemas e treinamento de abertura entregues chave na m\xE3o.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "16px",
      marginBottom: "6px"
    }
  }, "Equipe dedicada"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      color: "var(--text-secondary)"
    }
  }, "Especialistas de marketing, comercial e finan\xE7as ao lado do franqueado toda semana.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "16px",
      marginBottom: "6px"
    }
  }, "Curadoria do fundador"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      color: "var(--text-secondary)"
    }
  }, "Dire\xE7\xE3o estrat\xE9gica direta de Lucas Galy em ciclos de acompanhamento."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: "1px solid var(--line-soft)",
      padding: "var(--space-16) 0"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Crit\xE9rios de sele\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      color: "var(--text-secondary)",
      marginTop: "16px",
      maxWidth: "62ch"
    }
  }, "Vagas limitadas por pra\xE7a, uma unidade ARQX por regi\xE3o. Crit\xE9rios avaliados na candidatura:", /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR lista completa com Lucas \u2014 esta \xE9 a leitura a partir dos campos do pr\xF3prio formul\xE1rio")), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: "16px",
      color: "var(--text-secondary)",
      fontSize: "14px",
      lineHeight: 2,
      maxWidth: "600px",
      listStyle: "none",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, "\xB7 Registro ativo no CAU"), /*#__PURE__*/React.createElement("li", null, "\xB7 Faixa de faturamento atual do escrit\xF3rio (usada para dimensionar o plano de acelera\xE7\xE3o)"), /*#__PURE__*/React.createElement("li", null, "\xB7 Pra\xE7a de atua\xE7\xE3o, para evitar sobreposi\xE7\xE3o entre unidades"))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: "1px solid var(--line-soft)",
      padding: "var(--space-16) 0 var(--space-20)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Perguntas frequentes"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "16px",
      borderTop: "1px solid var(--line-soft)"
    }
  }, faqs.map(([q, a, flag], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "18px 0",
      borderBottom: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "15px",
      color: "var(--text-primary)"
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: "14px",
      marginTop: "6px"
    }
  }, a, flag === true ? /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR") : flag ? /*#__PURE__*/React.createElement(ConfirmTag, null, flag) : null))))));
}
Object.assign(window, {
  Franquia
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Franquia.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Header.jsx
try { (() => {
/* global React */
const {
  Button
} = window.ARQXDesignSystem_3ac7f8;
function NavLink({
  children,
  active,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: "var(--font-structure)",
      textTransform: "uppercase",
      letterSpacing: ".14em",
      fontSize: "12px",
      cursor: "pointer",
      padding: "4px 0",
      position: "relative",
      color: active || h ? "var(--text-primary)" : "var(--text-muted)",
      transition: "color var(--dur-fast) var(--ease-standard)"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      bottom: -3,
      height: 1,
      width: active ? "100%" : h ? "100%" : "0%",
      background: "var(--accent)",
      transition: "width var(--dur-base) var(--ease-out)"
    }
  }));
}

/* Desktop nav mirrors the real site: Método, Projetos, Blog, Quem Somos + CTA.
   Manifesto / Lucas Galy / Contato live in the footer + mobile "Menu" sheet only. */
function Header({
  current,
  onNavigate
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector("[data-scroll]") || window;
    const t = el === window ? window : el;
    const on = () => setScrolled((el === window ? window.scrollY : el.scrollTop) > 12);
    t.addEventListener("scroll", on);
    return () => t.removeEventListener("scroll", on);
  }, []);
  const links = [["metodo", "Método"], ["projetos", "Projetos"], ["blog", "Blog"], ["quem-somos", "Quem Somos"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--page-gutter)",
      height: "76px",
      background: scrolled ? "var(--surface-overlay)" : "transparent",
      backdropFilter: scrolled ? "var(--blur-chrome)" : "none",
      WebkitBackdropFilter: scrolled ? "var(--blur-chrome)" : "none",
      borderBottom: `1px solid ${scrolled ? "var(--line-hairline)" : "transparent"}`,
      transition: "background var(--dur-base), border-color var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate("home"),
    className: "arqx-display",
    style: {
      fontSize: "24px",
      color: "var(--text-primary)",
      cursor: "pointer"
    }
  }, "arqx", /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: ".55em"
    }
  }, "\xAE")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "none",
      gap: "34px",
      alignItems: "center"
    },
    className: "arqx-desktop-nav"
  }, links.map(([k, l]) => /*#__PURE__*/React.createElement(NavLink, {
    key: k,
    active: current === k,
    onClick: () => onNavigate(k)
  }, l))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "none"
    },
    className: "arqx-desktop-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: () => onNavigate("franquia")
  }, "Quero uma Franquia")), /*#__PURE__*/React.createElement("style", null, `@media(min-width:860px){.arqx-desktop-nav{display:flex !important}.arqx-desktop-cta{display:inline-flex !important}}`));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Home.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Button,
  StatBlock,
  PullQuote,
  Card,
  ConfirmTag
} = window.ARQXDesignSystem_3ac7f8;
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
function Home({
  onNavigate
}) {
  const why = [["01", "Curadoria de fundador com resultado provado", "Lucas Galy atuou diretamente na geração de mais de R$10 milhões em projetos fechados online antes de estruturar o sistema. Não é curso gravado, é direção estratégica ativa."], ["02", "Foco em estruturação comercial, não em RT ou perícia", "Outras franquias do setor misturam arquitetura com engenharia civil, inspeção predial e laudos. A ARQX é construída em torno de um único problema: transformar talento técnico em negócio lucrativo."], ["03", "Quatro pilares, não um pacote genérico", "Posicionamento, captação, gestão e previsibilidade financeira entregues como sistema, não como itens avulsos de um enxoval padrão."]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "82vh",
      display: "flex",
      alignItems: "flex-end",
      padding: "0 var(--page-gutter) var(--space-24)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/interior-lounge-dark.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(10,9,8,.55) 0%, rgba(10,9,8,.2) 40%, rgba(10,9,8,.92) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "980px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "O primeiro sistema de franquias para arquitetos do Brasil", /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR, ver Achado 2 do planejamento")), /*#__PURE__*/React.createElement("h1", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(52px,9vw,124px)",
      lineHeight: 0.98,
      margin: "22px 0 0",
      color: "var(--text-primary)"
    }
  }, "arquitetura", /*#__PURE__*/React.createElement("br", null), "lucrativa."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "18px",
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      maxWidth: "54ch",
      marginTop: "28px"
    }
  }, "A ARQX transforma arquitetos em empres\xE1rios de alta performance. Voc\xEA projeta, cria e constr\xF3i, n\xF3s cuidamos de tudo o que a faculdade nunca ensinou."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      marginTop: "36px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null),
    onClick: () => onNavigate("franquia")
  }, "Quero uma Franquia"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate("metodo")
  }, "Conhecer o M\xE9todo")))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: "1px solid var(--line-soft)",
      borderBottom: "1px solid var(--line-soft)",
      padding: "var(--space-16) var(--page-gutter)",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "+120",
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "arquitetos no sistema", /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR"))
  }), /*#__PURE__*/React.createElement(StatBlock, {
    prefix: "R$",
    value: "1.2M",
    label: "faturamento m\xE9dio anual dos franqueados"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3.4x",
    label: "crescimento m\xE9dio de faturamento em 12 meses"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "14",
    label: "estados com unidades ativas no Brasil"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-24) var(--page-gutter)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "O Sistema"), /*#__PURE__*/React.createElement("p", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(28px,3.2vw,46px)",
      margin: "18px 0 0"
    }
  }, "a jun\xE7\xE3o da arquitetura e do dinheiro."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      lineHeight: 1.7,
      color: "var(--text-secondary)",
      marginTop: "22px",
      maxWidth: "72ch"
    }
  }, "O modelo combina um enxoval completo de entrada com suporte cont\xEDnuo de uma equipe especializada e a curadoria estrat\xE9gica de Lucas Galy. Capta\xE7\xE3o de clientes, gest\xE3o de marketing, processos internos e previsibilidade financeira, tudo em um s\xF3 lugar."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null),
    onClick: () => onNavigate("metodo")
  }, "Ver os Quatro Pilares"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-24) var(--page-gutter)",
      borderTop: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Por que ARQX, e n\xE3o outra franquia de arquitetura"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      marginTop: "16px",
      maxWidth: "62ch"
    }
  }, "O mercado de franquia para arquitetos j\xE1 tem outros players ativos. A diferen\xE7a real n\xE3o est\xE1 em ser franquia, est\xE1 em quem estrutura ela."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px",
      marginTop: "30px"
    }
  }, why.map(([n, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-structure)",
      color: "var(--text-muted)",
      fontSize: "13px",
      letterSpacing: ".05em",
      marginBottom: "10px"
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "17px",
      marginBottom: "8px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--text-secondary)",
      lineHeight: 1.6
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-24) var(--page-gutter)",
      background: "var(--bg-sunken)",
      borderTop: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "980px",
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    size: "lg",
    cite: "Lucas Galy",
    role: "Fundador da ARQX"
  }, "o arquiteto brilhante que quebra \xE9 o retrato de um mercado que ensina tudo, menos a lucrar."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-24) var(--page-gutter)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Portf\xF3lio da rede"), /*#__PURE__*/React.createElement("p", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(28px,3.2vw,44px)",
      margin: "16px 0 26px"
    }
  }, "projetos que tamb\xE9m d\xE3o lucro."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    image: "../../assets/imagery/projects-grid.png",
    eyebrow: "Residencial",
    interactive: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "17px"
    }
  }, "Resid\xEAncia Itaim"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: "6px"
    }
  }, "Unidade ARQX \xB7 S\xE3o Paulo")), /*#__PURE__*/React.createElement(Card, {
    image: "../../assets/imagery/business-portrait.png",
    eyebrow: "Corporativo",
    interactive: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "17px"
    }
  }, "Escrit\xF3rio Faria Lima"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: "6px"
    }
  }, "Unidade ARQX \xB7 S\xE3o Paulo")), /*#__PURE__*/React.createElement(Card, {
    image: "../../assets/imagery/arquitetura-lucrativa.png",
    eyebrow: "Arquitetura",
    interactive: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "17px"
    }
  }, "Casa Serra"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: "6px"
    }
  }, "Unidade ARQX \xB7 S\xE3o Paulo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "24px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("projetos")
  }, "Ver portf\xF3lio completo"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-20) var(--page-gutter) var(--space-24)",
      borderTop: "1px solid var(--line-soft)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(26px,3vw,38px)",
      marginBottom: "22px"
    }
  }, "Pronto para transformar talento t\xE9cnico em neg\xF3cio lucrativo?"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => onNavigate("franquia")
  }, "Quero uma Franquia")));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/LucasGaly.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Button,
  PullQuote,
  ConfirmTag
} = window.ARQXDesignSystem_3ac7f8;
function LucasGaly({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-20) var(--page-gutter) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      marginBottom: "var(--space-16)",
      border: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/business-portrait.png",
    alt: "",
    style: {
      width: "100%",
      height: "380px",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,rgba(10,9,8,0) 40%,rgba(10,9,8,.9) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--space-8)",
      bottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Fundador"), /*#__PURE__*/React.createElement("h1", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(38px,5vw,64px)",
      marginTop: "10px"
    }
  }, "Lucas Galy"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      marginTop: "8px"
    }
  }, "Arquiteto e fundador da ARQX"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "72ch"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Trajet\xF3ria"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.75,
      color: "var(--text-secondary)",
      marginTop: "16px"
    }
  }, "Lucas Galy come\xE7ou como estagi\xE1rio em um escrit\xF3rio local. Ao longo do caminho, atuou diretamente na gera\xE7\xE3o de mais de R$10 milh\xF5es em projetos fechados online para arquitetos no Brasil e no exterior. Foi nesse processo que percebeu um padr\xE3o que se repetia em praticamente todo escrit\xF3rio que passava por perto: o problema n\xE3o era a falta de talento t\xE9cnico, era a aus\xEAncia de estrutura comercial por tr\xE1s do talento."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.75,
      color: "var(--text-secondary)",
      marginTop: "16px"
    }
  }, "Foi esse padr\xE3o que deu origem aos quatro pilares do m\xE9todo e, em seguida, \xE0 ARQX, criada especificamente para transformar esse diagn\xF3stico em um sistema replic\xE1vel para outros escrit\xF3rios, hoje operando como franquia."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      marginTop: "14px"
    }
  }, "Incluir ou n\xE3o passagens profissionais anteriores a esta trajet\xF3ria nesta p\xE1gina.", /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR com Lucas antes de publicar"))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "var(--space-20)",
      paddingTop: "var(--space-16)",
      borderTop: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    size: "md",
    cite: "Lucas Galy"
  }, "o arquiteto brilhante que quebra \xE9 o retrato de um mercado que ensina tudo, menos a lucrar.")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "var(--space-20)",
      paddingTop: "var(--space-16)",
      borderTop: "1px solid var(--line-soft)",
      maxWidth: "72ch"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Credenciais"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      color: "var(--text-secondary)",
      marginTop: "16px"
    }
  }, "Forma\xE7\xE3o, certifica\xE7\xF5es, registro CAU e men\xE7\xF5es de m\xEDdia autorizadas para uso nesta p\xE1gina.", /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR"))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "var(--space-24)",
      paddingTop: "var(--space-16)",
      borderTop: "1px solid var(--line-soft)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(24px,2.8vw,34px)",
      marginBottom: "20px"
    }
  }, "Conhe\xE7a o m\xE9todo criado por Lucas"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => onNavigate("metodo")
  }, "Ver os Quatro Pilares")));
}
Object.assign(window, {
  LucasGaly
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/LucasGaly.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Manifesto.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Button,
  PullQuote
} = window.ARQXDesignSystem_3ac7f8;
function Manifesto({
  onNavigate
}) {
  const paragraphs = ["A faculdade ensina a projetar. Ensina a calcular carga estrutural, a desenhar planta, a defender conceito em banca. Não ensina a precificar um projeto sem medo de perder o cliente. Não ensina a construir um funil de captação. Não ensina a ler um fluxo de caixa nem a negociar um contrato que proteja o escritório.", "O resultado é um mercado cheio de arquitetos tecnicamente brilhantes que vivem reféns da próxima indicação. Um mês bom seguido de dois meses de silêncio. Uma agenda cheia de trabalho e uma conta bancária que não reflete isso. Um portfólio impecável e nenhuma previsibilidade sobre o próximo projeto.", "A ARQX parte de uma constatação simples: o problema nunca foi o talento. É a ausência de estrutura comercial por trás dele. Por isso o sistema não vende curso, não vende mentoria de conteúdo genérico, não vende mais uma agência que executa e some quando o contrato acaba. Vende estrutura, entregue como franquia, com curadoria direta de quem já gerou resultado real antes de estruturar isso para outros.", "Arquitetura lucrativa não é uma contradição. É o que acontece quando o talento técnico finalmente tem, por trás dele, um sistema comercial à altura."];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-20) var(--page-gutter) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Manifesto"), /*#__PURE__*/React.createElement("h1", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(36px,5.5vw,64px)",
      margin: "18px 0 var(--space-16)",
      maxWidth: "20ch"
    }
  }, "o mercado ensina tudo, menos a lucrar."), /*#__PURE__*/React.createElement(PullQuote, {
    size: "md",
    cite: "Lucas Galy"
  }, "o arquiteto brilhante que quebra \xE9 o retrato de um mercado que ensina tudo, menos a lucrar."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-16)",
      maxWidth: "68ch",
      display: "flex",
      flexDirection: "column",
      gap: "18px"
    }
  }, paragraphs.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: "16px",
      lineHeight: 1.75,
      color: "var(--text-secondary)"
    }
  }, p))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "var(--space-24)",
      paddingTop: "var(--space-16)",
      borderTop: "1px solid var(--line-soft)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(24px,2.8vw,34px)",
      marginBottom: "20px"
    }
  }, "Conhe\xE7a o sistema por tr\xE1s do manifesto"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => onNavigate("metodo")
  }, "Ver os Quatro Pilares")));
}
Object.assign(window, {
  Manifesto
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Manifesto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Metodo.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  FeatureRow,
  Card,
  Button
} = window.ARQXDesignSystem_3ac7f8;
function Metodo({
  onNavigate
}) {
  const pillars = [["Captação de clientes", "Materiais, posicionamento e funis prontos para atrair projetos de alto ticket, sem depender de indicação."], ["Gestão de marketing", "Uma equipe cuida da sua presença: conteúdo, tráfego e reputação, no padrão editorial da marca."], ["Processos internos", "Rotinas, contratos e ferramentas testadas para o escritório rodar sem você apagar incêndio."], ["Previsibilidade financeira", "Modelagem de preço, fluxo de caixa e metas, o que a faculdade nunca ensinou a fazer."]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-20) var(--page-gutter) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "760px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "O M\xE9todo"), /*#__PURE__*/React.createElement("h1", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(40px,6vw,72px)",
      margin: "18px 0 0"
    }
  }, "quatro pilares, um escrit\xF3rio que d\xE1 lucro."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      lineHeight: 1.7,
      color: "var(--text-secondary)",
      marginTop: "22px",
      maxWidth: "56ch"
    }
  }, "Enquanto o arquiteto faz o que ama, a ARQX opera a m\xE1quina de neg\xF3cios por tr\xE1s. Cada pilar vem com enxoval de entrada e acompanhamento cont\xEDnuo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-16)",
      maxWidth: "820px",
      borderBottom: "1px solid var(--line-soft)"
    }
  }, pillars.map(([t, d], i) => /*#__PURE__*/React.createElement(FeatureRow, {
    key: i,
    index: i + 1,
    title: t
  }, d))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "var(--space-20)",
      maxWidth: "760px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Por que os quatro pilares v\xEAm nessa ordem"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.75,
      color: "var(--text-secondary)",
      marginTop: "18px"
    }
  }, "Capta\xE7\xE3o sem gest\xE3o de marketing gera lead que ningu\xE9m responde a tempo. Gest\xE3o de marketing sem processo interno gera crescimento que quebra a opera\xE7\xE3o por dentro. Processo sem previsibilidade financeira mant\xE9m o escrit\xF3rio ocupado, mas sem saber se est\xE1 de fato lucrando. A ordem dos quatro pilares n\xE3o \xE9 decorativa, \xE9 a sequ\xEAncia real de onde cada escrit\xF3rio trava antes de crescer."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.75,
      color: "var(--text-secondary)",
      marginTop: "16px"
    }
  }, "Segundo Lucas Galy, fundador da ARQX, a maioria dos arquitetos aprende a projetar na faculdade e nunca aprende a se posicionar comercialmente, o que faz com que escrit\xF3rios tecnicamente excelentes percam projeto para concorrentes tecnicamente inferiores, mas comercialmente mais claros.")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "var(--space-20)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "O que vem incluso"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px",
      marginTop: "22px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Enxoval"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "18px",
      marginBottom: "8px"
    }
  }, "Entrada completa"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--text-secondary)",
      lineHeight: 1.6
    }
  }, "Marca, identidade, sistemas e treinamento de abertura entregues chave na m\xE3o.")), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Suporte"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "18px",
      marginBottom: "8px"
    }
  }, "Equipe dedicada"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--text-secondary)",
      lineHeight: 1.6
    }
  }, "Especialistas de marketing, comercial e finan\xE7as ao lado do franqueado toda semana.")), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Curadoria"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "18px",
      marginBottom: "8px"
    }
  }, "Mentoria Lucas Galy"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--text-secondary)",
      lineHeight: 1.6
    }
  }, "Dire\xE7\xE3o estrat\xE9gica direta do fundador em ciclos de acompanhamento.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "var(--space-24)",
      paddingTop: "var(--space-16)",
      borderTop: "1px solid var(--line-soft)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(24px,2.8vw,34px)",
      marginBottom: "20px"
    }
  }, "Ver como funciona a candidatura"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => onNavigate("franquia")
  }, "Quero uma Franquia")));
}
Object.assign(window, {
  Metodo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Metodo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/MobileNav.jsx
try { (() => {
/* global React */
/* Mobile-only bottom tab bar, per the real site spec:
   5 fixed items — Início, Método, Projetos, Franquia (elevated CTA), Menu (opens bottom sheet
   with Blog, Quem Somos, Lucas Galy, Manifesto, Contato). <860px only, safe-area aware. */
const IconHome = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  width: "20",
  height: "20"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 11l9-8 9 8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 10v10h14V10"
}));
const IconMetodo = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  width: "20",
  height: "20"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l9 5-9 5-9-5 9-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 13l9 5 9-5"
}));
const IconGrid = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  width: "20",
  height: "20"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "7",
  height: "7"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "3",
  width: "7",
  height: "7"
}), /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "14",
  width: "7",
  height: "7"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "14",
  width: "7",
  height: "7"
}));
const IconStar = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "18",
  height: "18"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l2.9 6.6L22 9.3l-5 4.9 1.2 7-6.2-3.6L5.8 21.2 7 14.2 2 9.3l7.1-.7L12 2z"
}));
const IconDots = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  width: "20",
  height: "20"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "5",
  cy: "12",
  r: "1.4",
  fill: "currentColor",
  stroke: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "1.4",
  fill: "currentColor",
  stroke: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "19",
  cy: "12",
  r: "1.4",
  fill: "currentColor",
  stroke: "none"
}));
function TabItem({
  active,
  onClick,
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "4px",
      minHeight: "56px",
      cursor: "pointer",
      color: active ? "var(--text-primary)" : "var(--text-muted)",
      fontSize: "10.5px",
      fontWeight: 600
    }
  }, icon, /*#__PURE__*/React.createElement("span", null, label));
}
function MobileNav({
  current,
  onNavigate
}) {
  const [open, setOpen] = React.useState(false);
  const secondary = [["blog", "Blog"], ["quem-somos", "Quem Somos"], ["lucas-galy", "Lucas Galy"], ["manifesto", "Manifesto"], ["contato", "Contato"]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "arqx-mobile-nav",
    style: {
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 80,
      display: "flex",
      background: "rgba(10,9,8,.96)",
      backdropFilter: "var(--blur-chrome)",
      borderTop: "1px solid var(--line-soft)",
      paddingBottom: "env(safe-area-inset-bottom)"
    }
  }, /*#__PURE__*/React.createElement(TabItem, {
    active: current === "home",
    onClick: () => onNavigate("home"),
    icon: /*#__PURE__*/React.createElement(IconHome, null),
    label: "In\xEDcio"
  }), /*#__PURE__*/React.createElement(TabItem, {
    active: current === "metodo",
    onClick: () => onNavigate("metodo"),
    icon: /*#__PURE__*/React.createElement(IconMetodo, null),
    label: "M\xE9todo"
  }), /*#__PURE__*/React.createElement(TabItem, {
    active: current === "projetos",
    onClick: () => onNavigate("projetos"),
    icon: /*#__PURE__*/React.createElement(IconGrid, null),
    label: "Projetos"
  }), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate("franquia"),
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2px",
      minHeight: "56px",
      cursor: "pointer",
      color: "var(--stone-900)",
      fontSize: "10.5px",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "var(--stone-050)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "2px"
    }
  }, /*#__PURE__*/React.createElement(IconStar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: current === "franquia" ? "var(--text-primary)" : "var(--text-muted)"
    }
  }, "Franquia")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(true),
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "4px",
      minHeight: "56px",
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      fontSize: "10.5px",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(IconDots, null), /*#__PURE__*/React.createElement("span", null, "Menu"))), /*#__PURE__*/React.createElement("style", null, `@media(min-width:860px){.arqx-mobile-nav{display:none !important}}body{padding-bottom:76px}@media(min-width:860px){body{padding-bottom:0}}`), open && /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget) setOpen(false);
    },
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 90,
      background: "rgba(0,0,0,.6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "var(--surface-card)",
      borderTop: "1px solid var(--line-soft)",
      borderRadius: "16px 16px 0 0",
      padding: "24px",
      paddingBottom: "calc(24px + env(safe-area-inset-bottom))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "18px"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    className: "arqx-label"
  }, "Menu"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(false),
    style: {
      background: "none",
      border: "none",
      color: "var(--text-primary)",
      fontSize: "22px"
    }
  }, "\xD7")), secondary.map(([k, l], i) => /*#__PURE__*/React.createElement("a", {
    key: k,
    onClick: () => {
      setOpen(false);
      onNavigate(k);
    },
    style: {
      display: "block",
      padding: "14px 4px",
      fontSize: "16px",
      fontWeight: 700,
      borderBottom: i < secondary.length - 1 ? "1px solid var(--line-soft)" : "none",
      color: "var(--text-primary)",
      cursor: "pointer"
    }
  }, l)))));
}
Object.assign(window, {
  MobileNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/MobileNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Projetos.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Tag,
  Card,
  Button,
  ConfirmTag
} = window.ARQXDesignSystem_3ac7f8;
const projects = [["Residência Itaim", "Residencial", "../../assets/imagery/projects-grid.png"], ["Cobertura Jardins", "Interiores", "../../assets/imagery/interior-lounge-dark.png"], ["Casa Serra", "Arquitetura", "../../assets/imagery/arquitetura-lucrativa.png"], ["Escritório Faria Lima", "Corporativo", "../../assets/imagery/business-portrait.png"], ["Apartamento Higienópolis", "Interiores", "../../assets/imagery/projects-grid.png"], ["Retiro Litoral", "Residencial", "../../assets/imagery/interior-lounge-dark.png"]];
function Projetos({
  onNavigate
}) {
  const filters = ["Todos", "Residencial", "Interiores", "Arquitetura", "Corporativo"];
  const [active, setActive] = React.useState("Todos");
  const shown = active === "Todos" ? projects : projects.filter(p => p[1] === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-20) var(--page-gutter) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Portf\xF3lio da rede"), /*#__PURE__*/React.createElement("h1", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(40px,6vw,72px)",
      margin: "18px 0 10px"
    }
  }, "projetos que tamb\xE9m d\xE3o lucro."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      color: "var(--text-secondary)",
      maxWidth: "60ch",
      marginBottom: "28px"
    }
  }, "Trabalhos entregues pela rede de unidades ARQX em todo o Brasil.", /*#__PURE__*/React.createElement(ConfirmTag, null, "Todos os 6 projetos atuais est\xE3o em S\xE3o Paulo \u2014 diversificar por estado assim que houver projeto real de outra unidade, para sustentar a alega\xE7\xE3o de \"14 estados\".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "var(--space-10)"
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    active: active === f,
    onClick: () => setActive(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "22px"
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    image: p[2],
    eyebrow: p[1],
    interactive: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "19px"
    }
  }, p[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: "6px"
    }
  }, "Unidade ARQX \xB7 S\xE3o Paulo")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-20)",
      paddingTop: "var(--space-16)",
      borderTop: "1px solid var(--line-soft)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(24px,2.8vw,34px)",
      marginBottom: "20px"
    }
  }, "O pr\xF3ximo projeto lucrativo pode ser da sua unidade"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => onNavigate("franquia")
  }, "Quero uma Franquia")));
}
Object.assign(window, {
  Projetos
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Projetos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/QuemSomos.jsx
try { (() => {
/* global React */
const {
  Eyebrow,
  Button,
  Card,
  StatBlock,
  ConfirmTag
} = window.ARQXDesignSystem_3ac7f8;
function QuemSomos({
  onNavigate
}) {
  const team = [["Lucas Galy", "Founder"], ["Gabriela Melo", "Content Strategy"], ["Laura Gomes", "Customer Success"], ["Matheus Ferreira", "Gestor de Tráfego"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-20) var(--page-gutter) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Empresa"), /*#__PURE__*/React.createElement("h1", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(40px,6vw,72px)",
      margin: "18px 0 14px"
    }
  }, "quem somos."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      color: "var(--text-secondary)",
      maxWidth: "58ch",
      lineHeight: 1.6
    }
  }, "A ARQX existe para resolver um problema espec\xEDfico: arquitetos com talento t\xE9cnico comprovado e nenhuma estrutura comercial por tr\xE1s dele."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-16)",
      maxWidth: "72ch"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.75,
      color: "var(--text-secondary)"
    }
  }, "A ARQX nasceu da trajet\xF3ria de Lucas Galy, que atuou diretamente na gera\xE7\xE3o de mais de R$10 milh\xF5es em projetos fechados online para arquitetos no Brasil e no exterior antes de estruturar o sistema de franquias. O padr\xE3o que se repetia em praticamente todo escrit\xF3rio: o problema nunca era o projeto, era a aus\xEAncia de estrutura comercial."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.75,
      color: "var(--text-secondary)",
      marginTop: "16px"
    }
  }, "Hoje a ARQX opera como sistema de franquias, entregando a arquitetos um enxoval completo de entrada, suporte cont\xEDnuo de equipe especializada e a curadoria direta do fundador, para transformar talento t\xE9cnico em neg\xF3cio lucrativo."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "22px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("lucas-galy")
  }, "Conhecer a trajet\xF3ria completa do fundador"))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "var(--space-24)",
      paddingTop: "var(--space-16)",
      borderTop: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "16px",
      marginTop: "20px"
    }
  }, team.map(([n, r]) => /*#__PURE__*/React.createElement(Card, {
    key: n
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "16px",
      marginBottom: "4px"
    }
  }, n), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, r)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      marginTop: "14px"
    }
  }, "Uma frase de credencial por membro do time, al\xE9m do cargo.", /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR com Lucas"))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "var(--space-24)",
      paddingTop: "var(--space-16)",
      borderTop: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Em n\xFAmeros"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "28px",
      marginTop: "20px"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "+120",
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "arquitetos no sistema", /*#__PURE__*/React.createElement(ConfirmTag, null, "CONFIRMAR"))
  }), /*#__PURE__*/React.createElement(StatBlock, {
    prefix: "R$",
    value: "1.2M",
    label: "faturamento m\xE9dio anual dos franqueados"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3.4x",
    label: "crescimento m\xE9dio de faturamento em 12 meses"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "14",
    label: "estados com unidades ativas no Brasil"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "var(--space-24)",
      paddingTop: "var(--space-16)",
      borderTop: "1px solid var(--line-soft)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "arqx-display",
    style: {
      fontSize: "clamp(24px,2.8vw,34px)",
      marginBottom: "20px"
    }
  }, "Conhe\xE7a o manifesto por tr\xE1s do sistema"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate("manifesto")
  }, "Ler o Manifesto")));
}
Object.assign(window, {
  QuemSomos
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/QuemSomos.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ConfirmTag = __ds_scope.ConfirmTag;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureRow = __ds_scope.FeatureRow;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
