import 'styled-components'

declare module 'styled-components' {
  export interface Theme {
    font: {
      heading: string
      body: string
    }
    color: {
      white: string
      black: string
      darkBlue: string
      midToneBlue: string
      brightBlue: string
      lightBlue: string
      paleBlue: string
      darkPurple: string
      midTonePurple: string
      brightPurple: string
      lightPurple: string
      palePurple: string
      green: string
      darkGray: string
      gray: string
      lightGray: string
      aquaPale: string
    }
    colorRgba: {
      gray: string
      darkGray: string
      white10a: string
      white20a: string
      white30a: string
      black60a: string
      darkPurple40a: string
      darkBlue40a: string
      aquaPale20a: string
    }
    sectionInnerMaxWidth: string
    sitePaddingHorizontal: string
    gutter: string
  }
}
