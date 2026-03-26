// components/radial-chart.tsx
"use client";

import { cn } from "@/lib/utils";

interface ChartData {
  name: string;
  value: number;
  color: string;
  gradient: string;
}

interface RadialChartProps {
  data: ChartData[];
  className?: string;
}

// app/page.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// const chartData = [
const data = [
  {
    name: "Weekly",
    value: 75,
    color: "bg-indigo-500",
    gradient: "from-indigo-600 to-indigo-400",
  },
  {
    name: "Monthly",
    value: 55,
    color: "bg-blue-600",
    gradient: "from-blue-500 to-blue-400",
  },
  {
    name: "Yearly",
    value: 67,
    color: "bg-orange-500",
    gradient: "from-orange-500 to-orange-400",
  },
];

export default function SalesTarget() {
  const size = 240;
  const strokeWidth = 16;
  const center = size / 2;

  // Calculate radii for concentric circles
  const radii = [
    center - strokeWidth * 1.5, // Outer ring
    center - strokeWidth * 3, // Middle ring
    center - strokeWidth * 4.5, // Inner ring
  ];

  const circumference = (radius: number) => 2 * Math.PI * radius;

  return (
    <div className="min-h-screen bg-background p-6">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">Sales Target</CardTitle>
          <CardDescription>
            Track your sales performance against targets
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className={cn("flex flex-col items-center")}>
            <div className="relative" style={{ width: size, height: size }}>
              <svg width={size} height={size} className="transform -rotate-90">
                {/* Background circles */}
                {radii.map((radius, index) => (
                  <circle
                    key={`bg-${index}`}
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="rgb(242, 242, 242)"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeLinecap="round"
                    className="opacity-85"
                  />
                ))}

                {/* Progress circles */}
                {data.map((item, index) => {
                  const radius = radii[index];
                  const circ = circumference(radius);
                  const strokeDashoffset = circ - (item.value / 100) * circ;

                  return (
                    <circle
                      key={item.name}
                      cx={center}
                      cy={center}
                      r={radius}
                      stroke={`url(#gradient-${index})`}
                      strokeWidth={strokeWidth}
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circ}
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-1000 ease-out"
                    />
                  );
                })}

                {/* Gradients */}
                <defs>
                  {data.map((item, index) => (
                    <linearGradient
                      key={index}
                      id={`gradient-${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="rgb(79, 70, 229)" />
                      <stop offset="100%" stopColor={getStopColor(item.name)} />
                    </linearGradient>
                  ))}
                </defs>
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-foreground">
                    Target
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Performance
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {data.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className={cn("w-4 h-4 rounded-sm", item.color)} />
                  <span className="text-sm text-muted-foreground">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function getStopColor(name: string): string {
  const colors = {
    Weekly: "rgb(99, 102, 241)",
    Monthly: "rgb(33, 114, 255)",
    Yearly: "rgb(246, 87, 56)",
  };
  return colors[name as keyof typeof colors];
}
