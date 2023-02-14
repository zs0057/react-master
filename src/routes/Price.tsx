import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import APexChart from "react-apexcharts";
import { PriceData } from "./Coin";
import styled from "styled-components";

const GridItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  background-color: white;
  border-radius: 0.7rem;
  box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
  font-size: 12px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 6rem;
  gap: 1rem;
  color: black;
`;

interface PriceProps {
  coinId: string;
  tickerData?: PriceData;
}
interface PriceChangeProps {
  percentage?: number;
}

const PriceChangeStyled = styled.div<{
  percentage: number | undefined;
}>`
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 400;
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => {
    if (props.percentage === undefined) props.percentage = 0;
    return props.percentage >= 0 ? props.theme.upColor : props.theme.downColor;
  }};
`;

function Price({ tickerData }: PriceProps) {
  const quotes = tickerData?.quotes.USD;
  return (
    <GridContainer>
      <GridItem>
        <label>1-Hour Change</label>
        <PriceChangeStyled percentage={quotes?.percent_change_1h}>
          {quotes?.percent_change_1h.toFixed(1)}%
        </PriceChangeStyled>
      </GridItem>
      <GridItem>
        <label>6-Hour Change</label>
        <PriceChangeStyled percentage={quotes?.percent_change_6h}>
          {quotes?.percent_change_6h.toFixed(1)}%
        </PriceChangeStyled>
      </GridItem>
      <GridItem>
        <label>12-Hour Change</label>
        <PriceChangeStyled percentage={quotes?.percent_change_12h}>
          {quotes?.percent_change_12h.toFixed(1)}%
        </PriceChangeStyled>
      </GridItem>
      <GridItem>
        <label>24-Hour Change</label>
        <PriceChangeStyled percentage={quotes?.percent_change_24h}>
          {quotes?.percent_change_24h.toFixed(1)}%
        </PriceChangeStyled>
      </GridItem>
      <GridItem>
        <label>7-Day Change</label>
        <PriceChangeStyled percentage={quotes?.percent_change_7d}>
          {quotes?.percent_change_7d.toFixed(1)}%
        </PriceChangeStyled>
      </GridItem>
      <GridItem>
        <label>30-Day Change</label>
        <PriceChangeStyled percentage={quotes?.percent_change_30d}>
          {quotes?.percent_change_30d.toFixed(1)}%
        </PriceChangeStyled>
      </GridItem>
    </GridContainer>
  );
}

export default Price;
