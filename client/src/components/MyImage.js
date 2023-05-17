import React from "react";
import styled from "styled-components";

const MyImage = ({ url }) => {
  // console.log("Image received: ", url);
  return (
    <Wrapper>
      <img src={url} alt="product image" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-right: 2rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
    max-height: 650px;
    object-fit: contain;
  }
`;

export default MyImage;

// import React, { useState } from "react";
// import styled from "styled-components";

// const ImageContainer = ({ image }) => {
//   // const [mainImage, setMainImage] = useState(imgs[0]);
//   console.log("Image received: ", image);

//   return (
//     <Wrapper>
//       <div className="main-screen">
//         <img src={image} alt="product image" />
//       </div>
//       <div className="main-screen">
//         <img src={image} alt="product image" />
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   grid-template-columns: 0.4fr 1fr;
//   gap: 1rem;

//   .main-screen {
//     display: grid;
//     place-items: center;
//     order: 1;
//     img {
//       max-width: 100%;
//       height: auto;
//       box-shadow: ${({ theme }) => theme.colors.shadow};
//     }
//   }
//   .grid-four-column {
//     grid-template-columns: 1fr;
//     grid-template-rows: repeat(4, 1fr);
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     display: flex;
//     flex-direction: column;
//     order: 1;

//     .grid-four-column {
//       grid-template-rows: 1fr;
//       grid-template-columns: repeat(4, 1fr);
//     }
//   }
// `;

// export default MyImage;
