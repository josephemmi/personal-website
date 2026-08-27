export const gradients = {
  slate: "linear-gradient(135deg, #1e293b 0%, #475569 55%, #94a3b8 100%)",
  ink: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%)",
  amber: "linear-gradient(135deg, #7c2d12 0%, #c2410c 55%, #f59e0b 100%)",
  clay: "linear-gradient(135deg, #451a03 0%, #92400e 55%, #d97706 100%)",
  moss: "linear-gradient(135deg, #14532d 0%, #166534 55%, #4ade80 100%)",
  teal: "linear-gradient(135deg, #134e4a 0%, #0f766e 55%, #2dd4bf 100%)",
  ocean: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 55%, #38bdf8 100%)",
  plum: "linear-gradient(135deg, #3b0764 0%, #6d28d9 55%, #a78bfa 100%)",
  rose: "linear-gradient(135deg, #4c0519 0%, #9f1239 55%, #fb7185 100%)",
  stone: "linear-gradient(135deg, #292524 0%, #57534e 55%, #a8a29e 100%)",
  copper: "linear-gradient(135deg, #431407 0%, #9a3412 55%, #fdba74 100%)",
  granite: "linear-gradient(135deg, #18181b 0%, #3f3f46 55%, #71717a 100%)",
} as const;

export type GradientKey = keyof typeof gradients;
