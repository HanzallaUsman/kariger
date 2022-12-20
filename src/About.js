import HeroSection from "./components/HeroSection";
import styled from "styled-components";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Kariger",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
      <Wrapper>
        <div className="container">
          <p>
            Crowdsourcing is becoming an industry standard when it comes to
            digital job recruitment to create operational effi- ciencies. This
            capstone consists of the development of a web application that would
            provide the infrastructure that is re- quired to connect its users
            to a crowdsourcing algorithm in order to be connected to skilled
            workers and professionals within their required job and area. These
            skilled workers and professionals would have signed up on the
            provider side of the app. The goal of this web application is to
            modernize the way skilled workers with skills that are more
            physically oriented or manual such as carpenters, plumbers,
            construc- tion workers, insulation workers etc find tasks and long
            term contracts. Essentially there are workers and requesters on the
            application, where the requester will submit a task and pay for the
            successful completion of the task. The application will use the past
            task preference, performance of the worker, reviews on the app and
            several other metrics to generate a list of available tasks for the
            worker. A machine learning model will be applied for the worker to
            find the best suited task for his or her skill set while also using
            a matching algo- rithm as means of crowdsourcing. The web
            application will primarily be built using the MERN stack
          </p>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default About;
