// src/components/shared/buttonStyles.ts
//
// Pill button geometry. Identical to .btn-pill below 3xl; from 3xl up it
// scales in vw instead of .btn-pill's fixed, oversized 4K values.
//
// .btn-pill can't be used alongside 3xl utilities — it sits outside @layer in
// globals.css and always overrides them — hence this constant.

export const PILL =
  "rounded-full shadow-2xl transition-colors px-8 py-2 lg:px-10 lg:py-4 lg:text-sm min-w-[210px] 3xl:px-[2.8vw] 3xl:py-[1.1vw] 3xl:text-[0.97vw] 3xl:min-w-[14.5vw]";