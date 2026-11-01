import { Container } from "@/components/ui/container";
import { Notice } from "@/components/ui/notice";

export function CommitteeListing() {
  return (
    <Container className="py-16">
      <Notice>
        Committee names, roles, and affiliations for IEEE CSDE 2027 will appear here when the organizing
        committee publishes them. This page does not reuse unverified or previous-edition listings.
      </Notice>
    </Container>
  );
}
