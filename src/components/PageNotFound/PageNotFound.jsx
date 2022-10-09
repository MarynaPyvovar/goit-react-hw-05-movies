import React from "react";
import { ErrorWrapper, Text} from './PageNotFoundStyled'

const PageNotFound = () => {
    return <ErrorWrapper>
        <Text>Ooops, We don`t have this movie in our library :( Please, choose another one!</Text>
    </ErrorWrapper>
}

export default PageNotFound