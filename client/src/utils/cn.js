// Simple utility function to conditionally join classNames together
export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ")
}
