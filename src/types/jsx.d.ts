// CustomJSX.d.ts

// Core HTML attributes that most elements can have
interface CoreHTMLAttributes {
  // Core attributes
  id?: string;
  className?: string;
  style?: React.CSSProperties | string;
  key?: string | number;

  // Event handlers
  onClick?: (event: any) => void;
  onChange?: (event: any) => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
  onKeyDown?: (event: any) => void;
  onKeyUp?: (event: any) => void;
  onMouseDown?: (event: any) => void;
  onMouseUp?: (event: any) => void;
  onMouseEnter?: (event: any) => void;
  onMouseLeave?: (event: any) => void;

  // ARIA attributes
  role?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean | "true" | "false";
  "aria-disabled"?: boolean | "true" | "false";

  // Data attributes
  [key: `data-${string}`]: string | number | boolean | undefined;

  // Any other custom attributes
  [key: string]: any;
}

// Specific element types
interface HTMLDivAttributes extends CoreHTMLAttributes {}

interface HTMLSpanAttributes extends CoreHTMLAttributes {}

interface HTMLButtonAttributes extends CoreHTMLAttributes {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  name?: string;
  value?: string | number;
  form?: string;
  formAction?: string;
  formMethod?: "post" | "get" | "dialog";
  formNoValidate?: boolean;
  formTarget?: string;
}

interface HTMLInputAttributes extends CoreHTMLAttributes {
  type?:
    | "text"
    | "password"
    | "checkbox"
    | "radio"
    | "number"
    | "email"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "color"
    | "file"
    | "range"
    | "hidden";
  name?: string;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  checked?: boolean;
  defaultChecked?: boolean;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  pattern?: string;
  accept?: string;
  multiple?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  size?: number;
  list?: string;
}

interface HTMLTextAreaAttributes extends CoreHTMLAttributes {
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  cols?: number;
  autoComplete?: string;
  autoFocus?: boolean;
  wrap?: "hard" | "soft" | "off";
  maxLength?: number;
  minLength?: number;
}

interface HTMLSelectAttributes extends CoreHTMLAttributes {
  name?: string;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  disabled?: boolean;
  required?: boolean;
  multiple?: boolean;
  size?: number;
  autoComplete?: string;
  autoFocus?: boolean;
}

interface HTMLAnchorAttributes extends CoreHTMLAttributes {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  download?: any;
  hrefLang?: string;
  type?: string;
}

interface HTMLImageAttributes extends CoreHTMLAttributes {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  loading?: "eager" | "lazy";
  decoding?: "sync" | "async" | "auto";
  srcSet?: string;
  sizes?: string;
}

interface HTMLFormAttributes extends CoreHTMLAttributes {
  action?: string;
  method?: "post" | "get" | "dialog";
  encType?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  target?: "_blank" | "_self" | "_parent" | "_top";
  autoComplete?: "on" | "off";
  noValidate?: boolean;

  onSubmit: (event: Event) => void;
}

// Custom components specific to your JSX implementation
interface CustomComponentAttributes extends CoreHTMLAttributes {
  // Add your custom properties here
  customProp?: string;
  theme?: "light" | "dark" | "system";
  variant?: string;
}

// Define SVG related attributes if you need SVG support
interface SVGAttributes extends CoreHTMLAttributes {
  viewBox?: string;
  xmlns?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number | string;
  d?: string;
  cx?: number | string;
  cy?: number | string;
  r?: number | string;
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
}

declare global {
  namespace JSX {
    // type FunctionComponent = (props: { [key: string]: any } | null) => VNode;
    // type Element =
    //   | string
    //   | Function
    //   | {
    //       element: string | Function;
    //       props: any;
    //       key?: string | null;
    //       children: JSX.Element[];
    //     };

    type Element = string | VNode;

    type VNode =
      | {
          element: string;
          props: { [key: string]: any };
          children: (VNode | string)[];
        }
      | string
      | number
      | boolean;

    interface ElementAttributesProperty {
      props: {};
    }

    interface ElementChildrenAttribute {
      children: {};
    }

    interface IntrinsicElements {
      // HTML elements
      div: HTMLDivAttributes;
      span: HTMLSpanAttributes;
      p: CoreHTMLAttributes;
      h1: CoreHTMLAttributes;
      h2: CoreHTMLAttributes;
      h3: CoreHTMLAttributes;
      h4: CoreHTMLAttributes;
      h5: CoreHTMLAttributes;
      h6: CoreHTMLAttributes;
      button: HTMLButtonAttributes;
      input: HTMLInputAttributes;
      textarea: HTMLTextAreaAttributes;
      select: HTMLSelectAttributes;
      option: CoreHTMLAttributes & {
        value?: string | number;
        selected?: boolean;
        disabled?: boolean;
      };
      a: HTMLAnchorAttributes;
      img: HTMLImageAttributes;
      form: HTMLFormAttributes;
      label: CoreHTMLAttributes & { htmlFor?: string };
      ul: CoreHTMLAttributes;
      ol: CoreHTMLAttributes;
      li: CoreHTMLAttributes;
      table: CoreHTMLAttributes;
      tr: CoreHTMLAttributes;
      td: CoreHTMLAttributes & { colSpan?: number; rowSpan?: number };
      th: CoreHTMLAttributes & {
        colSpan?: number;
        rowSpan?: number;
        scope?: "col" | "row" | "rowgroup" | "colgroup";
      };
      thead: CoreHTMLAttributes;
      tbody: CoreHTMLAttributes;
      tfoot: CoreHTMLAttributes;

      // SVG elements
      svg: SVGAttributes;
      path: SVGAttributes;
      circle: SVGAttributes;
      rect: SVGAttributes;
      line: SVGAttributes;

      // Add your custom components
      customComponent: CustomComponentAttributes;

      // Allow any other HTML element
      [elemName: string]: any;
    }
  }
}

export {};
