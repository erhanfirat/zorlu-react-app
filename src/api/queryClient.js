import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

// Export ile JS nesneleri paylaşılan modüllerde
// tetikleyici olmamalı

console.log("Aslında bu logu istememiştim.");
