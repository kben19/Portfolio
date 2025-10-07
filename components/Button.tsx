import { PropsWithChildren } from "react";

export default function Button({ children }: PropsWithChildren) {
  return (
    <button className="rounded-2xl border px-4 py-2 transition hover:shadow">
      {children}
    </button>
  );
}
