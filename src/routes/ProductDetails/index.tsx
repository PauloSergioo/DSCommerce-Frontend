import './styles.css';
import ButtonInverse from "../../ButtonInverse";
import ButtonPrimary from "../../ButtonPrimary";
import HeaderClient from "../../HeaderClient";
import ProductDetailsCard from "../../ProductDetailsCard";

export default function ProductDetails() {
    return(
        <>
        <HeaderClient />
        <main>
          <section id="product-details-section" className="dsc-container">
            <ProductDetailsCard />
            <div className="dsc-btn-page-container">
              <ButtonPrimary />
              <ButtonInverse />
            </div>
          </section>
        </main>
      </>

    );
}