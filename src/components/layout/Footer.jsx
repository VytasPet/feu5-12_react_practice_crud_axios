import styled from 'styled-components';

const MyFooter = styled.footer`
  text-align: center;
  background-color: #333;
  color: #fff;
  padding: 3rem;
  font-size: 1.5rem;
`;

function Footer() {
  const date = new Date();
  const formatedDate = date.toLocaleString('lt-LT', { dateStyle: 'medium' });

  return (
    <MyFooter>
      Visos teises <a href="https://google.com">saugomos</a> {formatedDate}
    </MyFooter>
  );
}

export default Footer;
