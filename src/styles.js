import styled, {css} from 'styled-components'

export const Ul = styled.ul`
  padding-left: 16px;
`
export const Li = styled.li`
  list-style: none;
  margin-top: 2px;
  & > ${Ul} {
    display: none;
  }
  &.open > ${Ul} {
    display: block;
  }

  &.has-children {
      cursor: pointer;
      position: relative;
      :before {
        content: '\f107';
        color: #f3f3f4;
        position: absolute;
        font-family: FontAwesome;
        font-size: 26px;
        right: 15px;
      }
  }
`