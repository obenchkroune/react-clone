declare global {
  namespace JSX {
    interface SyntheticEvent {
      bubbles: boolean;
      cancelable: boolean;
      currentTarget: EventTarget;
      defaultPrevented: boolean;
      eventPhase: number;
      isTrusted: boolean;
      nativeEvent: Event;
      preventDefault(): void;
      stopPropagation(): void;
      target: EventTarget;
      timeStamp: number;
      type: string;
    }

    interface MouseEvent extends SyntheticEvent {
      altKey: boolean;
      button: number;
      buttons: number;
      clientX: number;
      clientY: number;
      ctrlKey: boolean;
      metaKey: boolean;
      movementX: number;
      movementY: number;
      pageX: number;
      pageY: number;
      screenX: number;
      screenY: number;
      shiftKey: boolean;
    }

    interface KeyboardEvent extends SyntheticEvent {
      altKey: boolean;
      charCode: number;
      code: string;
      ctrlKey: boolean;
      isComposing: boolean;
      key: string;
      keyCode: number;
      locale: string;
      location: number;
      metaKey: boolean;
      repeat: boolean;
      shiftKey: boolean;
      which: number;
    }

    interface ChangeEvent extends SyntheticEvent {
      target: EventTarget & {
        value: string;
        checked?: boolean;
      };
    }

    interface FocusEvent extends SyntheticEvent {
      relatedTarget: EventTarget | null;
    }

    interface HTMLAttributes {
      id?: string;
      className?: string;
      style?: string | Partial<CSSStyleDeclaration>;

      onClick?: (event: MouseEvent) => void;
      onContextMenu?: (event: MouseEvent) => void;
      onDoubleClick?: (event: MouseEvent) => void;
      onDrag?: (event: MouseEvent) => void;
      onDragEnd?: (event: MouseEvent) => void;
      onDragEnter?: (event: MouseEvent) => void;
      onDragExit?: (event: MouseEvent) => void;
      onDragLeave?: (event: MouseEvent) => void;
      onDragOver?: (event: MouseEvent) => void;
      onDragStart?: (event: MouseEvent) => void;
      onDrop?: (event: MouseEvent) => void;
      onMouseDown?: (event: MouseEvent) => void;
      onMouseEnter?: (event: MouseEvent) => void;
      onMouseLeave?: (event: MouseEvent) => void;
      onMouseMove?: (event: MouseEvent) => void;
      onMouseOut?: (event: MouseEvent) => void;
      onMouseOver?: (event: MouseEvent) => void;
      onMouseUp?: (event: MouseEvent) => void;

      onKeyDown?: (event: KeyboardEvent) => void;
      onKeyPress?: (event: KeyboardEvent) => void;
      onKeyUp?: (event: KeyboardEvent) => void;

      onFocus?: (event: FocusEvent) => void;
      onBlur?: (event: FocusEvent) => void;

      onChange?: (event: ChangeEvent) => void;
      onInput?: (event: ChangeEvent) => void;
      onSubmit?: (event: SyntheticEvent) => void;
      onReset?: (event: SyntheticEvent) => void;

      onLoad?: (event: SyntheticEvent) => void;
      onError?: (event: SyntheticEvent) => void;
      onScroll?: (event: SyntheticEvent) => void;

      role?: string;
      tabIndex?: number;
      hidden?: boolean;
      title?: string;
      lang?: string;
      dir?: 'ltr' | 'rtl' | 'auto';
      draggable?: boolean;
      accessKey?: string;
      contentEditable?: boolean | 'true' | 'false';
      spellCheck?: boolean | 'true' | 'false';
      translate?: 'yes' | 'no';

      dangerouslySetInnerHTML?: { __html: string };

      [dataAttr: `data-${string}`]: string | number | boolean;
      children?: Element[] | Element;
      key?: string;
    }

    interface InputHTMLAttributes extends HTMLAttributes {
      accept?: string;
      alt?: string;
      autoComplete?: string;
      autoFocus?: boolean;
      capture?: string;
      checked?: boolean;
      disabled?: boolean;
      form?: string;
      formAction?: string;
      formEncType?: string;
      formMethod?: string;
      formNoValidate?: boolean;
      formTarget?: string;
      height?: number | string;
      list?: string;
      max?: number | string;
      maxLength?: number;
      min?: number | string;
      minLength?: number;
      multiple?: boolean;
      name?: string;
      pattern?: string;
      placeholder?: string;
      readOnly?: boolean;
      required?: boolean;
      size?: number;
      src?: string;
      step?: number | string;
      type?: string;
      value?: string | number | readonly string[];
      width?: number | string;
    }

    interface FormHTMLAttributes extends HTMLAttributes {
      acceptCharset?: string;
      action?: string;
      autoComplete?: string;
      encType?: string;
      method?: string;
      name?: string;
      noValidate?: boolean;
      target?: string;
    }

    interface AnchorHTMLAttributes extends HTMLAttributes {
      download?: string;
      href?: string;
      hrefLang?: string;
      media?: string;
      rel?: string;
      target?: string;
      type?: string;
    }

    interface ImgHTMLAttributes extends HTMLAttributes {
      alt?: string;
      crossOrigin?: 'anonymous' | 'use-credentials' | '';
      decoding?: 'async' | 'auto' | 'sync';
      height?: number | string;
      loading?: 'eager' | 'lazy';
      referrerPolicy?: string;
      sizes?: string;
      src?: string;
      srcSet?: string;
      useMap?: string;
      width?: number | string;
    }

    interface ButtonHTMLAttributes extends HTMLAttributes {
      autoFocus?: boolean;
      disabled?: boolean;
      form?: string;
      formAction?: string;
      formEncType?: string;
      formMethod?: string;
      formNoValidate?: boolean;
      formTarget?: string;
      name?: string;
      type?: 'submit' | 'reset' | 'button';
      value?: string | string[] | number;
    }

    type Element = string | number | boolean | null | undefined | VNode;

    type VNode = {
      element: string;
      props: { [key: string]: any };
      children: Element[];
      key?: string;
    };

    interface IntrinsicElements {
      html: HTMLAttributes;

      head: HTMLAttributes;
      title: HTMLAttributes;
      base: HTMLAttributes & { href?: string; target?: string };
      link: HTMLAttributes & {
        href?: string;
        rel?: string;
        media?: string;
        type?: string;
      };
      meta: HTMLAttributes & {
        content?: string;
        name?: string;
        httpEquiv?: string;
        charset?: string;
      };
      style: HTMLAttributes;

      body: HTMLAttributes;
      article: HTMLAttributes;
      section: HTMLAttributes;
      nav: HTMLAttributes;
      aside: HTMLAttributes;
      h1: HTMLAttributes;
      h2: HTMLAttributes;
      h3: HTMLAttributes;
      h4: HTMLAttributes;
      h5: HTMLAttributes;
      h6: HTMLAttributes;
      header: HTMLAttributes;
      footer: HTMLAttributes;
      address: HTMLAttributes;
      main: HTMLAttributes;

      p: HTMLAttributes;
      hr: HTMLAttributes;
      pre: HTMLAttributes;
      blockquote: HTMLAttributes & { cite?: string };
      ol: HTMLAttributes & {
        reversed?: boolean;
        start?: number;
        type?: string;
      };
      ul: HTMLAttributes;
      li: HTMLAttributes & { value?: number };
      dl: HTMLAttributes;
      dt: HTMLAttributes;
      dd: HTMLAttributes;
      figure: HTMLAttributes;
      figcaption: HTMLAttributes;
      div: HTMLAttributes;

      a: AnchorHTMLAttributes;
      em: HTMLAttributes;
      strong: HTMLAttributes;
      small: HTMLAttributes;
      s: HTMLAttributes;
      cite: HTMLAttributes;
      q: HTMLAttributes & { cite?: string };
      dfn: HTMLAttributes;
      abbr: HTMLAttributes & { title?: string };
      data: HTMLAttributes & { value?: string };
      time: HTMLAttributes & { dateTime?: string };
      code: HTMLAttributes;
      var: HTMLAttributes;
      samp: HTMLAttributes;
      kbd: HTMLAttributes;
      sub: HTMLAttributes;
      sup: HTMLAttributes;
      i: HTMLAttributes;
      b: HTMLAttributes;
      u: HTMLAttributes;
      mark: HTMLAttributes;
      ruby: HTMLAttributes;
      rt: HTMLAttributes;
      rp: HTMLAttributes;
      bdi: HTMLAttributes;
      bdo: HTMLAttributes & { dir?: string };
      span: HTMLAttributes;
      br: HTMLAttributes;
      wbr: HTMLAttributes;

      img: ImgHTMLAttributes;
      audio: HTMLAttributes & {
        autoPlay?: boolean;
        controls?: boolean;
        loop?: boolean;
        muted?: boolean;
        preload?: 'none' | 'metadata' | 'auto';
        src?: string;
      };
      video: HTMLAttributes & {
        autoPlay?: boolean;
        controls?: boolean;
        height?: number | string;
        loop?: boolean;
        muted?: boolean;
        poster?: string;
        preload?: 'none' | 'metadata' | 'auto';
        src?: string;
        width?: number | string;
      };
      track: HTMLAttributes & {
        default?: boolean;
        kind?:
          | 'subtitles'
          | 'captions'
          | 'descriptions'
          | 'chapters'
          | 'metadata';
        label?: string;
        src?: string;
        srcLang?: string;
      };

      iframe: HTMLAttributes & {
        allow?: string;
        allowFullScreen?: boolean;
        height?: number | string;
        loading?: 'eager' | 'lazy';
        name?: string;
        referrerPolicy?: string;
        sandbox?: string;
        src?: string;
        srcDoc?: string;
        width?: number | string;
      };
      embed: HTMLAttributes & {
        height?: number | string;
        src?: string;
        type?: string;
        width?: number | string;
      };
      object: HTMLAttributes & {
        data?: string;
        form?: string;
        height?: number | string;
        name?: string;
        type?: string;
        useMap?: string;
        width?: number | string;
      };
      param: HTMLAttributes & { name?: string; value?: string };

      svg: HTMLAttributes;
      math: HTMLAttributes;

      script: HTMLAttributes & {
        async?: boolean;
        crossOrigin?: string;
        defer?: boolean;
        integrity?: string;
        noModule?: boolean;
        referrerPolicy?: string;
        src?: string;
        type?: string;
      };
      noscript: HTMLAttributes;

      del: HTMLAttributes & { cite?: string; dateTime?: string };
      ins: HTMLAttributes & { cite?: string; dateTime?: string };

      table: HTMLAttributes;
      caption: HTMLAttributes;
      colgroup: HTMLAttributes & { span?: number };
      col: HTMLAttributes & { span?: number };
      tbody: HTMLAttributes;
      thead: HTMLAttributes;
      tfoot: HTMLAttributes;
      tr: HTMLAttributes;
      td: HTMLAttributes & {
        colSpan?: number;
        headers?: string;
        rowSpan?: number;
      };
      th: HTMLAttributes & {
        abbr?: string;
        colSpan?: number;
        headers?: string;
        rowSpan?: number;
        scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
      };

      form: FormHTMLAttributes;
      label: HTMLAttributes & { form?: string; htmlFor?: string };
      input: InputHTMLAttributes;
      button: ButtonHTMLAttributes;
      select: HTMLAttributes & {
        autoComplete?: string;
        autoFocus?: boolean;
        disabled?: boolean;
        form?: string;
        multiple?: boolean;
        name?: string;
        required?: boolean;
        size?: number;
        value?: string | string[] | number;
      };
      datalist: HTMLAttributes;
      optgroup: HTMLAttributes & { disabled?: boolean; label?: string };
      option: HTMLAttributes & {
        disabled?: boolean;
        label?: string;
        selected?: boolean;
        value?: string | string[] | number;
      };
      textarea: HTMLAttributes & {
        autoComplete?: string;
        autoFocus?: boolean;
        cols?: number;
        disabled?: boolean;
        form?: string;
        maxLength?: number;
        minLength?: number;
        name?: string;
        placeholder?: string;
        readOnly?: boolean;
        required?: boolean;
        rows?: number;
        value?: string;
        wrap?: 'hard' | 'soft';
      };
      fieldset: HTMLAttributes & {
        disabled?: boolean;
        form?: string;
        name?: string;
      };
      legend: HTMLAttributes;
      progress: HTMLAttributes & {
        max?: number | string;
        value?: number | string;
      };
      meter: HTMLAttributes & {
        form?: string;
        high?: number;
        low?: number;
        max?: number | string;
        min?: number | string;
        optimum?: number;
        value?: number | string;
      };

      details: HTMLAttributes & { open?: boolean };
      summary: HTMLAttributes;
      dialog: HTMLAttributes & { open?: boolean };

      slot: HTMLAttributes & { name?: string };
      template: HTMLAttributes;
    }

    interface ElementAttributesProperty {
      props: {};
    }

    interface ElementChildrenAttribute {
      children: {};
    }

    interface IntrinsicAttributes {
      key?: string | number;
    }

    interface IntrinsicClassAttributes<T> {
      ref?: T;
    }
  }
}

export {};
