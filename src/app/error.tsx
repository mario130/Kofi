"use client";

import { Button } from "./_components/ui/button";

export default function ErrorPage() {
  return (
    <main className="max-w-7xl px-6 py-10 text-center xl:mx-auto">
      <h3 className="mb-4">Oops! Something went wrong...</h3>
      <p>Sorry, it seems that there was an error.</p>
      <p>But don't worry, we're brewing up a solution!</p>
      <Button className="mt-6" onClick={() => window.location.reload()}>
        Refresh the page
      </Button>
    </main>
  );
}
