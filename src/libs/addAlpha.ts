import React from 'react';

export default function addAlpha(
  color: React.CSSProperties['color'],
  opacity: number,
): React.CSSProperties['color'] {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}
