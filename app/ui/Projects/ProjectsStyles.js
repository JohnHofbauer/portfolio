import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 7rem;
  row-gap: 3rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 0px;
    padding-left: 0px;
    padding-bottom: 0px;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.phone} {
    width: auto;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
    font-size: 12px;
  }
  @media ${(props) => props.theme.breakpoints.phone} {
    padding: 5px;
    font-size: 10px;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
    font-size: 15px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  column-gap: 1rem;
  margin-left: auto;
  margin-right: auto;

  justify-content: space-around;
  padding: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
    font-size: 12px;
  }
`;
export const Tag = styled.li`
  padding: 1rem;
  list-style: none;
  color: #d8bfbf;
  font-size: 1rem;
`;
