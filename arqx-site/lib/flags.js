/* Flag global das ConfirmTags (spec §7.4).
   true durante revisão do Lucas; false na produção final.
   Ao desligar, os itens pendentes SOMEM do render · nunca viram fato. */
export const SHOW_CONFIRM_TAGS =
  process.env.NEXT_PUBLIC_SHOW_CONFIRM_TAGS !== "false";
