import { AbstractComponent, type TComponentConfig } from '@course/utils'
import css from './google-sheet.module.css'

export type TGoogleSheetProps = {
  // TODO: Define props
}

export class GoogleSheet extends AbstractComponent<TGoogleSheetProps> {
  constructor(config: TComponentConfig<TGoogleSheetProps>) {
    super(config)
  }

  toHTML(): string {
    return `
      <div class="${css.container}">
        <!-- TODO: Implement Google Sheet -->
      </div>
    `
  }

  afterRender(): void {
    // TODO: Initialize component
  }
}
