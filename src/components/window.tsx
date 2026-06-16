import type { ReactNode, CSSProperties } from 'react'
import { Rnd } from 'react-rnd'
import '../styles/window.css'

type WindowProps = {
  title: string
  children: ReactNode
  width?: number | string
  height?: number | string
  style?: CSSProperties
  className?: string
  minWidth?: number
  minHeight?: number
}

export default function Window({
  title,
  children,
  width,
  height,
  style,
  className,
  minWidth,
  minHeight,
}: WindowProps) {
  const sizeStyle: CSSProperties = {}

  if (width !== undefined) {
    sizeStyle.width = typeof width === 'number' ? `${width}px` : width
  }
  if (height !== undefined) {
    sizeStyle.height = typeof height === 'number' ? `${height}px` : height
  }

return (
  <Rnd
    dragHandleClassName="title-bar"
    minWidth={minWidth ?? 250}
    minHeight={minHeight ?? 150}
    default={{
      x: 100,
      y: 100,
      width: 400,
      height: 300,
    }}
  >
    <div
      className={`window ${className ?? ''}`}
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>

        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        {children}
      </div>
    </div>
  </Rnd>
)
}