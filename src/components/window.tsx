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
  onMove?: (x: number, y: number) => void
  onResize?: (
    x: number,
    y: number,
    width: number,
    height: number
  ) => void
}

export default function WindowFrame({
  window,
  children,
  style,
  className,
  onClose,
  toggleMaximize,
  onMove,
  onResize
}: WindowProps) {

return (
  <Rnd
    dragHandleClassName="title-bar"
    minWidth={window.minWidth}
    minHeight={window.minHeight}
    size={{
        width: window.width,
        height: window.height,
    }}

    position={{
        x: window.x,
        y: window.y,
    }}
    disableDragging={window.isMaximized}
    enableResizing={!window.isMaximized}
    onDragStop={(e, d) => {
    onMove?.(d.x, d.y)
}}
    onResizeStop={(e, direction, ref, delta, position) => {
      onResize?.(
        position.x,
        position.y,
        ref.offsetWidth,
        ref.offsetHeight
      )
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