import styled from 'styled-components';
import { fonts } from '../../styles/variables';
import { PureBrand } from '../../styles/variables';


export const ScheduleTable = styled.table`
  width: 20%;
  `

export const ScheduleScroller = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: stretch;
  justify-content: space-between;
  overflow-x: scroll;
  overflow-y: hidden;
  box-sizing:border-box;
  padding: 2em 0;
`
export const DayBlock = styled.div`
  border-radius: 10px;
  overflow: hidden;
  min-width: 300px;
  flex-basis: 30%;
  background: #010101;
  color: #fff;
  margin: 6px 6px 14px;
  flex-grow: 2;
  flex-shrink: 2;
  padding: 2px;
`

export const DayBlockHeading = styled.h3`
  font-size: 18px;
  display: block;
  padding: 8px;
`