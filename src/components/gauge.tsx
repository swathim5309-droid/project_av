export function Gauge({
  value,
  size = 140,
  strokeWidth = 12,
  label,
}: {
  value: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI; // Semi-circle
  const offset = circumference - (value / 100) * circumference;
  const colorClass = value > 75 ? 'stroke-destructive' : value > 40 ? 'stroke-warning' : 'stroke-primary';

  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size / 2 + 20 }}>
      <svg width={size} height={size / 2} viewBox={`0 0 ${size} ${size / 2}`} className="overflow-visible">
        <path
          d={`M ${strokeWidth / 2},${size / 2} a ${radius},${radius} 0 0,1 ${radius * 2},0`}
          className="stroke-muted"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={`M ${strokeWidth / 2},${size / 2} a ${radius},${radius} 0 0,1 ${radius * 2},0`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`transition-all duration-700 ease-out ${colorClass}`}
        />
      </svg>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
        <span className="text-3xl font-bold font-headline">{value}%</span>
        {label && <p className="text-sm text-muted-foreground">{label}</p>}
      </div>
    </div>
  );
}
