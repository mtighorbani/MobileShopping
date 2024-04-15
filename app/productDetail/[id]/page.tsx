
import NotFound from "@/app/not-found";
import ProductDetailPage from "@/components/products/ProducatDetail";
import ParamsProps from "@/types/types";

const Page = ({ params: { id } }: ParamsProps) => {

  return(
    id && id<=18?<ProductDetailPage id={id} />:<NotFound/>
)};

export default Page;
