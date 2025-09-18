import { useEffect, useRef } from "react";

interface SplineViewerProps {
  url: string;
  className?: string;
  style?: React.CSSProperties;
}

export function SplineViewer({ url, className = "", style = {} }: SplineViewerProps) {
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splineRef.current) {
      // Create the spline-viewer element
      const splineViewer = document.createElement('spline-viewer');
      splineViewer.setAttribute('url', url);
      splineViewer.style.width = '100%';
      splineViewer.style.height = '100%';
      
      // Clear any existing content and append the viewer
      splineRef.current.innerHTML = '';
      splineRef.current.appendChild(splineViewer);
    }
  }, [url]);

  return (
    <div 
      ref={splineRef}
      className={className}
      style={style}
    >
      {/* Spline viewer will be loaded here */}
    </div>
  );
}