import React from "react";
import styled from "styled-components";

const ServicesContainer = styled.div`
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 40px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: calc(33.3333% - 20px);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #202a44;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <Title>Services Offered</Title>
      <CardContainer>
        <Card>
          <CardImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_PrZvGz0unWiwBb8QR5wIgTcL11X3bh4nQ&usqp=CAU"
            alt="Buy a home"
          />
          <CardTitle>Buy a home</CardTitle>
          <CardDescription>
            Find your place with an immersive photo experience and the most
            listings, including things you won’t find anywhere else.
          </CardDescription>
          <Button>FIND OUT MORE >>> </Button>
        </Card>
        <Card>
          <CardImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgz4HkRMHQmnw2-unnbin_GtPQQnW2F9t7hg&usqp=CAU"
            alt="Sell a home"
          />
          <CardTitle>Sell a home</CardTitle>
          <CardDescription>
            No matter what path you take to sell your home, we can help you
            navigate a successful sale.

          </CardDescription>
          <Button>FIND OUT MORE >>> </Button>
        </Card>
        <Card>
          <CardImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHX-M3i1E5Q2_Pg3duzZqRvl6g_BdYSZwYQ&usqp=CAU"
            alt="Rent a home"
          />
          <CardTitle>Rent a home</CardTitle>
          <CardDescription>
            We’re creating a seamless online experience – from shopping on the
            largest rental network, to applying, to paying rent.
          </CardDescription>
          <Button>FIND OUT MORE >>> </Button>
        </Card>
      </CardContainer>
    </ServicesContainer>
  );
};

export default Services;
