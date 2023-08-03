import { Form, FormSelect } from 'react-bootstrap'
import styled from 'styled-components'

const FilterPage = () => {
  return (
    <>

      <HeaderStyled>

        <FormSelectCustom aria-label="Default select example">
          <option>---</option>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="27">Horror</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>
          <option value="878">Science Fiction</option>
          <option value="53">Thriller</option>
          <option value="10752">War</option>
          <option value="37">Western</option>
        </FormSelectCustom>

        <FormSelectCustom aria-label="Default select example">
          <option>---</option>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="27">Horror</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>
          <option value="878">Science Fiction</option>
          <option value="53">Thriller</option>
          <option value="10752">War</option>
          <option value="37">Western</option>
        </FormSelectCustom>
        
        <FormSelectCustom aria-label="Default select example">
          
          <option>---</option>
          <option value="1">Indonesian</option>
          <option value="2">English</option>
        </FormSelectCustom>

      </HeaderStyled>

    </>
  )
}

export default FilterPage

const HeaderStyled = styled.div`
  display: flex;
  margin: 0 120px;
  gap: 1rem
`

const FormSelectCustom = styled(FormSelect)`
  background-color: #3F2E3E;
  color: whitesmoke;
  border: none;
`