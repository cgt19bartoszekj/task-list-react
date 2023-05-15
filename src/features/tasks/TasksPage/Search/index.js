import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "../../../../common/Input/styled";
import { Wrapper } from "./styled";
import { searchQueryParamName } from "../searchQueryParamName";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    }
    else {
      searchParams.set(searchQueryParamName, target.value);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
    console.log(searchParams);
  };

  return (
    <Wrapper>
      <Input
        placeholder="Szukaj"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
