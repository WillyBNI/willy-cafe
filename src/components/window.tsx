import type { ReactNode, CSSProperties } from 'react'
import { Rnd } from 'react-rnd'
import '../styles/window.css'
import type { WindowData } from '../types/windowTypes'

type WindowProps = {
  window: WindowData
  children: ReactNode
  style?: CSSProperties
  className?: string

  onClose?: () => void
  toggleMaximize?: () => void
}

export default function Window({
  window,
  children,
  style,
  className,
  onClose,
  toggleMaximize
}: WindowProps) {
  const sizeStyle: CSSProperties = {}

  if (window.width !== undefined) {
    sizeStyle.width = typeof window.width === 'number' ? `${window.width}px` : window.width
  }
  if (window.height !== undefined) {
    sizeStyle.height = typeof window.height === 'number' ? `${window.height}px` : window.height
  }

return (
  <Rnd
    dragHandleClassName="title-bar"
    minWidth={window.minWidth}
    minHeight={window.minHeight}
      default={{
        x: window.x,
        y: window.y,
        width: window.width,
        height: window.height,
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
        <div className="title-bar-text">
          {window.title}
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" onClick={toggleMaximize} />
          <button aria-label="Close" onClick={onClose} />
        </div>
      </div>

      <div className="window-body">
        {children}
      </div>
    </div>
  </Rnd>
)
}