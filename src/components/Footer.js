import styled from "styled-components";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  z-index: -999;
  background-color: orangered;
  width: 100%;
  color: #fff;
  text-align: center;
  font-weight: 600;
`;

export default function Footer({ items }) {
  if (!items.length)
    return (
      <FooterContainer>
        <p>
          <em>Please Start Adding Your Tasks</em>
        </p>
      </FooterContainer>
    );

  const itemLenght = items.length;
  const finishedTask = items.filter((item) => item.finished).length;
  const percentage = (finishedTask / itemLenght) * 100;
  return (
    <FooterContainer>
      <em>
        {percentage === 100 ? (
          <p>Congrats 🎉 You have finished!</p>
        ) : (
          <p>
            You have {itemLenght} task to do, and you finished {finishedTask} (
            {Math.floor(percentage)}%)
          </p>
        )}
      </em>
    </FooterContainer>
  );
}
