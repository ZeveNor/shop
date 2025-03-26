import { Container, Heading } from "ui"
import ProductList from "@/components/product-list"
import Component from "@/components/product-carousel"
import { Separator } from "ui"

export default function Page() {
  return (
    <Container className="@xl:py-12 py-6">
      <Component />
      <Heading className="mb-5">All Product</Heading>
      <Separator className="mb-2" />
      <ProductList />
    </Container>
  )
}