import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';
import { GuidanceText } from '../../atoms/GuidanceText';
import { AppDispatch, useSelector } from '../../../redux/store';
import { fetchPokemonDetail } from '../../../redux/modules/pokemonDetail';
import { pokemonDetailSelector } from '../../../redux/selectors/pokemonDetail';
import { COLORS } from '../../utils/styles';

// todo: Homeに戻ったとき入力してた検索条件を保持するようにする(難易度：下)

export const Detail = ({ match }: RouteComponentProps<{ id: string }>) => {
  const { id } = match.params;
  const dispatch: AppDispatch = useDispatch();
  const { pokemonDetail } = useSelector(pokemonDetailSelector);
  console.log(pokemonDetail);

  useEffect(() => {
    dispatch(fetchPokemonDetail(Number(id)));
  }, []);

  return (
    <>
      <GuidanceText text={`It will be ${pokemonDetail.name}'s detail page`} />
      <RadarWrapper>
        <Radar
          type="radar"
          data={{
            labels: pokemonDetail.stats.map((stat) => stat.name),
            datasets: [
              {
                label: `${pokemonDetail.name}'s stats`,
                backgroundColor: COLORS.GREY_LIGHT_TRANSPARENT,
                borderColor: COLORS.GREY_DARK,
                pointBorderColor: COLORS.GREY_DARK,
                pointHoverBackgroundColor: COLORS.GREY_LIGHT,
                pointHoverBorderColor: COLORS.GREY_DARK,
                pointBorderWidth: 6,
                data: pokemonDetail.stats.map((stat) => stat.baseStat),
              },
            ],
          }}
          options={{
            r: {
              min: 15,
              ticks: {
                stepSize: 15,
              },
            },
          }}
        />
      </RadarWrapper>
    </>
  );
};

const RadarWrapper = styled.div`
  width: 600px;
`;
