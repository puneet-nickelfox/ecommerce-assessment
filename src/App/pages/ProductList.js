import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image1 from "../assets/images/01.jpg";
import Image2 from "../assets/images/02.jpg";
import Image3 from "../assets/images/03.jpg";
import Image4 from "../assets/images/04.jpg";
import Image5 from "../assets/images/05.jpg";
import Image6 from "../assets/images/06.jpg";
import Image7 from "../assets/images/07.jpg";
import Image8 from "../assets/images/08.jpg";
import { updateProductList } from "../../redux/actions/ecommerceActions";
import { connect } from "react-redux";
import Card from "../components/Card";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    minHeight: "100vh",
  },
  productCardListing: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "center",
    marginBottom: 200,
  },
});

const list = [
  {
    image: Image1,
    name: "Samsung Galaxy S21 5G",
    SGD: 1248,
    description:
      "The Samsung Galaxy S21 5G is designed to revolutionise video and photography, with beyond cinematic 8K resolution so you can snap epic photos right out of video. It has it all in two sizes, both with Samsung's fastest chipset and a massive all-day battery.",
    rating: 4,
    id: 101,
  },
  {
    image: Image2,
    name: "Samsung Galaxy S21 Ultra 5G",
    SGD: 1998,
    description:
      "Galaxy S21 Ultra 5G is crafted so you don’t need to choose between video and photo. With a single tap, you can pull super-clear stills straight from high-resolution 8K video. Or if you’re looking to capture stunning photos, the 108MP camera feels like you’ve brought your own professional studio with you.",
    rating: 5,
    id: 102,
  },
  {
    image: Image3,
    name: "Apple iPhone 12 Pro",
    SGD: 1649,
    description:
      "The iPhone 12 gets 5G and goes Pro. A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance.",
    rating: 5,
    id: 103,
  },
  {
    image: Image4,
    name: "Huawei Mate 40 Pro",
    SGD: 1398,
    description:
      "Featuring with the 5nm Kirin 9000 5G SoC chipset, Huawei Mate 40 Pro comes with intelligent interaction on AI gesture control & AOD. The Mate 40 Pro also has the Ultra Vision Cine Camera for Vlog, Video and Photography. Faster HUAWEI SuperCharge. Ultra Vision Cine Camera. Featuring EMUI 11.",
    rating: 4,
    id: 104,
  },
  {
    image: Image5,
    name: "Bose Lifestyle 650 Home Entertainment System",
    SGD: 5999,
    description:
      "Beauty's in the eye—and ear—of the beholder. So we designed the Lifestyle 650 home entertainment system to be beautiful in every way. Acoustics. Aesthetics. Craftsmanship. Simplicity. For your movies and music, it's the most uncompromising 5-speaker home cinema system we've ever made.",
    rating: 5,
    id: 105,
  },
  {
    image: Image6,
    name: "Bose Surround Speaker",
    SGD: 499,
    description:
      "Small speakers. Big surround sound. You want to hear the car chases and explosions. You want to savour the guitar solos and sweeping verses. You want to be in the middle of all the action, and the Bose Surround Speakers put you there. Designed exclusively to pair with the Bose Soundbar 500 or the Bose Soundbar 700, these unobtrusive rear surround speakers provide sweeping sound that adds to your movies, sports and TV shows.",
    rating: 5,
    id: 106,
  },
  {
    image: Image7,
    name: "Bose QuietComfort® Earbuds",
    SGD: 399,
    description:
      "Better sound begins with better silence. That’s why these sleek, new wireless earbuds are designed with breakthrough acoustic innovations and the world’s most effective noise cancelling. Together, they produce crisp, clear audio and rich, deep bass over a bed of virtual silence—so you can hear all kinds of details that typically get lost, like the singer breathing between words or the clicking of fingers from deep in the audience. In fact, we believe you won’t get a more compelling listening experience from any other wireless earbud, whether it’s for music, podcasts, videos or calls.",
    rating: 4,
    id: 107,
  },
  {
    image: Image8,
    name: "Samsung Galaxy Buds Live",
    SGD: 288,
    description:
      "Earbuds designed to tune in to every moment. With an iconic shape and ergonomic design, the adaptive fit lets in desired sounds from your natural surroundings, and a dynamic speaker system optimised for a better experience. This is sound made just for your ears.",
    rating: 4,
    id: 108,
  },
];

function ProductList(props) {
  const classes = useStyles();
  const { productList } = props;

  useEffect(() => {
    props.updateProductList(list);
  }, []);

  return (
    <div className={classes.productCardListing}>
      {productList?.map((item) => {
        return <Card data={item} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    productList: state.ecommerce.productList,
  };
}
const mapDispatchToProps = (dispatch) => ({
  updateProductList: (data) => dispatch(updateProductList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
