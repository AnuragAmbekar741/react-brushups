import css from './solution/star-rating.module.css'
import flex from '@course/styles'
import cx from '@course/cx'
import { useCallback } from 'react'

/**
 * Expected input:
 * {
 *   value: number,
 *   onChange: (value: number) => void,
 *   readonly?: boolean
 * }
 *
 * Steps to complete:
 * 1. Init constructor - define props type with value, onChange, readonly
 * 2. Provide template - render star buttons with proper attributes
 * 3. Handle click event - delegate click to update value
 * 4. Add ARIA attributes:
 *    Container:
 *    - role="radiogroup" — groups related radio-like controls so screen readers announce "radiogroup" when entering
 *    - aria-label="Star Rating" — provides an accessible name for the group (no visible label exists)
 *    - aria-readonly="true/false" — tells assistive tech whether the rating can be changed
 *    Each star button:
 *    - role="radio" — each star acts as a radio option within the group
 *    - aria-checked="true/false" — indicates which star is currently selected
 *    - aria-label="N Star(s)" — provides a meaningful label (e.g. "3 Stars") instead of just the emoji
 * 5. Add CSS styles for stars
 */

const STARS = ['⭐️', '⭐️', '⭐️', '⭐️', '⭐️'] as const

type TProps = {
  value: number
  readonly: boolean
  onChange: (val: number) => void
}

export const StarRating = ({ value, readonly = false, onChange }: TProps) => {
  const handleClick = useCallback(
    (val: number) => {
      if (readonly) return
      onChange(val)
    },
    [readonly, onChange],
  )
  // const handleStartClick = useCallback(
  //   (event: React.MouseEvent<HTMLDivElement>) => {
  //     if (readonly) return
  //     const button = (event?.target as HTMLElement).closest('button')
  //     if (!button) return
  //     const starValue = Number(button.dataset.starValue)
  //     if (!Number.isNaN(starValue)) {
  //       onChange(starValue)
  //     }
  //   },
  //   [readonly, onChange],
  // )
  return (
    <div
      aria-label="Star Rating"
      role="radiogroup"
      aria-readonly={readonly}
      className={cx(css.container, flex.wh100)}
      // onClick={handleStartClick}
    >
      <div className={flex.flexRowCenter}>
        <input type="number" value={value} readOnly hidden />
        {STARS.map((star, index) => {
          const starIndex = index + 1
          return (
            <button
              key={starIndex}
              data-star-value={starIndex}
              data-active={value >= starIndex}
              className={cx(css.star, flex.flexColumnCenter, flex.fontXL)}
              disabled={readonly}
              role="radio"
              aria-checked={value === starIndex}
              aria-label={`${starIndex} Star`}
              onClick={() => handleClick(starIndex)}
            >
              {star}
            </button>
          )
        })}
      </div>
    </div>
  )
}
