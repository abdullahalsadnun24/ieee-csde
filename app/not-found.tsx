import { Container } from "@/components/ui/container";
import { UiLink } from "@/components/ui/ui-link";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="eyebrow">404  /  Not found</p>
      <span className="accent-rule mx-auto mt-4 block" aria-hidden />
      <h1 className="font-display mt-5 text-4xl text-navy sm:text-5xl">This page is not in the conference site</h1>
      <p className="mx-auto mt-4 max-w-lg text-muted">
        The page you requested is not part of the IEEE CSDE website.
      </p>
      <div className="mt-8 flex justify-center">
        <UiLink href="/">Return home</UiLink>
      </div>
    </Container>
  );
}
