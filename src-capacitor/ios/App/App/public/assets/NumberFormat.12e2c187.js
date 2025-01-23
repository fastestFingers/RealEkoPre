var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { k as defineComponent, r as ref, c as computed, w as watch, b$ as resolveDirective, aa as withDirectives, p as openBlock, V as createElementBlock, _ as _export_sfc, R as useDataStore, Z as toDisplayString } from "./index.61ed5618.js";
/**
 * Vue Number Format 3.34.1
 * (c) 2021-2023 Dipak Sarkar <hello@dipaksarkar.in> (https://dipaksarkar.in/)
 * @license MIT
 */
var s = { prefix: "", suffix: "", separator: ",", decimal: ".", precision: 2, minimumFractionDigits: null, prefill: true, reverseFill: false, min: null, max: null, nullValue: "" };
function o(e) {
  return t = 0, n = e, i = 20, Math.max(t, Math.min(n, i));
  var t, n, i;
}
class p {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "input");
    __publicField(this, "number");
    __publicField(this, "isClean");
    __publicField(this, "preSurRegExp");
    __publicField(this, "numberRegExp");
    __publicField(this, "cleanRegExp");
    __publicField(this, "negativeRegExp");
    this.options = Object.assign(c(s), e);
    const { prefix: t, suffix: n, decimal: i, reverseFill: r } = this.options;
    this.input = "", this.number = "", this.isClean = !r;
    const l = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), u = n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    this.preSurRegExp = new RegExp(`${l}|${u}`, "g"), this.numberRegExp = new RegExp(`[^0-9\\${i}]+`, "gi"), this.cleanRegExp = new RegExp("[^0-9]+", "gi"), this.negativeRegExp = new RegExp("[^0-9\\-]+", "gi");
  }
  isNull() {
    return !this.numberOnly(this.isClean ? this.cleanRegExp : this.negativeRegExp);
  }
  clean(e = false) {
    return this.isClean = e, this;
  }
  sign() {
    if (null === this.input || void 0 === this.input)
      return "";
    const e = this.input.toString().indexOf("-") >= 0;
    return this.isClean ? e && this.realNumber() > 0 ? "-" : "" : e ? "-" : "";
  }
  toFixed() {
    const e = Math.pow(10, this.options.precision);
    return (parseFloat(this.numberOnly(/\D+/g)) / e || 0).toFixed(o(this.options.precision));
  }
  toNumber(e) {
    return Number(e);
  }
  numberOnly(e) {
    var _a;
    return (_a = this.input) == null ? void 0 : _a.toString().replace(this.preSurRegExp, "").replace(e || this.numberRegExp, "");
  }
  isNegative() {
    return "-" === this.sign();
  }
  numbers() {
    const { reverseFill: e, decimal: t } = this.options;
    return e ? this.number = this.toFixed().replace(".", t) : "number" == typeof this.input ? this.number = this.parts(this.input.toString().replace("-", ""), ".").join(t) : isNaN(this.toNumber(this.input)) ? this.number = this.parts(this.numberOnly()).join(t) : this.number = this.parts(this.input.replace("-", ""), ".").join(t), this.number;
  }
  unformatNumber() {
    return this.numbers().toString().replace(this.options.decimal, ".");
  }
  realNumber() {
    return parseFloat(this.unformatNumber());
  }
  parts(e, t) {
    const { precision: n, minimumFractionDigits: i, decimal: r } = this.options;
    let l = e.toString().split(t || r);
    if (l.length > 1 && (l[0] = this.toNumber(l[0]) || 0, l[1] = l.slice(1, l.length).join(""), l = l.slice(0, 2)), this.isClean) {
      const e2 = this.toNumber(l.join(".")).toFixed(n), t2 = this.toNumber(e2), r2 = t2.toFixed(i);
      l = i >= 0 && t2.toString().length < r2.length ? r2.toString().split(".") : t2.toString().split(".");
    }
    return l.slice(0, 2);
  }
  addSeparator() {
    const { decimal: e, separator: t } = this.options, n = this.numbers().split(e);
    return n[0] = n[0].toString().replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${t}`), n.join(e);
  }
  format(e) {
    this.input = e;
    const { reverseFill: t, nullValue: n, prefix: i, suffix: r } = this.options;
    return this.isNull() && !t ? n : this.sign() + i + this.addSeparator() + r;
  }
  unformat(e) {
    this.input = e;
    const { reverseFill: t, nullValue: n } = this.options, i = this.realNumber(), r = this.unformatNumber();
    return this.isNull() || t && 0 === i ? n : this.sign() + r;
  }
}
const m = "-";
function c(e) {
  return JSON.parse(JSON.stringify(e));
}
function d(e) {
  return new CustomEvent(e, { bubbles: true, cancelable: true, detail: { facade: true } });
}
function v(e) {
  const t = e instanceof HTMLInputElement ? e : e.querySelector("input");
  if (!t)
    throw new Error("number directive requires an input element");
  return t;
}
function f(e, t) {
  const n = () => {
    e.setSelectionRange(t, t);
  };
  n(), setTimeout(n, 1);
}
function h(e, t, { emit: n = true, force: i = false, clean: r = false } = {}) {
  var _a;
  const { options: l, oldValue: u } = e, { reverseFill: a, max: s2, min: o2 } = l, m2 = ((_a = t == null ? void 0 : t.props) == null ? void 0 : _a.value) || e.value;
  if (i || u !== m2) {
    const t2 = new p(l).clean(r && !a);
    let i2 = t2.format(m2), u2 = t2.clean(!a).unformat(m2);
    return r && (Number(s2) === s2 && Number(u2) > s2 ? (i2 = t2.format(s2), u2 = s2.toString()) : Number(o2) === o2 && Number(u2) < o2 && (i2 = t2.format(o2), u2 = o2.toString())), e.oldValue = i2, e.unmasked = u2, e.value !== i2 && (e.value = i2), n && e.dispatchEvent(d("input"));
  }
}
var g = { beforeMount: (e, { value: t, modifiers: n }, i) => {
  var _a;
  e = v(e);
  const r = Object.assign(c(s), t, n), { reverseFill: l, precision: u, decimal: a } = r;
  e.options = r, e.setAttribute("inputmode", "numeric"), l && e.value ? (e.value = parseFloat(new p({ ...r, reverseFill: false }).unformat(e.value)).toFixed(u), ((_a = i == null ? void 0 : i.props) == null ? void 0 : _a.value) && (i.props.value = e.value)) : e.value && !isNaN(Number(e.value)) && (e.value = e.value.replace(".", a)), h(e, i, { force: r.prefill, clean: true, emit: false });
}, mounted: (e) => {
  const t = (e = v(e)).parentElement || e, n = (t2) => {
    t2.target === e && function(e2) {
      const { target: t3, detail: n2 } = e2;
      if (n2 == null ? void 0 : n2.facade)
        return false;
      e2.stopPropagation();
      let i2 = t3.value.length;
      const { oldValue: r2, options: l } = t3;
      t3.selectionEnd && (i2 = t3.value.length - t3.selectionEnd), h(t3, null, { clean: !l.precision, emit: false }), l.suffix && (i2 = Math.max(i2, l.suffix.length)), i2 = t3.value.length - i2, l.prefix && (i2 = Math.max(i2, l.prefix.length)), f(t3, i2), r2 !== t3.value && t3.dispatchEvent(d("input"));
    }(t2);
  }, i = (t2) => {
    t2.target === e && function(e2) {
      const { target: t3 } = e2, { oldValue: n2 } = t3;
      h(t3, null, { force: true, clean: true, emit: false }), n2 !== t3.value && t3.dispatchEvent(d("input"));
    }(t2);
  }, r = (t2) => {
    t2.target === e && function(e2, t3) {
      const { options: n2 } = t3, { prefix: i2, suffix: r2, decimal: l, min: u, separator: a } = n2, { key: s2 } = e2, o2 = new RegExp(`${i2}|${r2}`, "g"), p2 = t3.value.replace(o2, ""), c2 = void 0 === u || Number(u) < 0 || Number(u) !== u;
      if (s2 === l)
        p2.includes(l) ? e2.preventDefault() : p2 || (t3.value = "0" + l, t3.dispatchEvent(new Event("input")));
      else if (s2 !== m || c2) {
        if ("Backspace" === s2) {
          const n3 = t3.selectionEnd || 0, l2 = t3.value.slice(n3 - 1, n3), u2 = t3.value.slice(n3 - 2, n3);
          let s3 = t3.value.length - n3;
          [i2, m, a].includes(l2) && (e2.preventDefault(), t3.value = l2 === a ? t3.value.replace(u2, "") : t3.value.replace(new RegExp(`[${i2}${m}]`, "g"), ""), s3 = Math.max(s3, r2.length), s3 = t3.value.length - s3, s3 = Math.max(s3, i2.length), f(t3, s3), t3.dispatchEvent(new Event("input")));
        }
      } else
        e2.preventDefault();
    }(t2, e);
  };
  t.addEventListener("input", n, true), t.addEventListener("blur", i, true), t.addEventListener("keydown", r, true), e.cleanup = () => {
    t.removeEventListener("input", n, true), t.removeEventListener("blur", i, true), t.removeEventListener("keydown", r, true);
  };
}, updated: (e, { value: t, oldValue: n, modifiers: i }, r) => {
  if (e = v(e), t !== n) {
    const n2 = e.options;
    e.options = Object.assign(n2, t, i), h(e, r, { force: true, clean: false, emit: false });
  } else
    h(e, r, { emit: false });
}, unmounted: (e) => {
  v(e).cleanup();
} };
const b = c(s);
var x = defineComponent({ name: "VueNumber", directives: { number: g }, props: { modelValue: { type: [String, Number], required: true }, nullValue: { type: [Number, String], default: b.nullValue }, masked: Boolean, readonly: Boolean, disabled: Boolean, reverseFill: { type: Boolean, default: b.reverseFill }, prefill: { type: Boolean, default: b.prefill }, precision: { type: Number, default: () => b.precision }, minimumFractionDigits: { type: Number, default: () => b.minimumFractionDigits }, decimal: { type: String, default: () => b.decimal }, min: { type: Number, default: () => b.min }, max: { type: Number, default: () => b.max }, separator: { type: String, default: () => b.separator }, prefix: { type: String, default: () => b.prefix }, suffix: { type: String, default: () => b.suffix } }, emits: ["update:model-value", "input:model-value"], setup(e, { emit: r }) {
  const l = ref(e.modelValue), u = ref(false), a = ref(""), s2 = computed(() => ({ ...e })), o2 = new p(s2.value), m2 = computed(() => e.masked ? o2.format(l.value) : a.value), c2 = () => {
    r("update:model-value", m2.value);
  };
  return watch(() => e.modelValue, (e2) => {
    const t = o2.format(e2);
    t !== l.value && (l.value = t);
  }), { config: s2, maskedValue: l, unmaskedValue: a, input: (e2) => {
    const { target: t } = e2;
    l.value = t.value, a.value = t.unmasked, u.value = true, r("input:model-value", m2.value);
  }, blur: () => {
    u.value && m2.value !== e.modelValue && c2();
  }, change: c2 };
} });
const E = ["value", "readonly", "disabled"];
x.render = function(e, t, n, i, s2, o2) {
  const p2 = resolveDirective("number");
  return withDirectives((openBlock(), createElementBlock("input", { type: "text", autocomplete: "off", value: e.maskedValue, readonly: e.readonly, disabled: e.disabled, class: "v-number vue-number-format", onChange: t[0] || (t[0] = (...t2) => e.change && e.change(...t2)), onInput: t[1] || (t[1] = (...t2) => e.input && e.input(...t2)), onBlur: t[2] || (t[2] = (...t2) => e.blur && e.blur(...t2)) }, null, 40, E)), [[p2, e.config]]);
}, x.__file = "src/component.vue";
const _sfc_main = {
  name: "NumberFormat",
  props: ["amount", "money_config"],
  data() {
    return {
      total: 0,
      number: void 0
    };
  },
  created() {
    if (typeof this.money_config === "undefined" || this.money_config === null || this.money_config === "" || this.money_config === "null" || this.money_config === "undefined") {
      this.number = new p(this.DataStore.money_config);
    } else {
      this.number = new p(this.money_config);
    }
    this.total = this.number.format(this.amount);
  },
  watch: {
    money_config(newval, oldval) {
    },
    amount(newval, oldval) {
      this.total = this.number.format(newval);
    }
  },
  setup() {
    const DataStore = useDataStore();
    return {
      DataStore
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", null, toDisplayString($data.total), 1);
}
var NumberFormat = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "NumberFormat.vue"]]);
export { NumberFormat as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVyRm9ybWF0LjEyZTJjMTg3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGNvZGVycy10bS92dWUtbnVtYmVyLWZvcm1hdC9kaXN0L2luZGV4Lm1qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL051bWJlckZvcm1hdC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBWdWUgTnVtYmVyIEZvcm1hdCAzLjM0LjFcbiAqIChjKSAyMDIxLTIwMjMgRGlwYWsgU2Fya2FyIDxoZWxsb0BkaXBha3Nhcmthci5pbj4gKGh0dHBzOi8vZGlwYWtzYXJrYXIuaW4vKVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmltcG9ydHtkZWZpbmVDb21wb25lbnQgYXMgZSxyZWYgYXMgdCxjb21wdXRlZCBhcyBuLHdhdGNoIGFzIGkscmVzb2x2ZURpcmVjdGl2ZSBhcyByLHdpdGhEaXJlY3RpdmVzIGFzIGwsb3BlbkJsb2NrIGFzIHUsY3JlYXRlRWxlbWVudEJsb2NrIGFzIGF9ZnJvbVwidnVlXCI7dmFyIHM9e3ByZWZpeDpcIlwiLHN1ZmZpeDpcIlwiLHNlcGFyYXRvcjpcIixcIixkZWNpbWFsOlwiLlwiLHByZWNpc2lvbjoyLG1pbmltdW1GcmFjdGlvbkRpZ2l0czpudWxsLHByZWZpbGw6ITAscmV2ZXJzZUZpbGw6ITEsbWluOm51bGwsbWF4Om51bGwsbnVsbFZhbHVlOlwiXCJ9O2Z1bmN0aW9uIG8oZSl7cmV0dXJuIHQ9MCxuPWUsaT0yMCxNYXRoLm1heCh0LE1hdGgubWluKG4saSkpO3ZhciB0LG4saX1jbGFzcyBwe29wdGlvbnM7aW5wdXQ7bnVtYmVyO2lzQ2xlYW47cHJlU3VyUmVnRXhwO251bWJlclJlZ0V4cDtjbGVhblJlZ0V4cDtuZWdhdGl2ZVJlZ0V4cDtjb25zdHJ1Y3RvcihlKXt0aGlzLm9wdGlvbnM9T2JqZWN0LmFzc2lnbihjKHMpLGUpO2NvbnN0e3ByZWZpeDp0LHN1ZmZpeDpuLGRlY2ltYWw6aSxyZXZlcnNlRmlsbDpyfT10aGlzLm9wdGlvbnM7dGhpcy5pbnB1dD1cIlwiLHRoaXMubnVtYmVyPVwiXCIsdGhpcy5pc0NsZWFuPSFyO2NvbnN0IGw9dC5yZXBsYWNlKC9bLS9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLFwiXFxcXCQmXCIpLHU9bi5yZXBsYWNlKC9bLS9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLFwiXFxcXCQmXCIpO3RoaXMucHJlU3VyUmVnRXhwPW5ldyBSZWdFeHAoYCR7bH18JHt1fWAsXCJnXCIpLHRoaXMubnVtYmVyUmVnRXhwPW5ldyBSZWdFeHAoYFteMC05XFxcXCR7aX1dK2AsXCJnaVwiKSx0aGlzLmNsZWFuUmVnRXhwPW5ldyBSZWdFeHAoXCJbXjAtOV0rXCIsXCJnaVwiKSx0aGlzLm5lZ2F0aXZlUmVnRXhwPW5ldyBSZWdFeHAoXCJbXjAtOVxcXFwtXStcIixcImdpXCIpfWlzTnVsbCgpe3JldHVybiF0aGlzLm51bWJlck9ubHkodGhpcy5pc0NsZWFuP3RoaXMuY2xlYW5SZWdFeHA6dGhpcy5uZWdhdGl2ZVJlZ0V4cCl9Y2xlYW4oZT0hMSl7cmV0dXJuIHRoaXMuaXNDbGVhbj1lLHRoaXN9c2lnbigpe2lmKG51bGw9PT10aGlzLmlucHV0fHx2b2lkIDA9PT10aGlzLmlucHV0KXJldHVyblwiXCI7Y29uc3QgZT10aGlzLmlucHV0LnRvU3RyaW5nKCkuaW5kZXhPZihcIi1cIik+PTA7cmV0dXJuIHRoaXMuaXNDbGVhbj9lJiZ0aGlzLnJlYWxOdW1iZXIoKT4wP1wiLVwiOlwiXCI6ZT9cIi1cIjpcIlwifXRvRml4ZWQoKXtjb25zdCBlPU1hdGgucG93KDEwLHRoaXMub3B0aW9ucy5wcmVjaXNpb24pO3JldHVybihwYXJzZUZsb2F0KHRoaXMubnVtYmVyT25seSgvXFxEKy9nKSkvZXx8MCkudG9GaXhlZChvKHRoaXMub3B0aW9ucy5wcmVjaXNpb24pKX10b051bWJlcihlKXtyZXR1cm4gTnVtYmVyKGUpfW51bWJlck9ubHkoZSl7cmV0dXJuIHRoaXMuaW5wdXQ/LnRvU3RyaW5nKCkucmVwbGFjZSh0aGlzLnByZVN1clJlZ0V4cCxcIlwiKS5yZXBsYWNlKGV8fHRoaXMubnVtYmVyUmVnRXhwLFwiXCIpfWlzTmVnYXRpdmUoKXtyZXR1cm5cIi1cIj09PXRoaXMuc2lnbigpfW51bWJlcnMoKXtjb25zdHtyZXZlcnNlRmlsbDplLGRlY2ltYWw6dH09dGhpcy5vcHRpb25zO3JldHVybiBlP3RoaXMubnVtYmVyPXRoaXMudG9GaXhlZCgpLnJlcGxhY2UoXCIuXCIsdCk6XCJudW1iZXJcIj09dHlwZW9mIHRoaXMuaW5wdXQ/dGhpcy5udW1iZXI9dGhpcy5wYXJ0cyh0aGlzLmlucHV0LnRvU3RyaW5nKCkucmVwbGFjZShcIi1cIixcIlwiKSxcIi5cIikuam9pbih0KTppc05hTih0aGlzLnRvTnVtYmVyKHRoaXMuaW5wdXQpKT90aGlzLm51bWJlcj10aGlzLnBhcnRzKHRoaXMubnVtYmVyT25seSgpKS5qb2luKHQpOnRoaXMubnVtYmVyPXRoaXMucGFydHModGhpcy5pbnB1dC5yZXBsYWNlKFwiLVwiLFwiXCIpLFwiLlwiKS5qb2luKHQpLHRoaXMubnVtYmVyfXVuZm9ybWF0TnVtYmVyKCl7cmV0dXJuIHRoaXMubnVtYmVycygpLnRvU3RyaW5nKCkucmVwbGFjZSh0aGlzLm9wdGlvbnMuZGVjaW1hbCxcIi5cIil9cmVhbE51bWJlcigpe3JldHVybiBwYXJzZUZsb2F0KHRoaXMudW5mb3JtYXROdW1iZXIoKSl9cGFydHMoZSx0KXtjb25zdHtwcmVjaXNpb246bixtaW5pbXVtRnJhY3Rpb25EaWdpdHM6aSxkZWNpbWFsOnJ9PXRoaXMub3B0aW9ucztsZXQgbD1lLnRvU3RyaW5nKCkuc3BsaXQodHx8cik7aWYobC5sZW5ndGg+MSYmKGxbMF09dGhpcy50b051bWJlcihsWzBdKXx8MCxsWzFdPWwuc2xpY2UoMSxsLmxlbmd0aCkuam9pbihcIlwiKSxsPWwuc2xpY2UoMCwyKSksdGhpcy5pc0NsZWFuKXtjb25zdCBlPXRoaXMudG9OdW1iZXIobC5qb2luKFwiLlwiKSkudG9GaXhlZChuKSx0PXRoaXMudG9OdW1iZXIoZSkscj10LnRvRml4ZWQoaSk7bD1pPj0wJiZ0LnRvU3RyaW5nKCkubGVuZ3RoPHIubGVuZ3RoP3IudG9TdHJpbmcoKS5zcGxpdChcIi5cIik6dC50b1N0cmluZygpLnNwbGl0KFwiLlwiKX1yZXR1cm4gbC5zbGljZSgwLDIpfWFkZFNlcGFyYXRvcigpe2NvbnN0e2RlY2ltYWw6ZSxzZXBhcmF0b3I6dH09dGhpcy5vcHRpb25zLG49dGhpcy5udW1iZXJzKCkuc3BsaXQoZSk7cmV0dXJuIG5bMF09blswXS50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KD86XFxkezN9KStcXGIpL2dtLGAkMSR7dH1gKSxuLmpvaW4oZSl9Zm9ybWF0KGUpe3RoaXMuaW5wdXQ9ZTtjb25zdHtyZXZlcnNlRmlsbDp0LG51bGxWYWx1ZTpuLHByZWZpeDppLHN1ZmZpeDpyfT10aGlzLm9wdGlvbnM7cmV0dXJuIHRoaXMuaXNOdWxsKCkmJiF0P246dGhpcy5zaWduKCkraSt0aGlzLmFkZFNlcGFyYXRvcigpK3J9dW5mb3JtYXQoZSl7dGhpcy5pbnB1dD1lO2NvbnN0e3JldmVyc2VGaWxsOnQsbnVsbFZhbHVlOm59PXRoaXMub3B0aW9ucyxpPXRoaXMucmVhbE51bWJlcigpLHI9dGhpcy51bmZvcm1hdE51bWJlcigpO3JldHVybiB0aGlzLmlzTnVsbCgpfHx0JiYwPT09aT9uOnRoaXMuc2lnbigpK3J9fWNvbnN0IG09XCItXCI7ZnVuY3Rpb24gYyhlKXtyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSl9ZnVuY3Rpb24gZChlKXtyZXR1cm4gbmV3IEN1c3RvbUV2ZW50KGUse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxkZXRhaWw6e2ZhY2FkZTohMH19KX1mdW5jdGlvbiB2KGUpe2NvbnN0IHQ9ZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ/ZTplLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJudW1iZXIgZGlyZWN0aXZlIHJlcXVpcmVzIGFuIGlucHV0IGVsZW1lbnRcIik7cmV0dXJuIHR9ZnVuY3Rpb24gZihlLHQpe2NvbnN0IG49KCk9PntlLnNldFNlbGVjdGlvblJhbmdlKHQsdCl9O24oKSxzZXRUaW1lb3V0KG4sMSl9ZnVuY3Rpb24gaChlLHQse2VtaXQ6bj0hMCxmb3JjZTppPSExLGNsZWFuOnI9ITF9PXt9KXtjb25zdHtvcHRpb25zOmwsb2xkVmFsdWU6dX09ZSx7cmV2ZXJzZUZpbGw6YSxtYXg6cyxtaW46b309bCxtPXQ/LnByb3BzPy52YWx1ZXx8ZS52YWx1ZTtpZihpfHx1IT09bSl7Y29uc3QgdD1uZXcgcChsKS5jbGVhbihyJiYhYSk7bGV0IGk9dC5mb3JtYXQobSksdT10LmNsZWFuKCFhKS51bmZvcm1hdChtKTtyZXR1cm4gciYmKE51bWJlcihzKT09PXMmJk51bWJlcih1KT5zPyhpPXQuZm9ybWF0KHMpLHU9cy50b1N0cmluZygpKTpOdW1iZXIobyk9PT1vJiZOdW1iZXIodSk8byYmKGk9dC5mb3JtYXQobyksdT1vLnRvU3RyaW5nKCkpKSxlLm9sZFZhbHVlPWksZS51bm1hc2tlZD11LGUudmFsdWUhPT1pJiYoZS52YWx1ZT1pKSxuJiZlLmRpc3BhdGNoRXZlbnQoZChcImlucHV0XCIpKX19dmFyIGc9e2JlZm9yZU1vdW50OihlLHt2YWx1ZTp0LG1vZGlmaWVyczpufSxpKT0+e2U9dihlKTtjb25zdCByPU9iamVjdC5hc3NpZ24oYyhzKSx0LG4pLHtyZXZlcnNlRmlsbDpsLHByZWNpc2lvbjp1LGRlY2ltYWw6YX09cjtlLm9wdGlvbnM9cixlLnNldEF0dHJpYnV0ZShcImlucHV0bW9kZVwiLFwibnVtZXJpY1wiKSxsJiZlLnZhbHVlPyhlLnZhbHVlPXBhcnNlRmxvYXQobmV3IHAoey4uLnIscmV2ZXJzZUZpbGw6ITF9KS51bmZvcm1hdChlLnZhbHVlKSkudG9GaXhlZCh1KSxpPy5wcm9wcz8udmFsdWUmJihpLnByb3BzLnZhbHVlPWUudmFsdWUpKTplLnZhbHVlJiYhaXNOYU4oTnVtYmVyKGUudmFsdWUpKSYmKGUudmFsdWU9ZS52YWx1ZS5yZXBsYWNlKFwiLlwiLGEpKSxoKGUsaSx7Zm9yY2U6ci5wcmVmaWxsLGNsZWFuOiEwLGVtaXQ6ITF9KX0sbW91bnRlZDplPT57Y29uc3QgdD0oZT12KGUpKS5wYXJlbnRFbGVtZW50fHxlLG49dD0+e3QudGFyZ2V0PT09ZSYmZnVuY3Rpb24oZSl7Y29uc3R7dGFyZ2V0OnQsZGV0YWlsOm59PWU7aWYobj8uZmFjYWRlKXJldHVybiExO2Uuc3RvcFByb3BhZ2F0aW9uKCk7bGV0IGk9dC52YWx1ZS5sZW5ndGg7Y29uc3R7b2xkVmFsdWU6cixvcHRpb25zOmx9PXQ7dC5zZWxlY3Rpb25FbmQmJihpPXQudmFsdWUubGVuZ3RoLXQuc2VsZWN0aW9uRW5kKSxoKHQsbnVsbCx7Y2xlYW46IWwucHJlY2lzaW9uLGVtaXQ6ITF9KSxsLnN1ZmZpeCYmKGk9TWF0aC5tYXgoaSxsLnN1ZmZpeC5sZW5ndGgpKSxpPXQudmFsdWUubGVuZ3RoLWksbC5wcmVmaXgmJihpPU1hdGgubWF4KGksbC5wcmVmaXgubGVuZ3RoKSksZih0LGkpLHIhPT10LnZhbHVlJiZ0LmRpc3BhdGNoRXZlbnQoZChcImlucHV0XCIpKX0odCl9LGk9dD0+e3QudGFyZ2V0PT09ZSYmZnVuY3Rpb24oZSl7Y29uc3R7dGFyZ2V0OnR9PWUse29sZFZhbHVlOm59PXQ7aCh0LG51bGwse2ZvcmNlOiEwLGNsZWFuOiEwLGVtaXQ6ITF9KSxuIT09dC52YWx1ZSYmdC5kaXNwYXRjaEV2ZW50KGQoXCJpbnB1dFwiKSl9KHQpfSxyPXQ9Pnt0LnRhcmdldD09PWUmJmZ1bmN0aW9uKGUsdCl7Y29uc3R7b3B0aW9uczpufT10LHtwcmVmaXg6aSxzdWZmaXg6cixkZWNpbWFsOmwsbWluOnUsc2VwYXJhdG9yOmF9PW4se2tleTpzfT1lLG89bmV3IFJlZ0V4cChgJHtpfXwke3J9YCxcImdcIikscD10LnZhbHVlLnJlcGxhY2UobyxcIlwiKSxjPXZvaWQgMD09PXV8fE51bWJlcih1KTwwfHxOdW1iZXIodSkhPT11O2lmKHM9PT1sKXAuaW5jbHVkZXMobCk/ZS5wcmV2ZW50RGVmYXVsdCgpOnB8fCh0LnZhbHVlPVwiMFwiK2wsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKSk7ZWxzZSBpZihzIT09bXx8Yyl7aWYoXCJCYWNrc3BhY2VcIj09PXMpe2NvbnN0IG49dC5zZWxlY3Rpb25FbmR8fDAsbD10LnZhbHVlLnNsaWNlKG4tMSxuKSx1PXQudmFsdWUuc2xpY2Uobi0yLG4pO2xldCBzPXQudmFsdWUubGVuZ3RoLW47W2ksbSxhXS5pbmNsdWRlcyhsKSYmKGUucHJldmVudERlZmF1bHQoKSx0LnZhbHVlPWw9PT1hP3QudmFsdWUucmVwbGFjZSh1LFwiXCIpOnQudmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtpfSR7bX1dYCxcImdcIiksXCJcIikscz1NYXRoLm1heChzLHIubGVuZ3RoKSxzPXQudmFsdWUubGVuZ3RoLXMscz1NYXRoLm1heChzLGkubGVuZ3RoKSxmKHQscyksdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKSl9fWVsc2UgZS5wcmV2ZW50RGVmYXVsdCgpfSh0LGUpfTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLG4sITApLHQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIixpLCEwKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsciwhMCksZS5jbGVhbnVwPSgpPT57dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIixuLCEwKSx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsaSwhMCksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHIsITApfX0sdXBkYXRlZDooZSx7dmFsdWU6dCxvbGRWYWx1ZTpuLG1vZGlmaWVyczppfSxyKT0+e2lmKGU9dihlKSx0IT09bil7Y29uc3Qgbj1lLm9wdGlvbnM7ZS5vcHRpb25zPU9iamVjdC5hc3NpZ24obix0LGkpLGgoZSxyLHtmb3JjZTohMCxjbGVhbjohMSxlbWl0OiExfSl9ZWxzZSBoKGUscix7ZW1pdDohMX0pfSx1bm1vdW50ZWQ6ZT0+e3YoZSkuY2xlYW51cCgpfX07Y29uc3QgYj1jKHMpO3ZhciB4PWUoe25hbWU6XCJWdWVOdW1iZXJcIixkaXJlY3RpdmVzOntudW1iZXI6Z30scHJvcHM6e21vZGVsVmFsdWU6e3R5cGU6W1N0cmluZyxOdW1iZXJdLHJlcXVpcmVkOiEwfSxudWxsVmFsdWU6e3R5cGU6W051bWJlcixTdHJpbmddLGRlZmF1bHQ6Yi5udWxsVmFsdWV9LG1hc2tlZDpCb29sZWFuLHJlYWRvbmx5OkJvb2xlYW4sZGlzYWJsZWQ6Qm9vbGVhbixyZXZlcnNlRmlsbDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6Yi5yZXZlcnNlRmlsbH0scHJlZmlsbDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6Yi5wcmVmaWxsfSxwcmVjaXNpb246e3R5cGU6TnVtYmVyLGRlZmF1bHQ6KCk9PmIucHJlY2lzaW9ufSxtaW5pbXVtRnJhY3Rpb25EaWdpdHM6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6KCk9PmIubWluaW11bUZyYWN0aW9uRGlnaXRzfSxkZWNpbWFsOnt0eXBlOlN0cmluZyxkZWZhdWx0OigpPT5iLmRlY2ltYWx9LG1pbjp7dHlwZTpOdW1iZXIsZGVmYXVsdDooKT0+Yi5taW59LG1heDp7dHlwZTpOdW1iZXIsZGVmYXVsdDooKT0+Yi5tYXh9LHNlcGFyYXRvcjp7dHlwZTpTdHJpbmcsZGVmYXVsdDooKT0+Yi5zZXBhcmF0b3J9LHByZWZpeDp7dHlwZTpTdHJpbmcsZGVmYXVsdDooKT0+Yi5wcmVmaXh9LHN1ZmZpeDp7dHlwZTpTdHJpbmcsZGVmYXVsdDooKT0+Yi5zdWZmaXh9fSxlbWl0czpbXCJ1cGRhdGU6bW9kZWwtdmFsdWVcIixcImlucHV0Om1vZGVsLXZhbHVlXCJdLHNldHVwKGUse2VtaXQ6cn0pe2NvbnN0IGw9dChlLm1vZGVsVmFsdWUpLHU9dCghMSksYT10KFwiXCIpLHM9bigoKCk9Pih7Li4uZX0pKSksbz1uZXcgcChzLnZhbHVlKSxtPW4oKCgpPT5lLm1hc2tlZD9vLmZvcm1hdChsLnZhbHVlKTphLnZhbHVlKSksYz0oKT0+e3IoXCJ1cGRhdGU6bW9kZWwtdmFsdWVcIixtLnZhbHVlKX07cmV0dXJuIGkoKCgpPT5lLm1vZGVsVmFsdWUpLChlPT57Y29uc3QgdD1vLmZvcm1hdChlKTt0IT09bC52YWx1ZSYmKGwudmFsdWU9dCl9KSkse2NvbmZpZzpzLG1hc2tlZFZhbHVlOmwsdW5tYXNrZWRWYWx1ZTphLGlucHV0OmU9Pntjb25zdHt0YXJnZXQ6dH09ZTtsLnZhbHVlPXQudmFsdWUsYS52YWx1ZT10LnVubWFza2VkLHUudmFsdWU9ITAscihcImlucHV0Om1vZGVsLXZhbHVlXCIsbS52YWx1ZSl9LGJsdXI6KCk9Pnt1LnZhbHVlJiZtLnZhbHVlIT09ZS5tb2RlbFZhbHVlJiZjKCl9LGNoYW5nZTpjfX19KTtjb25zdCBFPVtcInZhbHVlXCIsXCJyZWFkb25seVwiLFwiZGlzYWJsZWRcIl07eC5yZW5kZXI9ZnVuY3Rpb24oZSx0LG4saSxzLG8pe2NvbnN0IHA9cihcIm51bWJlclwiKTtyZXR1cm4gbCgodSgpLGEoXCJpbnB1dFwiLHt0eXBlOlwidGV4dFwiLGF1dG9jb21wbGV0ZTpcIm9mZlwiLHZhbHVlOmUubWFza2VkVmFsdWUscmVhZG9ubHk6ZS5yZWFkb25seSxkaXNhYmxlZDplLmRpc2FibGVkLGNsYXNzOlwidi1udW1iZXIgdnVlLW51bWJlci1mb3JtYXRcIixvbkNoYW5nZTp0WzBdfHwodFswXT0oLi4udCk9PmUuY2hhbmdlJiZlLmNoYW5nZSguLi50KSksb25JbnB1dDp0WzFdfHwodFsxXT0oLi4udCk9PmUuaW5wdXQmJmUuaW5wdXQoLi4udCkpLG9uQmx1cjp0WzJdfHwodFsyXT0oLi4udCk9PmUuYmx1ciYmZS5ibHVyKC4uLnQpKX0sbnVsbCw0MCxFKSksW1twLGUuY29uZmlnXV0pfSx4Ll9fZmlsZT1cInNyYy9jb21wb25lbnQudnVlXCI7Y29uc3QgTj17aW5zdGFsbChlLHQpe3QmJk9iamVjdC5hc3NpZ24ocyx0KSxlLmRpcmVjdGl2ZShcIm51bWJlclwiLGcpLGUuY29tcG9uZW50KFwiVnVlTnVtYmVyXCIseCl9fTtleHBvcnR7cCBhcyBOdW1iZXJGb3JtYXQseCBhcyBjb21wb25lbnQsTiBhcyBkZWZhdWx0LGcgYXMgZGlyZWN0aXZlLHMgYXMgb3B0aW9uc307XG4iLCI8dGVtcGxhdGU+XG4gIDwhLS0gPHByZT57eyBtb25leV9jb25maWcgfX08L3ByZT4gLS0+XG4gIDwhLS0gPHByZT57eyBEYXRhU3RvcmUubW9uZXlfY29uZmlnIH19PC9wcmU+ICAtLT5cbiAgPHNwYW4+e3sgdG90YWwgfX08L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgTnVtYmVyRm9ybWF0IH0gZnJvbSBcIkBjb2RlcnMtdG0vdnVlLW51bWJlci1mb3JtYXRcIjtcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9IGZyb20gXCJzdG9yZXMvRGF0YVN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJOdW1iZXJGb3JtYXRcIixcbiAgcHJvcHM6IFtcImFtb3VudFwiLCBcIm1vbmV5X2NvbmZpZ1wiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG90YWw6IDAsXG4gICAgICBudW1iZXI6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiB0aGlzLm1vbmV5X2NvbmZpZyA9PT0gXCJ1bmRlZmluZWRcIiB8fFxuICAgICAgdGhpcy5tb25leV9jb25maWcgPT09IG51bGwgfHxcbiAgICAgIHRoaXMubW9uZXlfY29uZmlnID09PSBcIlwiIHx8XG4gICAgICB0aGlzLm1vbmV5X2NvbmZpZyA9PT0gXCJudWxsXCIgfHxcbiAgICAgIHRoaXMubW9uZXlfY29uZmlnID09PSBcInVuZGVmaW5lZFwiXG4gICAgKSB7XG4gICAgICB0aGlzLm51bWJlciA9IG5ldyBOdW1iZXJGb3JtYXQodGhpcy5EYXRhU3RvcmUubW9uZXlfY29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5udW1iZXIgPSBuZXcgTnVtYmVyRm9ybWF0KHRoaXMubW9uZXlfY29uZmlnKTtcbiAgICB9XG5cbiAgICB0aGlzLnRvdGFsID0gdGhpcy5udW1iZXIuZm9ybWF0KHRoaXMuYW1vdW50KTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBtb25leV9jb25maWcobmV3dmFsLCBvbGR2YWwpIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJkMnh4eFwiKTtcbiAgICB9LFxuICAgIGFtb3VudChuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgdGhpcy50b3RhbCA9IHRoaXMubnVtYmVyLmZvcm1hdChuZXd2YWwpO1xuICAgIH0sXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IERhdGFTdG9yZSA9IHVzZURhdGFTdG9yZSgpO1xuICAgIHJldHVybiB7XG4gICAgICBEYXRhU3RvcmUsXG4gICAgfTtcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJzIiwibyIsIm0iLCJpIiwidSIsIm4iLCJwIiwiYyIsImwiLCJhIiwiTnVtYmVyRm9ybWF0IiwiX29wZW5CbG9jayIsIl9jcmVhdGVFbGVtZW50QmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS3lKLElBQUksSUFBRSxFQUFDLFFBQU8sSUFBRyxRQUFPLElBQUcsV0FBVSxLQUFJLFNBQVEsS0FBSSxXQUFVLEdBQUUsdUJBQXNCLE1BQUssU0FBUSxNQUFHLGFBQVksT0FBRyxLQUFJLE1BQUssS0FBSSxNQUFLLFdBQVUsR0FBRTtBQUFFLFNBQVMsRUFBRSxHQUFFO0FBQUMsU0FBTyxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsSUFBRyxLQUFLLElBQUksR0FBRSxLQUFLLElBQUksR0FBRSxDQUFDLENBQUM7QUFBRSxNQUFJLEdBQUUsR0FBRTtBQUFDO0FBQUMsTUFBTSxFQUFDO0FBQUEsRUFBbUYsWUFBWSxHQUFFO0FBQWhHO0FBQVE7QUFBTTtBQUFPO0FBQVE7QUFBYTtBQUFhO0FBQVk7QUFBOEIsU0FBSyxVQUFRLE9BQU8sT0FBTyxFQUFF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
