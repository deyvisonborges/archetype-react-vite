import styled from 'styled-components'

const styles = {
  Container: styled.div`
    background: white;
    border: 1px solid #c4c4c4;
    padding: 2rem 3rem;
    width: 22rem;
  `
}


export const Card = () => {
  return (
    <styles.Container>
      ola
    </styles.Container>
  )
}